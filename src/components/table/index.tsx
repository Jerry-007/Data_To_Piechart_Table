import React, { useState, useEffect } from "react";
import { ExpandableEventRow } from "@components/expandableEventRow";
import { CenterFlex, TableOuter, TableHeader, TableHeadItem } from "@styles/tableStyles";
import data from "../../../data.json";

interface Event {
	id: number;
	title: string;
	description: string;
	violations: number;
	total: number;
	last: string;
	params: Array<Param>;
}

interface Param {
	name: string;
	description: string;
	optional: boolean;
	validation: any;
}

export const Table: React.FC = () => {
	const [events, setEvents] = useState<Event | any>([]);

	// TODO: change to useSWR
	useEffect(() => {
		setEvents(data);
	}, []);

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
						{events.map(event => (
							<ExpandableEventRow key={event.id} data={event} />
						))}
					</tbody>
				</table>
			</TableOuter>
		</CenterFlex>
	);
};
