import styles from "./CardList.module.css";
import { CardListProps } from "./CardList.props";

export const CardList: React.FC<CardListProps> = ({ children }) => (
  <div className={styles.list}>{children}</div>
);
