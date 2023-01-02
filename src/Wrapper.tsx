import styled from 'styled-components';

const Wrapper = styled.section<{
	fullscreen?: boolean,
	separate?: boolean
}>`
box-sizing: margin-box;
${props => props.separate ? (`
	margin: var(--spacing-section) auto;
`) : (`
	margin: 0 auto;
`)}

${props => props.fullscreen ? (`
	padding: 0;
	max-width: var(--size-width-max);
	height: calc(100vh - var(--size-navbar));
	max-height: var(--size-height-max);
	min-height: var(--size-height-base);
`) : (`
	padding: 0 var(--spacing-outer);
	max-width: var(--size-width-base);
`)}
`;

const WrapperComponent = (props: {
	fullscreen?: boolean,
	separate?: boolean,
	id?: string,
	children: any
}) => {
	return (
		<Wrapper id={props.id} separate={props.separate} fullscreen={props.fullscreen} children={props.children}/>
	);
};

export { WrapperComponent as Wrapper };
