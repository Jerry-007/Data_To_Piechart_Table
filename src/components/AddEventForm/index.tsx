import React, { useState } from "react";
import { Form, FormGroup, Col } from "react-bootstrap";

interface FormData {
	title: string;
}

export const AddEventForm: React.FC<{
	onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
	formData: FormData;
	onChangeHandler: (event) => void;
}> = () => {
	// define form state
	const [formState, setFormState] = useState({ name: "", description: "", select: 0, optional: false });

	function handleEventChange(e) {
		setFormState(state => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	}

	function onCheckedChange(e) {
		setFormState(prevState => ({
			...prevState,
			optional: !prevState.optional,
		}));
	}

	return (
		<Form>
			<h4>Enter parameter details</h4>
			<Form.Row>
				<Col>
					<FormGroup>
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Name" value={formState.name} name="name" onChange={handleEventChange} />
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Form.Label>Description</Form.Label>
						<Form.Control
							type="text"
							placeholder="Description"
							value={formState.description}
							name="description"
							onChange={handleEventChange}
						/>
					</FormGroup>
				</Col>
			</Form.Row>
			<Form.Row>
				<Col>
					<FormGroup>
						<Form.Label>Type: </Form.Label>
						<Form.Control as="select" value={formState.select} name="select" onChange={handleEventChange}>
							<option value={0}>-</option>
							<option value={1}>String</option>
							<option value={2}>Number</option>
							<option value={3}>Boolean</option>
							<option value={4}>Null</option>
							<option value={5}>Array</option>
							<option value={6}>Custom</option>
						</Form.Control>
					</FormGroup>
				</Col>
			</Form.Row>
			<Form.Row>
				<Col>
					<FormGroup>
						<Form.Check
							type="checkbox"
							label="Optional field"
							checked={formState.optional}
							name="optional"
							onChange={onCheckedChange}
						/>
					</FormGroup>
				</Col>
			</Form.Row>
		</Form>
	);
};
