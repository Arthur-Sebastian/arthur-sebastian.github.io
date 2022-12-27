import { createGlobalStyle } from 'styled-components';

import { Breakpoint, Size, mediaQuerySize } from './Responsive';

const GlobalStyle = createGlobalStyle`
:root {
	--size-width-base: ${Size.baseWidth};
	--size-width-max:  ${Size.maxWidth};
	--size-height-max: ${Size.maxHeight};
	--size-navbar: 70px;

	--size-text-base: 14px;
	--size-text-extra: 2rem;
	--size-text-large: 1.5rem;
	--size-text-medium: 1.2rem;
	--size-text-small: 1.1rem;
	--size-text-tiny: 13px;

	--spacing-inner: 10px;
	--spacing-inner-half: 5px;
	--spacing-outer: 10px;

	--color-background-primary: #131316;
	--color-background-secondary: #26262c;
	--color-background-special: black;
	--color-background-highlight: #4b4c52;

	--color-theme-primary: #59a5d8;
	--color-theme-secondary: #386fa4;
	--color-text-primary: white;
	--color-text-secondary: black;

	--effect-duration: 0.25s;

	--decoration-shadow-primary: 4px 4px 7px black;
	--decoration-shadow-secondary: 0 4px 7px black;
	--decoration-rounding-outer: 7px;
	--decoration-rounding-inner: 3px;
	--decoration-outline-thin: 1px solid;
	--decoration-outline-normal: 2px solid;
	--decoration-outline-thick: 4px solid;
	
	--anchorOffset: -90px;
}

html {
	scroll-behavior: smooth;

	font-family: Rubik;
	background-color: var(--color-background-primary);
	font-size: var(--size-text-base);
}

body {
	margin: 0;
	padding-top: var(--size-navbar);
	color: var(--color-text-primary);
}

a {
	display: inline-block;
	text-decoration: none;
	color: inherit;
}

h1, h2, h3 {
	margin: var(--spacing-inner) 0;
	font-family: Catamaran;
}

h1 {
	font-size: var(--size-text-extra);
	line-height: var(--size-text-extra);
	font-weight: 900;
}

h2 {
	font-size: var(--size-text-medium);
	line-height: var(--size-text-medium);
}

h3 {
	font-size: var(--size-text-small);
	line-height: var(--size-text-small);
}

p {
	margin: 0;
}

${mediaQuerySize(Breakpoint.mobile)} {
	:root {
		--size-text-base: 16px;
	}
}

${mediaQuerySize(Breakpoint.tablet)} {
	:root {
		--spacing-inner-half: 7px;
		--spacing-inner: 15px;
		--spacing-outer: 20px;
	}
}

${mediaQuerySize(Breakpoint.desktop)} {
	:root {
		--decoration-rounding-outer: 14px;
		--decoration-rounding-inner: 7px;

		--size-text-base: 18px;
	}
}
`;

export { GlobalStyle };
