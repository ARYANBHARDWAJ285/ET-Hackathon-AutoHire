const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/analyze-resume', async (req, res) => {
    try {
        const { resumeText, jobDescription } = req.body;
        
        // Ensure max efficiency
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // THE MULTI-AGENT ENTERPRISE PROMPT
     // THE RUTHLESS MULTI-AGENT ENTERPRISE PROMPT
        const prompt = `
        You are a ruthless, highly critical Autonomous Enterprise HR System. Do not sugarcoat anything. You are analyzing a candidate against a Senior Enterprise Job Description. 
        CRITICAL RULES: Output EXACTLY ONE single line per bullet point (Max 15 words). Be brutally honest.

        FORMAT EXACTLY LIKE THIS:

        ### 📊 Enterprise Match Score
        [Output ONLY a percentage number based strictly on their hard skills matching the JD, e.g., 45%]

        ### 🚨 Agent 1: Brutal Gap Analysis
        - Critical Missing Tech: [List the biggest tech stacks they lack]
        - Experience Deficit: [State why their years/level of experience is too low]
        - Reality Check: [Original weak bullet] -> [Why it fails enterprise standards]

        ### 🛡️ Agent 2: The "BS" & Fluff Auditor
        - Red Flag: [Identify one vague, unquantified, or exaggerated claim in the resume. e.g., "Led a team" lacks team size/budget metrics.]

        ### 🎤 Agent 3: "Call Their Bluff" Interview Probes
        - Technical Trap 1: [A highly specific, difficult question testing the exact tech they are missing]
        - Audit Probe: [A question demanding hard numbers/proof for their "Red Flag" claim]

        ### ✉️ Agent 4: Auto-Reject / Feedback
        "Your profile lacks the required enterprise scale, specifically in [Skill 1] and [Skill 2]. We require production-level expertise, not basic familiarity."
        
        TARGET JOB DESCRIPTION:
        ${jobDescription}

        CANDIDATE RESUME:
        ${resumeText}
        `;
        
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        res.json({ success: true, analysis: responseText });

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ success: false, error: 'AI processing failed' });
    }
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`🏢 Enterprise Multi-Agent Server running on http://localhost:${PORT}`);
});