'use client';

import { Button } from '@/components/ui/button';
import { footer_links } from '@/mocks/FooterLinks';

type ButtonProps = {
  darkMode: boolean;
};
const Footer = ({ darkMode }: ButtonProps) => {
  return (
    <footer
      className={`relative z-10 border-t-4 border-black px-4 py-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-4 flex justify-center gap-4">
          {footer_links.map((footer, index) => (
            <Button
              key={index}
              asChild
              className="btn-press border-4 border-black bg-blue-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-110 hover:bg-blue-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <a href={footer.link} target="_blank" rel="noopener noreferrer">
                {footer.icon}
              </a>
            </Button>
          ))}
        </div>
        <p className="text-lg font-bold">
          © 2025 Rendy Pratama — Portofolio digital untuk berbagi karya dan
          pengalaman.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
