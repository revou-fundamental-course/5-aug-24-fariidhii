// Menunggu DOM selesai dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil elemen form dan div hasil
    const form = document.querySelector('.form1');
    const hasilDiv = document.getElementById('hasil');

    // Menambahkan event listener untuk submit form
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Mengambil nilai input dari form
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
        const usia = document.getElementById('usia').value;
        const beratBadan = document.getElementById('berat-badan').value;
        const tinggiBadan = document.getElementById('tinggi-badan').value;

        // Validasi input
        if (!jenisKelamin || !usia || !beratBadan || !tinggiBadan) {
            alert('Mohon isi semua data');
            return;
        }

        // Menghitung BMI
        const tinggiMeter = tinggiBadan / 100;
        const bmi = beratBadan / (tinggiMeter * tinggiMeter);
        const kategori = getKategoriBMI(bmi);

        // Menampilkan hasil perhitungan
        hasilDiv.innerHTML = `
            <h2>Hasil Perhitungan BMI</h2>
            <p>Jenis Kelamin: ${jenisKelamin.value}</p>
            <p>Usia: ${usia} tahun</p>
            <p>BMI: ${bmi.toFixed(1)}</p>
            <p>Kategori: ${kategori}</p>

        `;
    });

    // Fungsi untuk menentukan kategori BMI
    function getKategoriBMI(bmi) {
        if (bmi < 18.5) return `
        Berat Badan Kurang 
        <div class="tulisan1"> 
        <p> Hasil BMI anda kurang dari 18.5</p> 
        <p>Anda berada dalam kategori Underweight</p>
        <p>Cara terbaik untuk meningkatkan berat badan adalah dengan cara memperbanyak konsumsi makananan kaya nutrisi</p> 
        <button class="form3">Konsultasi Ahli Gizi Via Aplikasi</button> 
        <button class="form3">Registrasi Online Ahli Gizi</button> 
        <p>BMI tidak sepenuhnya mewakiili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda</p> </div> 
        `;
        
        if (bmi < 25) return `
        Berat Badan Normal 
        <div class="tulisan1"> 
        <p> Hasil BMI anda 18.5 sampai 24.9</p> 
        <p>Anda berada dalam kategori Normal</p> 
        <p>Pertahankan berat badan anda yang sekarang. Pastikan untuk selalu menjaga pola makan dan olahraga yang seimbang secara teratur</p> 
        <button class="form3">Konsultasi Ahli Gizi Via Aplikasi</button> 
        <button class="form3">Registrasi Online Ahli Gizi</button> 
        <p>BMI tidak sepenuhnya mewakiili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda</p> </div>
        `;

        if (bmi < 30) return `
        Berat Badan Berlebih 
        <div class="tulisan1">
         <p> Hasil BMI anda 25.0 sampai 29.9</p> 
         <p>Anda berada dalam kategori Overweight</p> 
         <p>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga</p> 
         <p>Jika BMI anda berada dalam kategori ini maka anda dianjurkan  untuk menurutkan berat badan hingga batas normal.</p> 
         <button class="form3">Konsultasi Ahli Gizi Via Aplikasi</button> 
         <button class="form3">Registrasi Online Ahli Gizi</button> 
         <p>BMI tidak sepenuhnya mewakiili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda</p> </div>
         `;

        return 'Obesitas';
    }

    // Menambahkan event listener untuk tombol reset
    const resetButton = form.querySelector('button:last-child');
    resetButton.addEventListener('click', function(e) {
        e.preventDefault();
        form.reset();
        hasilDiv.innerHTML = '<h1 class="reset">Data Telah Di Reset</h1>';
    });
});
