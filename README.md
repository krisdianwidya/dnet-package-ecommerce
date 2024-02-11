# Cara menjalankan program ini

1. Cloning project ini menggunakan github clone
2. Install project menggunakan command "npm install"
3. Jalankan project ini mengguakan command "npm start"

# Progress project

- Pada project ini sudah bisa melakukan beberapa fungsionalitas E-Commerce Pembelian Paket internet
- Seperti menampilkan data paket internet, menampilkan data order/keranjang
- Menambah/mengurangi order/keranjang dengan memilih paket internet
- Namun fungsionalitas lain seperti login dan menu untuk customer tidak dapat selesai
- Namun, saya juga telah menyiapkan struktur data dan isi dummy data yang "sebetulnya saya rencanakan" untuk fitur login, dan juga fitur menu customer (dimana menu customer berisi fitur untuk melihat paket internet yang aktif, serta detail sisa kuota dari paket yang aktif tersebut)

# Demo project

- Anda bisa melakukan demo dengan cara langsung cloning seperti informasi paling atas
- Atau bisa juga dengan melihat video ini yang telah saya upload https://drive.google.com/file/d/11rw-tZ6C1J6VbvB5xlvWTY7PUcTzZQlx/view?usp=sharing

# Issue

- Terdapat issue dalam mengerjakan project ini yaitu terkait dengan proses mock rest API, yang mana tidak bisa menggunakan json-server, karena terdapat bug dalam json-server itu sendiri
- Ketika menggunakan json-server, fungsionalitas untuk menampilkan data sesuai dengan relasi-relasi tabel yang berkaitan tidak dapat dilakukan dengan lancar
- Berikut ini bukti video ketika mencoba menggunakan json-server yang menunjukkan bug tersebut https://drive.google.com/file/d/1bGVP9h9GvGPJDG_ixAPSenqF1xM4buFg/view?usp=sharing
- Oleh karena itu untuk melakukan mock rest API, saya menggunakan mirage js, yang mana juga membutuhkan effort lebih banyak jika dibandingkan dengan menggunakan json-server
