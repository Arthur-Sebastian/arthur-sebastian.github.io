import styled from 'styled-components';

const HeroContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
position: relative;

height: 100%;

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

const HeroContent = styled.header`
z-index: 1;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
padding: var(--spacing-inner);
text-shadow: var(--decoration-shadow-secondary);
text-align: center;
`;

const HeroTitle = styled.h1`
margin: 0;
`;

const HeroTagline = styled.p`
margin-bottom: var(--spacing-inner);
margin-top: var(--spacing-inner-half);
`;

const HeroArrowMarker = styled.div`
@keyframes bounce {
0% { transform: translate(0, -20px); }
100% { transform: translate(0, 0); }
}

position: absolute;
bottom: var(--spacing-inner);

width: 40px;
height: 40px;

opacity: 50%;
background-image: url(arrow-down.svg);
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
animation-name: bounce;
animation-duration: 1s;
animation-iteration-count: infinite;
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
				<hgroup>
					<HeroTitle children={props.title}/>
					<HeroTagline children={props.text}/>
				</hgroup>
				{props.children}
			</HeroContent>
			<HeroArrowMarker/>
		</HeroContainer>
		   );
};

export { Hero };
