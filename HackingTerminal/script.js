const element = document.getElementById('terminal');

const text = [
    "Initializing Hacking",
    "Reading your Files",
    "Password Files Detected",
    "Sending Passwords and personal Files to server",
    "Hacking Complete"
]
function printTextSequentially(index) {
    if (index >= text.length) return;
    const p = document.createElement('p');
    p.innerHTML = text[index];
    element.appendChild(p);

    let dotCount = 0;
    const maxDots = 3;
    const blinkInterval = setInterval(() => {
        dotCount = (dotCount + 1) % (maxDots + 1);
        p.innerHTML = text[index] + '.'.repeat(dotCount);
    }, 500); // Change blink speed here (500ms)

    const delay = Math.floor(Math.random() * 7) + 1; // 1 to 7 seconds
    setTimeout(() => {
        clearInterval(blinkInterval);
        p.innerHTML = text[index] + '.'.repeat(maxDots); // Show full dots when done
        printTextSequentially(index + 1);
    }, delay * 1000);
}

printTextSequentially(0);
