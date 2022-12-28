import React from "react";
import styled from "styled-components";
import { Breakpoint, mediaQuerySize, mediaQueryHover } from "./Responsive";
import { IconButton } from "./Button";

const CarouselContainer = styled.div`
--itemSize: 150px;
position: relative;

${mediaQuerySize(Breakpoint.tablet)} {
	--itemSize: 200px;
}

${mediaQuerySize(Breakpoint.desktop)} {
	--itemSize: 300px;
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
list-style-type: none;
padding: 0 var(--spacing-inner);
margin: var(--spacing-outer) 0;
scroll-snap-type: x mandatory;

display: flex;
align-items: center;
flex-flow: row nowrap;
gap: var(--spacing-outer);
overflow-x: scroll;
overflow-y: visible;
`;

const CarouselCardContainer = styled.li<{
	highlight ?: boolean
}>`

flex: 0 0 var(--itemSize);
padding: var(--spacing-inner);
transition: height var(--effect-duration);
scroll-snap-align: center;

user-select: none;

${props => props.color ? (`
	background-color: ${props.color};
`) : (``)}
`;

const CarouselCardImage = styled.img<{
	highlight?: boolean
}>`
height: 50px;
width: auto;

display: block;

${mediaQuerySize(Breakpoint.tablet)} {
	height: 80px;
}

${mediaQuerySize(Breakpoint.desktop)} {
	height: 100px;
}

${props => props.highlight ? (`
	filter: none;
`) : (`
	filter: grayscale(1);
`)}
`;

const CarouselCardText= styled.p<{
	color ?: string
	highlight?: boolean
}>`
font-size: var(--size-text-small);
margin-top: var(--spacing-inner);

& strong {
	color: ${props => props.color};
}

${props => props.highlight ? (`
	filter: none;
`) : (`
	filter: grayscale(1);
`)}
`;

interface CarouselCardInterface {
	color?: string,
	imgSrc?: string,
	children: any,
}

const CarouselCardComponent = (
	props: CarouselCardInterface,
	highlight?: boolean
) => {
	return (
		<CarouselCardContainer highlight={highlight}>
			{props.imgSrc && <CarouselCardImage highlight={highlight} src={props.imgSrc} alt=""/>}
			<CarouselCardText color={props.color} highlight={highlight} children={props.children}/>
		</CarouselCardContainer>
	);
};

const CarouselComponent = (props:{
	children: React.ReactElement<CarouselCardInterface>[]
}) => {
	let childCount = React.Children.count(props.children) - 1;
	const [scrollValue, setScrollValue] = React.useState(0);

	return (
		<CarouselContainer>
		<CarouselButton iconSrc="arrow-left.svg" children="left" onClick={() => {
			scrollValue === 0 ? setScrollValue(childCount) : setScrollValue(scrollValue - 1);
		}}/>
		<CarouselButton iconSrc="arrow-right.svg" right children="right" onClick={() => {
			scrollValue === childCount ? setScrollValue(0) : setScrollValue(scrollValue + 1);
		}}/>
			<CarouselScroll>
			{props.children}
			</CarouselScroll>
		</CarouselContainer>
	);
};

export {
	CarouselComponent as Carousel,
	CarouselCardComponent as CarouselCard
};
