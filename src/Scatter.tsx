import React from 'react'
import ReactEcharts from "echarts-for-react";
import { wine } from './Code';
import './App.css';

const Scatter = () => {


    // Data here is with type of array of tuple of number with 2 elements
    // First element of each tuple should contain "Color intensity"
    // Second element of each tuple should contain corresponding "Hue" 
    let data: [number, number][];
    data = [];

    let i: number;

    // Filling data with tuples by iterating over every object of wine dataset
    for (i = 0; i < wine.length; i++) {

        // Pushing tuple
        data.push([wine[i]["Color intensity"], wine[i].Hue]);

    }

    // Option object required for rendering echart plot
    let option: object = {
        // Color of point
        color: [
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: "#DC2424" // color at 0%
                }, {
                    offset: 1, color: '#7a4a9d' // color at 100%
                }],

                global: false // default is false
            }
        ],
        //    Background color of plot
        backgroundColor: ['#f9e2d9'],
        //    Properties of X-axis
        xAxis: {
            name: "Color intensity",
            interval: 1,
            splitLine: 0,
            nameLocation: "middle",
            nameGap: "30"
        },
        // Properties of Y-axis
        yAxis: {
            name: "Hue",
            min: 0,
            interval: 1,
            splitLine: 0,
            nameLocation: "middle",
            nameGap: "30"
        },
        // Properties of grid (plot)
        grid: {
            left: "15%",
            right: "7%",
        },
        // Configuring type of plot and data to be used
        series: [
            {
                type: 'scatter',
                data: data
            }
        ],

    };

    // Returns TSX component to render Scatter plot
    return (
        <div>
            {/* React echarts component to render plot as stated in option */}
            <ReactEcharts option={option}
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                }} /></div>
    )
}

export default Scatter