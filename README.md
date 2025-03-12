# FakeStore Performance Test

![k6](https://img.shields.io/badge/k6-performance%20testing-0e2135?style=flat&logo=k6)

## 📌 Deskripsi

Repository ini berisi skenario *performance testing* menggunakan [k6](https://k6.io/) untuk menguji API *FakeStore* (https://fakestoreapi.com). Tujuan pengujian ini adalah untuk mengukur performa API dalam kondisi beban tinggi.

## 🚀 Fitur Pengujian
- Load Testing
- Stress Testing
- Threshold Validation
- Custom Scenarios dengan **k6**

## 📂 Struktur Repository
```
├── configs/               # Konfigurasi base URL
├── helpers/               # Helper function untuk request HTTP
├── scenarios/             # Berisi skenario testing
├── test.js                # File utama untuk menjalankan pengujian
├── package.json           # Dependensi project
└── README.md              # Dokumentasi proyek
```

## ⚡ Persyaratan
Pastikan kamu sudah menginstall **k6** di sistem kamu.

```sh
# Cek apakah k6 sudah terinstall
k6 version
```
Jika belum terinstall, kamu bisa mengunduhnya dari [k6.io](https://k6.io/docs/getting-started/installation/).

## 🔧 Cara Menggunakan

1. **Clone repository ini**
   ```sh
   git clone https://github.com/muhammadikbal21/fakestore-performance-test.git
   cd fakestore-performance-test
   ```

2. **Jalankan Load Test**
   ```sh
   k6 run test.js
   ```

3. **Menjalankan Test dengan Thresholds**
   ```sh
   k6 run --thresholds "http_req_duration{p(95)<500}" test.js
   ```

4. **Menampilkan Hasil dalam Format Grafana (JSON Output)**
   ```sh
   k6 run test.js --out json=results.json
   ```

## 📢 Kontribusi
Jika kamu ingin menambahkan atau meningkatkan fitur pengujian ini, silakan buat *pull request* atau buka *issue*.

## 📜 Lisensi
Proyek ini menggunakan lisensi **MIT**.

---
🔥 **Happy Testing!** 🚀

