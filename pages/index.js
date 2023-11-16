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
import Stack from "react-stackai";
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
      <Stack project="https://www.stack-ai.com/embed/46bf5b6a-9b4d-48f6-8a13-cdfc4fe58520/11da0c81-afe2-4ccd-b498-807bbde8e7f1/653fefcfcc37c0093d55e6a9" />
    </Fragment>
  );
}
