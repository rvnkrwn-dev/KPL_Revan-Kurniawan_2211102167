# HTML Semantik, CSS, dan JavaScript

## 📌 Apa Itu HTML Semantik?
HTML **semantik** adalah penggunaan elemen HTML yang memiliki arti jelas sesuai dengan kontennya. Dengan menggunakan elemen **semantik**, kita membantu browser, mesin pencari, dan pengembang lain memahami struktur dan isi halaman web dengan lebih baik.

## 🎯 Mengapa HTML Semantik Penting?
✅ **Lebih Mudah Dibaca** → Struktur kode lebih jelas dan mudah dipahami.  
✅ **SEO Friendly** → Mesin pencari lebih mudah memahami konten halaman.  
✅ **Aksesibilitas Lebih Baik** → Membantu screen reader memahami konten untuk pengguna berkebutuhan khusus.  
✅ **Memudahkan Pengembangan** → Mempermudah tim dalam mengembangkan dan memelihara kode.

## 🔍 Contoh Elemen Semantik di HTML
Berikut adalah beberapa elemen HTML semantik yang sering digunakan:

| Elemen | Deskripsi |
|--------|-----------|
| `<header>` | Bagian kepala dari halaman atau suatu bagian |
| `<nav>` | Bagian navigasi yang berisi tautan |
| `<main>` | Bagian utama dari halaman |
| `<section>` | Bagian dari halaman dengan topik tertentu |
| `<article>` | Konten mandiri seperti blog post |
| `<aside>` | Konten sampingan seperti sidebar |
| `<footer>` | Bagian bawah dari halaman |
| `<figure>` | Digunakan untuk menyematkan gambar |
| `<figcaption>` | Keterangan gambar dalam `<figure>` |

## 🔄 Perbedaan HTML Semantik dan Non-Semantik
HTML **non-semantik** menggunakan elemen yang tidak memberikan makna tentang isi kontennya. Contohnya:

**HTML Non-Semantik:**
```html
<div id="header">Judul Website</div>
<div id="nav">
    <a href="#">Beranda</a>
    <a href="#">Tentang</a>
</div>
```

**HTML Semantik:**
```html
<header>
    <h1>Judul Website</h1>
</header>
<nav>
    <ul>
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Tentang</a></li>
    </ul>
</nav>
```
Dengan menggunakan elemen semantik, kode lebih mudah dipahami oleh browser dan pengembang.

## 🏗️ Struktur HTML Semantik
Berikut adalah contoh struktur HTML menggunakan elemen semantik:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh HTML Semantik</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Judul Website</h1>
        <nav>
            <ul>
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Tentang</a></li>
                <li><a href="#">Kontak</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Artikel Terbaru</h2>
            <article>
                <h3>Judul Artikel</h3>
                <p id="article-content">Ini adalah isi artikel.</p>
                <button id="change-text">Ubah Teks</button>
            </article>
        </section>
    </main>

    <aside>
        <h3>Widget atau Iklan</h3>
        <p>Ini adalah sidebar dengan informasi tambahan.</p>
    </aside>

    <footer>
        <p>&copy; 2024 Website Saya</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

## 🎨 CSS untuk HTML Semantik
Berikut adalah contoh CSS yang digunakan untuk mempercantik tampilan halaman:

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

main {
    padding: 20px;
    background: white;
    margin: 20px;
    border-radius: 5px;
}

button {
    background-color: #008CBA;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #005f73;
}

footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
```

## 🚀 JavaScript untuk Interaksi
Contoh JavaScript untuk mengubah teks artikel saat tombol ditekan:

```js
// script.js
document.getElementById("change-text").addEventListener("click", function() {
    document.getElementById("article-content").textContent = "Teks telah diubah!";
});

// Menampilkan waktu saat ini
document.addEventListener("DOMContentLoaded", function() {
    const timeDisplay = document.createElement("p");
    timeDisplay.id = "current-time";
    document.body.appendChild(timeDisplay);
    updateTime();
    setInterval(updateTime, 1000);
});

function updateTime() {
    const now = new Date();
    document.getElementById("current-time").textContent = "Waktu saat ini: " + now.toLocaleTimeString();
}

// Menampilkan alert saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di website ini!");
};
```

## 📚 Referensi
- [MDN Web Docs - HTML Semantik](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [MDN Web Docs - HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

