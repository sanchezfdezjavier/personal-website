/* -------------------------------------------------------------------------- */
/*                 THIS IS THE ONLY FILE YOU ARE SUPPOSED TO EDIT             */
/* -------------------------------------------------------------------------- */

/* ------------------------------ AVATAR ------------------------------ */
export const showAvatar = true;
import avatar from "./public/me-san-jorge.jpg";
export const avatarSrc = avatar.src;
/* -------------------------------------------------------------------- */

/* ------------------------------ TITLE ------------------------------------- */
export const title = "Hi, I'm Javi";
/* -------------------------------------------------------------------------- */

/* ------------------------------ SUBTITLE ---------------------------------- */
export const showSubtitle = true;
export const subtitle = "Engineer Building with Software";
/* -------------------------------------------------------------------------- */

/* ------------------------------ CALL TO ACTION ------------------------------- */
export const showCallToAction = false;
export const mainButtonText = "Stack AI";
export const secondaryButtonText = "My Blog";
/* -------------------------------------------------------------------------- */

/* ------------------------------ NAVBAR -------------------------------------- */
export const showResumeButton = false;

/* ------------------------------ ABOUT ME ---------------------------------- */
export const showAboutme = true;
/* -------------------------------------------------------------------------- */

/* ------------------------------ NAVBAR LINKS ------------------------------ */
export const showNavbarLinks = true;
export const externalLinks = {
  github: "https://github.com/sanchezfdezjavier",
  linkedin: "https://www.linkedin.com/in/sanchezfdezjavier/",
  blog: "https://blog.javisf.com/",
  twitter: "https://twitter.com/jvrsanch",
  stackai: "https://stack-ai.com/",
};
/* -------------------------------------------------------------------------- */

/* ------------------------------ PROJECTS ---------------------------------- */
export const showProjects = true;
export const showProjectsText = false;
export const projectsText = "";

import telecode from "./assets/projects-covers/telecode.jpg";
import magma from "./assets/projects-covers/magma.png";
import lidar from "./assets/projects-covers/lidar.png";
import stack from "./assets/projects-covers/stack.png";

export const projects = [
  {
    title: "Next gen no-code AI applications",
    image: stack,
    link: "https://stack-ai.com/",
  },
  {
    title: "4G Core Open Source Network",
    image: magma,
    link: "https://github.com/canonical/charmed-magma/",
  },
  {
    title: "Self-driving car LiDAR cone detection algorithm",
    image: lidar,
    link: "https://github.com/sanchezfdezjavier/Self-driving-LiDAR-cone-detection",
  },
  {
    title: "Telecode Hackathon",
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
import howto from "./assets/books-covers/howto.jpg";
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
    src: howto.src,
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
  "I'm always open to chat, helping out and open to new projects. Drop me a message!";
export const contactMeButtonText = "Email me";
export const contactEmail = "sanchezfdez.javier@gmail.com";
/* ---------------------------------------------------------------------------- */

/* ------------------------------ FOOTER ---------------------------------- */
export const showFooter = true;
export const footerText =
  "© Copyright 2023 Javier Sánchez Fernández — All rights reserved";
/* ------------------------------------------------------------------------ */
