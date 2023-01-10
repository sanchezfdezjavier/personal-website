/* -------------------------------------------------------------------------- */
/*                 THIS IS THE ONLY FILE YOU ARE SUPPOSED TO EDIT             */
/* -------------------------------------------------------------------------- */

/* ------------------------------ AVATAR ------------------------------ */
export const showAvatar = true;
import avatar from "./assets/avatar_high.jpg";
export const avatarSrc = avatar.src;
/* -------------------------------------------------------------------- */

/* ------------------------------ TITLE ------------------------------------- */
export const title = "Hi, I'm Javi";
/* -------------------------------------------------------------------------- */

/* ------------------------------ SUBTITLE ---------------------------------- */
export const showSubtitle = true;
export const subtitle = "Engineer, Developer and Creator";
/* -------------------------------------------------------------------------- */

/* ------------------------------ MAIN BUTTON ------------------------------- */
export const showMainButton = true;
export const mainButtonText = "My Blog";
/* -------------------------------------------------------------------------- */

/* ------------------------------ ABOUT ME ---------------------------------- */
export const showAboutme = true;
/* -------------------------------------------------------------------------- */

/* ------------------------------ NAVBAR LINKS ------------------------------ */
export const showNavbarLinks = true;
export const externalLinks = {
  github: "https://github.com/sanchezfdezjavier",
  resume:
    "https://docs.google.com/document/d/1yjZM0yORhAmvz0hcGOjrZ4MK1KgP68buQTprcvOTkzM/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sanchezfdezjavier/",
  blog: "https://blog.javisf.com/",
  twitter: "https://twitter.com/javisnchztech",
};
/* -------------------------------------------------------------------------- */

/* ------------------------------ PROJECTS ---------------------------------- */
export const showProjects = true;
export const showProjectsText = false;
export const projectsText = "";

import crocos from "./assets/projects-covers/website-crocos-project.jpg";
import telecode from "./assets/projects-covers/telecode.jpg";

export const projects = [
  {
    title: "NFT Collection",
    image: crocos,
    link: "https://thecrocoslocos.com/",
  },
  {
    title: "Hackathon",
    image: telecode,
    link: "https://telecode.etsit.upm.es/university/#/",
  },
];
/* -------------------------------------------------------------------------- */

/* ------------------------------ BOOKS ---------------------------------- */
export const showBooks = true;
export const essentialReadsText =
  "Books that shaped the way I think and work every day.";

import atomic from "./assets/books-covers/atomic-habits-cover.jpg";
import hooked from "./assets/books-covers/hooked-cover.jpg";
import principles from "./assets/books-covers/principles-cover.jpg";
import leanStartup from "./assets/books-covers/the-lean-startup-cover.jpg";
import zeroOne from "./assets/books-covers/zero-to-one-cover.jpg";
import friendsAndPeople from "./assets/books-covers/htwfandip.jpg";
import theLikeSwitch from "./assets/books-covers/thelikeswitch.jpg";
import deepWork from "./assets/books-covers/deepwork.jpg";

export const bookCovers = [
  {
    title: "Atomic Habits",
    src: atomic.src,
  },
  { title: "Deep Work", src: deepWork.src },
  {
    title: "How to Win Friends and Influence People",
    src: friendsAndPeople.src,
  },
  { title: "The Lean Startup", src: leanStartup.src },
  { title: "Principles", src: principles.src },
  { title: "Zero to One", src: zeroOne.src },
  { title: "The Like Switch", src: theLikeSwitch.src },
  { title: "Hooked", src: hooked.src },
];
/* -------------------------------------------------------------------------- */

/* ------------------------------ CONTACT ME ---------------------------------- */
export const contactMe = true;
export const contactMeText =
  "I'm always open to chat, helping out and open to new projects. Drop me a message 😄";
export const contactMeButtonText = "Email me";
export const contactEmail = "sanchezfdez.javier@gmail.com";
/* ---------------------------------------------------------------------------- */

/* ------------------------------ FOOTER ---------------------------------- */
export const showFooter = true;
export const footerText =
  "© Copyright 2022 Javier Sánchez Fernández — All rights reserved";
/* ------------------------------------------------------------------------ */
