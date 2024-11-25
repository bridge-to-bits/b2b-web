import { Instagram, Twitter, Github } from "lucide-react";
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[var(--background-header-footer)] py-10 px-[5%]">
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
        <div className="flex flex-col md:flex-row gap-10 text-white text-center md:text-left">
          {/* Main Links */}
          <div>
            <h3 className="font-bold text-[18px] mb-2">Основні посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/player" className="hover:text-orange-500">
                  Плеєр
                </Link>
              </li>
              <li>
                <Link href="/search-performers" className="hover:text-orange-500">
                  Пошук виконавців
                </Link>
              </li>
              <li>
                <Link href="/search-producers" className="hover:text-orange-500">
                  Пошук продюсерів
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-[18px] mb-2">Підтримка</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-orange-500">
                  Конфіденційність
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500">
                  Про нас
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Socials */}
        <div className="flex flex-col items-center md:items-end text-foreground mt-5 md:mt-0">
          <h3 className="font-bold text-[18px] mb-2">Соцмережі</h3>
          <div className="flex gap-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-orange-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 hover:text-orange-500" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 hover:text-orange-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};