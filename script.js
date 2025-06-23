const textarea = document.getElementById('textarea');
textarea.value =
    'Antarmuka Baris Perintah buat orang gabut.\nKode sumber:    https://github.com/Alreynn/cli-untuk-gabut\nSitus:          https://alreynn.github.io/cli-untuk-gabut/\nSemua fungsi di dalam Antarmuka Baris Perintah ini peka huruf besar/kecil.\n';

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