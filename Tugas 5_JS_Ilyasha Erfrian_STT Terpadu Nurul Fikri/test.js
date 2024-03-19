function hitungGaji() {
    const nama = document.getElementById("nama").value;
    const jabatan = document.getElementById("jabatan").value;
    const status = document.getElementById("status").value;
    const gaji = parseFloat(document.getElementById("gaji").value);

    let gajiPokok = 0;
    let tunjanganJabatan = 0;
    let bpjs = 0;
    let tunjanganKeluarga = 0;
    let totalGaji = 0;

    switch (jabatan) {
        case "Manager":
            gajiPokok = 15000000;
            break;
        case "Asisten Manager":
            gajiPokok = 10000000;
            break;
        case "Staff":
            gajiPokok = 5000000;
            break;
        default:
            break;
    }

    tunjanganJabatan = gajiPokok * 0.15;
    bpjs = gajiPokok * 0.1;
    tunjanganKeluarga = status === "Menikah" ? gajiPokok * 0.2 : 0;
    totalGaji = gajiPokok + tunjanganJabatan + tunjanganKeluarga - bpjs;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Hasil Perhitungan Gaji</h2>
        <p><strong>Nama Pegawai:</strong> ${nama}</p>
        <p><strong>Jabatan:</strong> ${jabatan}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Gaji Pokok:</strong> Rp ${gajiPokok.toLocaleString()}</p>
        <p><strong>Tunjangan Jabatan:</strong> Rp ${tunjanganJabatan.toLocaleString()}</p>
        <p><strong>BPJS:</strong> Rp ${bpjs.toLocaleString()}</p>
        <p><strong>Tunjangan Keluarga:</strong> Rp ${tunjanganKeluarga.toLocaleString()}</p>
        <p><strong>Total Gaji:</strong> Rp ${totalGaji.toLocaleString()}</p>
    `;

    // SweetAlert notification
    swal("Success!", "Gaji berhasil dihitung!", "success");
}
