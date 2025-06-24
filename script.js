const textarea = document.getElementById('textarea');
textarea.value =
    'Antarmuka Baris Perintah buat orang gabut.\nKode sumber:    https://github.com/Alreynn/cli-untuk-gabut\nSitus:          https://alreynn.github.io/cli-untuk-gabut/\nMasih dalam tahap pengerjaan.\n';

function sendMessage() {
    const input = document.getElementById('input');
    const userInput = input.value;
    const selectedWord = [
        'pkg', 'apt', 'git', 'sudo', 'cd',
        'ls', 'rm', 'touch', 'mkdir', 'cp',
        'rmdir', 'cat', 'pwd', 'mv', 'find',
        'vim', 'nano', 'nvim', 'python'
    ]
    const bypassedWord = [ 'echo' ]
    textarea.value += `$ ${userInput}\n`;
    input.value = '';
    
    selectedWord.forEach(wordIncluded => {
        if (userInput.includes(wordIncluded)) {
            textarea.value += `${wordIncluded} tidak didukung!\n`;
        }
    })
    if (userInput.includes(bypassedWord)) {
        textarea.value += 'Fungsi ini sedang dalam pengerjaan!\n';
    } else if (userInput === 'refresh') {
        window.location.reload();
        textarea.value += 'Menyegarkan...\n';
    } else if (userInput === 'clear') {
        textarea.value = '';
    }
    return false;
}

function getFontSize() {
    const textareaSize = localStorage.getItem('fontSize');
    textarea.style.fontSize = textareaSize;
}
function closeAside() {
    const aside = document.getElementById('aside');
    aside.classList.toggle('show');
}
function showOption() {
    const fontSizeOption = document.getElementById('fontSizeOption');
    fontSizeOption.classList.toggle('show');
}
function resize(size) {
    textarea.style.fontSize = size;
    localStorage.setItem('fontSize', textarea.style.fontSize);
    getFontSize();
}
getFontSize();

textarea.addEventListener('click', () => {
    aside.classList.remove('show');
    fontSizeOption.classList.remove('show');
})