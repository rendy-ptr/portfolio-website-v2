'use client';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { certificates } from '@/mocks/Certificates';

type CertificateProps = {
  darkMode: boolean;
};

const Certificates = ({ darkMode }: CertificateProps) => {
  return (
    <section id="certificates" className="relative px-4 py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          className={`mb-8 text-5xl font-black transition-all duration-500 hover:scale-105 ${
            darkMode ? 'text-purple-400' : 'text-green-600'
          }`}
        >
          SERTIFIKAT
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`group border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`btn-press border-4 border-black p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                    darkMode ? 'bg-yellow-400' : 'bg-cyan-400'
                  }`}
                >
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold transition-all duration-300 group-hover:scale-105">
                    {cert.title}
                  </h3>
                  <p
                    className={`mb-2 text-lg font-semibold transition-all duration-300 ${
                      darkMode ? 'text-cyan-400' : 'text-purple-600'
                    }`}
                  >
                    {cert.issuer}
                  </p>
                  <p className="mb-4 text-lg">{cert.year}</p>
                  <Button
                    onClick={() => window.open(cert.certificateUrl, '_blank')}
                    className="btn-press border-4 border-black bg-green-400 text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-green-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LIHAT SERTIFIKAT
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
