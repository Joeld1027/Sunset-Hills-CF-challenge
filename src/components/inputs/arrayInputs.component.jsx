import React, { useState } from 'react';
import { Header, Button, Form } from 'semantic-ui-react';

const ArrayInputs = ({ arrayData, setArrayData }) => {
	const [inputData, setInputData] = useState({
		0: undefined,
		1: undefined,
		2: undefined,
		3: undefined,
		4: undefined,
		5: undefined,
	});
	const handleChange = (e, data) => {
		setInputData({
			...inputData,
			[data.tabIndex]: Number(e.target.value),
		});
	};
	const handleCalculate = (e) => {
		e.preventDefault();
		setArrayData(Object.values(inputData));
	};

	return (
		<Form
			style={{
				width: '60%',
				display: 'flex',
				flexDirection: 'column',
				margin: 'auto auto',
			}}
			widths={'equal'}
			onSubmit={handleCalculate}
		>
			<Header
				className='headerText'
				textAlign='center'
				as='h2'
				content='Enter number from 1-100 for each height.'
			/>
			<Form.Group inline>
				<Form.Input
					min='1'
					max='100'
					type='number'
					name='one'
					required
					style={{ width: '8em' }}
					onChange={handleChange}
					label='Height #1'
					size='mini'
					tabIndex={0}
				/>
				<Form.Input
					min='1'
					max='100'
					type='number'
					name='two'
					style={{ width: '8em' }}
					onChange={handleChange}
					required
					size='mini'
					label='Height #2'
					tabIndex={1}
				/>
				<Form.Input
					min='1'
					max='100'
					type='number'
					name='three'
					required
					onChange={handleChange}
					size='mini'
					style={{ width: '8em' }}
					label='Height #3'
					tabIndex={2}
				/>
				<Form.Input
					min='1'
					max='100'
					type='number'
					name='four'
					required
					onChange={handleChange}
					size='mini'
					style={{ width: '8em' }}
					label='Height #4'
					tabIndex={3}
				/>
				<Form.Input
					min='1'
					max='100'
					type='number'
					name='five'
					required
					onChange={handleChange}
					size='mini'
					style={{ width: '8em' }}
					label='Height #5'
					tabIndex={4}
				/>
				<Form.Input
					min='1'
					max='100'
					type='number'
					name='six'
					required
					onChange={handleChange}
					size='mini'
					style={{ width: '8em' }}
					label='Height #6'
					tabIndex={5}
				/>
			</Form.Group>
			<Header>
				{' '}
				<Button content='Calculate' color='violet' />
			</Header>
		</Form>
	);
};

export default ArrayInputs;
