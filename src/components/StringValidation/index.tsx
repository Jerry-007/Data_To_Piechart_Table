import { Validation } from "@components/ExpandableEventRow";
import React from "react";
import { Form, Col, FormGroup } from "react-bootstrap";
import ChipInput from "material-ui-chip-input";

export const StringValidation: React.FC<{
	validation: Validation;
	handleValidationTypeChange: (event) => void;
	handleValidationChange: (event) => void;
}> = ({ validation, handleValidationTypeChange, handleValidationChange }) => {
	function handleAdd(chip) {
		// hacking the event parameter to change state
		handleValidationChange({
			target: {
				name: "stringChips",
				value: [...validation.stringChips, chip],
			},
		});
	}

	function handleDelete(val, index) {
		const newChips = validation.stringChips.filter(chip => chip !== val);
		// hacking the event parameter to change state
		handleValidationChange({
			target: {
				name: "stringChips",
				value: newChips,
			},
		});
	}

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
				<Form.Row className={`${validation.customType == "3" && "mb-3"}`}>
					<Col>
						<Form.Control as="select" name="customType" custom value={validation.customType} onChange={handleValidationChange}>
							<option value={0}>Contains: </option>
							<option value={1}>Starts with: </option>
							<option value={2}>Ends with: </option>
							<option value={3}>Equals: </option>
							<option value={4}>Custom Regex</option>
						</Form.Control>
					</Col>
					{validation.customType !== "3" ? (
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
					) : (
						<Col>
							<ChipInput
								onAdd={chips => handleAdd(chips)}
								value={validation.stringChips}
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
			)}
		</>
	);
};
