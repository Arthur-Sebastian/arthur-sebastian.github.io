import React from "react";
import styled from "styled-components";
import {Breakpoint, mediaQuerySize, mediaQueryHover} from "./Responsive";
import {IconButton} from "./Button";
import {useIsVisible} from "./Hooks";

const CarouselContainer = styled.div`
--itemSize: 150px;
--iconSize: 50px;
position: relative;

${mediaQuerySize(Breakpoint.tablet)} {
	--itemSize: 200px;
	--iconSize: 80px;
}

${mediaQuerySize(Breakpoint.desktop)} {
	--itemSize: 300px;
	--iconSize: 100px;
}
`;

const CarouselButton = styled(IconButton)<{
	right ?: boolean
}>`
--middleOffset: calc(50% - var(--buttonSize) / 2);
position: absolute;
z-index: 1;
top: var(--middleOffset);
opacity: 50%;

${mediaQueryHover} {
	transition: opacity var(--effect-duration);
	opacity:30%;

	&:hover {
		opacity: 100%;
	}
}

${props => props.right ? (`
	right: var(--spacing-inner);
`) : (`
	left: var(--spacing-inner);
`)}
`;

const CarouselScroll = styled.ol<{
	visible: boolean
}>`
--scrollPadding: calc(50% - var(--itemSize) / 2);

list-style-type: none;
transition-property: transform, opacity;
transition-duration: var(--effect-duration-long);
margin: var(--spacing-outer) 0;
padding: 0 var(--scrollPadding);
scroll-snap-type: x mandatory;
overflow-x: scroll;
display: flex;
flex-flow: row nowrap;
gap: var(--spacing-outer);

scrollbar-width: none;

${props => !props.visible && `
	transform: translate(0, 20vh);
	opacity: 0%;
`}
`;

const CarouselCardContainer = styled.li<{
	selected?: boolean
}>`
box-sizing: border-box;
border: var(--decoration-outline-normal) #2a2a2a;
border-left: none;
border-top: none;
border-radius: var(--decoration-rounding-outer);

flex: 0 0 var(--itemSize);
padding: var(--spacing-inner);
scroll-snap-align: center;

text-align: center;
user-select: none;

${props => props.color && `
	background-color: ${props.color};
`}
`;

const CarouselCardImage = styled.img`
height: var(--iconSize);
width: auto;
margin: 0 auto;
display: block;
`;

const CarouselCardText= styled.p<{
	color?: string
}>`
font-size: var(--size-text-small);
margin-top: var(--spacing-inner);

& strong {
	color: ${props => props.color};
	font-weight: normal;
}
`;

interface CarouselCardInterface {
	color?: string,
	imgSrc?: string,
	children: any
}

const CarouselCardComponent = (
	props: CarouselCardInterface
) => {

	return (
		<CarouselCardContainer>
			{props.imgSrc && <CarouselCardImage src={props.imgSrc} alt=""/>}
			<CarouselCardText color={props.color} children={props.children}/>
		</CarouselCardContainer>
	);
};

const CarouselComponent = (props:{
	children: React.ReactElement<CarouselCardInterface>[]
}) => {
	const scrollRef = React.createRef<HTMLOListElement>();
	const isVisible = useIsVisible(scrollRef);

	return (
		<CarouselContainer>
		<CarouselButton iconSrc="arrow-left.svg" children="scroll left" onClick={() => {
			scrollRef.current?.scrollBy({top: 0, left: -100, behavior: "smooth"});
		}}/>
		<CarouselButton iconSrc="arrow-right.svg" right children="scroll right" onClick={() => {
			scrollRef.current?.scrollBy({top: 0, left: 100, behavior: "smooth"});
		}}/>
		<CarouselScroll ref={scrollRef} visible={isVisible} children={props.children}/>
		</CarouselContainer>
	);
};

export {
	CarouselComponent as Carousel,
	CarouselCardComponent as CarouselCard
};
