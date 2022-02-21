// THIS IS THE FILE YOU ARE ONLY SUPPOSE TO EDIT

// Avatar
export const showAvatar = true;
import avatar from "./assets/avatar_high.jpg";
export const avatarSrc = avatar.src;

// Title
export const title = "Hi, I'm Javi";

// Subtitle
export const showSubtitle = true;
export const subtitle = "Engineer, Developer and Creator";

// Main button
export const showMainButton = true;
export const mainButtonText = "My Blog";

// About me
export const showAboutme = true;

// Navbar links
export const showNavbarLinks = true;
export const externalLinks = {
  github: "https://github.com/sanchezfdezjavier",
  resume:
    "https://docs.google.com/document/d/1yjZM0yORhAmvz0hcGOjrZ4MK1KgP68buQTprcvOTkzM/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sanchezfdezjavier/",
  blog: "https://blog.javisanchez.me/",
  twitter: "https://twitter.com/javisnchztech",
};

// Projects text
export const showProjects = true;
export const showProjectsText = false;
export const projectsText = "";

import crocos from "./assets/projects-covers/website-crocos-project.jpg";
import telecode from "./assets/projects-covers/telecode.png";

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

// Books
export const showBooks = true;
export const essentialReadsText =
  "Books that shaped the way I think and work every day.";

import atomic from "./assets/books-covers/atomic-habits-cover.jpeg";
import hooked from "./assets/books-covers/hooked-cover.jpg";
import principles from "./assets/books-covers/principles-cover.jpeg";
import leanStartup from "./assets/books-covers/the-lean-startup-cover.jpeg";
import zeroOne from "./assets/books-covers/zero-to-one-cover.jpeg";

export const bookCovers = [
  { title: "The Lean Startup", src: leanStartup.src },
  {
    title: "Atomic Habits",
    src: atomic.src,
  },
  { title: "Principles", src: principles.src },
  { title: "Zero to One", src: zeroOne.src },
  { title: "Hooked", src: hooked.src },
];

// Contact Me
export const contactMe = true;
export const contactMeText =
  "I'm always open to chat, helping out and open to new projects. Drop me a message 😄";
export const contactMeButtonText = "Send me an email";
export const contactEmail = "sanchezfdez.javier@gmail.com";

// Footer
export const showFooter = true;
export const footerText =
  "© Copyright 2022 Javier Sánchez Fernández — All rights reserved";
