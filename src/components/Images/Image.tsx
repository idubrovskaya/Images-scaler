import styles from './Image.module.css';
import { useState } from 'react';

export interface IImage {
  smallImage: string;
  bigImage: string;
  title: string;
}

export const Image = ({ smallImage, bigImage, title }: IImage) => {
  const [isOpen, setIsOpen] = useState(true);

  const changeScale = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.card}>
      {isOpen ? (
        <img src={smallImage} alt='img' onClick={changeScale} />
      ) : (
        <img src={bigImage} alt='img' onClick={changeScale} />
      )}
      <p>{title}</p>
    </div>
  );
};
