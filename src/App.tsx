import { GlobalStyle } from "./Global";
import { Topbar } from "./Topbar";
import { Hero } from "./Hero";
import { TextButton } from "./Button";
import { Wrapper } from "./Wrapper";
import { Profile } from "./Profile";
import { Mosaic, MosaicCard } from "./Mosaic";
import { Title } from "./Title";
import { Footer } from "./Footer";
import { Carousel, CarouselCard } from "./Carousel";
import { Banner } from "./Banner";
import { Link } from "./Link";

function App() {
  return (
    <>
      <GlobalStyle />
      <Topbar logoSrc="/logo-main.svg" logoAlt="logo" logoHref="#top">
        <TextButton
          href="https://github.com/arthur-sebastian"
          children="GITHUB"
        />
      </Topbar>
      <Wrapper fullscreen>
        <Hero
          videoSrc="/hero-video.mp4"
          arrowHref="#aboutme"
          title="Artur Sebastian Miller"
          text="Software engineer. Full stack developer."
        >
          <TextButton href="#portfolio" filled children="PORTFOLIO" />
        </Hero>
      </Wrapper>
      <Wrapper id="aboutme">
        <main>
          <Profile title="About me" imageSrc="profile-pic.png">
            Currently a professional full-stack Software Engineer at mBank group
            in mServices. My spare time is spent as a full stack developer at
            Prologika. Soon to defend my Telecommunications B.Sc. thesis at
            Warsaw University of Technology. Feel free to browse my portfolio!
          </Profile>
        </main>
      </Wrapper>
      <Wrapper fullscreen>
        <Banner title="Skills" tagline="See what I do well.">
          <Carousel>
            <CarouselCard imgSrc="icon_ts.svg" color="#3178c6">
              <strong>TypeScript</strong> with TSX extension for{" "}
              <strong>React</strong>.
            </CarouselCard>
            <CarouselCard imgSrc="icon_js.svg" color="#f7df1e">
              <strong>JavaScript</strong> scripting for <strong>Node</strong>{" "}
              applications.
            </CarouselCard>
            <CarouselCard imgSrc="icon_cpp.svg" color="#659ad2">
              <strong>Object oriented</strong> programming in{" "}
              <strong>C++</strong>.
            </CarouselCard>
            <CarouselCard imgSrc="icon_bash.svg" color="#4eaa25">
              Advanced <strong>scripting</strong> in <strong>BASH</strong>{" "}
              shell.
            </CarouselCard>
            <CarouselCard imgSrc="icon_html.svg" color="#e44d26">
              Semantic <strong>HTML 5</strong> markup for{" "}
              <strong>accessibility</strong>.
            </CarouselCard>
            <CarouselCard imgSrc="icon_css.svg" color="#5282f1">
              Modern, <strong>responsive </strong>and BEM compliant{" "}
              <strong>CSS 3</strong>.
            </CarouselCard>
            <CarouselCard imgSrc="icon_inkscape.svg" color="#808080">
              Vector <strong>graphic design</strong> using Inkscape.
            </CarouselCard>
            <CarouselCard imgSrc="icon_blender.svg" color="#e87d0d">
              3D <strong>graphic design</strong> and rendering in{" "}
              <strong>Blender</strong>.
            </CarouselCard>
          </Carousel>
        </Banner>
      </Wrapper>
      <Wrapper id="portfolio" separate>
        <Title card title="Portfolio" tagline="Project highlights." />
        <Mosaic>
          <MosaicCard title="na5 store" imgSrc="na5-card.png" imgAlt="">
            An eCommerce store built with Next.js. Features user accounts,
            shopping carts and an innovative store layout. GraphQL backend.
            Developed in collaboration with a graphic designer.
            <Link href="https://na5.edu.pl">VISIT &gt;</Link>
          </MosaicCard>
          <MosaicCard
            title="Personal portfolio"
            imgSrc="amiller-card.png"
            imgAlt=""
          >
            A personal portfolio to show off my work. Made in React, with no
            frameworks. The main banner features an abstract animation rendering
            made using Blender with Radeon™ ProRender. Hope you enjoy!
            <Link href="#top">BACK TO TOP &gt;</Link>
          </MosaicCard>
          <MosaicCard
            title="Design portfolio"
            imgSrc="jmalacho-card.png"
            imgAlt=""
          >
            One of my favourite for-fun projects. A technical implementation of
            a dream portfolio design for a friend. Features a sunset scroll
            parallax effect. A fruitful collaborative effort.
            <Link href="https://jmalachowska.github.io">VISIT &gt;</Link>
          </MosaicCard>
          <MosaicCard title="NBK Cosmetics" imgSrc="nbk-card.png" imgAlt="">
            A full overhaul project. The client requested a fresh, new redesign
            of the previous version. The work also included made-to-order vector
            graphics. Built in PHP with a custom Wordpress theme.
            <Link href="https://nbkcosmetics.com">VISIT &gt;</Link>
          </MosaicCard>
        </Mosaic>
      </Wrapper>
      <Footer>© Artur Sebastian Miller 2024</Footer>
    </>
  );
}

export default App;
