"use client";
import React from 'react';
import Rectangle62 from './../../../../public/Rectangle 62.png';
import NextImage from 'next/image';
import Rectangle63 from './../../../../public/Rectangle 63.png';
import Rectangle63 from './../../../../public/Rectangle 63.png';

const About: React.FC = () => {
  return (
    <div className="w-full h-[3249px] max-w-[1920px] mx-auto">
      {/* Banner Section */}
      <div className="flex flex-col sm:flex-row items-center mt-0 justify-center">
        <div className="relative w-full sm:w-[810px] h-[300px] sm:h-[492px]">
          <NextImage src={Rectangle62} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[24px] sm:text-[48px] lg:text-[96px] font-rubik">
            Про нас
          </div>
        </div>
        <div className="w-full sm:w-[971px] h-auto text-[16px] sm:text-[18px] lg:text-[36px] font-rubik mt-5 sm:mt-0 sm:ml-5 px-4 sm:px-0">
          <p>
            Ласкаво просимо на Beat to Beat – платформу, де музиканти та продюсери зустрічаються,
            взаємодіють і створюють. Ми віримо, що справжня музична магія виникає, коли талант знаходить свою можливість.
            Саме тому ми створили простір, присвячений спрощенню співпраці, щоб допомогти артистам
            і продюсерам з усього світу втілювати їхні творчі ідеї.
          </p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <div className="w-full mx-auto mt-20 mb-5 px-4 sm:px-0">
        <p className="text-[16px] sm:text-[18px] lg:text-[36px] font-rubik">
          Beat to Beat – це не просто платформа для знайомств.
          Це спільнота інноваторів, артистів і візіонерів,
          об&apos;єднаних силою музики. Чи ви продюсер у пошуках ідеального голосу,
          автор пісень у пошуках партнера, чи музикант, який хоче реалізувати свій звук,
          наша платформа створена, щоб підтримати вашу подорож.
        </p>
      </div>

      {/* Second Banner */}
      <div className="flex flex-col sm:flex-row items-center mt-[50px] sm:mt-[150px] justify-center">
        <div className="w-full sm:w-[950px] text-[16px] sm:text-[18px] lg:text-[36px] font-rubik  sm:ml-0 px-4 sm:px-0">
          <p>
            Наша команда прагне забезпечити зручний і простий у користуванні досвід,
            що покращує можливості для творчих зв’язків. За допомогою простих у використанні профілів,
            оголошень про проєкти та розширених фільтрів ми робимо пошук потрібного таланту для вашого проєкту
            швидким і зручним. З нами співпраця – це лише один клік.
          </p>
        </div>
        <div className="w-full sm:w-[950px] h-auto sm:h-[608px] mt-5 sm:mt-0">
          <NextImage src={Rectangle63} alt="Second Banner" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col items-center mt-16 px-4 sm:px-0">
  {/* Заголовок "Наша місія" */}
  <div className="w-full sm:w-[1552px] text-[24px] sm:text-[48px] lg:text-[96px] font-rubik mt-1 text-right">
    Наша місія
  </div>
  {/* Описание "Об’єднувати музикантів і продюсерів..." */}
  <div className="w-full sm:w-[1638px] text-[16px] sm:text-[18px] lg:text-[36px] font-rubik mt-5 ml-0 sm:ml-5 text-center">
    Об’єднувати музикантів і продюсерів, надихаючи на співпрацю, що руйнує кордони й створює звук майбутнього.
  </div>
</div>


      {/* Vision Section */}
      <div className="flex flex-col  mt-16 px-4 sm:px-0">
        <div className="w-full sm:w-[1052px] text-[24px] sm:text-[48px] lg:text-[96px] font-rubik ml-0 sm:ml-5 text-left">Наша візія</div>
        <div className="w-full sm:w-[1638px] text-[16px] sm:text-[18px] lg:text-[36px] font-rubik mt-5 ml-0 sm:ml-5 text-center">
          Створити найяскравішу світову спільноту для музичних професіоналів,
          де кожен артист має свободу співпрацювати, творити і ділитися своїм унікальним звуком зі світом.
        </div>
      </div>

      {/* Join Us Section */}
      <div className="flex flex-col items-center mt-16" >
        <div className="w-full sm:w-[1132px] text-[24px] sm:text-[48px] lg:text-[96px] font-rubik-italic text-center">Приєднуйтеся до нас</div>
        <div className="w-full sm:w-[1638px] text-[16px] sm:text-[18px] lg:text-[36px] font-rubik mt-16 text-center">
          Готові створювати музику? Приєднуйтеся до Beat to Beat і
          відкрийте для себе світ музичних можливостей.
          Давайте творити музику разом!
        </div>
      </div>
    </div>
  );
}

export default About;
