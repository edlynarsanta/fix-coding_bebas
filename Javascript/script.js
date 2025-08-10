// Data Pemain Timnas Indonesia
const pemainTimnas = [
    {
        nama: "Egy Maulana Vikri",
        posisi: "Gelandang",
        foto: "../Image/egy maulana vikri.jpg",
        klub: "Dewa United FC",
        umur: 22
    },
    {
        nama: "Asnawi Mangkualam",
        posisi: "Bek",
        foto: "../Image/Asnawi Mangkualam.jpg",
        klub: "Jeonnam Dragons",
        umur: 23
    },
    {
        nama: "Marc Klok",
        posisi: "Gelandang",
        foto: "../Image/Marc Klok.jpg",
        klub: "Persib Bandung",
        umur: 30
    },
    {
        nama: "Nadeo Argawinata",
        posisi: "Kiper",
        foto: "../Image/Nadeo Argawinata.jpg",
        klub: "Bali United",
        umur: 27
    },
    {
        nama: "Elkan Baggott",
        posisi: "Bek",
        foto: "../Image/Elkan Baggott.jpg",
        klub: "Ipswich Town",
        umur: 20
    },
    {
        nama: "Witan Sulaeman",
        posisi: "Penyerang",
        foto: "../Image/Witan Sulaeman.jpg",
        klub: "SSV Jahn Regensburg",
        umur: 21
    }
];

// Data Jadwal Pertandingan
const jadwalPertandingan = [
    {
        tanggal: "15 November 2023",
        lawan: "Irak",
        kompetisi: "Kualifikasi Piala Dunia 2026",
        lokasi: "Gelora Bung Karno, Jakarta"
    },
    {
        tanggal: "20 November 2023",
        lawan: "Filipina",
        kompetisi: "Kualifikasi Piala Dunia 2026",
        lokasi: "Rizal Memorial Stadium, Manila"
    },
    {
        tanggal: "10 Januari 2024",
        lawan: "Vietnam",
        kompetisi: "Piala Asia 2023",
        lokasi: "Gelora Bung Karno, Jakarta"
    },
    {
        tanggal: "15 Januari 2024",
        lawan: "Thailand",
        kompetisi: "Piala Asia 2023",
        lokasi: "Rajamangala Stadium, Bangkok"
    }
];

// Fungsi untuk menampilkan pemain
function tampilkanPemain() {
    const pemainContainer = document.getElementById('pemain-container');
    
    pemainTimnas.forEach(pemain => {
        const pemainCard = document.createElement('div');
        pemainCard.className = 'pemain-card';
        
        pemainCard.innerHTML = `
            <img src="${pemain.foto}" alt="${pemain.nama}">
            <div class="pemain-info">
                <h3>${pemain.nama}</h3>
                <p><strong>Posisi:</strong> ${pemain.posisi}</p>
                <p><strong>Klub:</strong> ${pemain.klub}</p>
                <p><strong>Umur:</strong> ${pemain.umur} tahun</p>
            </div>
        `;
        
        pemainContainer.appendChild(pemainCard);
    });
}

// Fungsi untuk menampilkan jadwal
function tampilkanJadwal() {
    const jadwalTbody = document.getElementById('jadwal-pertandingan');
    
    jadwalPertandingan.forEach(jadwal => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${jadwal.tanggal}</td>
            <td>${jadwal.lawan}</td>
            <td>${jadwal.kompetisi}</td>
            <td>${jadwal.lokasi}</td>
        `;
        
        jadwalTbody.appendChild(row);
    });
}

// Event Listener untuk tombol dukung
document.getElementById('dukung-btn').addEventListener('click', function() {
    alert('Terima kasih telah mendukung Timnas Indonesia! 🇮🇩');
});

// Event Listener untuk form newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Terima kasih ${email} telah berlangganan newsletter Timnas Indonesia!`);
    this.reset();
});

// Smooth scrolling untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Jalankan fungsi saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    tampilkanPemain();
    tampilkanJadwal();
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = this.href;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Halaman Timnas Indonesia 2025 berhasil dimuat.");
});
// Data jadwal pertandingan
const jadwal = [
    { tanggal: "15 Agustus 2025", waktu: "19:30", lawan: "Vietnam", lokasi: "Stadion Utama Gelora Bung Karno" },
    { tanggal: "20 Agustus 2025", waktu: "20:00", lawan: "Thailand", lokasi: "Rajamangala Stadium" },
    { tanggal: "25 Agustus 2025", waktu: "18:00", lawan: "Malaysia", lokasi: "Bukit Jalil Stadium" },
    { tanggal: "30 Agustus 2025", waktu: "19:00", lawan: "Singapura", lokasi: "Stadion Kapten I Wayan Dipta" }
];

// Ambil elemen tbody
const tbody = document.querySelector("#jadwal-table tbody");

// Tampilkan data ke tabel
jadwal.forEach(match => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${match.tanggal}</td>
        <td>${match.waktu}</td>
        <td>${match.lawan}</td>
        <td>${match.lokasi}</td>
    `;
    tbody.appendChild(row);
});