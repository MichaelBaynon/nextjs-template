import Image from "next/image";

import PatreonLogo from "../public/Patreon-Logo-2013-2017.png";

import TwitchLogo from '../public/twitch-tv-logo-51C922E0F0-seeklogo.com.png' 
import TwitterLogo from '../public/Twitter-Logo.png'
import DiscordLogo from '../public/Discord-Logo.png'
import RedditLogo from '../public/reddit-logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className='socialLinksFooter'>
        <a href='https://www.reddit.com/'> <Image width='47px' height='47px' src={RedditLogo} /> </a>
        <a href='https://discord.com/'> <Image  width='77px' height='43px' src={DiscordLogo} /> </a>
        <a href='https://twitter.com/'> <Image width='77px' height='43px' src={TwitterLogo} /> </a>
        <a href='https://www.twitch.tv/'> <Image width='39px'height='40px' src={TwitchLogo} /> </a>
      </div>
      <p className="patreonArea">
        {" "}
        Support Albion HQ 🡢{" "}
        <a href="https://www.patreon.com/user?u=61784538">
          {" "}
          <Image src={PatreonLogo} width="128px" height="30px" />{" "}
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
