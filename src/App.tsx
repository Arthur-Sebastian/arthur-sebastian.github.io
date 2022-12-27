import React from 'react';

import { GlobalStyle } from './Global'
import { Topbar } from './Topbar';
import { Hero } from './Hero';
import { TextButton } from './Button';
import { Wrapper } from './Wrapper';
import { Profile } from './Profile';
import { Mosaic, MosaicCard } from './Mosaic';
import { Title } from './Title';
import { Footer } from './Footer';
import { Carousel, CarouselCard } from './Carousel';

function App() {
	return (
		<>
		<GlobalStyle/>
		<Topbar logoSrc="/logo-main.svg" logoAlt="logo" logoHref="#top">
			<TextButton href="#contact" children="CONTACT"/>
		</Topbar>
		<Wrapper fullscreen>
			<Hero 
			videoSrc="/hero-video.mp4"
			arrowHref="#projects"
			title="Artur Sebastian Miller"
			text="Web developer & graphic designer.">
				<TextButton href="#projects" filled children="PORTFOLIO"/>
			</Hero>
		</Wrapper>
		<Wrapper>
			<main>
			<Profile title="About me" imageSrc="https://picsum.photos/300/300">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
			nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</Profile>
			</main>
		</Wrapper>
		<Wrapper fullscreen>
		<Title title="Skills" tagline="See what I do well."/>
		<Carousel>
			<CarouselCard imgSrc="icon_ts.svg" color="#3178c6">
			<strong>TypeScript</strong> with TSX extension for <strong>React</strong>.
			</CarouselCard>
			<CarouselCard imgSrc="icon_js.svg" color="#f7df1e">
			<strong>JavaScript</strong> scripting for <strong>Node</strong> applications.
			</CarouselCard>
			<CarouselCard imgSrc="icon_html.svg" color="#e44d26">
			Semantic <strong>HTML</strong> markup for <strong>accessibility</strong>.
			</CarouselCard>
			<CarouselCard imgSrc="icon_css.svg" color="#2965f1">
			<strong>Modern</strong>, BEM compliant <strong>CSS</strong>, also with styled-components.
			</CarouselCard>
			<CarouselCard imgSrc="icon_inkscape.svg" color="#808080">
			Vector <strong>graphic design</strong> using Inkscape.
			</CarouselCard>
			<CarouselCard imgSrc="icon_blender.svg" color="#e87d0d">
			3D <strong>graphic design</strong> and rendering in <strong>Blender</strong>.
			</CarouselCard>
			<CarouselCard imgSrc="icon_cpp.svg" color="#659ad2">
			<strong>Object oriented</strong> programming in <strong>C++</strong>.
			</CarouselCard>
			<CarouselCard imgSrc="icon_bash.svg" color="#4eaa25">
			Advanced <strong>scripting</strong> in <strong>BASH</strong> shell.
			</CarouselCard>
		</Carousel>
		</Wrapper>
		<Wrapper>
			<Title card title="Portfolio" tagline="Project highlights."/>
			<Mosaic leftColumn={
				<>
				<MosaicCard title="Quikweb" imgSrc="https://picsum.photos/300/300" imgAlt="">
				Templating engine and framework based on JSON files. Written in
				JavaScript, deployed as a Node package. Supports component styling.
				</MosaicCard>
				<MosaicCard title="Digital neon sign" imgSrc="https://picsum.photos/300/150" imgAlt="">
				3D printed design, inspired by glowing signage from the 80s. Built on custom
				microcontroller board, running high performance C++ code.
				</MosaicCard>
				</>
			} rightColumn={
				<>
				<MosaicCard title="Animated rings" imgSrc="https://picsum.photos/300/150" imgAlt="">
				Created in Blender, rendered using Radeon™ ProRender. Designed to serve
				as an abstract banner background for my website.
				</MosaicCard>
				<MosaicCard title="Personal website" imgSrc="https://picsum.photos/300/300" imgAlt="">
				My digital resume. Written with semantic HTML in React from scratch. Serves as a
				hub for my projects, socials, and contact information.
				</MosaicCard>
				</>
			}/>
			<Footer>
				© Artur Sebastian Miller 2023
			</Footer>
		</Wrapper>
		</>
	);
}

export default App;
