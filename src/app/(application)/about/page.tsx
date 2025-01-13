"use client";
import React from 'react';
import Rectangle62 from './../../../../public/Rectangle 62.png';
import NextImage from 'next/image';
import Rectangle63 from './../../../../public/Rectangle 63.png';

const About: React.FC = () => {
  return (
    <div className="px-0 lg:px-0">
      {/* Banner Section */}
      <div className="flex items-center mt-0 justify-center">
        <div className="relative w-full sm:w-[810px] h-[492px]">
          <NextImage src={Rectangle62} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[48px] sm:text-[96px] font-rubik">
            Про нас
          </div>
        </div>
        <div className="w-full sm:w-[971px] h-auto text-[18px] sm:text-[36px] font-rubik mt-5 sm:ml-5 px-4 sm:px-0">
          <p>
            Ласкаво просимо на Beat to Beat – платформу, де музиканти та продюсери зустрічаються,
            взаємодіють і створюють. Ми віримо, що справжня музична магія виникає, коли талант знаходить свою можливість.
            Саме тому ми створили простір, присвячений спрощенню співпраці, щоб допомогти артистам
            і продюсерам з усього світу втілювати їхні творчі ідеї.
          </p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <div className="w-full sm:w-[1470px] h-auto text-[18px] sm:text-[36px] font-rubik mx-auto mt-20 mb-5 px-4 sm:px-0">
        <p>
          Beat to Beat – це не просто платформа для знайомств.
          Це спільнота інноваторів, артистів і візіонерів,
          об'єднаних силою музики. Чи ви продюсер у пошуках ідеального голосу,
          автор пісень у пошуках партнера, чи музикант, який хоче реалізувати свій звук,
          наша платформа створена, щоб підтримати вашу подорож.
        </p>
      </div>

      {/* Second Banner */}
      <div className="flex items-center mt-[150px] justify-center flex-col sm:flex-row">
        <div className="w-full sm:w-[768px] h-auto text-[18px] sm:text-[36px] font-rubik ml-5 sm:ml-0 sm:w-[768px] px-4 sm:px-0">
          <p>
            Наша команда прагне забезпечити зручний і простий у користуванні досвід,
            що покращує можливості для творчих зв’язків. За допомогою простих у використанні профілів,
            оголошень про проєкти та розширених фільтрів ми робимо пошук потрібного таланту для вашого проєкту
            швидким і зручним. З нами співпраця – це лише один клік.
          </p>
        </div>
        <NextImage src={Rectangle63} alt="Second Banner" className="w-full sm:w-[950px] h-auto sm:h-[608px] mt-5 sm:mt-0" />
      </div>

      {/* Mission Section */}
      <div className="flex flex-col items-center mt-12 ">
        <div className="w-full sm:w-[652px] h-auto text-[48px] sm:text-[96px] font-rubik mt-1  sm: ml-5">Наша місія</div>
        <div className="w-full sm:w-[1638px] h-auto text-[18px] sm:text-[36px] font-rubik mt-5 text-center sm:text-center">
          Об’єднувати музикантів і продюсерів, надихаючи на співпрацю, що руйнує кордони й створює звук майбутнього.
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col items-center mt-7 px-4 sm:px-0">
        <div className="w-full sm:w-[652px] h-auto text-[48px] sm:text-[96px] font-rubik ml-0 sm:ml-5">Наша візія</div>
        <div className="w-full sm:w-[1638px] h-auto text-[18px] sm:text-[36px] font-rubik mt-5 ml-0 sm:ml-5">
          Створити найяскравішу світову спільноту для музичних професіоналів,
          де кожен артист має свободу співпрацювати, творити і ділитися своїм унікальним звуком зі світом.
        </div>
      </div>

      {/* Join Us Section */}
      <div className="flex flex-col items-center mt-12">
        <div className="w-full sm:w-[1132px] h-auto text-[48px] sm:text-[96px] font-rubik-italic text-center">Приєднуйтеся до нас</div>
        <div className="w-full sm:w-[1638px] h-auto text-[18px] sm:text-[36px] font-rubik mt-5 text-center">
          Готові створювати музику? Приєднуйтеся до Beat to Beat і
          відкрийте для себе світ музичних можливостей.
          Давайте творити музику разом!
        </div>
      </div>
    </div>
  );
}

export default About;
