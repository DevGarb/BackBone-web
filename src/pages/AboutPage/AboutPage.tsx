import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../routes";
import { AboutPageParams } from "./AboutPage.params";
import { useTheme } from "../../contexts/ThemeContext";

export const AboutPage = () => {
  const navigate = useNavigate();
  const { name } = useParams<AboutPageParams>();

  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {theme}
      <button onClick={() => toggleTheme()}>Trocar tema</button>

      <h1>About Page, {name}</h1>
      <a href="/">Return</a>
      <Link to={ROUTES.Home}>Return</Link>
      <div onClick={() => navigate(ROUTES.Home)}>Return</div>
    </div>
  );
};
