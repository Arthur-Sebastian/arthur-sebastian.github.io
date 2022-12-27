import React from "react";
import styled from "styled-components";
import { cardStyle } from "./Card";
import { Breakpoint, mediaQuerySize } from "./Responsive";
import { IconButton } from "./Button";

const CarouselContainer = styled.article`
--itemSize: 150px;
position: relative;
overflow: visible;

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
position: absolute;
z-index: 1;

top: calc(50% - 25px);

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
${cardStyle}

flex: 0 0 var(--itemSize);
padding: var(--spacing-inner);
height: var(--itemSize);
transition: height var(--effect-duration);

${props => props.highlight ? (`
	filter: none;
	height: calc(var(--itemSize) * 1.1);
`) : (`
	filter: grayscale(1);
`)}

${props => props.color ? (`
	background-color: ${props.color};
`) : (``)}
`;

const CarouselCardImage = styled.img`
height: 50px;
width: auto;

display: block;

${mediaQuerySize(Breakpoint.tablet)} {
	height: 80px;
}

${mediaQuerySize(Breakpoint.desktop)} {
	height: 100px;
}
`;

const CarouselCardText= styled.p<{
	color ?: string
}>`
font-size: var(--size-text-small);
margin-top: var(--spacing-inner);

& strong {
	color: ${props => props.color};
}
`;

interface CarouselCardInterface {
	color ?: string,
	imgSrc ?: string,
	children : any,
}

const CarouselCardComponent = (
	props: CarouselCardInterface,
	highlight?: boolean
) => {
	return (
		<CarouselCardContainer highlight={highlight}>
			{props.imgSrc && <CarouselCardImage src={props.imgSrc} alt=""/>}
			<CarouselCardText color={props.color} children={props.children}/>
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
			{ React.Children.map(props.children, (child, index) => {
				if (index === scrollValue) {
					return child;
				} else {
					return CarouselCardComponent(child.props, false);
				}
			}) }
			</CarouselScroll>
		</CarouselContainer>
	);
};

export {
	CarouselComponent as Carousel,
	CarouselCardComponent as CarouselCard
};
