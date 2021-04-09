import { Validation } from "@components/ExpandableEventRow";
import React from "react";
import { Form, Col, FormGroup } from "react-bootstrap";

export const StringValidation: React.FC<{
	validation: Validation;
	handleValidationTypeChange: (event) => void;
	handleValidationChange: (event) => void;
}> = ({ validation, handleValidationTypeChange, handleValidationChange }) => {
	return (
		<>
			<Form.Row className="mb-3">
				<Col>
					<Form.Check
						type="radio"
						label="Predetermined type"
						name="validationType"
						checked={validation.type === "predetermined"}
						value="predetermined"
						onChange={handleValidationTypeChange}
					/>
					<Form.Check
						type="radio"
						label="Custom Format"
						name="validationType"
						value="custom"
						checked={validation.type === "custom"}
						onChange={handleValidationTypeChange}
					/>
				</Col>
			</Form.Row>
			{validation.type === "predetermined" && (
				<Form.Row className="mb-3">
					<Col>
						Predetermined type of parameter:
						<Form.Control
							as="select"
							name="predetermined"
							custom
							value={validation.predetermined}
							onChange={handleValidationChange}
						>
							<option value={0}>-</option>
							<option value={1}>DateTime</option>
							<option value={2}>Time</option>
							<option value={3}>Email</option>
							<option value={4}>Hostname</option>
							<option value={5}>IPv4</option>
							<option value={6}>IPv6</option>
							<option value={7}>URI</option>
						</Form.Control>
					</Col>
					<Col></Col>
				</Form.Row>
			)}

			{validation.type === "custom" && (
				<Form.Row>
					<Col>
						<Form.Control as="select" name="customType" custom value={validation.customType} onChange={handleValidationChange}>
							<option value={0}>Contains: </option>
							<option value={1}>Starts with: </option>
							<option value={2}>Ends with: </option>
							<option value={3}>Equals: </option>
							<option value={4}>Custom Regex</option>
						</Form.Control>
					</Col>
					<Col>
						<FormGroup>
							<Form.Control
								type="text"
								name="customValue"
								placeholder="text"
								value={validation.customValue}
								onChange={handleValidationChange}
							/>
						</FormGroup>
					</Col>
				</Form.Row>
			)}
		</>
	);
};
