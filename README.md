# gdrive-oauth

Halaman utama, kebijakan privasi, dan ketentuan layanan untuk klien OAuth 2.0
**Google Drive Backup** — dapat dipakai aplikasi klien apa pun (desktop, CLI, atau layanan lain)
untuk mencadangkan file ke Google Drive milik pengguna sendiri. Tidak terikat pada satu aplikasi.

Diterbitkan dengan GitHub Pages:

- `index.html` — halaman utama aplikasi
- `privacy.html` — kebijakan privasi
- `terms.html` — ketentuan layanan

URL ini dipakai di Google Cloud Console (OAuth consent screen → Branding) sebagai halaman
aplikasi dan kebijakan privasi. Isi halaman berbahasa Indonesia; kebijakan tetap merujuk pada
persyaratan Google API Services User Data Policy (termasuk Limited Use).

## Struktur

```
index.html            halaman utama
privacy.html          kebijakan privasi
terms.html            ketentuan layanan
assets/style.css      tema bersama (token warna Astro Paper, layout, tipografi)
assets/theme.js       toggle terang/gelap, disimpan di localStorage
assets/fonts/         Google Sans Code (variable, subset latin) — di-host sendiri
assets/favicon.svg    favicon
```

HTML dan CSS statis — tanpa build step dan tanpa dependensi runtime. Halaman tidak melakukan
permintaan ke pihak ketiga: font disajikan dari repositori ini, bukan CDN font.

## Tema

Desain adaptasi dari [Astro Paper](https://github.com/satnaing/astro-paper) (MIT): token warna
yang sama, kolom konten `48rem`, tautan bergaris putus-putus, indikator nav aktif bergaris
bergelombang, dan toggle tema matahari/bulan.

## Pratinjau lokal

```powershell
# dari root repositori
python -m http.server 8000
# lalu buka http://localhost:8000/
```
