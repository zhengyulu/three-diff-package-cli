import React from 'react';
import Styles from './setup.module.scss';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import setupPic from '@/assets/setup.jpg';
import useLocale from '@/hooks/useLocale';

function Setup(): JSX.Element {
  const [lang, setLang] = useState('zh-CN');
  const navigate = useNavigate();
  const [t, changeLocale] = useLocale();
  const clickHandle = useCallback(() => {
    navigate('/home')
  }, [navigate]);
  const toggleHandle = useCallback(() => {
    const l = lang === 'zh-CN' ? 'en-CN' : 'zh-CN';
    setLang(l)
    changeLocale(l);
  }, [setLang, lang, changeLocale])
  
  return (
    <div className={Styles.pageContainer}>
      <div className={Styles.lang}>
        <h1>多语言测试：{ t('cornerCabinetShape.chooseCabinetShape') }</h1>
        <button onClick={toggleHandle}>中英切换</button>
      </div>
      <img onClick={clickHandle} src={setupPic} alt="setup" />
    </div>
  );
}

export default Setup;
