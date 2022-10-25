import { Image } from '../Images/Image';
import { useState, useEffect } from 'react';
import styles from './ImageList.module.css';

interface IProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const ImageList = () => {
  const [image, setImage] = useState([]);

  const getImage = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await response.json();
    setImage(data);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className={styles.list}>
      {image.map((image: IProps) => {
        return (
          <Image
            smallImage={image.thumbnailUrl}
            bigImage={image.url}
            title={image.title}
            key={image.id}
          />
        );
      })}
    </div>
  );
};
