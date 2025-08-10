# Timnas Indonesia — Ringkasan (Halaman statis)

Halaman statis sederhana menampilkan ringkasan skuad Timnas Indonesia.  
Buat untuk demo / portofolio, cocok di-deploy via GitHub Pages.

## Cara pakai
1. Clone repo:
2. Letakkan `index.html`, `style.css`, `script.js` di root repository (atau di folder `docs/` jika menggunakan GitHub Pages via `docs`).
3. Edit data di `script.js` (variabel `TEAM_META`) sesuai skuad aktual.
4. Enable GitHub Pages di repo settings (source: `main` branch root atau `docs/`).
5. Selesai — buka `https://USERNAME.github.io/REPO`.

## Catatan
- Ganti `logo.png` atau hapus tag `<img>` jika tidak punya logo.
- Data pemain saat ini contoh — bisa dikoneksikan ke API untuk dynamic data.
Tips deploy cepat
Buat repo baru, push 3 file tersebut.

Di GitHub → Settings → Pages → pilih branch main dan folder /root atau /docs.

Setelah beberapa menit, halaman akan tersedia di https://USERNAME.github.io/REPO.

Mau aku tambahkan:

contoh players.json terpisah, atau

integrasi fetch API (mis. GitHub raw JSON) supaya data bisa diupdate tanpa commit?

Katakan mau yang mana, aku bantu tambahkan
