import { TextLink } from "../TextLink/TextLink";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.props";
import { ROUTES } from "../../routes";
import { useEffect, useState } from "react";
import { getLogoUrl } from "../../api/api";
import { SlPeople } from "react-icons/sl";


export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [logoUrl, setLogoUrl] = useState("")

  useEffect(() => {
    getLogoUrl().then(setLogoUrl)
  }, [])

  return (
    <div className={styles.header}>
<<<<<<< HEAD
    <img src={logoUrl} width="50px" height="50px" />
        <div className={styles.logo}>{title}</div>
=======
      <img src={logoUrl} width="50px" height="50px" />
      <div className={styles.logo}>{title}</div>
>>>>>>> 219510761e466ad6ca6ec68fffcf887da1057753
      <div className={styles.navLinks}>
        <TextLink to={ROUTES.Home}>
          <h5>Início</h5>
        </TextLink>
        {/* <TextLink to={ROUTES.About + "Testeeee"}>Sobre</TextLink> */}
        <TextLink to={ROUTES.DevDetail}>
          <h3><SlPeople /> Cadastrar Cliente</h3>
        </TextLink>
      </div>
      {/* <div className={styles.logo}>Logo</div> */}
    </div>
  );
};
