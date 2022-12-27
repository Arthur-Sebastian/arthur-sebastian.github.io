import styled from "styled-components";
import { Breakpoint, mediaQuerySize } from "./Responsive";

const ProfileContainer = styled.div`
display: flex;
gap: var(--spacing-inner);
text-align: center;
flex-flow: column nowrap;
align-items: center;
margin: var(--spacing-outer) auto;

${mediaQuerySize(Breakpoint.tablet)} {
	flex-flow: row nowrap;
	text-align: left;
	max-width: ${Breakpoint.tablet};
}
`;

const ProfileText = styled.article`
`;

const ProfileImage = styled.img`
width: 150px;
height: auto;
border-radius: 50%;
color: var(--color-theme-primary);

${mediaQuerySize(Breakpoint.tablet)} {
	width: 200px;
}
`;

const ProfileTitle = styled.h2`
color: var(--color-theme-primary);
margin-top: 0;
`;

const Profile = (props: {
	imageSrc: string,
	title: string,
	children: string
}) => {
	return (
		<ProfileContainer>
			<ProfileImage alt="profile image" src={props.imageSrc}/>	
			<ProfileText>
				<ProfileTitle children={props.title}/>
				<p children={props.children}/>
			</ProfileText>
		</ProfileContainer>
	);
}

export { Profile };
