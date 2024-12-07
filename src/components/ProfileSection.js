export default function ProfileSection() {
             return (
               <section className="py-8">
                 {/* Профиль */}
                 <div className="flex items-center gap-4 mb-8">
                   <img
                     src="/profile-pic.jpg" 
                     alt="Profile"
                     className="w-20 h-20 rounded-full"
                   />
                   <div>
                     <h1 className="text-2xl font-bold">Not Rick Ruben</h1>
                     <p className="text-sm text-gray-400">Жанр: Рок, Поп, Хип-хоп</p>
                   </div>
                 </div>
                 
                 {/* Карточки */}
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   <Card
                     image="/public/images/producer1.png"
                     title="Мара"
                     genre="Жанр: Поп/Фолк"
                   />
                   <Card
                     image="/bailey.jpg"
                     title="Bailey"
                     genre="Жанр: Рок/Инди"
                   />
                   <Card
                     image="/maeka.jpg"
                     title="Маека"
                     genre="Жанр: Фолк"
                   />
                   <Card
                     image="/arman.jpg"
                     title="ARman"
                     genre="Жанр: Техно/Рок"
                   />
                   <Card
                     image="/cat.jpg"
                     title="Cothur"
                     genre="Жанр: Рок/Поп"
                   />
                 </div>
               </section>
             );
           }
           
           function Card({ image, title, genre }) {
             return (
               <div className="bg-gray-800 p-4 rounded-lg">
                 <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
                 <h2 className="mt-4 text-lg font-bold">{title}</h2>
                 <p className="text-sm text-gray-400">{genre}</p>
               </div>
             );
           }
           