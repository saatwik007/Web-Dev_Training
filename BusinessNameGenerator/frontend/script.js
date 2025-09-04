const HF_API_KEY= "";

let savedNames = JSON.parse(localStorage.getItem('savedNames')) || [];


async function generateBusinessNameHF() {

        const prompt = document.getElementById("hfPrompt").value || "Generate a creative business name";
    document.getElementById("result").innerText = "Generating...";


    async function query(data) {
	const response = await fetch(
		"https://router.huggingface.co/v1/chat/completions",
		{
			headers: {
				Authorization: `Bearer ${HF_API_KEY}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ 
    messages: [
        {
            role: "user",
            content: prompt + ". Suggest a short, catchy business name. along with valid domain names",
        },
    ],
    model: "openai/gpt-oss-20b",
}).then((response) => {
    console.log(JSON.stringify(response));
     let aiName = "";
    if (
        response &&
        response.choices &&
        response.choices[0] &&
        response.choices[0].message &&
        response.choices[0].message.content
    ) {
        aiName = response.choices[0].message.content.trim();
    } else {
        aiName = "Could not generate a name. Try again!";
    }
    console.log("Generated Name:", aiName );
    document.getElementById("result").innerText = aiName;

    // Save name if not already saved
    if (!savedNames.includes(aiName) && aiName.length > 1) {
        savedNames.push(aiName);
        renderSavedNames();
    }
}); 
}

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