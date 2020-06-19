import React, { useState, useEffect } from 'react';
import {
	Card,
	Image,
	Button,
	Pagination,
	Grid,
	Checkbox,
	Header,
} from 'semantic-ui-react';
import { tallestBuildings } from '../../top20Data';
import CardAnswers from '../cardAnswers/CardAnswers.component';

const TallBuildingList = ({ setArrayData, arrayData }) => {
	const shuffledArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * i);
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};
	const [
		shuffledBuildingsArray,
		setShuffledBuildingsArray,
	] = useState([]);

	const [buildingsData, setBuildingsData] = useState(
		shuffledBuildingsArray
	);

	useEffect(() => {
		const currentArray = shuffledArray(tallestBuildings);
		setShuffledBuildingsArray(currentArray);
		setBuildingsData(currentArray.slice(0, 5));
	}, []);
	const INITIAL_STATE = {
		buildingId: [],
		buildingHeight: [],
	};

	const [tallBuildingsData, setTallBuildingsData] = useState(
		INITIAL_STATE
	);

	const [isDisable, setIsDisable] = useState(false);

	useEffect(() => {
		if (tallBuildingsData.buildingId.length >= 6) {
			setIsDisable(true);
		} else {
			setIsDisable(false);
		}
		return () => {
			setIsDisable(false);
		};
	}, [tallBuildingsData]);

	const handleToggle = (e, { name, value }) => {
		let { [name]: array } = tallBuildingsData;
		let idArray = tallBuildingsData.buildingId;

		if (!idArray.includes(value.id)) {
			idArray = [...idArray, value.id];
			array = [...array, value.height];
		} else {
			idArray = idArray.filter((a) => a !== value.id);
			array = array.filter((a) => a !== value.height);
		}
		setTallBuildingsData({
			...tallBuildingsData,
			[name]: array,
			buildingId: idArray,
		});
	};

	//temporal pagination
	const handlePagination = (e, { activePage }) => {
		switch (activePage) {
			case 4:
				return setBuildingsData(shuffledBuildingsArray.slice(15, 20));
			case 3:
				return setBuildingsData(shuffledBuildingsArray.slice(10, 15));
			case 2:
				return setBuildingsData(shuffledBuildingsArray.slice(5, 10));
			default:
				return setBuildingsData(shuffledBuildingsArray.slice(0, 5));
		}
	};

	const [answerCards, setAnswerCards] = useState();

	return (
		<Grid stackable centered style={{ margin: '4em 0' }}>
			<Grid.Row>
				<CardAnswers answerCards={answerCards} />
			</Grid.Row>
			<Grid.Row style={{ margin: '2em 0' }}>
				<Header
					className='headerText'
					as='h1'
					content='Compare from the TOP 20 tallest buildings in the world.'
				/>
			</Grid.Row>

			<Grid.Row>
				<Card.Group itemsPerRow={5} stackable>
					{buildingsData.map((building) => (
						<Card raised key={building.id}>
							<Image src={building.imageUrl} wrapped ui={false} />
							<Card.Content>
								<Card.Header>{building.name}</Card.Header>

								<Card.Description>{building.city}</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<Checkbox
									checked={
										tallBuildingsData.buildingId.includes(building.id)
											? true
											: false
									}
									value={{ id: building.id, height: building.Height }}
									onChange={handleToggle}
									disabled={
										isDisable &&
										!tallBuildingsData.buildingId.includes(
											building.id
										)
									}
									name='buildingHeight'
									toggle
									color='pink'
								/>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
				<Grid.Row className='building-pagination' centered>
					<Pagination
						onPageChange={handlePagination}
						defaultActivePage={1}
						firstItem={null}
						lastItem={null}
						totalPages={4}
					/>
				</Grid.Row>

				<Grid.Column width={16}>
					<Header
						textAlign='center'
						as='h1'
						className='headerText'
						content='(Select six buildings.)'
					/>
					<Header textAlign='center'>
						{' '}
						<Button
							disabled={!isDisable}
							onClick={() => {
								let answerCardsArray = tallestBuildings.filter(
									(building) => {
										if (
											tallBuildingsData.buildingId.includes(
												building.id
											)
										) {
											return building;
										} else {
											return false;
										}
									}
								);
								setAnswerCards(answerCardsArray);
								setArrayData(tallBuildingsData.buildingHeight);
								setTallBuildingsData(INITIAL_STATE);
							}}
							content='Calculate'
							color='violet'
						/>
					</Header>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default TallBuildingList;
