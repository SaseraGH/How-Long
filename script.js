// --- Konfigurasi Tanggal Mulai (UBAH TANGGAL INI) ---
// TANGGAL SEJAK KAPAN ANDA BERSAMA
const startDateString = "2025-09-22T00:00:00"; 
const startDate = new Date(startDateString).getTime();

// --- 1. Live Timer Function ---
function updateTimer() {
    const now = new Date().getTime();
    const distance = now - startDate;

    if (distance < 0) {
        // Teks untuk waktu yang belum tiba
        document.getElementById("live-timer").innerHTML = "The journey is about to begin...";
        return; 
    }

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Format output untuk CSS Grid (angka di baris atas, teks di baris bawah)
    const output = 
        `<span class="timer-unit">${days}</span> <span>days</span>
         <span class="timer-unit">${hours.toString().padStart(2, '0')}</span> <span>hours</span> 
         <span class="timer-unit">${minutes.toString().padStart(2, '0')}</span> <span>minutes</span> 
         <span class="timer-unit">${seconds.toString().padStart(2, '0')}</span> <span>seconds</span>`;

    document.getElementById("live-timer").innerHTML = output;
}

updateTimer();
setInterval(updateTimer, 1000);


// --- 2. Animasi Karakter Mandarin Floating (Hanya Melayang) ---
const characters = ['爱', '喜欢', '永远', '心', '缘分', '想你', '抱抱', '✨', '💖'];
const charContainer = document.querySelector('.floating-characters');

function createFloatingCharacter() {
    const char = document.createElement('span');
    char.className = 'floating-character';
    char.innerHTML = characters[Math.floor(Math.random() * characters.length)];
    char.style.left = `${Math.random() * 100}vw`;
    char.style.fontSize = `${Math.random() * 0.8 + 1.2}em`; 
    char.style.animationDuration = `${Math.random() * 15 + 25}s`; 
    char.style.animationDelay = `${Math.random() * 10}s`;
    
    charContainer.appendChild(char);
    
    // Hapus karakter setelah animasi selesai
    char.addEventListener('animationend', () => {
        char.remove();
    });
}

setInterval(createFloatingCharacter, 500); 


// --- 3. Animasi Kilauan (Sparkle Effect) ---
const sparkleContainer = document.querySelector('.sparkle-container');

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    
    const size = Math.random() * 3 + 4; 
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    const duration = Math.random() * 1 + 2; 
    sparkle.style.animationDuration = `${duration}s`;
    sparkle.style.animationDelay = `-${Math.random() * duration}s`;
    
    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, duration * 1000 * 3);
}

setInterval(createSparkle, 100); 


// --- 4. Animasi Ketikan (Typing Effect) pada Judul ---
const titleText = "How long we've been together";
const titleElement = document.getElementById("typing-title");
let charIndex = 0;

function typeWriter() {
    if (charIndex < titleText.length) {
        titleElement.innerHTML += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 120); 
    } else {
        titleElement.innerHTML += '<span class="typing-cursor"></span>';
    }
}

titleElement.innerHTML = '<span class="typing-cursor"></span>'; 
setTimeout(typeWriter, 1000);