import React from 'react'
import dynamic from 'next/dynamic'
import { Paper, Text } from '@mantine/core';

const Chart = dynamic(
    () => import ('react-apexcharts'),
    {ssr: false}
)
const options = {
    chart: {
      height: 280,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "ข้อมูลลำดับที่ 1",
        data: [45, 52, 38, 45, 19, 23, 2,45, 52, 38, 45, 19, 23, 2]
      },
      {
        name: "ข้อมูลลำดับที่ 2",
        data: [5, 56, 15, 66, 44, 33, 22,5, 56, 15, 66, 44, 33, 22]
      },
      {
        name: "ข้อมูลลำดับที่ 3",
        data: [56, 15, 15, 19, 2, 33, 23,56, 15, 15, 19, 2, 33, 23]
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
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
      ]
    }
  };

function AreaChartBox() {
  return (
<>
<Paper shadow='xs' p={'xs'}>
<Text fz="xl">ข้อมูลรายวัน</Text>
<Chart
    options={options}
    series={options.series}
    type='area'
    height={300}
    // width='500'
    />
    </Paper>
</> 
 )
}

export default AreaChartBox