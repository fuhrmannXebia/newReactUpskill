import { Link } from "react-router-dom";
import styles from './Header.module.css'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import { routes } from "../routes.config";


const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      {routes.filter(route => route.isInMenu).map((route, index) => (
        <Link key={index} to={route.path}>
          <button className={styles.headerButton}>
            {t(route.translationKey)} 
          </button>
        </Link>
      ))}
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
