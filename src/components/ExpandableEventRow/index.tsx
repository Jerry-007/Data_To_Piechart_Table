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
	numberValue: number;
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
		numberValue: 0,
		customregex: "",
	},
};

export const ExpandableEventRow: React.FC = () => {
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
		// get data and add it to the end of the list
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

	return (
		<>
			<tr>
				<OpenBox onClick={expand}>
					<div className={`${styles.icon} ${isExpanded && styles.rotate}`}>
						<ExpandIcon />
					</div>
				</OpenBox>
				<TD>Video Played</TD>
				<TD>Fired when a video is played, along with the details of the event</TD>
				<TD>10</TD>
				<TD>1020</TD>
				<TD>2hrs ago</TD>
			</tr>
			<tr>
				<TD isExpanded={isExpanded}></TD>
				<TD colSpan="5" isExpanded={isExpanded}>
					<div style={{ maxHeight: `${height}`, overflow: "hidden" }} className={styles.expand}>
						<Table borderless>
							<tbody>
								<TR>
									<td>Title</td>
									<td>Add a description here</td>
									<td>{"# Number ( 0 < N < 100)"}</td>
									<td>10</td>
									<td>Optional</td>
								</TR>
								<TR>
									<td>Description</td>
									<td>Add a description here</td>
									<td>{"aA Text"}</td>
									<td>10</td>
									<td>Optional</td>
								</TR>
								<TR>
									<td>Duration</td>
									<td>Add a description here</td>
									<td>{"# Integer ( > 0 )"}</td>
									<td>10</td>
									<td>Optional</td>
								</TR>
								<TR>
									<td>Duration played</td>
									<td>Add a description here</td>
									<td>{"aA Text"}</td>
									<td>10</td>
									<td>Optional</td>
								</TR>
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
		</>
	);
};
