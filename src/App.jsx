import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  ...registerables
);

const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' , '31'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: '#D0E2F2',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: 'line',
      label: 'Dataset 1.1',
      borderColor: '#2E7ED8',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: 'line',
      label: 'Dataset 1.2',
      borderColor: '#FC5E62',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: 'line',
      label: 'Dataset 1.3',
      borderColor: '#E6CF57',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: 'line',
      label: 'Dataset 1.4',
      borderColor: '#E49246',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: 'line',
      label: 'Dataset 1.5',
      borderColor: '#3C752A',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
  ],
};

const options = {
  animation: {
      duration: 0 // アニメーション時間
  },
  hover: {
      animationDuration: 0 // アイテムをホバーした時のアニメーション時間
  },
  responsiveAnimationDuration: 0 // リサイズ後のアニメーション時間
}
// myLineChart.toBase64Image()
export const Test = () => {
  return [...Array(15)].map((num) => {
    return <ChartComponent />
  });
}

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [img, setImg] = useState('')
  useEffect(() => {
    if (chartRef.current && img === '') {
      // console.log(chartRef.current.toBase64Image())
      setImg(chartRef.current.toBase64Image());
    }
  },[img])
  return (
    !img ? 
      <Chart type='monotone' data={data} options={options} ref={chartRef}/>
      :
      <img src={img} alt=""/>
  )
}
