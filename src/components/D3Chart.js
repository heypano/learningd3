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
        d3.select('#viz').append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background-color', backgroundColor)
        .selectAll('rect').data(barData)
            .enter().append('rect')
                .style('fill', fillColor)
                .attr('width', barWidth)
                .attr('height', (d, i) => {
                    return d;
                })
                .attr('x', (d, i) => {
                    return i * (barWidth + barOffset);
                })
                .attr('y', (d, i) => {
                    return height - d;
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
