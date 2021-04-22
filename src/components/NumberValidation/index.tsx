import React from "react";
import { Form, Col, FormGroup } from "react-bootstrap";
import { Validation } from "../expandableEventRow";
import ChipInput from "material-ui-chip-input";

export const NumberValidation: React.FC<{ validation: Validation; handleValidationChange: (event) => void }> = ({
	validation,
	handleValidationChange,
}) => {
	function handleAdd(chip) {
		// hacking the event parameter to change state
		handleValidationChange({
			target: {
				name: "numberChips",
				value: [...validation.numberChips, chip],
			},
		});
	}

	function handleDelete(val, index) {
		const newChips = validation.numberChips.filter(chip => chip !== val);
		// hacking the event parameter to change state
		handleValidationChange({
			target: {
				name: "numberChips",
				value: newChips,
			},
		});
	}

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
				{validation.numberType !== "4" && validation.numberType !== "5" && (
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
				{validation.numberType === "5" && (
					<Col>
						<ChipInput
							onAdd={chips => handleAdd(chips)}
							value={validation.numberChips}
							classes={{
								root: "form-control px-2",
								helperText: "border-0",
								chip: "badge",
							}}
							newChipKeyCodes={[188]}
							onDelete={(...params) => handleDelete(...params)}
						/>
						{validation.customType == "3" && (
							<p className="text-muted">Press comma to separate values if passing multiple values</p>
						)}
					</Col>
				)}
			</Form.Row>
		</>
	);
};
