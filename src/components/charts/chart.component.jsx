import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Grid } from 'semantic-ui-react';

const BarChart = ({ arrayData }) => {
	const filterLabelColors = (arr) => {
		let currentMaxHeight = arr[0];
		let colorArray = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= currentMaxHeight) {
				currentMaxHeight = arr[i];
				colorArray.push('#6435c9');
			} else {
				colorArray.push('grey');
			}
		}

		return colorArray;
	};

	const data = {
		labels: [1, 2, 3, 4, 5, 6],
		datasets: [
			{
				barPercentage: 0.7,
				label: 'Height',
				backgroundColor: filterLabelColors(arrayData),
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(255, 100, 255,0.8)',
				hoverBorderColor: 'rgba(255,99,132,1)',
				data: arrayData,
			},
		],
	};

	return (
		<div>
			<Grid stackable centered>
				<Grid.Row>
					<Grid.Column width={12}>
						<Bar
							data={data}
							width={200}
							height={100}
							options={{
								legend: {
									display: false,
								},
								title: {
									display: true,
									text: 'Buildings',
									fontSize: 25,
									fontColor: '#fff',
								},

								scales: {
									scaleLabel: {
										display: true,
										fontColor: '#fff',
									},
									yAxes: [
										{
											ticks: {
												fontSize: 14,
												fontColor: '#fff',
												suggestedMax: Math.max(...arrayData),
												min: 0,
											},
										},
									],
									xAxes: [
										{
											ticks: {
												fontSize: 14,
												fontColor: '#fff',
												min: 0,
												max: 8,
											},
										},
									],
								},
							}}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default BarChart;
