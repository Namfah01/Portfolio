import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-resume",
        title: "Resume",
        img: "img/sites/myresume.svg",
        link: "https://docs.google.com/document/d/10bHOFuAT19jlH1qZwHfJMp197MaiSekPjmlsrMx2LT8/edit",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Namfah01"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "http://linkedin.com/in/kanokwan-manachamni"
      },
      {
        id: "my-instagram",
        title: "instagram",
        img: "img/sites/instagram.png",
        link: "https://www.instagram.com/"
      },
      {
        id: "my-twitter",
        title: "X",
        img: "img/sites/x.svg",
        link: "https://x.com/?lang=th"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "manachamni.kanokwan@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "slack",
        title: "Slack",
        img: "img/sites/slack.svg",
        link: "https://slack.com/"
      },
      {
        id: "Trello",
        title: "Trello",
        img: "img/sites/trello.svg",
        link: "https://trello.com/u/kanokwan_manachamni/boards",
        inner: true
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "youtube",
        title: "Youtube",
        img: "img/sites/youtube.svg",
        link: "https://www.youtube.com"
      },
      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "bilibili",
        title: "Bilibili",
        img: "img/sites/bilibili.svg",
        link: "https://www.bilibili.com/"
      },
      {
        id: "tiktok",
        title: "Tiktok",
        img: "img/sites/tiktok.svg",
        link: "https://www.tiktok.com/explore"
      }
    ]
  }
};

export default websites;
