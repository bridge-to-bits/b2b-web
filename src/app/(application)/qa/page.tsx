"use client";

import React, { useState } from "react";
import AccordionItem from '@/app/(application)/qa/AccordingItem';

const QAndA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionItems = [
    {
      question: "Що таке Bridge to Beats?",
      answer:
        "Bridge to Beats – це онлайн-платформа для музикантів та продюсерів, створена для того, щоб спростити процес пошуку ідеальних партнерів для спільної роботи. Наша місія – об’єднувати музичні таланти для спільного створення нових треків і проєктів."
    },
    {
      question: "Як створити обліковий запис?",
      answer:
        "Для того щоб створити обліковий запис, необхідно ввести свої данні: ім'я, фамілію, електронну адресу після чого натиснути кнопку 'Submit'. У разі необхідності свої облікові дані можна редагувати. При виникненні проблем звертайтесь до служби технічної підтримки."
    },
    {
      question: "Як знайти відповідного музиканта або продюсера?",
      answer:
        "Для того щоб знайти музиканта, або продюсера можна просто в рядку пошука набрати його ім'я. Крім того існує пошук музикантів та продюсерів за жанром: рок, фольк або інші жанри. Система виведе список всіх музикантів або продюсерів, що працюють в обраному жанрі."
    },
    {
      question: "Як працює система рейтингів і відгуків?",
      answer:
        "Система рейтингів і відгуків дозволяє оцінити роботу музикантів та продюсерів. Користувачі можуть залишати відгуки після завершення співпраці, що допомагає новим користувачам зорієнтуватися в якості послуг."
    },
    {
      question: "Як зв’язатися з іншими користувачами?",
      answer:
        "Щоб зв’язатися з іншими користувачами, скористайтеся функцією обміну повідомленнями на платформі. Виберіть користувача, натисніть на його профіль і використовуйте чат для спілкування."
    },
    {
      question: "Як повідомити про проблему або отримати підтримку?",
      answer:
        "Якщо у вас виникли проблеми, ви можете звернутися до служби підтримки, написавши в чат підтримки або надіславши запит через електронну пошту. Наші співробітники відповідають на запити в найкоротші терміни."
    },
    {
      question: "Як реагувати на порушення правил з боку користувачів?",
      answer:
        "У разі порушення правил, користувач може звернутися до адміністрації платформи, яка прийме необхідні заходи для вирішення ситуації. Ми докладаємо всіх зусиль для забезпечення безпеки та комфортного користування платформою."
    }
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className={`flex flex-col min-h-screen max-w-screen-xl mb-0 mx-auto transition-colors duration-300`}
    >
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-center text-4xl font-rubik font-medium">
          Q&A (Питання та відповіді)
        </h1>
      </div>

      <div className="flex flex-wrap gap-8 mt-16 justify-center font-rubik">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            isOpen={openIndex === index}
            toggleDropdown={toggleDropdown}
            question={item.question}
            answer={item.answer}
            backgroundClass={
              index % 2 === 0
                ? "bg-gradient-to-r from-[#1E18C2] to-[#030303]"
                : "bg-gradient-to-r from-[#030303] to-[#1E18C2]"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default QAndA;
