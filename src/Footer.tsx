import styled from "styled-components";

import { cardStyle } from "./Card";

const FooterContainer = styled.footer`
	${cardStyle}

	margin: var(--spacing-outer) 0;
	padding: var(--spacing-inner);

	font-size: var(--size-text-tiny);
	font-weight: bold;
	text-align: center;
`;

const FooterComponent = (props: {
	children: string
}) => {
	return (
		<FooterContainer children={props.children}/>
	);
};

export { FooterComponent as Footer };
