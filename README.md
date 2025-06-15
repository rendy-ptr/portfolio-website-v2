# Portfolio Website V2

## 📋 Deskripsi

Portfolio Website V2 adalah situs web portofolio pribadi yang dibangun untuk menampilkan proyek, keterampilan, dan informasi kontak secara profesional. Proyek ini menggunakan teknologi web modern untuk memberikan pengalaman pengguna yang responsif dan interaktif.

## 🤖 Demo URL
- https://www.rndyptr.my.id/

## ✨ Fitur

- Formulir Kontak dengan Pengiriman Email Otomatis: Memungkinkan pengunjung mengirim pesan langsung ke email Anda melalui formulir situs.
- Dark Mode: Mendukung mode gelap untuk kenyamanan visual pengguna di kondisi cahaya rendah.
- Desain Responsif: Tampilan dioptimalkan untuk perangkat desktop dan mobile.
- Chatbot AI Interaktif: Membantu pengunjung dengan menjawab pertanyaan seputar website, proyek, dan informasi pribadi secara real-time.

## 🛠️ Teknologi yang Digunakan

- Next.js
- Typescript
- Tailwind Css
- Node.js
- Shadcn UI

## 📋 Persyaratan Sistem

- Node.js (versi 20 atau lebih tinggi)
- npm (node package manager)
- API key untuk layanan seperti Groq API/Gemini (untuk chatbot)
- API key untuk layanan pengiriman email (sendgrid/mailjet/brevo) dan lain lain

## 🚀 Instalasi

1. **Kloning Repository**

   ```bash
   git clone https://github.com/rendy-ptr/portfolio-website-v2.git
   ```

2. **Buka Direktori**

   ```bash
   cd portfolio-website-v2
   ```

3. **Install dependensi**

   ```bash
   npm install
   ```

4. **Konfigurasi variabel lingkungan**

   - Buat file `env.local` atau jalankan perintah:
      ```
      cp env.example env.local
     ```
   - Kemudian sesuaikan Konfigurasi :
     ```
        GROQ_API_KEY=ENTER_YOUR_GROQ_API_KEY_HERE
        EMAIL_HOST=ENTER_YOUR_EMAIL_HOST_HERE
        EMAIL_PORT=ENTER_YOUR_EMAIL_PORT_HERE
        EMAIL_SECURE=ENTER_YOUR_EMAIL_SECURE_HERE
        EMAIL_USER=ENTER_YOUR_EMAIL_USER_HERE
        EMAIL_PASS=ENTER_YOUR_EMAIL_PASS_HERE
        EMAIL_FROM="ENTER_YOUR_EMAIL_FROM_HERE"
        EMAIL_TO=ENTER_YOUR_EMAIL_TO_HERE
     ```

5. **Jalankan aplikasi**
     ```bash
      npm run dev
     ```

6. **Build untuk Production (opsional)**
     ```bash
      npm run build
     ```

## 📝 Cara Penggunaan

1. Buka situs `http://localhost:3000` di browser setelah menjalankan perintah `npm run dev`
2. Navigasi melalui bagian Beranda, Portofolio, Tentang, dan Kontak.
3. Gunakan Chatbot AI untuk bertanya tentang website, proyek, atau informasi pribadi seperti keahlian dan kontak.
4. Isi formulir kontak untuk mengirim pesan langsung ke email.
5. Aktifkan Dark Mode melalui tombol atau pengaturan untuk pengalaman visual yang lebih nyaman.
6. Sesuaikan konten di `src/` untuk memperbarui informasi pribadi, proyek, atau gaya situs.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
