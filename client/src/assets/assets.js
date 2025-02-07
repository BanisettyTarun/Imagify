import logo from "./logo.svg";
import logo_icon from "./logo_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import star_icon from "./star_icon.svg";
import rating_star from "./rating_star.svg";
import sample_img_1 from "./sample_img_1.png";
import sample_img_2 from "./sample_img_2.png";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import step_icon_1 from "./step_icon_1.svg";
import step_icon_2 from "./step_icon_2.svg";
import step_icon_3 from "./step_icon_3.svg";
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import cross_icon from "./cross_icon.svg";
import star_group from "./star_group.png";
import credit_star from "./credit_star.svg";
import profile_icon from "./profile_icon.png";
import profile_icon1 from "./profile_icon1.png";

export const assets = {
  logo,
  logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
  profile_icon1,
};

export const stepsData = [
  {
    title: "Describe Your Vision",
    description:
      "Type a phrase, sentence, or paragraph that describes the image you want to create.",
    icon: step_icon_1,
  },
  {
    title: "Watch the Magic",
    description:
      "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
    icon: step_icon_2,
  },
  {
    title: "Download & Share",
    description:
      "Instantly download your creation or share it with the world directly from our platform.",
    icon: step_icon_3,
  },
];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: "Donald Jackman",
    role: "Digital Marketer",
    stars: 5,
    text: `This image generator has been a game-changer for my marketing campaigns! It creates high-quality visuals in seconds, saving me hours of work. The AI understands prompts remarkably well, making it my go-to tool for quick ad creatives and social media posts.`,
  },
  {
    image: profile_img_2,
    name: "Richard Nelson",
    role: "Game Developer",
    stars: 5,
    text: `As a game developer, finding concept art that matches my vision is always a challenge. This tool generates unique and detailed images based on my descriptions, helping me prototype ideas faster. Highly recommend it for creative professionals!`,
  },
  {
    image: profile_img_1,
    name: "Donald Jackman",
    role: "Content Creator",
    stars: 5,
    text: `I love how intuitive and powerful this image generator is! It helps me bring my content ideas to life effortlessly. Whether I need an illustration for my blog or a custom thumbnail for my videos, this tool delivers amazing results every time`,
  },
];

export const plans = [
  {
    id: "Basic",
    price: 199,
    credits: 100,
    desc: "Best for personal use.",
  },
  {
    id: "Advanced",
    price: 899,
    credits: 500,
    desc: "Best for business use.",
  },
  {
    id: "Business",
    price: 7999,
    credits: 5000,
    desc: "Best for enterprise use.",
  },
];
