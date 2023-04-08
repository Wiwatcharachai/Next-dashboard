import React from 'react'
import dynamic from 'next/dynamic'
import { Paper, Text } from '@mantine/core';


const Chart = dynamic(
    () => import ('react-apexcharts'),
    {ssr: false}
)

const options ={
    series: [
        {
          name: "Actual",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10,43,21]
        },
        {
          name: "Target",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35, 44, 23]
        },
    
      ],
      chart:{
        height: 'line',
        type: 'line',
        zoom: {
            enbled: true
        },
      },
      stroke:{
        width: [5,7,5],
        curve: 'straight',
        dashArray: [0,8,5]
      },
 
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
            "13 Jan",
            "14 Jan"
          ],
        },
        tooltip: {
            y: [
              {
                title: {
                  formatter: function(val) {
                    return val + " (mins)";
                  }
                }
              },
              {
                title: {
                  formatter: function(val) {
                    return val + " per session";
                  }
                }
              },
              {
                title: {
                  formatter: function(val) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            borderColor: "#f1f1f1",
          }
        };
      

function CompareLineChartBox() {
  return (
<>
<Paper shadow='xs' p={'xs'}>
<Text fz="xl">ข้อมูลเปรียบเทียบรายวัน</Text>

<Chart
    options={options}
    series={options.series}
    type='line'
    height={300}
    />
    </Paper>
</>  
)
}

export default CompareLineChartBox