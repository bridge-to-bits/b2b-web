"use client";
import React from 'react';
import Rectangle62 from './../../../../public/Rectangle 62.png';
import NextImage from 'next/image';
import Rectangle63 from'./../../../../public/Rectangle 63.png';


import styles from './../about/styles/About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
    
      <div className={styles.bannerAndText}>
        <div className={styles.bannerContainer}>
          <NextImage src= {Rectangle62} alt="Banner" className={styles.banner} />
          <div className={styles.bannerText}>Про нас</div>
        </div>
        <div className={styles.textBlock}>
          <p>Ласкаво просимо на Beat to Beat – платформу, де музиканти та продюсери зустрічаються, 
              взаємодіють і створюють. Ми віримо, що справжня музична магія виникає, коли талант знаходить свою можливість.
              Саме тому ми створили простір, присвячений спрощенню співпраці, щоб допомогти артистам
              і продюсерам з усього світу втілювати їхні творчі ідеї.
 </p> 
 </div>
      </div>
      <div className={styles.textBlockLarge}>
        <p>Beat to Beat – це не просто платформа для знайомств. 
          Це спільнота інноваторів, артистів і візіонерів, 
          об'єднаних силою музики. Чи ви продюсер у пошуках ідеального голосу, 
          автор пісень у пошуках партнера, чи музикант, який хоче реалізувати свій звук, 
          наша платформа створена, щоб підтримати вашу подорож.
          </p></div>
      <div className={styles.bannerAndTextBelow}>
      <div className={styles.textBlockRight}><p>Наша команда прагне забезпечити зручний і простий у користуванні досвід, 
                                   що покращує можливості для творчих зв’язків. За допомогою простих у використанні профілів, 
                                    оголошень про проєкти та розширених фільтрів ми робимо пошук потрібного таланту для вашого проєкту 
                                          швидким і зручним. З нами співпраця – це лише один клік.</p>
                                          </div>
        <NextImage src={Rectangle63} alt="Second Banner" className={styles.secondBanner} />
       
      </div>
      <div className={styles.missionBlock}><p>Наша місія</p>
        
        
      </div>
      <div className={styles.missionText}><p>Об’єднувати музикантів і продюсерів, надихаючи на співпрацю,
        що руйнує кордони й створює звук майбутнього.</p>
        </div>
      <div className={styles.visionBlock}>
        <p>Наша візія</p>
        
      </div>
      <div className={styles.visionText}><p>Створити найяскравішу світову спільноту для музичних професіоналів,
                                                де кожен артист має свободу співпрацювати,
                                        творити і ділитися своїм унікальним звуком зі світом.</p>
                                        </div>
      <div className={styles.joinUsBlock}><p>Приєднуйтеся до нас</p>
       
              </div>
              <div className={styles.joinUsText}>
                                          <p>
                                              Готові створювати музику? Приєднуйтеся до Beat to Beat і 
                                              відкрийте для себе світ музичних можливостей. 
                                              Давайте творити музику разом!
                                              </p>
                                              </div>
    </div>
  );
}

export default About;
