import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  XLogo,
  TiktokLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="luffy">
      <p>
        Copyright © 2024 Made by{" "}
        <a href="#">
          <span className="down">
            <i>Adebola</i>
          </span>
        </a>
      </p>
      <a href="https://www.facebook.com" target="_blank">
        <FacebookLogo size={24} />
      </a>
      <a href="https://x.com/AdebolaR86411" target="_blank">
        <XLogo size={24} />
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <LinkedinLogo size={24} />
      </a>
      <a
        href="https://www.instagram.com/ridwan_adebola?utm_source=qr"
        target="_blank"
      >
        <InstagramLogo size={24} weight="bold" />
      </a>
      <a
        href="https://www.tiktok.com/@adebolaridwan?is_from_webapp=1&sender_device=pc"
        target="_blank"
      >
        <TiktokLogo size={24} />
      </a>
    </div>
  );
};

export default Footer;
