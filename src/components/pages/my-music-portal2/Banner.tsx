import React from 'react';
import SocialIcons from './SocialIcons';
import styles from './../my-music-portal2/styles/Banner.module.css';


interface Artist {
  id: number;
  name: string;
  image: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  tracks: { title: string; url: string }[]; // Массив объектов с информацией о треках
}

interface BannerProps {
  artist: Artist;
  isActive: boolean;
  onClick: () => void;
}

const Banner: React.FC<BannerProps> = ({ artist, isActive, onClick }) => {
  return (
    <div
      className={`${styles.banner} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <div className='banner img '>
        {/* Изображение */}
        <img
          src={artist.image}
          alt={artist.name}
          className={styles.artistImage}
        />

        {/* Информация об артисте и соцсети */}
        <div className={styles.artistInfo}>
          <h3>{artist.name}</h3>
          <SocialIcons socialLinks={artist.socialLinks} />
        </div>

        {/* Треки */}
        
       
        </div>
      </div>
    
  );
};

export default Banner;
