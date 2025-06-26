const textarea = document.getElementById('textarea');
const input = document.getElementById('input');
const asideSandwich = document.getElementById('asideSandwich');
textarea.value = // Teks awal pada saat pertama bika
    'Antarmuka Baris Perintah buat orang gabut.\nKode sumber:    https://github.com/Alreynn/cli-untuk-gabut\nSitus:          https://alreynn.github.io/cli-untuk-gabut/\nMasih dalam tahap pengerjaan.\n';

function sendMessage() {
    const userInput = input.value;
    const selectedWord = [ // Kata - kata yang dipilih buat ngeluarin output tertentu.
        'pkg', 'apt', 'git', 'sudo', 'cd', 'ls',
        'rm', 'touch', 'mkdir', 'mv', 'cp', 'rmdir',
        'cat', 'pwd', 'mv', 'find', 'vim', 'nano',
        'nvim', 'python'
    ]
    const bypassedWord = [ 'echo', 'changelog' ]
    if (userInput !== '') {     // Cek kondisi apabila userInput tidak kosong
        textarea.value += `$ ${userInput}\n`;
        input.value = '';
    } else if (userInput === 'refresh') {
        window.location.reload();
        textarea.value += 'Menyegarkan...\n';
    } else if (userInput === 'clear') {
        textarea.value = '';
    }
    selectedWord.forEach(wordIncluded => {      // Mengecek input kata per kata untuk memastikan apakah mengandung kata yang termasuk dalam array 'selectedWord'
        if (userInput.includes(wordIncluded)) {
            textarea.value += `${wordIncluded} tidak didukung!\n`;
        }
    })
    bypassedWord.forEach(wordBypass => {
        if (userInput.includes(wordBypass)) {
            textarea.value += 'Fungsi ini sedang dalam pengerjaan!\n';
        }
    })
    return false;
}

function getLocalStorage() {
    const textareaSize = localStorage.getItem('fontSize');
    const closeAsidePos = localStorage.getItem('closeAsidePos');
    textarea.style.fontSize = textareaSize;
    asideSandwich.style.top = closeAsidePos;
}
function closeAside() {
    document.getElementById('aside').classList.toggle('show');
}
function showOption(options) {
    document.getElementById(options).classList.toggle('show');
}
function resize(size) {
    textarea.style.fontSize = size;
    localStorage.setItem('fontSize', textarea.style.fontSize);
    getLocalStorage();
}
function changeCloseAsidePos(pos) {
    const position = asideSandwich.style.top = pos;
    localStorage.setItem('closeAsidePos', position);
    getLocalStorage();
}
textarea.addEventListener('click', () => {
    const closeOptions = [
        aside, fontSizeOption, closeAsidePos
    ];
    closeOptions.forEach((item) => {
        item.classList.remove('show');
    });
})

getLocalStorage();