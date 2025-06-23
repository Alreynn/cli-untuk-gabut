function sendMessage() {
    const textarea = document.getElementById('textarea');
    const input = document.getElementById('input');
    const userInput = input.value;
    
    const selectedWord = [ 'pkg', 'apt', 'git', 'sudo', 'cd', 'ls', 'rm' ]
    textarea.value += `$ ${userInput}\n`;
    input.value = '';
    
    selectedWord.forEach(wordIncluded => {
        if (userInput.includes(wordIncluded)) {
            textarea.value += 'Tidak didukung!\n';
        }
    })
    return false;
}