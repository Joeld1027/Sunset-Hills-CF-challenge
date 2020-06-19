import React, { useState, useEffect } from 'react';
import {
	Header,
	Segment,
	Container,
	Button,
} from 'semantic-ui-react';
import BarChart from './components/charts/chart.component';
import './App.css';
import ArrayInputs from './components/inputs/arrayInputs.component';
import TallBuildingList from './components/tallestBuildings/tallestBuildings.component';

const App = () => {
	const [arrayData, setArrayData] = useState([]);

	function randomHeights() {
		let arr = [];
		for (let i = 5; i >= 0; i--) {
			arr.push(Math.floor(Math.random() * 100) + 1);
		}
		return arr;
	}
	useEffect(() => {
		setArrayData(randomHeights());
	}, []);

	const sunsetFilter = (arr) => {
		let currentMaxHeight = arr[0];
		let arrayOrder = [];
		arr.filter((height) => {
			if (height >= currentMaxHeight) {
				currentMaxHeight = height;
				return arrayOrder.push(height);
			}
			return false;
		});
		return arrayOrder;
	};

	let orderedArray = sunsetFilter(arrayData);

	return (
		<div className='App'>
			<Container>
				<Segment basic padded textAlign='center'>
					<Header
						inverted
						style={{
							fontSize: '3em',
							color: '#ffb2ff',
							textShadow: '2px 2px 0 black',
						}}
					>
						Sunset Hill Challenge
					</Header>

					<ArrayInputs
						setArrayData={setArrayData}
						arrayData={arrayData}
					/>

					<div className='answer'>
						<div style={{ padding: '10px' }}>
							<Button
								onClick={() => setArrayData(randomHeights())}
								size='small'
								content='Random'
								color='violet'
							/>
						</div>
						<Header
							as='h1'
							style={{ color: '#ffb2ff' }}
							content={`Array of Heights: [${arrayData
								.join(', ')
								.toString()}]`}
						/>
						<Header
							textAlign='center'
							content={`# of Buildings that can see the sunset: ${orderedArray.length} `}
							as='h1'
							style={{ color: '#ffb2ff' }}
						/>

						<Header
							style={{ color: '#ffb2ff' }}
							as='h1'
							textAlign='center'
						>
							{` Filtered Array [ ${orderedArray.toString()} ]`}
						</Header>

						<BarChart arrayData={arrayData} />
					</div>

					<TallBuildingList
						arrayData={arrayData}
						setArrayData={setArrayData}
					/>
				</Segment>
			</Container>
		</div>
	);
};

export default App;
