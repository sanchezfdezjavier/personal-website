import Head from "next/head";

import { Fragment } from "react";

import { useWindowScroll } from "react-use";

import Spline from "@splinetool/react-spline";

import Avatar from "../components/Avatar";
import MainButton from "../components/MainButton";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import EssentialReads from "../components/EssentialReads";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BurgerMenu from "../components/BurgerMenu";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

import {
  title,
  showMainButton,
  showAboutme,
  showProjects,
  showBooks,
  showAvatar,
} from "../config";

export default function Home() {
  const { x, y } = useWindowScroll();
  return (
    // TODO: SEO best practices
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Navbar />
        <BurgerMenu />
        {showAvatar && <Avatar />}
        <Hero />
        <Spline
          scene="https://prod.spline.design/ZEPBj2MJ9HXMevF6/scene.splinecode"
          className="absolute right-[-55rem] top-[20rem] z-[-1]"
        />
        {showMainButton && <MainButton />}
        {showAboutme && <AboutMe />}
        {showProjects && <Projects />}
        {showBooks && <EssentialReads />}
        <ContactMe />
        <Footer />
      </div>
    </Fragment>
  );
}
