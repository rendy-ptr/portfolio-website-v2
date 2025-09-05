import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Inisialisasi Groq dengan API key dari environment variable
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Konteks portfolio dalam bentuk string (dari portfolioContext.txt)
const portfolioContext = `# Informasi Portfolio Rendy Putra Pratama
## Personal
- Nama: Rendy Putra Pratama
- Tempat, Tanggal Lahir: Jakarta, 8 Juli 2003
- Usia: 22 tahun pada 2025
- Domisili: Karawang, Jawa Barat, Indonesia
- Deskripsi: Informasi pribadi tentang Rendy.
- Kata Kunci: rendy, nama, lahir, usia, jakarta
- Prioritas: 5

## Pendidikan
- Status: Mahasiswa Teknik Informatika semester akhir
- Universitas: Universitas Buana Perjuangan Karawang
- Deskripsi: Pendidikan formal Rendy.
- Kata Kunci: kuliah, universitas, informatika, karawang
- Prioritas: 4

## Keahlian
- Frontend: JavaScript, TypeScript, React.js, Next.js
- Backend: Node.js, PHP, Laravel, RESTful API
- Database: MongoDB, PostgreSQL
- AI/ML: Python
- Deskripsi: Keahlian teknis Rendy.
- Kata Kunci: skill, keahlian, frontend, backend, database, ai, ml
- Prioritas: 5

## Proyek
- Sistem Kasir: Sistem kasir full-stack menggunakan React.js dan Node.js
- Deteksi Penipuan Ethereum: Deteksi penipuan Ethereum menggunakan machine learning
- Masih Banyak proyek lainnya yang belum disebutkan.
- Deskripsi: Proyek yang dikembangkan oleh Rendy.
- Kata Kunci: proyek, kasir, full-stack, machine learning, ethereum
- Prioritas: 4

## Identitas
- Nama: Rendy Putra Pratama
- Lokasi: Karawang, Indonesia
- Peran Asisten: Saya adalah RendyBot, asisten virtual pribadi Rendy.
- Tugas: Menjawab pertanyaan tentang Rendy dan portofolionya.
- Deskripsi: Identitas asisten dan info umum Rendy.
- Kata Kunci: tinggal, domisili, rendy siapa, asisten, kamu siapa
- Prioritas: 3

## Sapaan
- Sambutan: Halo! Saya RendyBot. Silakan tanya tentang keahlian, proyek, atau pengalaman Rendy.
- Deskripsi: Respon sapaan pengguna.
- Kata Kunci: halo, hai, hi, pagi, siang
- Prioritas: 2

## Pengalaman
- Perusahaan: PT. Jidoka System Indonesia
- Durasi: 3 bulan
- Peran: Programmer Magang
- Proyek: Mengerjakan sistem ERP berbasis Odoo menggunakan Python dan XML.
- Deskripsi: Pengalaman magang Rendy sebagai programmer.
- Kata Kunci: magang, kerja, pengalaman, jidoka, odoo, erp, python
- Prioritas: 4

## Kontak
- Email: rendyworksspace@gmail.com
- LinkedIn: https://www.linkedin.com/in/rendy-putra-930460334
- Instagram: https://www.instagram.com/rndyptrr_
- Whatsapp: https://wa.me/6285777005969
- Deskripsi: Informasi kontak dan media sosial Rendy.
- Kata Kunci: kontak, email, linkedin, instagram, whatsapp, sosial
- Prioritas: 3

## Metode Kerja
- Alat: Git
- Deskripsi: Terbiasa menggunakan Git untuk version control dan kolaborasi proyek.
- Deskripsi: Metode kerja dan alat yang biasa digunakan Rendy.
- Kata Kunci: git, version control, workflow, kerja
- Prioritas: 3

## Visi
- Minat: Web development, Machine Learning/AI, dan Data Science.
- Deskripsi: Rendy memiliki ketertarikan di bidang teknologi, terutama dalam pengembangan web, AI/ML, dan analisis data.
- Deskripsi: Visi dan passion Rendy di bidang teknologi.
- Kata Kunci: visi, passion, ketertarikan, minat, karier
- Prioritas: 2

## Alat Favorit
- Frontend: React + TypeScript
- Testing: Postman
- Deskripsi: Rendy paling suka menggunakan React + TypeScript untuk frontend dan Postman untuk testing API.
- Deskripsi: Tools dan teknologi favorit Rendy.
- Kata Kunci: tools, favorit, tech stack, react, typescript, postman
- Prioritas: 3

## Ringkasan
- Ringkasan: Rendy berminat berkarir di bidang web development, machine learning/AI, hingga data science.
- Deskripsi: Ringkasan profil dan tujuan karier Rendy.
- Kata Kunci: cv, ringkasan, profil, karier
- Prioritas: 4
`;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Kirim permintaan ke Groq API
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: `
          Kamu adalah RendyBot, asisten virtual untuk portfolio Rendy Putra Pratama.
          - Utamakan menjawab pertanyaan tentang Rendy dan portfolionya.
          - Jika pertanyaan umum (misal matematika sederhana, sejarah, pengetahuan umum, sains), jawab dengan benar dan singkat.
          - Jika pertanyaan sama sekali di luar pengetahuan umum maupun portfolio Rendy, sampaikan dengan sopan bahwa fokusmu adalah portfolio.
          - Jawab dalam bahasa Indonesia.
          - Gunakan format teks sederhana, tanpa Markdown.
          - Untuk daftar poin penting (skill, kontak, proyek), gunakan nomor (1., 2., dst.) dan pisahkan tiap poin dengan baris baru.
          `,
        },
        { role: 'user', content: message },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
