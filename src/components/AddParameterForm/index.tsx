import React from "react";
import { Form, FormGroup, Col, InputGroup, Button } from "react-bootstrap";
import { StringValidation } from "../stringValidation";
import { NumberValidation } from "../numberValidation";
import { FormState } from "../expandableEventRow";

export const AddParameterForm: React.FC<{
	onSubmit: (event) => void;
	formState: FormState;
	handleEventChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCheckedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleValidationTypeChange: (event) => void;
	handleValidationChange: (event) => void;
}> = ({ formState, handleEventChange, onCheckedChange, handleValidationTypeChange, handleValidationChange, onSubmit }) => {
	return (
		<Form onSubmit={onSubmit}>
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
						<Form.Label>Type: </Form.Label>
						<Form.Control as="select" value={formState.select} name="select" onChange={handleEventChange} custom>
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
						<Form.Label>Description</Form.Label>
						<Form.Control
							type="text"
							as="textarea"
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
			{["1", "2", "6"].includes(formState.select) && (
				<>
					<Form.Row>
						<h5>Validation</h5>
					</Form.Row>
					<Form.Row>
						<FormGroup>
							<Form.Check
								type="checkbox"
								label="Add validation?"
								checked={formState.validate}
								name="validate"
								onChange={onCheckedChange}
							/>
						</FormGroup>
					</Form.Row>
				</>
			)}
			{formState.validate && formState.select === "1" && (
				<StringValidation
					validation={formState.validation}
					handleValidationTypeChange={handleValidationTypeChange}
					handleValidationChange={handleValidationChange}
				/>
			)}
			{formState.validate && formState.select === "2" && (
				<NumberValidation validation={formState.validation} handleValidationChange={handleValidationChange} />
			)}
			{formState.validate && formState.select === "6" && (
				<Form.Row className="mb-3">
					<Col>
						<InputGroup className="mb-2">
							<InputGroup.Prepend>
								<InputGroup.Text>Regex: </InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control
								type="regex"
								placeholder="enter regex"
								name="customregex"
								value={formState.validation.customregex}
								onChange={handleValidationChange}
							/>
						</InputGroup>
					</Col>
					<Col></Col>
				</Form.Row>
			)}
			<Form.Row>
				<Col>
					<Button type="submit">Add Parameter</Button>
				</Col>
			</Form.Row>
		</Form>
	);
};
