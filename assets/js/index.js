document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('input-text');
    const output = document.getElementById('output-text');
    const btnCopy = document.getElementById('btn-salin');
    const successCopy = document.getElementById('copied');

    // Generate | misal oke gas maka outputnya omke gams
    function generate(text = textArea.value) {
        const words = text.split(' ');
        var value = '';
        // kata
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            console.log(word);
            // huruf
            valWord = '';
            for (let j = 0; j < word.length; j++) {
                let char = word[j];
                if (j == word.length - 1) {
                    valWord += char;
                } else if (char === 'a' || char === 'i' || char === 'u' || char == 'e' || char === 'o') {
                    valWord += char + 'm';
                } else if (char === 'A' || char === 'I' || char === 'U' || char == 'E' || char === 'O') {
                    valWord += char + 'M';
                } else if (char === 'b') {
                    valWord += 'v';
                } else if (char === 'B') {
                    valWord += 'V';
                } else {
                    valWord += char;
                }
            }
            value += valWord + ' ';

        }
        return value;
    }

    // input text
    textArea.addEventListener('input', () => {
        const valueGenerator = generate();
        output.innerText = valueGenerator;
    });

    // copy text
    btnCopy.addEventListener('click', () => {
        // salin text output
        const text = output.innerText;
        navigator.clipboard.writeText(text);

        // show copied
        successCopy.className = 'show';
        setTimeout(() => {
            successCopy.className = successCopy.className.replace('show', 'hide');
        }, 750);

    });

});