import React from 'react';

import {GlobalStyle} from './Global'
import {Topbar} from './Topbar';
import {Hero} from './Hero';
import {TextButton} from './Button';
import {Wrapper} from './Wrapper';
import {Profile} from './Profile';
import {Mosaic, MosaicCard} from './Mosaic';
import {Title} from './Title';
import {Footer} from './Footer';
import {Carousel, CarouselCard} from './Carousel';
import {Banner} from './Banner';
import {Link} from './Link';

function App() {
	return (
		<>
		<GlobalStyle/>
		<Topbar logoSrc="/logo-main.svg" logoAlt="logo" logoHref="#top">
			<TextButton href="mailto:artursebastianmiller@gmail.com" children="CONTACT"/>
		</Topbar>
		<Wrapper fullscreen>
			<Hero
			videoSrc="/hero-video.mp4"
			arrowHref="#aboutme"
			title="Artur Sebastian Miller"
			text="Web developer & graphic designer.">
				<TextButton href="#portfolio" filled children="PORTFOLIO"/>
			</Hero>
		</Wrapper>
		<Wrapper id="aboutme">
			<main>
			<Profile title="About me" imageSrc="profile-pic.png">
			I am a student of Telecommunications at Warsaw University of Technology,
			with a passion for electronics and low-level programming.
			My interests are primarily focused around computer science. Latest
			developments are an exercise in creating a visible web presence.
			</Profile>
			</main>
		</Wrapper>
		<Wrapper fullscreen>
		<Banner title="Skills" tagline="See what I do well.">
			<Carousel>
				<CarouselCard imgSrc="icon_ts.svg" color="#3178c6">
				<strong>TypeScript</strong> with TSX extension for <strong>React</strong>.
				</CarouselCard>
				<CarouselCard imgSrc="icon_js.svg" color="#f7df1e">
				<strong>JavaScript</strong> scripting for <strong>Node</strong> applications.
				</CarouselCard>
				<CarouselCard imgSrc="icon_html.svg" color="#e44d26">
				Semantic <strong>HTML 5</strong> markup for <strong>accessibility</strong>.
				</CarouselCard>
				<CarouselCard imgSrc="icon_css.svg" color="#5282f1">
				<strong>Modern</strong>, responsive and BEM compliant <strong>CSS 3</strong>.
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
		</Banner>
		</Wrapper>
		<Wrapper id="portfolio" separate>
			<Title card title="Portfolio" tagline="Project highlights."/>
			<Mosaic>
				<MosaicCard title="Quikweb" imgSrc="quikweb-card.png" imgAlt="">
				Templating engine and framework based on JSON files. Written in
				JavaScript, deployed as a Node package. Supports component styling.
				<Link href="https://github.com/arthur-sebastian/quikweb">SOURCE CODE &gt;</Link>
				</MosaicCard>
				<MosaicCard title="Digital neon sign" imgSrc="neon-card.png" imgAlt="">
				3D printed design, inspired by glowing signage from the 80s. Built on custom
				microcontroller board, running high performance C++ code.
				<Link href="https://github.com/arthur-sebastian/led-neon-lounge">PROJECT REPO &gt;</Link>
				</MosaicCard>
				<MosaicCard title="Animated rings" imgSrc="rings-card.png" imgAlt="">
				Created in Blender, rendered using Radeon™ ProRender. Designed to serve
				as an abstract banner background for my website.
				</MosaicCard>
				<MosaicCard title="Personal website" imgSrc="page-card.png" imgAlt="">
				My digital resume. Written with semantic HTML in React from scratch. Serves as a
				hub for my projects, socials, and contact information.
				<Link href="https://github.com/arthur-sebastian/arthur-sebastian.github.io">SOURCE CODE &gt;</Link>
				</MosaicCard>
			</Mosaic>
		</Wrapper>
		<Footer>
			© Artur Sebastian Miller 2023
		</Footer>
		</>
	);
}

export default App;
