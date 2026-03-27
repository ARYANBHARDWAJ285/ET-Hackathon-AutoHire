document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM ELEMENTS ---
    const introCard = document.getElementById('intro-card');
    const uploadCard = document.getElementById('upload-card');
    const resultsSection = document.getElementById('results-section'); 
    
    const startBtn = document.getElementById('start-btn');
    const backBtn = document.getElementById('back-btn');
    const analyzeBtn = document.getElementById('analyze-btn');
    const resetBtn = document.getElementById('reset-btn'); 
    
    const fileInput = document.getElementById('file-input');
    const fileNameDisplay = document.getElementById('file-name');
    const jdInput = document.getElementById('jd-input');
    const aiOutput = document.getElementById('ai-output'); 

    let extractedResumeText = "";

    // --- NAVIGATION LOGIC ---
    startBtn.addEventListener('click', () => {
        introCard.classList.add('hidden');
        uploadCard.classList.remove('hidden');
    });

    backBtn.addEventListener('click', () => {
        uploadCard.classList.add('hidden');
        introCard.classList.remove('hidden');
    });

    // Reset 
    resetBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        uploadCard.classList.remove('hidden');
        
        extractedResumeText = "";
        fileInput.value = "";
        fileNameDisplay.textContent = "No candidate selected";
        jdInput.value = "";
        aiOutput.innerHTML = "";
    });

    // FILE HANDLING 
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            fileNameDisplay.textContent = file.name;
            const reader = new FileReader();
            reader.onload = function(e) { extractedResumeText = e.target.result; };
            reader.readAsText(file);
        }
    });

    // API CONNECTION 
    analyzeBtn.addEventListener('click', async () => {
        const jobDescription = jdInput.value;

        if (!extractedResumeText || !jobDescription) {
            alert("Please upload a .txt resume and paste a job description.");
            return;
        }

        //  AGENT LOADING 
        analyzeBtn.disabled = true;
        const loadingMessages = [
            "Agent 1: Ingesting Data...",
            "Agent 2: Auditing Claims...",
            "Agent 3: Generating Probes...",
            "Agent 4: Drafting Workflows..."
        ];
        
        let messageIndex = 0;
        analyzeBtn.textContent = loadingMessages[messageIndex];
        
        const loadingInterval = setInterval(() => {
            messageIndex++;
            if (messageIndex < loadingMessages.length) {
                analyzeBtn.textContent = loadingMessages[messageIndex];
            } else {
                analyzeBtn.textContent = "Finalizing Output...";
            }
        }, 1200);

        try {
            const response = await fetch('http://localhost:5001/api/analyze-resume', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resumeText: extractedResumeText, jobDescription: jobDescription })
            });

            const data = await response.json();
            clearInterval(loadingInterval);
            
            if (data.success) {
                uploadCard.classList.add('hidden');
                
               
                // Massive Green Match Score
                let formattedText = data.analysis.replace(/### 📊 Enterprise Match Score\n(.*)/g, '<div style="font-size: 4rem; font-weight: 800; color: #34d399; text-align: center; margin-bottom: 20px; text-shadow: 0 0 20px rgba(52, 211, 153, 0.4);">$1<div style="font-size: 1rem; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Match Fit</div></div>');

                // Dark Glass Section Headers
                formattedText = formattedText.replace(/### (.*)/g, '<div style="background: rgba(255,255,255,0.05); padding: 12px 20px; border-radius: 8px; margin-top: 25px; margin-bottom: 12px; border-left: 4px solid #8b5cf6; font-size: 1.15rem; font-weight: 700; color: #f8fafc;">$1</div>');

                // 3Bold Text 
                formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<span style="color: #38bdf8; font-weight: 700;">$1</span>');

                formattedText = formattedText.replace(/\n/g, '<br>');

                aiOutput.innerHTML = formattedText;
                
                //  Autonomous Action Buttons
                aiOutput.innerHTML += `
                    <div style="margin-top: 35px; padding-top: 25px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; gap: 15px; justify-content: center;">
                        <button onclick="alert('Agent 4 has dispatched the feedback email to the candidate.')" style="padding: 10px 20px; background: rgba(239, 68, 68, 0.1); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 6px; font-weight: bold; cursor: pointer;">Execute Auto-Reject</button>
                        <button onclick="alert('Interview scheduled. Agent 3 has forwarded the Probing Questions to the hiring manager.')" style="padding: 10px 20px; background: rgba(16, 185, 129, 0.1); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 6px; font-weight: bold; cursor: pointer;">Flag for Interview</button>
                    </div>
                `;

                resultsSection.classList.remove('hidden');
            } else {
                alert("Agent Processing Failed. Check backend console.");
            }

        } catch (error) {
            clearInterval(loadingInterval);
            console.error("Error connecting to server:", error);
            alert("Failed to connect to backend. Is Node.js running on port 5001?");
        } finally {
            analyzeBtn.textContent = "Execute Swarm Analysis";
            analyzeBtn.disabled = false;
        }
    });
});
