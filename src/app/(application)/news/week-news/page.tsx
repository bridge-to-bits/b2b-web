"use client"

import React, { useState } from 'react';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => { setShowMessage(true); };
  return (
    <div className="font-rubik container mx-auto"   >
      

      {/* Main Content */}
      <main className="w-full h-[auto]">
        {/* "Головні новини" Section */}
        <section className="w-full h-[100px] bg-gradient-to-r from-[#1E18C2] to-[#03030387] flex justify-center items-center mt-[68px]">
          <h2 className="text-[#E5E5DE] text-[40px] font-medium">Головні новини</h2>
        </section>

        {/* First Image Section */}
        

        {/* Repeat of Image Sections */}
        {[...Array(3)].map((_, index) => (
          <section key={index} className="w-[1378px] h-[518px] mx-[161px] mt-[96px] bg-cover bg-center" style={{ backgroundImage: "url('/image 2gitar.png')" }}>
           <div className="flex flex-col md:flex-row">
            <div className="p-4 m-2 flex-1 text-white text-[40px] font-bold  mt-0" >Гітаристи мрії: хто підкорює сцени цього року</div>
            <div className="relative bottom-10 right-10 p-4 m-2 flex-1 text-[#E5E5DE] text-[24px] mt-12">
              2024 рік став справжнім вибухом для гітарної музики. У світі, де домінують електронні треки та хіп-хоп, гітаристи продовжують дивувати, 
              надихати і запалювати сцени своїм унікальним звучанням. Ми зібрали найгарячіші імена, які підкорили серця мільйонів слухачів і стали 
              символом нового покоління музикантів.
            </div>
            </div>
           <div className="relative p-4 m-2">
            <button style={{ right:'50px' , bottom: '-80px'}} className=" absolute p-2 bg-[#EC5D0B] text-white px-8 py-4 text-[20px] font-bold flex items-center ml-11 rounded-xl" onClick={handleClick}>
              Продовжити читати <span className="ml-2">→</span>
            </button>
            {showMessage && <p className="mt-4 text-[#E5E5DE]-500">Чекайте статтю</p>}
            </div>
            
          </section>
        ))}

        {/* Two Image Sections with Title */}
        <section className="flex gap-28 mt-[50px] ml-[165px] mb-[150px]">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="w-[626px] h-[674px] bg-cover bg-center relative" style={{ backgroundImage: "url('/image-small-1gitar.png')" }}>
              <div className="absolute top-[20px] left-10 text-white text-[32px] font-bold w-[400px] h-[140px]">Гітаристи мрії: хто підкорює сцени цього року</div>
            </div>
            
            
          ))}
         

        {/* Additional Image Section */}
        <div className="flex flex-col  gap-8">
        <section className="w-[304px] h-[310px] mx-[10px] bg-cover bg-center"
         style={{ backgroundImage: "url('/image-small-1gitar.png')" }}>
           <div className="w-[304px] h-[310px] bg-cover bg-center relative" style={{ backgroundImage: "url('image-small-1gitar.png')" }}>
            <div className="absolute top-5 left-5 text-white text-[24px] font-bold w-50 h-50">Гітаристи мрії: хто підкорює сцени цього року</div>
          </div>          
         </section>

         <section className="w-[304px] h-[310px] mx-[10px] mt-[24px] bg-cover bg-center"
         style={{ backgroundImage: "url('/image-small-1gitar.png')" }}>
           <div className="w-[304px] h-[310px] bg-cover bg-center relative" style={{ backgroundImage: "url('image-small-1gitar.png')" }}>
            <div className="absolute top-5 left-5 text-white text-[24px] font-bold w-20% h-20%" >Гітаристи мрії: хто підкорює сцени цього року</div>
          </div>
          
         </section>
         </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
