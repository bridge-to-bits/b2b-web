"use client";

import React, { useState } from "react";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="font-rubik container mx-auto">
      {/* Main Content */}
      <main className="w-full min-h-screen max-w-[1920px] mx-auto overflow-hidden">
        
        {/* "Головні новини" Section  bg-gradient-to-r from-[#1E18C2] to-[#03030387],, bg-gradient-to-r from-[var(--blue-changeable)],,bg-blueOrangeChangeable  */}
        <section className="w-full h-[100px] bg-gradient-to-r from-[var(--blue-changeable)] to-blueOrangeChangeable flex justify-center items-center mt-[68px]">
          <h2 className="text-[#E5E5DE] text-[30px] sm:text-[40px] font-medium text-center">
            Головні новини
          </h2>
        </section>

        {/* First Image Section */}
        {[...Array(3)].map((_, index) => (
          <section
            key={index}
            className="w-full sm:w-[1598px] h-[518px] mt-[96px] bg-cover bg-center relative max-w-full w-full bg-gradient-to-r dark:from-[#202229] dark:via-[#202229] dark:to-[#202229] 
    dark:opacity-70 
    from-[#DAD6CB] via-[#DAD6CB] to-[#DAD6CB]"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(32, 34, 41, 0.17) 17%, rgba(32, 34, 41, 1) 100%), url('/image 2gitar.png')"
            }}
          >
            <div className="flex flex-col sm:flex-row p-4 ">
              <div className="flex-1 text-white text-[28px] sm:text-[40px] font-bold">
                Гітаристи мрії: хто підкорює сцени цього року
              </div>
              <div className="relative p-4 m-2 flex-1 text-[#E5E5DE] text-[16px] sm:text-[24px] mt-4 sm:mt-12 dark:text-[#1A1A1A]] ">
                Гітаристи мрії: хто підкорює сцени цього року?
                2024 рік став справжнім вибухом для гітарної музики. У світі, де
                домінують електронні треки та хіп-хоп, гітаристи продовжують
                дивувати, надихати і запалювати сцени своїм унікальним звучанням.
                Ми зібрали найгарячіші імена, які підкорили серця мільйонів
                слухачів і стали символом нового покоління музикантів.
              </div>
            </div>

            {/* Fixed button positioning : [#EC5D0B]*/}
            <div className="p-4 m-2 flex justify-center -mt-10 sm:mt-0">
              <button
                className="p-2 bg-orangeChangeable  text-white px-8 py-4 text-[16px] sm:text-[20px] font-bold rounded-full"
                onClick={handleClick}
              >
                Продовжити читати <span className="ml-2">→</span>
              </button>
            </div>

            {showMessage && (
              <p className="mt-4 text-[#E5E5DE]-500 text-center">Чекайте статтю</p>
            )}
          </section>
        ))}

        <section className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-16 mt-[50px] mb-[140px] sm:mb-[200px] 
    dark:opacity-70 
    from-[#DAD6CB] via-[#DAD6CB] to-[#DAD6CB]">
          {/* Large Image Section */}
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-[626px] h-[674px] bg-cover bg-center relative rounded-lg"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(32, 34, 41, 0.17) 17%, rgba(32, 34, 41, 1) 100%), url('/image-small-1gitar.png')"
              }}
            >
              <div className="absolute top-5 left-5 text-white text-[20px] sm:text-[32px] font-bold w-[80%] sm:w-[400px] h-[140px]">
                Гітаристи мрії: хто підкорює сцени цього року
              </div>
            </div>
          ))}

          {/* Additional smaller images */}
          <div className="flex flex-col gap-8">
            <section
              className="w-full sm:w-[304px] h-[310px] bg-cover bg-center relative rounded-lg 
              bg-gradient-to-r dark:from-[#202229] dark:via-[#202229] dark:to-[#202229] 
    dark:opacity-70     from-[#DAD6CB] via-[#DAD6CB] to-[#DAD6CB]" 
              style={{
                backgroundImage: "linear-gradient(to right, rgba(32, 34, 41, 0.17) 17%, rgba(32, 34, 41, 1) 100%), url('/image-small-1gitar.png')"
              }}
            >
              <div className="absolute top-5 left-5 text-white text-[16px] sm:text-[24px] font-bold w-[80%] sm:w-[80%] h-[50px]">
                Гітаристи мрії: хто підкорює сцени цього року
              </div>
            </section>

            <section
              className="w-full sm:w-[304px] h-[310px] mt-[24px] bg-cover bg-center relative rounded-lg bg-gradient-to-r dark:from-[#202229] dark:via-[#202229] dark:to-[#202229] 
    dark:opacity-70 
    from-[#DAD6CB] via-[#DAD6CB] to-[#DAD6CB]"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(32, 34, 41, 0.17) 17%, rgba(32, 34, 41, 1) 100%), url('/image-small-1gitar.png')"
              }}
            >
              <div className="absolute top-5 left-5 text-white text-[16px] sm:text-[24px] font-bold w-[80%] sm:w-[80%] h-[50px]">
                Гітаристи мрії: хто підкорює сцени цього року
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
