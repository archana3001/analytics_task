import React from 'react'
import ReactEcharts from "echarts-for-react";
import { wine } from './Code';
import './App.css';

const Bar = () => {

    // Here data1 is defined with type array of objects
    // Each object contains total value of malic acid and number of class of wine
    // To calculate Average, we divide total value by number of occurences in each class
    let data1: {
        "num": number;
        "val": number;
    }[] = [{ "val": 0, "num": 0 }, { "val": 0, "num": 0 }, { "val": 0, "num": 0 }];

    let i: number;
    // Filling the array of object
    for (i = 0; i < wine.length; i++) {
        data1[wine[i].Alcohol - 1].num += 1;
        data1[wine[i].Alcohol - 1].val += wine[i]["Malic acid"];
    }

    // This data2 stores average malic acid for each class of wine
    let data2: number[] = [];

    // Filling data2
    for (i = 0; i < data1.length; i++) {
        data2.push(data1[i].val / data1[i].num);
    }

    // Option object for configuring the echart plot
    let option1: object = {
        // Color of bars
        color: [
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: "#ff5858" // color at 0%
                }, {
                    offset: 1, color: '#f857c6' // color at 100%
                }],
                global: false // default is false
            }
        ],
        // Background color of plot
        backgroundColor: ['#fff9ee'],
        // Properties of X-axis
        xAxis: {
            name: "Alcohol",
            type: 'category',
            data: ['1', '2', '3'],
            nameLocation: "middle",
            nameGap: "30",
        },
        // Properties of Y-axis
        yAxis: {
            name: "Average Malic Acid ",
            type: 'value',
            nameLocation: "middle",
            nameGap: "30"
        },
        // Properties of grid (plot)
        grid: {
            left: "15%",
            right: "8%",
        },
        // Configuring type of plot and data to be used
        series: [
            {
                data: data2,
                type: 'bar'
            }
        ]
    };

    // Returns TSX component to render Bar plot
    return (
        // {/* React echarts component to render Bar plot as stated in option */ }
        <div> <ReactEcharts option={option1} style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
        }} /></div>
    )
}

export default Bar