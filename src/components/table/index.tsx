import React from "react";
import { ExpandableEventRow } from "../ExpandableEventRow";
import { CenterFlex, TableOuter, TableHeader, TableHeadItem } from "../../styles/tableStyles";

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
