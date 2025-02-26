di folder auth-tutorial :

- npm init -y --> Lalu akan ada package.json
- npm install express cookie-parser mailtrap bcryptjs dotenv jsonwebtoken mongoose crypto

  \*express --> server, routing

  \*cookie-parser --> cookie-parser sangat berguna dalam proyek Express.js untuk membaca dan mengelola cookie dari klien dengan mudah. Ini sering digunakan dalam: 1. Autentikasi (misalnya menyimpan token sesi pengguna dalam cookie) 2. Pelacakan sesi pengguna

  \*mailtrap --> Ideal untuk testing fitur registrasi, reset password, notifikasi, dll dalam aplikasi.

  \*bycript --> pustaka JavaScript yang digunakan untuk hashing password di Node.js. Ini berguna untuk menyimpan password dengan aman dalam database, sehingga tidak disimpan dalam bentuk teks biasa (plaintext).

  \*dotenv --> dotenv adalah pustaka Node.js yang digunakan untuk menyimpan dan mengelola variabel lingkungan (environment variables) dalam file .env. Ini berguna agar informasi sensitif seperti database URL, API key, dan secret key tidak disimpan langsung dalam kode sumber.

  \*jsonwebtoken (JWT) digunakan untuk membuat dan memverifikasi token autentikasi, sehingga pengguna bisa login tanpa menyimpan sesi di server.

  \*mongoose adalah ODM (Object Data Modeling) yang digunakan untuk berinteraksi dengan MongoDB dalam aplikasi Node.js.

  \*crypto adalah modul bawaan Node.js untuk enkripsi, hashing, dan kriptografi.

  - npm i nodemon -D

- tambahkan di package.json --> "type": "module",
  dan
  "dev": "nodemon backend/index.js"

==%% connectDB.js %%==
Penjelasan process.exit(code)
process.exit(code) digunakan untuk menghentikan eksekusi program Node.js.
Parameter code adalah exit code, yang memberi tahu sistem apakah program berhenti dengan sukses atau ada error.
Standar exit code:

process.exit(0): Sukses → Program berhenti tanpa error.
process.exit(1): Gagal → Ada kesalahan yang menyebabkan program berhenti.

+++ NAHH ini sampai dengan verifikasi email, yang nantinya akan mengirim welcomeEmail
oke kan hehe!
