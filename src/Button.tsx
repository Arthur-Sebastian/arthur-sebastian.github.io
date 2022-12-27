import styled from 'styled-components';
import {mediaQueryHover} from './Responsive';

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

		@media only screen and (hover: hover) {
			transition-duration: var(--effect-duration);
			transition-property: background-color;

			&:hover {
				background-color: var(--color-theme-primary);
			}
		}
	`) : (`
		padding: 6px 15px;
		border: var(--decoration-outline-normal);

		@media only screen and (hover: hover) {
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
width: 50px;
height: 50px;
border: none;
border-radius: 30px;
background: center no-repeat url(${props => props.iconSrc});
background-color: white;
opacity: 60%;
color: transparent;
padding: 0;

${mediaQueryHover} {
	transition: opacity var(--effect-duration);
	
	&:hover {
		opacity: 100%;
	}
}

`;

export {
	TextButton,
	IconButton,
};
