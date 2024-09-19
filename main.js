// Ambil elemen dari form
const form = document.getElementById('form-pendaftaran');
const namaInput = document.getElementById('nama');
const nimInput = document.getElementById('nim');
const kelasInput = document.getElementById('kelas');
const alamatInput = document.getElementById('alamat');

// Ambil elemen untuk menampilkan jumlah karakter
const jumlahKarakter = document.getElementById('jumlah-karakter');

// Ambil elemen tbody untuk tabel
const tabelBiodata = document.getElementById('tabel-biodata');

// Fungsi untuk menampilkan data ke tabel
document.getElementById('kirim').addEventListener('click', function() {
    // Ambil nilai input
    const nama = namaInput.value;
    const nim = nimInput.value;
    const kelas = kelasInput.value;
    const alamat = alamatInput.value;

    // Buat elemen tr baru untuk tabel
    const tr = document.createElement('tr');

    // Buat elemen td untuk setiap data
    tr.innerHTML = `
        <td>${nama}</td>
        <td>${kelas}</td>
        <td>${nim}</td>
        <td>${alamat}</td>
    `;

    // Tambahkan tr ke tabel
    tabelBiodata.appendChild(tr);

    // Reset form setelah dikirim
    form.reset();
});

// Menambahkan event-event tambahan
namaInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#e0e0e0';
});

namaInput.addEventListener('blur', function() {
    this.style.backgroundColor = '';
});

namaInput.addEventListener('input', function() {
    jumlahKarakter.textContent = 'Jumlah karakter: ' + this.value.length;
});

alamatInput.addEventListener('change', function() {
    console.log('Alamat diubah.');
});

document.getElementById('kirim').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#4CAF50';
    this.style.color = 'white';
});
