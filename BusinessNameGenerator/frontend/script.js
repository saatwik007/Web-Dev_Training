



// Remove the API key line completely
let savedNames = JSON.parse(localStorage.getItem('savedNames')) || [];

async function generateBusinessNameHF() {
    const prompt = document.getElementById("hfPrompt").value || "Generate a creative business name";
    document.getElementById("result").innerText = "Generating...";

    try {
        // Call your backend instead of Hugging Face directly
        const response = await fetch('http://localhost:3001/api/generate-name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        });

        const result = await response.json();
        
        let aiName = "";
        if (
            result &&
            result.choices &&
            result.choices[0] &&
            result.choices[0].message &&
            result.choices[0].message.content
        ) {
            aiName = result.choices[0].message.content.trim();
        } else {
            aiName = "Could not generate a name. Try again!";
        }
        
        console.log("Generated Name:", aiName);
        document.getElementById("result").innerText = aiName;

        // Save name if not already saved
        if (!savedNames.includes(aiName) && aiName.length > 1) {
            savedNames.push(aiName);
            renderSavedNames();
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("result").innerText = "Error generating name. Try again!";
    }
}

// ...existing code for renderSavedNames, showCopied, clearSavedNames...



function renderSavedNames() {
    const savedNamesDiv = document.getElementById("savedNames");
    savedNamesDiv.innerHTML = "";

    savedNames.forEach((name, idx) => {
        const row = document.createElement("div");
        row.className = "name-row";
        
        const nameSpan = document.createElement("span");
        nameSpan.textContent = name;
        
        const copyBtn = document.createElement("button");
        copyBtn.textContent = "Copy";
        copyBtn.style.fontSize = "0.9em";
        copyBtn.style.padding = "4px 12px";
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(name).then(() => {
                showCopied(copyBtn);
            });
        };

        row.appendChild(nameSpan);
        row.appendChild(copyBtn);
        savedNamesDiv.appendChild(row);
    });
     localStorage.setItem('savedNames', JSON.stringify(savedNames));
}

function showCopied(button) {
    let copied = document.createElement("span");
    copied.textContent = "Copied!";
    copied.className = "copied";
    button.parentNode.appendChild(copied);

    setTimeout(() => {
        if (copied.parentNode) copied.parentNode.removeChild(copied);
    }, 900);
}

function clearSavedNames() {
    savedNames = [];
    renderSavedNames();
    document.getElementById("result").innerText = "";
}

// Initial render
renderSavedNames();
