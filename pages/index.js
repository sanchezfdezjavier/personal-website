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
import Iframe from "react-iframe";

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
      <Iframe
        id="responsiveIframe"
        class="chatbot-container"
        src="https://www.stack-ai.com/embed/46bf5b6a-9b4d-48f6-8a13-cdfc4fe58520/11da0c81-afe2-4ccd-b498-807bbde8e7f1/653fefcfcc37c0093d55e6a9"
        styles={{
          position: "fixed",
          zIndex: "9999999999",
          overflow: "hidden",
          width: "23.5rem",
          height: "38rem",
          bottom: "0",
          right: "0",
          border: "none",
          borderRadius: "10px",
        }}
      />
    </Fragment>
  );
}
