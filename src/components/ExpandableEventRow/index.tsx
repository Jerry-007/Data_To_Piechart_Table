import { ExpandIcon } from "@components/icons/ExpandIcon";
import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import styles from "./expanded.module.css";
import { AddParameterForm } from "@components/AddParameterForm";
import { TD, TR, OpenBox, FormElement, ButtonWrapper } from "../../styles/tableStyles";

// structure of validation state
export interface Validation {
	type: string;
	predetermined: string;
	customType: string;
	customValue: string;
	numberType: string;
	numberValue: string;
	numberUpperLimit: string;
	numberLowerLimit: string;
	customregex: string;
}

// structure of form state
export interface FormState {
	name: string;
	description: string;
	select: string;
	optional: boolean;
	validation: Validation;
	validate: boolean;
}

// initial form state
const initFormState: FormState = {
	name: "",
	description: "",
	select: "0",
	optional: false,
	validate: true,
	validation: {
		type: "predetermined",
		predetermined: "0",
		customType: "0",
		customValue: "",
		numberType: "0",
		numberValue: "0",
		numberUpperLimit: "10",
		numberLowerLimit: "0",
		customregex: "",
	},
};

export const ExpandableEventRow: React.FC<{ data: any }> = ({ data }) => {
	// state to control expansion of accordion
	const [isExpanded, setExpanded] = useState(false);
	// state of the height of the content of the accordion
	const [height, setHeight] = useState("0px");
	// state of form being open or not
	const [isFormOpen, setFormOpen] = useState(false);
	// define form state
	const [formState, setFormState] = useState<FormState>(initFormState);

	function expand() {
		setExpanded(val => !val);
		setHeight(h => (h === "0px" ? "1000px" : "0px"));
		if (isFormOpen) {
			setFormOpen(false);
			setFormState(initFormState);
		}
	}

	function clickOpenFormHandler() {
		setFormOpen(true);
		setHeight(h => parseInt(h.slice(0, h.length - 2)) + 200 + "px");
	}

	function closeFormHandler() {
		setFormOpen(false);
		setHeight(h => parseInt(h.slice(0, h.length - 2)) - 200 + "px");
		setFormState(initFormState);
	}

	function onSubmit(e) {
		e.preventDefault();
		//TODO: get data and add it to the state containing params
		console.log(formState);
	}

	// changing state for name and type
	function handleEventChange(e) {
		if (e.target.name === "select")
			return setFormState(state => ({
				...state,
				[e.target.name]: e.target.value,
				validation: initFormState.validation,
			}));

		setFormState(state => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	}

	// changing state for checkbox named optional and validate
	function onCheckedChange(e) {
		setFormState(prevState => ({
			...prevState,
			[e.target.name]: !prevState[e.target.name],
		}));
	}

	// changing state for validation type between predefined and custom
	function handleValidationTypeChange(e) {
		setFormState(prevState => ({
			...prevState,
			validation: { ...initFormState.validation, type: e.target.value },
		}));
	}

	function handleValidationChange(e) {
		setFormState(prevState => ({
			...prevState,
			validation: { ...prevState.validation, [e.target.name]: e.target.value },
		}));
	}

	// calcuate time and return the respective string
	function calculateTime(last) {
		const diff = new Date().getTime() - new Date(last).getTime();
		const secondsDifference = new Date(diff).getTime() / 1000;
		const minutesDifference = secondsDifference / 60;
		const hoursDifference = minutesDifference / 60;
		if (parseInt(hoursDifference.toFixed(0)) == 0) {
			if (parseInt(minutesDifference.toFixed(0)) == 0) {
				return secondsDifference.toFixed(0) + " seconds ago";
			}
			return minutesDifference.toFixed(0) + " minutes ago";
		}
		return hoursDifference.toFixed(0) + " hours ago";
	}

	function genParamString(validation: any) {
		let paramString = "No validation";

		if (validation.type == "string") {
			paramString = "Aa String";
			if (validation.isValidation) {
				if (validation.predetermined) {
					paramString += ` ${validation.predetermined}`;
				}

				if (validation.custom) {
					// add custom validation here
					if (validation.custom["contains"]) {
						paramString += ` Contains '${validation.custom.contains}'`;
					} else if (validation.custom["starts"]) {
						paramString += ` Starts ${validation.custom.starts}`;
					} else if (validation.custom["ends"]) {
						paramString += ` Ends ${validation.custom.ends}`;
					} else if (validation.custom["equals"]) {
						paramString += ` Equals ${validation.custom.equals}`;
					} else if (validation.custom["regex"]) {
						paramString += ` Regex ${validation.custom.regex}`;
					}
				}
			}
		} else if (validation.type == "number") {
			paramString = "# Number";

			// TODO: cover all the remaining edge cases of validation
			if (validation["between"]) {
				paramString += `( ${validation["between"].min} <= num <= ${validation["between"].max} )`;
			}
		} else if (validation.type == "boolean") {
			paramString = "Boolean";
		} else if (validation.type == "null") {
			paramString = "null";
		} else if (validation.type == "custom") {
			paramString = "Custom";

			if (validation.isValidation) {
				paramString += ` Regex ${validation.regex}`;
			}
		} else if (validation.type == "array") {
			paramString = "[] Array";
		}

		return paramString;
	}

	return (
		<>
			<tr>
				<OpenBox onClick={expand}>
					<div className={`${styles.icon} ${isExpanded && styles.rotate}`}>
						<ExpandIcon />
					</div>
				</OpenBox>
				<TD>{data.title}</TD>
				<TD>{data.description}</TD>
				<TD>{data.violations}</TD>
				<TD>{data.totalViolations}</TD>
				<TD>{calculateTime(data.last)}</TD>
			</tr>
			<tr>
				<TD isExpanded={isExpanded}></TD>
				<TD colSpan="5" isExpanded={isExpanded}>
					<div style={{ maxHeight: `${height}`, overflow: "hidden" }} className={styles.expand}>
						<Table borderless>
							<tbody>
								{/* TODO: creating the edit panel for a particular parameter */}
								{data.params.map(param => (
									<TR key={param.id}>
										<td>{param.name}</td>
										<td>{param.description}</td>
										<td>{genParamString(param.validation)}</td>
										<td>{param.validation.paramViolations}</td>
										<td>{param.optional ? "Optional" : "Required"}</td>
									</TR>
								))}
								<TR>
									<td colSpan={5}>
										<FormElement>
											{!isFormOpen ? (
												<span onClick={clickOpenFormHandler} className={styles.add}>
													{"+ Add parameter"}
												</span>
											) : (
												<>
													<AddParameterForm
														onSubmit={onSubmit}
														formState={formState}
														handleEventChange={handleEventChange}
														onCheckedChange={onCheckedChange}
														handleValidationTypeChange={handleValidationTypeChange}
														handleValidationChange={handleValidationChange}
													/>
													<ButtonWrapper>
														<Button variant="danger" onClick={closeFormHandler}>
															X
														</Button>
													</ButtonWrapper>
												</>
											)}
										</FormElement>
									</td>
								</TR>
							</tbody>
						</Table>
					</div>
				</TD>
			</tr>
			{/* TODO: add event form */}
		</>
	);
};
