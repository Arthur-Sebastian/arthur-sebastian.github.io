import styled from "styled-components";
import {cardStyle} from "./Card";
import {Breakpoint, mediaQuerySize} from "./Responsive";

const MosaicContainer = styled.div`
display: flex;
flex-flow: column-reverse nowrap;
gap: var(--spacing-outer);
margin: var(--spacing-outer) 0;

${mediaQuerySize(Breakpoint.mobile)} {
	flex-direction: row;
}
`;


const MosaicColumn = styled.div`
display: flex;
flex: 1 0;
flex-flow: column nowrap;
gap: var(--spacing-outer);
`;

const MosaicCard = styled.article`
${cardStyle}

flex: 1 1;
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
padding: var(--spacing-inner);
`;

const MosaicCardImage = styled.img`
width: 100%;
margin: 0 auto;

border-radius: var(--decoration-rounding-inner);
`;

interface MosaicCardInterface {
	title: string,
	imgSrc: string,
	imgAlt: string,
	children: any
}

const MosaicCardComponent = (props: MosaicCardInterface) => {
	return (
		<MosaicCard>
			<MosaicCardImage alt={props.imgAlt} src={props.imgSrc}/>
			<h3 children={props.title}/>
			<p children={props.children}/>
		</MosaicCard>
	);
};

const MosaicComponent = (props: {
	children: React.ReactElement<MosaicCardInterface>[]
}) => {

	let middle = Math.ceil(props.children.length / 2);

	return (
		<MosaicContainer>
			<MosaicColumn children={props.children.slice(0, middle)}/>
			<MosaicColumn children={props.children.slice(-middle)}/>
		</MosaicContainer>
	);
};

export {
	MosaicComponent as Mosaic,
	MosaicCardComponent as MosaicCard
};
