import styled from "styled-components";
import { cardStyle } from "./Card";

const TitleContainer = styled.hgroup<{
	card?: boolean
}>`
max-width: var(--size-width-base);

${props => props.card ? (`
	${cardStyle}

	margin: var(--spacing-outer) auto;
	padding: var(--spacing-inner);
`) : (``)}
`;

const TitleMain = styled.h2`
	margin-top: 0;
	font-size: var(--size-text-medium);
	line-height: var(--size-text-medium);
	color: var(--color-theme-primary);
	font-family: Catamaran;
`;

const TitleTagline = styled.p`
	font-size: var(--size-text-medium);
	line-height: var(--size-text-medium);
`;

const TitleComponent = (props: {
	title: string,
	tagline: string,
	card?: boolean
}) => {
	return (
		<TitleContainer  card={props.card}>
			<TitleMain children={props.title}/>
			<TitleTagline children={props.tagline}/>
		</TitleContainer>
	);
};

export { TitleComponent as Title };
