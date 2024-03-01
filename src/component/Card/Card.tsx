import { CardProps } from "./Card.props";

import styles from "./Card.module.css";

export const Card: React.FC<CardProps> = ({ imageUrl, 
  title, 
  subtitle, 
  checkbox, 
  radio, 
  dateOfBirth, 
  tel,
  obs }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={imageUrl}
        width="70px"
        height="70px"
      />
      <b>{title}</b>
      <p className={styles.profissao}>{subtitle}</p>
      <div>{checkbox}</div>
      <p>{radio}</p>
      <h5>{dateOfBirth}</h5>
      <h5>{tel}</h5>
      <h5>{obs}</h5>
    </div>
  );
};
