import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import React from "react";
import { ReactComponent as RedditImg } from "assets/images/reddit.svg"
import { ReactComponent as MediumImg } from "assets/images/medium.svg"
import { ReactComponent as DiscordImg } from "assets/images/discord.svg"
import { ReactComponent as EmailImg } from "assets/images/email.svg"

export const SocialInfo = [
  {
    name: "twitter",
    logo: <FaTwitter size={22} />,
    link: "https://twitter.com/fountainprot",
  },
  {
    name: "discord",
    logo: (
      <DiscordImg />
    ),
    link: "https://discord.gg/tTxBspHqep",
  },
  {
    name: "medium",
    logo: (
      <MediumImg />
    ),
    link: "https://medium.com/@fountainprot",
  },
  {
    name: "telegram",
    logo: <FaTelegramPlane size={22} />,
    link: "https://t.me/fountainproto",
  },

  {
    name: "reddit",
    logo: (
      <RedditImg />
    ),
    link: "https://www.reddit.com/r/FountainProt/",
  },
  {
    name: "email",
    logo: (
      <EmailImg />
    ),
    link: "mailto: contact@fountainprotocol.com",
  },
];
