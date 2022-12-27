const Breakpoint = {
	desktopWide: "1920px",
	desktop:     "1280px",
	tablet:      "900px",
	mobile:      "550px"
};

const mediaQuerySize = (breakpoint: string) => {
	return `@media only screen and (min-width: ${breakpoint})`;
};

const mediaQueryHover = "@media only screen and (hover: hover)";

const Size = {
	baseWidth: "1280px",
	maxWidth:  "1920px",
	maxHeight: "1080px",
};

export { Breakpoint, Size, mediaQuerySize, mediaQueryHover };
