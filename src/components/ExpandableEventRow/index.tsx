import { ExpandIcon } from "@components/icons/ExpandIcon";
import React, { useState } from "react";
import styled from "styled-components";
import { Table, Button } from "react-bootstrap";
import styles from "./expanded.module.css";
import { AddParameterForm } from "@components/AddParameterForm";

// structure of form state
export interface FormState {
	name: string;
	description: string;
	select: string;
	optional: boolean;
	validation: any;
}

// styled components here
const TD = styled.td`
	padding: 0.5rem 10px;
	text-align: left;
	max-width: 150px;
`;

const OpenBox = styled.td`
	text-align: center;
	cursor: pointer;
`;

const TR = styled.tr`
	&:nth-child(odd) {
		background-color: #f7f7fc;
	}

	&:nth-child(even) {
		background-color: #eff0f6;
	}
`;

const FormElement = styled.div`
	position: relative;
`;

const ButtonWrapper = styled.div`
	display: inline-block;
	position: absolute;
	top: 0;
	right: 0;
`;

// initial form state
const initFormState: FormState = {
	name: "",
	description: "",
	select: "0",
	optional: false,
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
		console.log(e);
		// get data and add it to the end of the list
	}

	// changing state for name and type
	function handleEventChange(e) {
		setFormState(state => ({
			...state,
			[e.target.name]: e.target.value,
			validation: initFormState.validation,
		}));
	}

	// changing state for checkbox named optional
	function onCheckedChange() {
		setFormState(prevState => ({
			...prevState,
			optional: !prevState.optional,
		}));
	}

	// changing state for validation type between predefined and custom
	function handleValidationTypeChange(e) {
		setFormState(prevState => ({
			...prevState,
			validation: { ...prevState.validation, type: e.target.value },
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
