// src/components/SocialIcons.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface SocialIconsProps {
  socialLinks: SocialLinks;
  size?:number;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socialLinks }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', }}>
      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="1x" className="icon-facebook" />
      </a>
      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="1x" className='icon-instagram' />
      </a>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="1x" className="icon-twitter" />
      </a>
    </div>
  );
};

export default SocialIcons;
