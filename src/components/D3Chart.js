import React from 'react';
import * as d3 from 'd3';
import PropTypes from "prop-types";

class D3Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.prepChart();
    }

    prepChart(){
        const barData = [20,30,40,15];
        const height = 400;
        const width = 600;
        const barWidth = 50;
        const barOffset = 5;
        const backgroundColor = "#ABCDEF";
        const fillColor = "#FEDCBA";

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(barData)])
            .range([0, height]);
        const xScale = d3.scaleBand()
            .domain(barData)
            .paddingInner(0.2)
            .paddingOuter(0.1)
            .range([0, width]);

        d3.select('#viz').append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background-color', backgroundColor)
        .selectAll('rect').data(barData)
            .enter().append('rect')
                .style('fill', fillColor)
                .attr('width', (d) => {
                    return xScale.bandwidth();
                })
                .attr('height', (d, i) => {
                    return yScale(d);
                })
                .attr('x', (d, i) => {
                    return xScale(d);
                })
                .attr('y', (d, i) => {
                    return height - yScale(d);
                });
    }

    render() {
        return (
            <div id="viz"></div>
        );
    }
}

D3Chart.defaultProps = {
    extraClassName: "",
};

D3Chart.propTypes = {};

export default D3Chart;
