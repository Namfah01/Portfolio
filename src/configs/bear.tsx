import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "Ponymart",
        title: "PonyMart",
        file: "https://raw.githubusercontent.com/Namfah01/MiniProject/main/ponymart.md",
        icon: "i-heroicons-solid:sparkles",
        excerpt: "An Mini project to practice API integration ...",
        link: "https://mini-project-gilt-ten.vercel.app/"
      },
      {
        id: "Daisy-AI",
        title: "Dasiy-AI",
        file: "https://raw.githubusercontent.com/Namfah01/MiniProject/main/README.md",
        icon: "i-heroicons-solid:sparkles",
        excerpt: "An Mini project to practice API integration ...",
        link: "https://mini-project-gilt-ten.vercel.app/"
      },
      {
        id: "Note-App",
        title: "Note-App",
        file: "https://raw.githubusercontent.com/Namfah01/NoteApp/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "An Mini project to practice full-stack with MongDB database ...",
        link: "https://mini-project-gilt-ten.vercel.app/"
      },
      {
        id: "Shopping Cart",
        title: "Shopping Cart",
        file: "https://raw.githubusercontent.com/Namfah01/11-Namfah-JS/main/README.md",
        icon: "i-mdi:cart",
        excerpt: "An Mini project to practice javascript function ... ",
        link: "https://11-namfah-js.vercel.app"
      },
      {
        id: "React Assessment",
        title: "React Assessment",
        file: "https://raw.githubusercontent.com/Namfah01/11-Namfah-react/main/README.md",
        icon: "i-streamline:task-list-solid ",
        excerpt: "An Mini project to practice React function ...",
        link: "https://11-namfah-react.vercel.app/Home"
      },
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/Renovamen/playground-macos/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/Renovamen/playground-macos"
      }
    ]
  }
];

export default bear;
