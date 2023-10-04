import Head from "next/head";
import { Fragment } from "react";
import Avatar from "../components/Avatar";
import CallToAction from "../components/CallToAction";
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
  showCallToAction,
  showAboutme,
  showProjects,
  showBooks,
  showAvatar,
} from "../config";

export default function Home() {
  return (
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
        {showCallToAction && <CallToAction />}
        {showAboutme && <AboutMe />}
        {showProjects && <Projects />}
        {showBooks && <EssentialReads />}
        <ContactMe />
        <Footer />
      </div>
    </Fragment>
  );
}
