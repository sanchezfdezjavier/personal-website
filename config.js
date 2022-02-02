// THIS IS THE FILE YOU ARE ONLY SUPPOSE TO EDIT

// Title
export const title = "Hi, I'm Javi";
// Subtitle
export const subtitle = "Engineer, Developer and Creator";

// Main button
export const mainButtonText = "My Blog";

// Navbar links
export const externalLinks = {
  github: "https://github.com/sanchezfdezjavier",
  resume:
    "https://docs.google.com/document/d/1yjZM0yORhAmvz0hcGOjrZ4MK1KgP68buQTprcvOTkzM/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sanchezfdezjavier/",
  blog: "https://blog.javisanchez.me/",
  twitter: "https://twitter.com/javisnchztech",
};

// Projects text
export const projectsText =
  "Et sunt qui labore enim eu enim laboris minim dolor. Occaecat enim nisi \
incididunt cupidatat. Deserunt et laboris Lorem enim occaecat sint velit \
deserunt proident in id deserunt reprehenderit.";

// Book covers
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
