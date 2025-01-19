"use client";

import React, { useState, useEffect } from "react";

// Interface для статьи
interface Article {
  id: number;
  title: string;
  contentPrewiev: string;
  content: string;
}

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]); // Состояние для хранения статей
  const [selectedArticleId, setSelectedArticle] = useState<number | null>(null);

  // Fetch data from an API when the component mounts
  useEffect(() => {
    fetch("https://b2b-api-a2cjghchb7d8cdhg.polandcentral-01.azurewebsites.net/swagger/index.html")
      .then((response) => response.json())
      .then((data) => { console.log(data); 
        setArticles(data)})
      .catch((error) => console.error("Error fetching articles:", error));
    /* const mockArticles = [
        { id: 1, title: "Статья 1", contentPrewiev: "Превью статьи 1", content: "Полное содержание статьи 1" },
        { id: 2, title: "Статья 2", contentPrewiev: "Превью статьи 2", content: "Полное содержание статьи 2" }
      ];
      setArticles(mockArticles);*/
  }, []);

  // Обработчик кликов по статье
  const handleClick = (articleId: number) => {
    setSelectedArticle(articleId);
    setShowMessage(true);
    console.log(`Перехід на статтю з ID: ${articleId}`);
  };

  return (
    <div className="font-rubik container mx-auto">
      {/* Main Content */}
      <main className="w-full min-h-screen max-w-[1920px] mx-auto overflow-hidden">
        
        {/* "Головні новини" Section */}
        <section className="w-full h-[100px] bg-gradient-to-r from-[var(--blue-changeable)] to-blueOrangeChangeable flex justify-center items-center mt-[68px]">
          <h2 className="text-[#E5E5DE] text-[30px] sm:text-[40px] font-medium text-center">
            Головні новини
          </h2>
        </section>

        {/* First Image Section */}
        {articles.length === 0 ? (
          <div className="text-center text-lg">Завантаження...</div>
        ) : (
          articles.map((article) => (
            <section
              key={article.id}
              className="w-full sm:w-[1598px] h-[518px] mt-[96px] bg-cover bg-center relative max-w-full w-full bg-gradient-to-r dark:from-[#202229] dark:via-[#202229] dark:to-[#202229] 
              dark:opacity-70 
              from-[#DAD6CB] via-[#DAD6CB] to-[#DAD6CB]"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(32, 34, 41, 0.17) 17%, rgba(32, 34, 41, 1) 100%), url('/image 2gitar.png')"
              }}
            >
              <div className="flex flex-col sm:flex-row p-4">
                <div className="flex-1 text-white text-[28px] sm:text-[40px] font-bold">
                  {article.title}
                </div>
                <div className="relative p-4 m-2 flex-1 text-[#E5E5DE] text-[16px] sm:text-[24px] mt-4 sm:mt-12 dark:text-[#1A1A1A]">
                  {article.contentPrewiev}
                </div>
              </div>

              {/* Fixed button positioning */}
              <div className="p-4 m-2 flex justify-center -mt-10 sm:mt-0">
                <button
                  className="p-2 bg-orangeChangeable text-white px-8 py-4 text-[16px] sm:text-[20px] font-bold rounded-full"
                  onClick={() => handleClick(article.id)}
                >
                  Продовжити читати <span className="ml-2">→</span>
                </button>
              </div>

              {/* Show selected article */}
              {showMessage && selectedArticleId === article.id && (
                <section className="mt-8 text-center text-lg">
                  <p>Ви обрали статтю з ID: {article.id}</p>
                </section>
              )}
            </section>
          ))
        )}

        <section className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-16 mt-[50px] mb-[140px] sm:mb-[200px] dark:opacity-70 from-[#DAD6CB] via-[#DAD6CB] to-[#DAD6CB]">
          {/* Large Image Section */}
          {articles.map((article) => (
            <div
              key={article.id}
              className="w-full sm:w-[626px] h-[674px] bg-cover bg-center relative rounded-lg"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(32, 34, 41, 0.17) 17%, rgba(32, 34, 41, 1) 100%), url('/image-small-1gitar.png')"
              }}
            >
              <div className="absolute top-5 left-5 text-white text-[20px] sm:text-[32px] font-bold w-[80%] sm:w-[400px] h-[140px]">
                {article.title}
              </div>
            </div>
          ))}

          {/* Additional smaller images */}
          <div className="flex flex-col gap-8">
            <section
              className="w-full sm:w-[304px] h-[310px] bg-cover bg-center relative rounded-lg 
              bg-gradient-to-r dark:from-[#202229] dark:via-[#202229] dark:to-[#202229] 
              dark:opacity-70 from-[#DAD6CB] via-[#DAD6CB] to-[#DAD6CB]"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(32, 34, 41, 0.17) 17%, rgba(32, 34, 41, 1) 100%), url('/image-small-1gitar.png')"
              }}
            >
              <div className="absolute top-5 left-5 text-white text-[16px] sm:text-[24px] font-bold w-[80%] sm:w-[80%] h-[50px]">
                Це наша найкраща стаття
              </div>
            </section>

            <section
              className="w-full sm:w-[304px] h-[310px] mt-[24px] bg-cover bg-center relative rounded-lg bg-gradient-to-r dark:from-[#202229] dark:via-[#202229] dark:to-[#202229] 
              dark:opacity-70 from-[#DAD6CB] via-[#DAD6CB] to-[#DAD6CB]"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(32, 34, 41, 0.17) 17%, rgba(32, 34, 41, 1) 100%), url('/image-small-1gitar.png')"
              }}
            >
              <div className="absolute top-5 left-5 text-white text-[16px] sm:text-[24px] font-bold w-[80%] sm:w-[80%] h-[50px]">
                Це наша найкраща стаття
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
