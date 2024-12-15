// src/app/page.tsx
"use client"
import React, { useState } from 'react';
import Banner from './../../../components/pages/my-music-portal2/Banner';
import artists from './../../../lib/data/artists'; // Замена на фактический путь к данным артиста
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
/*import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';*/




const HomePage: React.FC = () => {
  const [activeArtistId, setActiveArtistId] = useState<number | null>(null);

  return (
    <div>
      <header>
      {/*<h1 style={{color:'white'}}>Музичний портал</h1>*/}
      </header>
       <div  className='top-singers' >
          <h1 style={{backgroundColor:'#EC5D0B', marginLeft:'17px', marginRight:'5px',}}>  Уподобані виконавці</h1> 
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