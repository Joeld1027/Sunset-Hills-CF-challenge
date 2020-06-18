import React from 'react'
import { Line } from 'react-chartjs-2';
import { Grid } from 'semantic-ui-react'

const BarChart = () => {

  const data = {
    labels: [0, 1, 2, 3, 4, 5, 0],
    datasets: [
      {
        type: 'bar',
        label: 'Height',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [0, 65, 59, 80, 81, 200],

      },
    ]
  };



  return (

    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <h2>Left</h2>
          </Grid.Column>
          <Grid.Column width={12}>
            <Line
              data={data}
              width={200}
              height={100}
              options={{
                legend: {
                  display: false
                },
                title: {
                  display: true,
                  text: 'Buildings'
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      max: 1000,
                      min: 0
                    }
                  }],
                  xAxes: [{
                    ticks: {
                      min: 0,
                      max: 8
                    }
                  }],

                }
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  )
}

export default BarChart
