import React from 'react'
import dynamic from 'next/dynamic'
import { Flex, Text, Paper, Title } from '@mantine/core';


const Chart = dynamic(
    () => import ('react-apexcharts'),
    {ssr: false}
)
const options = {
  chart: {
    height: 280,
    type: "radialBar"
  },
  
  series: [67],
  
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "50%"
      },
     
      dataLabels: {
        showOn: "always",
        name: {
          show: false,
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: true
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Progress"]
};

    
  function RadialBarBox (props) {
  return (
<>
<Paper shadow="xs">
 <Flex gap='md' justify='flex-start' align='center' direction='row'>
<Chart
    options={options}
    series={[props.percent]}
    type='radialBar'
    height={200}
    width={150}
    />
    <Flex
      mih={50} gap="md" justify="flex-start" align="flex-start" direction="column" wrap="wrap">
    <Text fz='lg'>{props.name}</Text>
    <Title order={1}>{props.value}</Title>
    </Flex>
    </Flex>
    </Paper>
</>
  )
  }


export default RadialBarBox

