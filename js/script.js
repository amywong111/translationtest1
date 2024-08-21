document.getElementById('translateButton').addEventListener('click', async function() {
    const sourceTextValue = document.getElementById('sourceText').value;

    if (sourceTextValue.trim() === "") {
        alert("Please enter some text to translate.");
        return;
    }

    try {
        const response = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: sourceTextValue,
                source: 'en',
                target: 'zh-TW',
                format: 'text'
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error('Translation service failed');
        }

        const result = await response.json();
        document.getElementById('outputText').value = result.translatedText;
    } catch (error) {
        alert('Error: ' + error.message);
    }
});