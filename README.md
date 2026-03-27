# 🏢 AutoHire Enterprise: Autonomous Talent Orchestration
**ET AI Hackathon 2026 Submission** | **Problem Statement 2: Autonomous Enterprise Workflows**

AutoHire is a fully autonomous, multi-agent AI system designed to take complete ownership of the top-of-funnel enterprise recruitment pipeline. It completely eliminates manual resume screening bottlenecks, operating with zero human intervention to evaluate candidates, flag exaggerated claims, and dynamically generate interview and feedback workflows.

## ✨ The Multi-Agent Swarm

Instead of a standard single-prompt LLM wrapper, AutoHire utilizes a highly structured, strict Prompt Engineering architecture to simulate four distinct enterprise agents working in parallel:

* **📊 Agent 1 (Gap Analysis):** Calculates a strict Enterprise Match Score and identifies missing technical frameworks, tools, and concepts.
* **🛡️ Agent 2 (The Auditor):** Scans for and flags "fluff," unquantified bullet points, and unverifiable claims (e.g., flagging "Led a team" if it lacks budget or headcount metrics).
* **🎤 Agent 3 (Interview Prober):** Dynamically generates targeted technical interview questions designed specifically to test the candidate's identified skill gaps and audit flags.
* **✉️ Agent 4 (Workflow Automation):** Drafts personalized candidate feedback emails and generates an initial 90-day enterprise onboarding roadmap.

## 🛠️ Tech Stack & Architecture

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (Featuring a custom "Apple Glass" dark-mode enterprise UI).
* **Backend:** Node.js, Express.js (REST API routing, asynchronous processing).
* **AI / Engine:** Google Gemini 2.5 Flash API.
* **Optimization:** The backend enforces a strict token-limit policy, forcing the LLM to output single-line, highly structured data points to minimize latency and API costs.

---

## 🚀 How to Run the Project Locally

Follow these steps to run the AutoHire Enterprise environment on your local machine.

### Prerequisites
* [Node.js](https://nodejs.org/) installed on your machine.
* A Google Gemini API Key.

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/YOUR_GITHUB_USERNAME/ET-Hackathon-AutoHire.git
cd ET-Hackathon-AutoHire
\`\`\`

### 2. Install Backend Dependencies
Navigate to the project directory in your terminal and install the required Node modules:
\`\`\`bash
npm install express cors dotenv @google/generative-ai
\`\`\`

### 3. Configure the Environment Variables
Create a file named \`.env\` in the root directory of the project and add your Gemini API key:
\`\`\`text
GEMINI_API_KEY=your_actual_api_key_here
\`\`\`

### 4. Boot up the Enterprise Server
Start the Node.js server. It is configured to run securely on port 5001 to prevent conflicts.
\`\`\`bash
node server.js
\`\`\`
*You should see a terminal message saying: `🏢 Enterprise Multi-Agent Server running on http://localhost:5001`*

### 5. Launch the Client Dashboard
Simply double-click the `index.html` file to open it in your preferred web browser (Chrome, Edge, Safari). 

### 6. Test the Swarm
1. Paste a target Job Description into the designated area.
2. Upload a candidate's resume (`.txt` format).
3. Click **Initialize Agent Swarm** and watch the multi-agent workflow execute.

---
**Developed by:** Bhardwaj