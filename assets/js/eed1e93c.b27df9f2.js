"use strict";(self.webpackChunkece_178_notes=self.webpackChunkece_178_notes||[]).push([[7440],{1097:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=i(4848),s=i(8453);const r={sidebar_position:1},t="Introduction to Python",o={id:"programming-help/intro-to-python",title:"Introduction to Python",description:"Introduction to Scientific Computations in Image Processing",source:"@site/docs/programming-help/intro-to-python.md",sourceDirName:"programming-help",slug:"/programming-help/intro-to-python",permalink:"/docs/programming-help/intro-to-python",draft:!1,unlisted:!1,editUrl:"https://github.com/amilworks/ece178/edit/main/ece-178-notes/docs/programming-help/intro-to-python.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Programming Help",permalink:"/docs/category/programming-help"},next:{title:"Advanced Image Processing",permalink:"/docs/programming-help/advanced-image-processing"}},l={},d=[{value:"Getting Started with Python for Image Processing",id:"getting-started-with-python-for-image-processing",level:2},{value:"Why Python (&gt; MATLAB)",id:"why-python--matlab",level:3},{value:"Required Libraries",id:"required-libraries",level:3},{value:"Basic Concepts in Image Processing with numpy",id:"basic-concepts-in-image-processing-with-numpy",level:2},{value:"Understanding Images as Arrays",id:"understanding-images-as-arrays",level:3},{value:"Basic Indexing",id:"basic-indexing",level:3},{value:"Advanced Indexing",id:"advanced-indexing",level:3},{value:"Boolean Indexing",id:"boolean-indexing",level:3},{value:"Fancy Indexing",id:"fancy-indexing",level:3},{value:"Multi-dimensional Indexing",id:"multi-dimensional-indexing",level:3},{value:"Reading and Displaying Images",id:"reading-and-displaying-images",level:3},{value:"Image Manipulations with numpy",id:"image-manipulations-with-numpy",level:3}];function c(n){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"introduction-to-python",children:"Introduction to Python"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"Introduction to Scientific Computations in Image Processing"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["This document provides an introduction to scientific computations in image processing using Python, focusing on the ",(0,a.jsx)(e.code,{children:"numpy"})," and ",(0,a.jsx)(e.code,{children:"scipy"})," libraries. This guide is designed for students new to image processing concepts and tools, providing a foundation for further exploration and application."]}),"\n",(0,a.jsx)(e.h2,{id:"getting-started-with-python-for-image-processing",children:"Getting Started with Python for Image Processing"}),"\n",(0,a.jsxs)(e.p,{children:["Python is a powerful programming language that's widely used in scientific computing and image processing. Its simplicity and vast ecosystem of libraries, such as ",(0,a.jsx)(e.code,{children:"numpy"})," and ",(0,a.jsx)(e.code,{children:"scipy"}),", make it an ideal choice for beginners and professionals alike."]}),"\n",(0,a.jsx)(e.h3,{id:"why-python--matlab",children:"Why Python (> MATLAB)"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Ease of Use"}),": Python's syntax is clear and intuitive, making it accessible for newcomers to programming."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Extensive Libraries"}),": Python boasts a rich ecosystem of libraries for numerical computations, data manipulation, and image processing."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Community Support"}),": A vast community of users and developers ensures ample learning resources and troubleshooting support."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"required-libraries",children:"Required Libraries"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"numpy"}),": For efficient array operations and mathematical computations."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"scipy"}),": For advanced scientific computing, including image processing functions."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"matplotlib"}),": For plotting and visualizing data and images."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"You can install these libraries using pip:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"pip install numpy scipy matplotlib\n"})}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["Ensure you have pip installed and updated. These commands install the latest versions of ",(0,a.jsx)(e.code,{children:"numpy"}),", ",(0,a.jsx)(e.code,{children:"scipy"}),", and ",(0,a.jsx)(e.code,{children:"matplotlib"}),"."]})}),"\n",(0,a.jsx)(e.h2,{id:"basic-concepts-in-image-processing-with-numpy",children:"Basic Concepts in Image Processing with numpy"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"numpy"})," is fundamental for image processing tasks in Python, offering efficient manipulation of pixel arrays and implementation of various algorithms."]}),"\n",(0,a.jsx)(e.h3,{id:"understanding-images-as-arrays",children:"Understanding Images as Arrays"}),"\n",(0,a.jsx)(e.p,{children:"An image can be represented as a multidimensional array. Grayscale images are 2D arrays, while color images are 3D (with an additional dimension for color channels)."}),"\n",(0,a.jsx)(e.p,{children:"NumPy provides powerful indexing capabilities that allow you to select and manipulate data within arrays efficiently. Here are a few examples to demonstrate different indexing techniques in NumPy:"}),"\n",(0,a.jsx)(e.h3,{id:"basic-indexing",children:"Basic Indexing"}),"\n",(0,a.jsx)(e.p,{children:"Basic indexing involves selecting elements or slices from an array similar to how you'd access elements in a Python list."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# Create a 1D array\narr_1d = np.array([1, 2, 3, 4, 5])\nprint("Original 1D array:", arr_1d)\n\n# Access the first element (indexing starts at 0)\nprint("First element:", arr_1d[0])\n\n# Access a slice from the second to the fourth element\nprint("Slice from 2nd to 4th element:", arr_1d[1:4])\n'})}),"\n",(0,a.jsx)(e.h3,{id:"advanced-indexing",children:"Advanced Indexing"}),"\n",(0,a.jsx)(e.p,{children:"NumPy also supports more advanced forms of indexing, such as boolean indexing and fancy indexing, which allow for more complex data selections."}),"\n",(0,a.jsx)(e.h3,{id:"boolean-indexing",children:"Boolean Indexing"}),"\n",(0,a.jsx)(e.p,{children:"Boolean indexing lets you select elements from an array using a boolean array of the same shape."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# Create a 2D array\narr_2d = np.array([[1, 2], [3, 4], [5, 6]])\nprint("Original 2D array:\\n", arr_2d)\n\n# Create a boolean array\nbool_idx = arr_2d > 3\n\n# Use boolean indexing to select elements\nprint("Elements greater than 3:\\n", arr_2d[bool_idx])\n'})}),"\n",(0,a.jsx)(e.h3,{id:"fancy-indexing",children:"Fancy Indexing"}),"\n",(0,a.jsx)(e.p,{children:"Fancy indexing allows you to index using integer arrays, providing a way to select arbitrary elements based on their index values."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# Create a 1D array\narr = np.array([10, 20, 30, 40, 50])\n\n# Use an array of indices to select elements\nindices = np.array([3, 0, 4])\nprint("Elements at indices 3, 0, and 4:", arr[indices])\n'})}),"\n",(0,a.jsx)(e.h3,{id:"multi-dimensional-indexing",children:"Multi-dimensional Indexing"}),"\n",(0,a.jsx)(e.p,{children:"When working with multi-dimensional arrays, you can select elements using a tuple of indices."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# Create a 2D array\narr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint("Original 2D array:\\n", arr_2d)\n\n# Access a specific element (row 1, column 2)\nprint("Element at row 1, column 2:", arr_2d[1, 2])\n\n# Access a whole row (row 2)\nprint("Second row:", arr_2d[2, :])\n\n# Access a whole column (column 1)\nprint("First column:", arr_2d[:, 0])\n'})}),"\n",(0,a.jsx)(e.p,{children:"These examples illustrate just a few of the indexing capabilities of NumPy. Understanding and utilizing these techniques can significantly enhance your ability to manipulate and analyze data efficiently."}),"\n",(0,a.jsx)(e.h3,{id:"reading-and-displaying-images",children:"Reading and Displaying Images"}),"\n",(0,a.jsxs)(e.p,{children:["While ",(0,a.jsx)(e.code,{children:"numpy"})," does not directly support reading images from files, ",(0,a.jsx)(e.code,{children:"matplotlib"})," can be used for this purpose, alongside displaying images."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import matplotlib.pyplot as plt\nimport matplotlib.image as mpimg\n\n# Read an image\nimage = mpimg.imread('path/to/your/image.png')\n\n# Display the image\nplt.imshow(image)\nplt.axis('off') # Hide axes\nplt.show()\n"})}),"\n",(0,a.jsx)(e.h3,{id:"image-manipulations-with-numpy",children:"Image Manipulations with numpy"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"numpy"})," allows for direct manipulation of pixel values, enabling operations like cropping, resizing, and transformations through array slicing and mathematical operations."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\n# Convert to grayscale by averaging channels\nif image.ndim == 3:\n    grayscale = np.mean(image, axis=2)\n    plt.imshow(grayscale, cmap='gray')\n    plt.show()\n"})}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.p,{children:["Practice by applying these techniques to different images and explore the extensive functionalities provided by ",(0,a.jsx)(e.code,{children:"numpy"})," and ",(0,a.jsx)(e.code,{children:"scipy"})," for more complex image processing tasks."]})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>o});var a=i(6540);const s={},r=a.createContext(s);function t(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);