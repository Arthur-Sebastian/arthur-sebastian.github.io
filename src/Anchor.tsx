import styled from "styled-components";

const OffsetAnchor = styled.div`
display: block;
position: relative;
top: var(--offset-anchor);
`;

const Anchor = (props: {
	id: string
}) => {
	return (
		<OffsetAnchor id={props.id}/>
	);
};

export {
	Anchor
};
