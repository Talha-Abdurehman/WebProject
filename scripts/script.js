function randomize(element, delay) {
    document.addEventListener('DOMContentLoaded', () => {
        const titleElement = document.getElementById(element);
        const text = titleElement.innerText;
        titleElement.innerHTML = ''; // Clear the text

        // Function to create a random character
        function getRandomChar() {
            const chars = '0123456789~!@#$%^&*<>+=-';
            return chars[Math.floor(Math.random() * chars.length)];
        }

        // Create an array to hold the randomized characters
        let randomizedText = Array.from({ length: text.length }, () => getRandomChar());
        titleElement.innerText = randomizedText.join('');

        // Animate text reveal
        text.split('').forEach((char, index) => {
            setTimeout(() => {
                randomizedText[index] = char; // Replace random char with the actual char
                titleElement.innerText = randomizedText.join(''); // Update the displayed text
            }, delay * index); // Delay for each character
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-list li a'); // Target anchor tags inside li

    navItems.forEach((item, index) => {
        const titleElement = item;
        const text = titleElement.innerText;
        titleElement.innerHTML = ''; // Clear the text

        // Function to create a random character
        function getRandomChar() {
            const chars = '0123456789~!@#$%^&*<>+=-';
            return chars[Math.floor(Math.random() * chars.length)];
        }

        // Create an array to hold the randomized characters
        let randomizedText = Array.from({ length: text.length }, () => getRandomChar());
        titleElement.innerText = randomizedText.join('');

        // Animate text reveal
        text.split('').forEach((char, index) => {
            setTimeout(() => {
                randomizedText[index] = char; // Replace random char with the actual char
                titleElement.innerText = randomizedText.join(''); // Update the displayed text
            }, 120 * index); // Delay for each character
        });
    });
});

randomize('hero-title', 120);
randomize('intro', 120);
randomize('whoami', 30);

// CREATING A CUSTOM CURSOR
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.pageX) + 'px';
    cursor.style.top = (e.pageY) + 'px';
});

// Handle cursor scaling on navigation items
const navItemsHover = document.querySelectorAll('.nav-list li a'); // Target anchor tags for hover
navItemsHover.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    });

    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'; // Reset to original size
    });
});

// Handle cursor scaling on submit button
const buttons = document.querySelectorAll('.submitbutton button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    });

    button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'; // Reset to original size
    });
});
