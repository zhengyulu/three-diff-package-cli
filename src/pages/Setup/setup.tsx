import Styles from './setup.module.scss';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import setupPic from '../../assets/setup.jpg';

function Setup(): JSX.Element {
  const navigate = useNavigate();
  const clickHandle = useCallback(() => {
    navigate('/home')
  }, [navigate]);

  return (
    <div className={Styles.pageContainer}>
      <img onClick={clickHandle} src={setupPic} alt="setup" />
    </div>
  );
}

export default Setup;
