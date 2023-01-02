import styled from 'styled-components';
import {Breakpoint, mediaQueryHover, mediaQuerySize} from './Responsive';

const ButtonComponent = styled.a<{filled?: boolean}>`
box-sizing: border-box;
font-weight: bold;
border-radius: 30px;
font-size: var(--size-text-tiny);
line-height: var(--size-text-tiny);

user-select: none;

${ props => props.filled ? (`
	background-color: var(--color-background-highlight);
	padding: 8px 17px;

	${mediaQueryHover} {
		transition-duration: var(--effect-duration);
		transition-property: background-color;

		&:hover {
			background-color: var(--color-theme-primary);
		}
	}
`) : (`
	padding: 6px 15px;
	border: var(--decoration-outline-normal);

	${mediaQueryHover} {
		transition-duration: var(--effect-duration);
		transition-property: color;

		&:hover {
			color: var(--color-theme-primary);
		}
	}
`) }
`;

const TextButton = (props: {
	filled?: boolean,
	href: string,
	children: any
}) => {
	return (
		<ButtonComponent
			href={props.href}
			children={props.children}
			filled={props.filled}
		/>
	);
};

const IconButton = styled.button<{
	iconSrc : string
}>`
--buttonSize: 30px;

width: var(--buttonSize);
height: var(--buttonSize);
border: none;
border-radius: var(--buttonSize);
background: center no-repeat url(${props => props.iconSrc});
background-color: white;
color: transparent;
padding: 0;

${mediaQuerySize(Breakpoint.tablet)} {
	--buttonSize: 50px;
}
`;

export {
	TextButton,
	IconButton,
};
