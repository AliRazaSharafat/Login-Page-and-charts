import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data',
      backgroundColor: 'lightBlue',
      borderColor: 'blue',
      borderWidth: 1,
      hoverBackgroundColor: 'seaBlue',
      hoverBorderColor: 'lightBlue',
      data: [65, 59, 80, 81, 56, 55, 40],
    }
  ]
};

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'lightPink',
		'lightBlue',
		'yellow'
		]
	}]
};

function doughnut() {
  return (
    <div>
      <h3>Doughnut Chart</h3>
      <Doughnut data={data} height={80} width={400}/>
    </div>
  )
}

export default doughnut;