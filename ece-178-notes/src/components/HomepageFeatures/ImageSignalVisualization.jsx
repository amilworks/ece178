import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ImageSignalVisualization = ({ imagePath }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 2000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    mountRef.current.appendChild(renderer.domElement);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Load the image
    new THREE.TextureLoader().load(imagePath, (texture) => {
      texture.minFilter = THREE.LinearFilter; // Prevents mipmap generation
      const img = texture.image;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);

      // Convert image to grayscale and create a geometry based on intensities
      const geometry = new THREE.PlaneGeometry(img.width, img.height, img.width - 1, img.height - 1);
      const vertices = geometry.attributes.position.array;

      for (let i = 0, j = 0; i < vertices.length; i += 3, j += 4) {
        const intensity = (imageData.data[j] + imageData.data[j + 1] + imageData.data[j + 2]) / 3;
        vertices[i + 2] = intensity / 255 * 10; // Scale intensity to z-axis
      }

      // Update the geometry to reflect the changes
      geometry.attributes.position.needsUpdate = true;

      // Color map gradient
      const colors = [];
      for (let i = 0; i < vertices.length; i += 3) {
        const v = vertices[i + 2] / 10; // Use the z-position as value
        const color = new THREE.Color();
        color.setHSL(0.7 - (v * 0.7), 1.0, 0.5); // HSL: change hue based on height
        colors.push(color.r, color.g, color.b);
      }
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      // Create a mesh with the geometry and a colored material
      const material = new THREE.MeshStandardMaterial({ vertexColors: true });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Center the camera and add controls
      camera.position.z = Math.max(img.width, img.height);
      const controls = new OrbitControls(camera, renderer.domElement);

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }

      animate();
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [imagePath]);

  return <div ref={mountRef}></div>;
};

export default ImageSignalVisualization;
