import React from 'react';
import { Instagram, Music, Globe } from 'lucide-react';

interface Social {
  name: string;
  link: string;
}

interface SocialsListProps {
  socials: Social[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  music: Music,
  instagram: Instagram,
  default: Globe,
};

export const SocialsList: React.FC<SocialsListProps> = ({ socials }) => {
  return (
    <div className="mt-[3%] flex gap-[4%]">
      {socials.map((social, index) => {
        const Icon = iconMap[social.name.toLowerCase()] || iconMap.default;
        return (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Icon className="w-8 h-8 text-[var(--white)] hover:text-orange-500" />
          </a>
        );
      })}
    </div>
  );
};