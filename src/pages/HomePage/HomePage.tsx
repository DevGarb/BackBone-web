// import { useTheme } from "../../contexts/ThemeContext";
import { useEffect, useState } from "react";
import { DevApiModel } from "../../api/api.props";
import { getDevs } from "../../api/api";
import { Card, CardList } from "../../component";
import style from './Home.module.css'

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [devList, setDevList] = useState<DevApiModel[]>([]);

  // const { theme, toggleTheme } = useTheme();

  const filteredList = devList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getDevs().then((result) => setDevList(result));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.filterContainer}>
        <h4>Filtrar Clientes:</h4>
        <input className={style.inputField}
          onChange={(e) => setSearchTerm(e.target.value)} placeholder="Digite o nome do cliente..."
        />
      </div>
      {/* {theme} */}
      {/* <button onClick={() => toggleTheme()}>Trocar tema</button> */}
      <CardList>
        {filteredList.map((dev, index) => (
          <Card
            key={index}
            imageUrl={dev.profileUrl}
            title={dev.name}
            subtitle={dev.role}
            radio={dev.radio}
            checkbox={dev.checkbox}
            dateOfBirth={dev.dateOfBirth}
            tel={dev.tel}
            obs={dev.obs}
            mark={dev.mark}
          />
        ))}
      </CardList>
    </div>
  );
};
