function searchImages() {
    const word = document.getElementById('wordInput').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!word) {
        alert('Please type a word');
        return;
    }

    // Placeholder: Show dummy images for now
    for (let i = 0; i < 4; i++) {
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/150?text=' + encodeURIComponent(word);
        resultsDiv.appendChild(img);
    }
}
