import { FaGithub, FaTelegram, FaXTwitter } from "react-icons/fa6";
import SocialSquare from "./SocialSquare";

const Socials = () => {
  return (
    <div className="flex flex-row gap-3">
      <SocialSquare
        link="https://github.com/aKolev287"
        icon={<FaGithub size={28} />}
      />
      <SocialSquare
        link="https://t.me/FalconSpy287"
        icon={<FaTelegram size={28} />}
      />
      <SocialSquare
        link="https://twitter.com/akolev287"
        icon={<FaXTwitter size={28} />}
      />
    </div>
  );
};

export default Socials;
