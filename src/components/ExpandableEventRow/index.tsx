import { ExpandIcon } from "@components/icons/ExpandIcon";
import React, { useState } from "react";
import styled from "styled-components";
import { Table, Button } from "react-bootstrap";
import styles from "./expanded.module.css";
import { InlineForm } from "@components/InlineForm";

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
	display: flex;
`;

export const ExpandableEventRow: React.FC = () => {
	const [isExpanded, setExpanded] = useState(false);
	const [height, setHeight] = useState("0px");
	const [isFormOpen, setFormOpen] = useState(false);

	function expand() {
		setExpanded(val => !val);
		setHeight(h => (h === "0px" ? "400px" : "0px"));
		if (isFormOpen) setFormOpen(false);
	}

	function clickOpenFormHandler() {
		setFormOpen(true);
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
									<td>test@test123.com</td>
									<td>10</td>
									<td>Optional</td>
								</TR>
								<TR>
									<td>Description</td>
									<td>Add a description here</td>
									<td>test@test456.com</td>
									<td>10</td>
									<td>Optional</td>
								</TR>
								<TR>
									<td>Duration</td>
									<td>Add a description here</td>
									<td>test@test789.com</td>
									<td>10</td>
									<td>Optional</td>
								</TR>
								<TR>
									<td>Duration played</td>
									<td>Add a description here</td>
									<td>test@test789.com</td>
									<td>10</td>
									<td>Optional</td>
								</TR>
								<TR>
									<td colSpan={5} onClick={clickOpenFormHandler}>
										<FormElement>
											{!isFormOpen ? (
												"+ Add parameter"
											) : (
												<>
													<InlineForm />
													<Button variant="danger">X</Button>
												</>
											)}
										</FormElement>
									</td>
								</TR>
							</tbody>
						</Table>
						{isFormOpen && <p>Press enter to submit form</p>}
					</div>
				</TD>
			</tr>
		</>
	);
};
