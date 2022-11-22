import styles from "./footer.module.css";

import FacebookIcon from "../../public/static/icon-facebook.svg";
import InstagramIcon from "../../public/static/icon-instagram.svg";
import PinterestIcon from "../../public/static/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <FacebookIcon className={styles.icon} />
      <InstagramIcon className={styles.icon} />
      <PinterestIcon className={styles.icon} />
    </div>
  );
};

export default Footer;
