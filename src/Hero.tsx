import styled from 'styled-components';
import { mediaQueryHover } from './Responsive';

const HeroContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
position: relative;

min-height: var(--size-height-base);
height: calc(100vh - var(--size-navbar));
max-height: var(--size-height-max);

background-color: var(--color-background-special);
box-shadow: var(--decoration-shadow-secondary);
`;

const HeroVideo = styled.video`
position: absolute;
z-index: 0;
height: 100%;
width: 100%;
object-fit: cover;
`;

const HeroContent = styled.div`
z-index: 1;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
padding: var(--spacing-inner);
text-shadow: var(--decoration-shadow-secondary);
text-align: center;
`;

const HeroHeading = styled.h1`
margin: 0;
`;

const HeroSubheading = styled.h2`
margin: 0;
margin-bottom: var(--spacing-inner);
margin-top: var(--spacing-inner-half);
font-weight: normal;
`;

const HeroArrow = styled.a`
position: absolute;
bottom: var(--spacing-inner);
width: 40px;
height: 40px;

opacity: 50%;
background-image: url(arrow-down.svg);
background-repeat: no-repeat;
background-size: 100%;
background-position: center;

${mediaQueryHover} {
	transition-property: transform;
	transition-duration: var(--effect-duration);

	&:hover {
		opacity: 100%;
		transform: scale(1.2);
	}
}
`;

const Hero = (props: {
	title: string,
	text: string,
	arrowHref: string,
	videoSrc: string,
	children?: any
}) => {
	return (
		<HeroContainer>
			<HeroVideo src={props.videoSrc} autoPlay muted loop/>
			<HeroContent>
				<HeroHeading children={props.title}/>
				<HeroSubheading children={props.text}/>
				{props.children}
			</HeroContent>
			<HeroArrow href={props.arrowHref}/>
		</HeroContainer>
		   );
};

export { Hero };
