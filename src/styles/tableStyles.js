import styled from "styled-components";

// TODO: make tables responsive for different width
// TODO: add variable media query breakpoints to account for changes

// center the child div by giving the div a display: flex;
export const CenterFlex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: #f7f8fc;
	min-height: 100vh;

	@media (max-width: 786px) {
		font-size: 14px;
	}
`;

// TABLE STYLES
export const TableOuter = styled.div`
	border-radius: 8px;
	padding: 1em;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	background-color: #fff;
	width: 90vw;
	margin: 3rem;

	@media (max-width: 786px) {
		margin: 1rem;
	}

	@media (max-width: 600px) {
		margin: 0.4rem;
	}
`;

export const TableHeader = styled.thead`
	background-color: rgba(22, 42, 86, 0.04);
	/* display: flex; */
	padding: 0 3rem;
	justify-content: space-between;
	font-weight: 600;
`;

export const TableHeadItem = styled.th`
	padding: 10px;
	text-align: left;
`;

export const TD = styled.td`
	padding: 0.5rem 10px;
	text-align: left;
	max-width: 150px;
`;

export const TR = styled.tr`
	&:nth-child(odd) {
		background-color: #f7f7fc;
	}

	&:nth-child(even) {
		background-color: #eff0f6;
	}
`;

// a wrapper for dropdown arrow to expand
export const OpenBox = styled.td`
	text-align: center;
	cursor: pointer;
`;

// wrapper for everything inside the form part
export const FormElement = styled.div`
	position: relative;
`;

// to position the close button on top right
export const ButtonWrapper = styled.div`
	display: inline-block;
	position: absolute;
	top: 0;
	right: 0;
`;
