import React from 'react';
import { Card, Image, Label, Header } from 'semantic-ui-react';

const CardAnswers = ({ answerCards }) => {
	return (
		<>
			{answerCards && (
				<Header
					as='h2'
					content='Your building choices'
					className='headerText'
				/>
			)}
			<Card.Group itemsPerRow={6} stackable>
				{answerCards
					? answerCards.map((card, i) => (
							<Card key={card.id} raised color='violet'>
								<Card.Content>
									<Label
										corner='left'
										color='violet'
										content={i + 1}
									/>
									<Image
										verticalAlign='middle'
										size='small'
										src={card.imageUrl}
									/>

									<Card.Header>{card.name}</Card.Header>
									<Card.Meta>{card.city}</Card.Meta>
								</Card.Content>
							</Card>
					  ))
					: null}
			</Card.Group>
		</>
	);
};

export default CardAnswers;
