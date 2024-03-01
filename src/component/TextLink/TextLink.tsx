import { TextLinkProps } from "./TextLink.props";

import styles from "./TextLink.module.css";
import { Link } from "react-router-dom";

export const TextLink: React.FC<TextLinkProps> = ({ children, ...props }) => (
  <Link className={styles.menuLink} {...props}>
    {children}
  </Link>
);
