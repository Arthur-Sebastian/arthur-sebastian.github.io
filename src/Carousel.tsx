import React from "react";
import {Transition} from "react-transition-group";
import styled from "styled-components";
import {Breakpoint, mediaQuerySize, mediaQueryHover} from "./Responsive";
import {IconButton} from "./Button";

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
display: none;
position: absolute;
z-index: 1;
top: calc(50% - 25px);

${mediaQueryHover} {
	display: block;
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

const CarouselScroll = styled.ol`
--scrollPadding: calc(50% - var(--itemSize) / 2);

list-style-type: none;
padding: 0 var(--scrollPadding);
margin: var(--spacing-outer) 0;
scroll-snap-type: x proximity;
overflow-x: scroll;
display: flex;
flex-flow: row nowrap;
gap: var(--spacing-outer);

scrollbar-width: none;
`;

const CarouselCardContainer = styled.li<{
	selected?: boolean
}>`
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
	return (
		<CarouselContainer>
		<CarouselButton iconSrc="arrow-left.svg" children="left" onClick={() => {
		}}/>
		<CarouselButton iconSrc="arrow-right.svg" right children="right" onClick={() => {
		}}/>
			<CarouselScroll children={props.children}/>
		</CarouselContainer>
	);
};

export {
	CarouselComponent as Carousel,
	CarouselCardComponent as CarouselCard
};
