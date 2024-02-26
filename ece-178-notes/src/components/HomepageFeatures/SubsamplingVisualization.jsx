import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const SubsamplingVisualization = () => {
    const [subsamplingRate, setSubsamplingRate] = useState(1);
    const visualizationRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 960, height: 500 });

    // Handle resizing
    useEffect(() => {
        const updateDimensions = () => {
            if (visualizationRef.current) {
                setDimensions({
                    width: visualizationRef.current.offsetWidth,
                    height: 500, // Keep height fixed or adjust as needed
                });
            }
        };
        window.addEventListener('resize', updateDimensions);
        updateDimensions(); // Initial call

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    useEffect(() => {
        if (!visualizationRef.current) {
            return;
        }

        // Clear existing SVG to redraw
        d3.select(visualizationRef.current).selectAll("svg").remove();

        const margin = { top: 20, right: 20, bottom: 20, left: 40 };
        const width = dimensions.width - margin.left - margin.right;
        const height = dimensions.height - margin.top - margin.bottom;

        var svg = d3.select(visualizationRef.current).append("svg")
            .attr("width", dimensions.width)
            .attr("height", dimensions.height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleLinear().domain([0, 10]).range([0, width]);
        var y = d3.scaleLinear().domain([-1, 1]).range([height, 0]);

        var line = d3.line()
            .x(function (d) { return x(d.x); })
            .y(function (d) { return y(d.y); });

        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + y(0) + ")")
            .call(d3.axisBottom(x));

        svg.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y));

        const drawSubsampled = (rate) => {
            var data = [];
            for (var i = 0; i <= 1000; i += rate) {
                var t = i / 100;
                data.push({ x: t, y: Math.sin(2 * Math.PI * t) });
            }
            svg.selectAll(".line").data([data])
                .join("path")
                .attr("class", "line")
                .attr("d", line);
        };

        drawSubsampled(subsamplingRate);
    }, [subsamplingRate, dimensions]);

    return (
        <div>
            <div>
                Subsampling Rate: <input type="range" min="1" max="100" value={subsamplingRate} onChange={(e) => setSubsamplingRate(Number(e.target.value))} />
            </div>
            <div ref={visualizationRef} id="visualization" style={{ width: '100%' }}></div>
        </div>
    );
};

export default SubsamplingVisualization;
