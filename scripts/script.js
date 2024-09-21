

function randomize(element){
    document.addEventListener('DOMContentLoaded', () => {
        const titleElement = document.getElementById(element);
        const text = titleElement.innerText;
        titleElement.innerHTML = ''; // Clear the text
    
        // Function to create a random character
        function getRandomChar() {
            const chars = '0123456789~!@#$%^&*<>+=-';
            return chars[Math.floor(Math.random() * chars.length)];
        }
    
        // Create spans for each character in the text
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = getRandomChar();
            titleElement.appendChild(span);
        });
    
        // Animate text reveal
        const spans = titleElement.querySelectorAll('span');
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.innerText = text[index];
                span.style.transform = 'translateY(0)'; // Reveal the text
            }, 120 * index); // Delay for each character
        });
    });

}

randomize('hero-title')
randomize('intro')

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.nav-list li');

    listItems.forEach((item, index) => {
        const titleElement = item;
        const text = titleElement.innerText;
        titleElement.innerHTML = ''; // Clear the text
    
        // Function to create a random character
        function getRandomChar() {
            const chars = '0123456789~!@#$%^&*<>+=-';
            return chars[Math.floor(Math.random() * chars.length)];
        }
    
        // Create spans for each character in the text
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = getRandomChar();
            titleElement.appendChild(span);
        });
    
        // Animate text reveal
        const spans = titleElement.querySelectorAll('span');
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.innerText = text[index];
                span.style.transform = 'translateY(0)'; // Reveal the text
            }, 120 * index); // Delay for each character
        });
    });

})