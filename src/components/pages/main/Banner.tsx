import React from "react";
import { CardInfo } from "./CardInfo";

// Компонент Banner
const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <section
        className="relative flex items-center justify-center w-full aspect-[25/10] bg-cover bg-center ml-[5%] mr-[5%] rounded-[25px]"
        style={{ backgroundImage: "url(/producer1.png)" }}
      >
        <div className="text-center text-black">
          <h1 className="text-4xl font-bold">Страница Профиля продюсера</h1>
          <p className="mt-[55px] text-lg">
            Добро пожаловать! Здесь вы найдете всю информацию о продюсере, его
            работе, проектах и многое другое.
          </p>
        </div>
      </section>
    </div>
  );
};

// Основной компонент Home
const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header */}
      <header className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Страница Профиля продюсера</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Связаться
        </button>
      </header>

      {/* Баннер */}
      <Banner />

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Профиль */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src="/images/profil.png"
              alt="Producer"
              className="rounded-full w-20 h-20 mr-4"
              width={100}
              height={100}
            />
            <div>
              <h2 className="text-2xl font-bold">Not Rick Ruben</h2>
              <p className="text-sm text-gray-500">Жанры: Рок, Поп, Хип-хоп</p>
              <p className="text-sm mt-2">
                Это описание, где вы можете указать информацию о продюсере.
              </p>
            </div>
          </div>
        </section>

        {/* Список альбомов */}
        <section className="mt-8">
          <h3 className="text-xl font-bold mb-6 text-center text-black">
            Альбомы
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Верхние карточки */}
            {[
              { id: 1, name: "Мара", genre: "Рок/Фолк", image: "/Mara.png" },
              { id: 2, name: "Bailey", genre: "Поп", image: "/images/Bailey.png" },
              { id: 3, name: "Мавка", genre: "Фолк", image: "/Mavka.png" },
            ].map((album) => (
              <CardInfo name={album.name} genres={[{id:"1234",name:"Pop"}]} rating={7} image={album.image} />
            ))}
          </div>

          {/* Нижние карточки */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {[
              { id: 4, name: "AI-яма", genre: "Техно/Рок", image: "/images/ARман.png" },
              { id: 5, name: "Сочfur", genre: "Поп/Рок", image: "/images/Cochur.png" },
            ].map((album) => (
              <div
                key={album.id}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                style={{ height: "300px" }}
              >
                <img
                  src={album.image}
                  alt={album.name}
                  className="w-full h-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{album.name}</h4>
                  <p className="text-sm text-gray-500">{album.genre}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-sm p-6 shadow-inner">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-center md:text-left">© 2024 Продюсерская платформа</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
              aria-label="Политика конфиденциальности"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
              aria-label="Социальные сети"
            >
              Социальные сети
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

