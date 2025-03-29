// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
}) 

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

const productDescriptions = {
    "Artist": "DIA BISA GAMBAR, AND REALLY GOOD AT IT, n if im not mistaken dia pernah bikin kayak komik buat temennya yang lagi ultah?? how sweet it issss,",
    "Soft Spoken": "TAPI BOONG WOKAWKOAOKA. kagak ada soft spoken soft spokennya ni orang tua, jangan ketipu ama tubuh mungil dan wajah polosnya, sekali dia bersuara hilang sudah ekspetasimu itu. Brandingnya doang suka ama anak kecil pdhl ma kagak family friendly. Apalagi kalau badmood beehh semua orang dia anjing anjingin kali",
    "DAMN": "one word to descripe her ootd is 'damn', just look at this photo, KECE BANGET ANJIRR?? kadang kek kecee bet kadang juga bisa lucuu banget, ykw everyday i met her i always want to give compliment to her outfit but i know it'll be awkward cz im bad at give compliment",
    "English Lover": "first impression aku ke orang ini adahal 'gila englishnya gacor banget', dan beberapa bulan setelahnya everythings make sense, ternyata dia pernah ke kampung inggris selama 6 bulan?? trus dia udah punya experience ngajar 3 tahun?? keren ga?? KEREN BANGET LAH GILAAAAAA (makanya aku nerima tawaran buat jadi kadiv speech, biar bisa kek dia hehe)",
    "Cebol": "TUA CEBOL AWKOAKOWAKO TUA CEBOL, LEBIH PENDEK DARI VARIO WAOKWAKOAWKOWAKOAWKO. fyi adek aku aja kelas 2 smp udah 170an, lah diaa???? udah tua cebol lagi wakowakooawkawok",
    "Make Up": "Last but not least, she LOVE make up, kadang dia ngeup foto/vid make up dia sekali seminggu, n imo yg awam dari per-make upan, make up dia tu bagus banget anjirr?? kek yg ini lucuu bangett sumpah, tp dia juga bisa make up yang badass gitu. Ga cuman itu daily make up dia jugaa cakeppp, mau kupuji kalau ketemu tp lagi lagi takut jadi awkward"
};

// Event listener untuk setiap tombol "eye"
itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        e.preventDefault();

        const productCard = btn.closest('.product-card'); 
        const productImage = productCard.querySelector('.product-image img').src;
        const productTitle = productCard.querySelector('.product-content h3').textContent;
        modalImage.src = productImage;
        modalTitle.textContent = productTitle;
        modalDescription.textContent = productDescriptions[productTitle] || "Deskripsi tidak tersedia.";
        itemDetailModal.style.display = 'flex';
    };
});

// Tutup modal saat klik tombol "x"
document.querySelector('.close-icon').onclick = (e) => {
    e.preventDefault();
    itemDetailModal.style.display = 'none';
};

// Tutup modal saat klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};

