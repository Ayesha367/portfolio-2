// components/Icons.tsx
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

interface SocialIconProps {
  href: string;
  icon: keyof typeof Icons;
}

export function SocialIcon({ href, icon }: SocialIconProps) {
  const Icon = Icons[icon];
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
    >
      <Icon size={32} />
    </a>
  );
}