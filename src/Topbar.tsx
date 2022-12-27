import styled from 'styled-components';

const TopbarContainer = styled.header`
	width: 100%;
	height: var(--size-navbar);
	text-align: center;
	background-color: var(--color-background-special);
	position: fixed;
	top: 0;
	z-index: 5;
`;

const TopbarNav = styled.nav`
	max-width: var(--size-width-base);
	height: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	margin: auto;
	padding: 0 1rem;
	overflow: hidden;
`;

const TopbarLogoLink = styled.a`
	margin: 1rem 0;
	margin-right: auto;
	height: 50%;
`;

const TopbarLogo = styled.img`
	height: 100%;
`;

const Topbar = (props: {
	logoSrc: string,
	logoHref: string,
	logoAlt: string,
	children?: any
}) => {
	return (
		<TopbarContainer>
			<TopbarNav>
				<TopbarLogoLink href={props.logoHref}>
					<TopbarLogo src={props.logoSrc} alt={props.logoAlt}/>
				</TopbarLogoLink>
				{props.children}
			</TopbarNav>
		</TopbarContainer>
		   );
};

export { Topbar };
