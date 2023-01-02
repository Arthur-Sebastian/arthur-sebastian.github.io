import styled from "styled-components";

import {cardStyle} from "./Card";
import {Breakpoint, mediaQuerySize} from "./Responsive";

const FooterContainer = styled.footer`
	${cardStyle}

	width: calc(100% - var(--spacing-outer) * 2);
	max-width: var(--size-width-base);
	margin: var(--spacing-outer) auto;
	padding: var(--spacing-inner);

	font-size: var(--size-text-tiny);
	font-weight: bold;
	text-align: center;

	${mediaQuerySize(Breakpoint.tablet)} {
	}
`;

const FooterComponent = (props: {
	children: string
}) => {
	return (
		<FooterContainer children={props.children}/>
	);
};

export { FooterComponent as Footer };
