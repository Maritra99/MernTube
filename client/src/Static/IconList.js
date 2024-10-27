import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";

const style = { fontSize: "1.6rem", margin: "2%" };

export const FacebookIcon = () => {
  return (
    <FaFacebook style={{ ...style, color: "#3b5998", marginInline: "10%" }} />
  );
};

export const GoogleIcon = () => {
  return (
    <FaGoogle style={{ ...style, color: "#db4437", marginInline: "10%" }} />
  );
};

export const InstagramIcon = () => {
  return (
    <FaInstagram style={{ ...style, color: "#e1306c", marginInline: "10%" }} />
  );
};
