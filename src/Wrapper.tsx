import styled from 'styled-components';

const Wrapper = styled.section<{fullscreen?: boolean}>`
	margin: 0 auto;
	${props => props.fullscreen ? (`
		padding: 0;
		max-width: var(--size-width-max);
	`) : (`
		padding: 0 var(--spacing-outer);
		max-width: var(--size-width-base);
	`)}
`;

const WrapperComponent = (props: {
	fullscreen?: boolean
	children: any
}) => {
	return (
		<Wrapper fullscreen={props.fullscreen} children={props.children}/>
	);
};

export { WrapperComponent as Wrapper };
