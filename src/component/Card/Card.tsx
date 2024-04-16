import { CardProps } from "./Card.props";
import styles from "./Card.module.css";

export const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  subtitle,
  checkbox,
  radio,
  dateOfBirth,
  tel,
  obs,
  mark,
  price
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src={imageUrl}
          alt="Avatar"
          width="70"
          height="70"
        />
      </div>

      <div className={styles.details}>
        <div className={styles.detail}>
          <h4 className={styles.label}>Valor:</h4>
          <h5 className={styles.value}>{price}</h5>
        </div>

        <div className={styles.detail}>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.detail}>
          <h4 className={styles.label}>Nome:</h4>
          <h5 className={styles.value}>{title}</h5>
        </div>

        <div className={styles.detail}>
          <h4 className={styles.label}>Tipo de Equipamento:</h4>
          <h5 className={styles.value}>{radio}</h5>
        </div>

        <div className={styles.detail}>
          <h4 className={styles.label}>Data:</h4>
          <h5 className={styles.value}>{dateOfBirth}</h5>
        </div>

        <div className={styles.detail}>
          <h4 className={styles.label}>Contato:</h4>
          <h5 className={styles.value}>{tel}</h5>
        </div>

        <div className={styles.detail}>
          <h4 className={styles.label}>Modelo:</h4>
          <h5 className={styles.value}>{mark}</h5>
        </div>

        <div className={styles.detail}>
          <h4 className={styles.label}>Observações:</h4>
          <h5 className={styles.value}>{obs}</h5>
        </div>

        <div className={styles.detail}>
          <p className={styles.value}>{checkbox}</p>
        </div>
      </div>
    </div>
  );
};
