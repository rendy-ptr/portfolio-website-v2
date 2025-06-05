'use client';
import { education } from '@/mocks/Educations';

type AboutProps = {
  darkMode: boolean;
};

const About = ({ darkMode }: AboutProps) => {
  return (
    <section id="about" className="relative px-4 py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          className={`mb-8 text-5xl font-black transition-all duration-500 hover:scale-105 ${
            darkMode ? 'text-yellow-400' : 'text-pink-600'
          }`}
        >
          TENTANG SAYA
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div
            className={`border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:scale-105 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <p className="mb-6 text-xl leading-relaxed">
              Saya adalah mahasiswa semester akhir jurusan Teknik Informatika
              dengan pengalaman magang selama 3 bulan sebagai programmer di
              industri. Selama masa magang, saya terbiasa bekerja dalam tim
              pengembang dan mengerjakan berbagai tantangan teknis, yang semakin
              memperkuat minat saya di dunia teknologi.
            </p>
            <p className="mb-6 text-xl leading-relaxed">
              Saya memiliki ketertarikan yang kuat pada bidang fullstack
              developer, machine learning, dan data science. Bagi saya,
              membangun solusi dari sisi front-end hingga back-end, serta
              menggali wawasan dari data melalui analisis dan model pembelajaran
              mesin, adalah hal yang sangat menarik dan menantang. Ketiga bidang
              ini saling berkaitan dan memiliki peran penting dalam menghadapi
              tantangan di era digital saat ini.
            </p>
            <p className="text-xl leading-relaxed">
              Di luar aktivitas ngoding, saya senang mengeksplorasi teknologi
              terbaru, bermain game, serta aktif berbagi pengetahuan dan
              berdiskusi di komunitas developer.
            </p>
          </div>
          <div
            className={`border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:scale-105 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${
              darkMode ? 'bg-pink-400' : 'bg-cyan-400'
            }`}
          >
            <h3 className="mb-4 text-2xl font-black text-black">
              RIWAYAT PENDIDIKAN
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-black pl-4">
                  <h4 className="text-lg font-bold text-black">{edu.level}</h4>
                  <p className="text-md font-semibold text-black">
                    {edu.school}
                  </p>
                  <p className="text-sm text-black">{edu.period}</p>
                  <p className="mt-1 text-sm text-black">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
