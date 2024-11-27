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
      {socials.map(({link, name}) => {
        const Icon = iconMap[name.toLowerCase()] || iconMap.default;
        return (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Icon className="w-9 h-9 text-foreground hover:text-orange" />
          </a>
        );
      })}
    </div>
  );
};