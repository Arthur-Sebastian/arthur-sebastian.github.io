import styled from "styled-components";
import { css } from "styled-components";

const cardStyle = css`
box-sizing: border-box;
background-color: var(--color-background-secondary);
box-shadow: var(--decoration-shadow-primary);
border-radius: var(--decoration-rounding-outer);
`;

const Card = styled.div<{
	padded?: boolean,
	margin?: boolean
}>`
${cardStyle}

${props => props.margin ? (`
	margin: var(--spacing-outer) auto;
`) : (``)}

${props => props.padded ? (`
	padding: var(--spacing-inner);
`) : (``)}
`;

export { Card, cardStyle };
