import { ExpandIcon } from "@components/icons/ExpandIcon";
import React, { useState } from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import styles from "./expanded.module.css";

const Row = styled.tr`
	margin: 2rem 0;
`;

const TD = styled.td`
	padding: 0.5rem 10px;
	text-align: left;
`;

const OpenBox = styled.td`
	text-align: center;
`;

export const ExpandableEventRow: React.FC = () => {
	const [isExpanded, setExpanded] = useState(false);
	const [height, setHeight] = useState("0px");

	function expand() {
		setExpanded(val => !val);
		setHeight(h => (h === "0px" ? "400px" : "0px"));
	}

	return (
		<>
			<Row>
				<OpenBox onClick={expand}>
					<div className={`${styles.icon} ${isExpanded && styles.rotate}`}>
						<ExpandIcon />
					</div>
				</OpenBox>
				<TD>Video Played</TD>
				<TD>Description</TD>
				<TD>1010</TD>
				<TD>1020</TD>
				<TD>2hrs ago</TD>
			</Row>
			<tr>
				<TD></TD>
				<TD colSpan="5">
					<div style={{ maxHeight: `${height}`, overflow: "hidden" }} className={styles.expand}>
						<Table striped borderless>
							<tbody>
								<tr>
									<td>Title</td>
									<td>Add a description here</td>
									<td>test@test123.com</td>
									<td>10</td>
									<td>Optional</td>
								</tr>
								<tr>
									<td>Description</td>
									<td>Add a description here</td>
									<td>test@test456.com</td>
									<td>10</td>
									<td>Optional</td>
								</tr>
								<tr>
									<td>Duration</td>
									<td>Add a description here</td>
									<td>test@test789.com</td>
									<td>10</td>
									<td>Optional</td>
								</tr>
								<tr>
									<td>Duration played</td>
									<td>Add a description here</td>
									<td>test@test789.com</td>
									<td>10</td>
									<td>Optional</td>
								</tr>
								<tr>
									<td colSpan={5}>Add Parameter</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</TD>
			</tr>
		</>
	);
};
