import React from "react";
import styled from "styled-components";
import {useIsVisible} from "./Hooks";
import { Breakpoint, mediaQuerySize } from "./Responsive";

const ProfileContainer = styled.article<{
	visible: boolean
}>`
box-sizing: content-box;
height: 100%;
display: flex;
gap: var(--spacing-inner);
text-align: center;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
margin: var(--spacing-section) auto;
transition-property: transform, opacity;
transition-duration: var(--effect-duration-long);

${mediaQuerySize(Breakpoint.tablet)} {
	flex-flow: row nowrap;
	text-align: left;
	max-width: ${Breakpoint.tablet};
}

${props => !props.visible && `
	transform: translate(0, 10vh);
	opacity: 0%;
`}
`;

const ProfileImage = styled.img`
width: 150px;
height: auto;
border-radius: 50%;
border: var(--decoration-outline-thick);
color: var(--color-theme-secondary);

${mediaQuerySize(Breakpoint.tablet)} {
	width: 250px;
}
`;

const ProfileTitle = styled.h2`
color: var(--color-theme-secondary);
margin-top: 0;
`;

const Profile = (props: {
	imageSrc: string,
	title: string,
	children: string
}) => {
	const elementRef = React.createRef<HTMLElement>();
	const isVisible = useIsVisible(elementRef);

	return (
		<ProfileContainer ref={elementRef} visible={isVisible}>
			<ProfileImage alt="profile image" src={props.imageSrc}/>	
			<div>
				<ProfileTitle children={props.title}/>
				<p children={props.children}/>
			</div>
		</ProfileContainer>
	);
}

export { Profile };
