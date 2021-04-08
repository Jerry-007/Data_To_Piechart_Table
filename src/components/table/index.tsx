import React from "react";
import styled from "styled-components";
import { ExpandableEventRow } from "../ExpandableEventRow";

const CenterFlex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: #f7f8fc;
	min-height: 100vh;
`;

const TableOuter = styled.div`
	border-radius: 8px;
	padding: 1em;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	background-color: #fff;
	width: 90vw;
	margin: 3rem;
`;

const TableHeader = styled.thead`
	background-color: rgba(22, 42, 86, 0.04);
	/* display: flex; */
	padding: 0 3rem;
	justify-content: space-between;
	font-weight: 600;
`;

const TableHeadItem = styled.th`
	padding: 10px;
	text-align: left;
`;

export const Table: React.FC = () => {
	return (
		<CenterFlex>
			<TableOuter>
				<table style={{ width: "100%" }}>
					<TableHeader>
						<tr>
							<TableHeadItem></TableHeadItem>
							<TableHeadItem>Event</TableHeadItem>
							<TableHeadItem>Description</TableHeadItem>
							<TableHeadItem>Violations</TableHeadItem>
							<TableHeadItem>Total</TableHeadItem>
							<TableHeadItem>Last Seen</TableHeadItem>
						</tr>
					</TableHeader>
					<tbody>
						<ExpandableEventRow />
						<ExpandableEventRow />
						<ExpandableEventRow />
						<ExpandableEventRow />
						<ExpandableEventRow />
					</tbody>
				</table>
			</TableOuter>
		</CenterFlex>
	);
};
