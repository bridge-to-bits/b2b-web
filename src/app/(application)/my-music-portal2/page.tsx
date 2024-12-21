// src/app/page.tsx
"use client"
import React, { useState } from 'react';
import Banner from './../../../components/pages/my-music-portal2/Banner';
import artists from './../../../lib/data/artists'; // Замена на фактический путь к данным артиста
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AudioPlayer from '@/components/pages/my-music-portal2/AudioPlayer';
/*import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';*/
/*import './../../../../public/music/track1.mp3';*/





const HomePage: React.FC = () => {
  const [activeArtistId, setActiveArtistId] = useState<number | null>(null);
 

  return (
    <div className='container'>
       <div className='contaner_baner_audio'>
       <div  className='top-singers' >
          <div className='favorites-title'>Уподобані виконавці</div> 
                </div>
                
                
                <div className="audio-container">
  <audio controls className='audio'>
    <source src="/music/track1.mp3" type="audio/mpeg"/>
    Ваш браузер не поддерживает элемент <code>audio</code>.
  </audio>
  <div className='heart'>
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "46px", color: "#EC5D0B" }} />
              </div>


                

                </div>
                
                </div>
      <div className="artists-container">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <div className="banner">
              <Banner
                artist={artist}
                isActive={activeArtistId === artist.id}
                onClick={() => setActiveArtistId(artist.id)}
              />
            </div>
            <div className="track-info">
              <span className="track-title">{artist.tracks[0].title}</span>
              <audio controls className='audio-info'>
                <source src={artist.tracks[0].url} type="audio/mp3" />
                Ваш браузер не поддерживает аудиоплеер.
              </audio>
              <div className='heart'>
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "46px", color: "#EC5D0B" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;