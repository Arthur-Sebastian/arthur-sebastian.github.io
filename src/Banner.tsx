import styled from "styled-components";

const BannerContainer = styled.section`
height: 110vh;
min-height: var(--size-height-base);
max-height: var(--size-height-max);
display: flex;
flex-flow: column nowrap;
justify-content: center;

background-color: var(--color-background-special);
`;

const BannerHgroup = styled.hgroup`
text-align: center;
margin-bottom: var(--spacing-outer);
`;

const BannerTitle = styled.h2`
margin-top: 0;
color: var(--color-theme-primary);
`;

const BannerTagline = styled.p`
font-size: var(--size-text-large);
line-height: var(--size-text-large);
`;

const BannerHeading = (props: {
	title: string,
	tagline?: string
}) => {
	return (
		<BannerHgroup>
			<BannerTitle children={props.title}/>
			{props.tagline && <BannerTagline children={props.tagline}/>}
		</BannerHgroup>
	);
};

const BannerComponent = (props: {
	title: string,
	tagline?: string
	children?: any
}) => {
	return (
		<BannerContainer>
			<BannerHeading title={props.title} tagline={props.tagline}/>
			{props.children}
		</BannerContainer>
	);
};

export {
	BannerComponent as Banner
}
