import { Link } from "react-router-dom";
import styles from './Header.module.css'
import ROUTES from '../routes'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";


const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <Link to={ROUTES.HOME}>
        <button className={styles.headerButton}>{t('invoices')}</button>
      </Link>
      <Link to={ROUTES.NEW_INVOICE}>
        <button className={styles.headerButton}>{t('addNewInvoice')}</button>
      </Link>
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
