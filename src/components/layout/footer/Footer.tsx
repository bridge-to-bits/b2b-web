import React from 'react';
import LinksSection from '@/components/layout/footer/LinksSection';
import { mainLinks, socials, supportLinks } from './constants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-graphite p-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section: Logo and Contact */}
        <div className="text-foreground text-center md:text-left mb-5 md:mb-0 md:w-[30%]">
          <div className="font-bold text-[30px]">Bridge to Bits</div>
          <p className="mt-2">
            Незалежний сайт для музикантів та продюсерів
          </p>
          <p className="mt-5">Тех підтримка?</p>
          <p> +00000000000</p>
        </div>

        {/* Center Section: Navigation */}
        <div className="flex flex-col md:flex-row gap-10 text-foreground text-center md:text-left">
          <LinksSection sectionTitle="Основні посилання" links={mainLinks} />
          <LinksSection sectionTitle="Підтримка" links={supportLinks} />
        </div>

        {/* Right Section: Socials */}
        <div className="flex flex-col items-center md:items-end text-foreground mt-5 md:mt-0">
          <h3 className="font-bold text-[18px] mb-2">Соцмережі</h3>
          <div className="flex gap-5">
            {socials.map(({ href, icon: SocialIcon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                <SocialIcon className="w-6 h-6 hover:text-orange" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};