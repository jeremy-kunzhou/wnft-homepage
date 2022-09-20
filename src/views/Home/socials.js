import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import React from "react";
import { ReactComponent as RedditImg } from "assets/images/reddit.svg"
import { ReactComponent as MediumImg } from "assets/images/medium.svg"
import { ReactComponent as DiscordImg } from "assets/images/discord.svg"
import { ReactComponent as EmailImg } from "assets/images/email.svg"

export const SocialInfo = [
  {
    name: "twitter",
    logo: <FaTwitter size={26} />,
    link: "https://twitter.com/",
  },
  {
    name: "discord",
    logo: (
      <DiscordImg />
    ),
    link: "https://discord.gg/",
  },
  {
    name: "medium",
    logo: (
      <MediumImg />
    ),
    link: "https://medium.com/",
  },
  {
    name: "telegram",
    logo: <FaTelegramPlane size={26} />,
    link: "https://t.me/",
  },

  {
    name: "reddit",
    logo: (
      <RedditImg />
    ),
    link: "https://www.reddit.com/r/",
  },
  {
    name: "email",
    logo: (
      <EmailImg />
    ),
    link: "mailto: contact@google.com",
  },
];
