function tampilkanData() {
    let nama = document.getElementById('nama').value;
    let pekerjaan = document.getElementById('pekerjaan').value;
    let hobi = document.getElementById('hobi').value;

    let hasil = document.getElementById('hasil');

    if (nama && pekerjaan && hobi) {
        hasil.innerHTML = `
            <h2>Informasi Pengguna:</h2>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Pekerjaan:</strong> ${pekerjaan}</p>
            <p><strong>Hobi:</strong> ${hobi}</p>
        `;
    } else {
        hasil.innerHTML = "<p>Silakan lengkapi semua kolom isian.</p>";
    }
}
