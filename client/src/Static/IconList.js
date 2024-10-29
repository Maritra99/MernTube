import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import { FaRegUserCircle, FaYoutube } from "react-icons/fa";

const style = { fontSize: "1.6rem", margin: "2%" };

export const FacebookIcon = (props) => {
  const styles = {
    ...style,
    ...props.style,
    color: "#3b5998",
    marginInline: "10%",
  };
  return <FaFacebook style={styles} />;
};

export const GoogleIcon = (props) => {
  const styles = {
    ...style,
    ...props.style,
    color: "#db4437",
    marginInline: "10%",
  };
  return <FaGoogle style={styles} />;
};

export const InstagramIcon = (props) => {
  const styles = {
    ...style,
    ...props.style,
    color: "#e1306c",
    marginInline: "10%",
  };
  return <FaInstagram style={styles} />;
};

export const UserIcon = (props) => {
  const styles = {
    ...style,
    ...props.style,
    fontSize: "3rem",
  };
  return <FaRegUserCircle style={styles} className={props.className} />;
};

export const YoutubeIcon = (props) => {
  const styles = {
    ...style,
    ...props.style,
    fontSize: "3rem",
  };
  return <FaYoutube style={styles} className={props.className} />;
};
