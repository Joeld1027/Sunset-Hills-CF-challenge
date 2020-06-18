import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import BarChart from './components/charts/chart.component'
import './App.css';

function App() {

  let testArr = [4, 6, 3, 7, 9, 2, 100]

  const sunsetFilter = (arr) => {
    let currentMaxHeight = arr[0];
    let arrayOrder = [];
    arr.filter(height => {
      if (height >= currentMaxHeight) {
        return arrayOrder.push(height);
      }
      return height;
    })
    return arrayOrder;
  }

  let orderedArray = sunsetFilter(testArr)

  return (
    <div className="App" >
      <Header as='h1' textAlign='center'> Sunset Hill </Header>
      <Segment>
        <BarChart />
      </Segment>
      <Header textAlign='center' content='The correct order:' as='h1' color='violet' />

      <Header color='purple' as='h1' textAlign='center'>
        {
          `${orderedArray.length} --> [ ${orderedArray.toString()} ]`
        }
      </Header>
    </div>
  );
}

export default App;