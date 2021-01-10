import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
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

const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data',
      backgroundColor: 'lightBlue',
      borderColor: 'blue',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [15, 29, 60, 1, 96, 65, 44],
    }
  ]
};

function bar() {
  return (
    <div>
      <h3>Bar Chart</h3>
      <Bar
        data={data}
        width={300}
        height={300}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  )
}

export default bar;