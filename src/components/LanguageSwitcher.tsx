import React from 'react';
import { useTranslation } from 'react-i18next';
import TranslateIcon from '@mui/icons-material/Translate';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'pl' : 'en'; // Toggle between 'en' (English) and 'pl' (Polish)
    i18n.changeLanguage(newLanguage);
  };

  return (
    <TranslateIcon onClick={toggleLanguage} />
  );
}

export default LanguageSwitcher;