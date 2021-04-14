import React from "react";
import { Form, Col, FormGroup } from "react-bootstrap";
import { Validation } from "../ExpandableEventRow";

export const NumberValidation: React.FC<{ validation: Validation; handleValidationChange: (event) => void }> = ({
	validation,
	handleValidationChange,
}) => {
	return (
		<>
			<Form.Row>
				<Col>
					<Form.Control as="select" name="numberType" custom value={validation.numberType} onChange={handleValidationChange}>
						<option value={0}>Greater than</option>
						<option value={1}>Greater than equal to</option>
						<option value={2}>Less than</option>
						<option value={3}>Less than equal to</option>
						<option value={4}>Between</option>
						<option value={5}>Equals</option>
						<option value={6}>Custom Regex</option>
					</Form.Control>
				</Col>
				{validation.numberType !== "4" && (
					<Col>
						<FormGroup>
							<Form.Control
								type="number"
								name="numberValue"
								placeholder="enter the number here"
								value={validation.numberValue}
								onChange={handleValidationChange}
							/>
						</FormGroup>
					</Col>
				)}
				{validation.numberType === "4" && (
					<>
						<Col>
							<FormGroup>
								<Form.Control
									type="number"
									name="numberLowerLimit"
									placeholder="enter the number here"
									value={validation.numberLowerLimit}
									onChange={handleValidationChange}
								/>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Form.Control
									type="number"
									name="numberUpperLimit"
									placeholder="enter the number here"
									value={validation.numberUpperLimit}
									onChange={handleValidationChange}
								/>
							</FormGroup>
						</Col>
					</>
				)}
			</Form.Row>
		</>
	);
};
