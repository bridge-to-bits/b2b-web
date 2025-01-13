import React from 'react';

const Section2: React.FC = () => {
  return (
    <div className="w-[1598px] h-[552px] mx-[161px] bg-cover bg-center"
         style={{ backgroundImage: "url('/image 2gitar.png')" }}>
      <div className="flex items-start justify-between h-full px-4">
        <div className="w-[443px] h-[196px]">
          <h3 className="text-[#E5E5DE] text-4xl font-bold">Гітаристи мрії: хто підкорює сцени цього року</h3>
        </div>
        <div className="w-[624px] h-[375px] text-white text-lg">
          <p>2024 рік став справжнім вибухом для гітарної музики. У світі, де домінують електронні треки та хіп-хоп, гітаристи продовжують дивувати, надихати і запалювати сцени своїм унікальним звучанням. Ми зібрали найгарячіші імена, які підкорили серця мільйонів слухачів і стали символом нового покоління музикантів.</p>
        </div>
        <div className="flex flex-col justify-end">
          <button className="w-[304px] h-[79px] bg-[#EC5D0B] text-white text-center text-xl font-bold flex items-center justify-center">
            Продовжити читати <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
