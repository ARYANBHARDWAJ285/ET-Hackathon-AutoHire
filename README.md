# 🏢 AutoHire Enterprise: Autonomous Talent Orchestration
**ET AI Hackathon 2026 Submission** | **Problem Statement 2: Autonomous Enterprise Workflows**

AutoHire is a fully autonomous, multi-agent AI system designed to take complete ownership of the top-of-funnel enterprise recruitment pipeline. It eliminates manual resume screening bottlenecks, operating with zero human intervention to evaluate candidates, flag exaggerated claims, and dynamically generate interview and feedback workflows.

## ✨ The Multi-Agent Swarm

Instead of a standard single-prompt LLM wrapper, AutoHire utilizes a highly structured Prompt Engineering architecture to simulate four distinct enterprise agents working in parallel:

* **📊 Agent 1 (Gap Analysis):** Calculates a strict Enterprise Match Score and identifies missing technical frameworks, tools, and concepts.
* **🛡️ Agent 2 (The Auditor):** Scans for and flags "fluff," unquantified bullet points, and unverifiable claims (e.g., flagging "Led a team" if it lacks budget or headcount metrics).
* **🎤 Agent 3 (Interview Prober):** Dynamically generates targeted technical interview questions designed specifically to test the candidate's identified skill gaps and audit flags.
* **✉️ Agent 4 (Workflow Automation):** Drafts personalized candidate feedback emails and generates an initial 90-day enterprise onboarding roadmap.

## 🛠️ Tech Stack & Architecture

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (Custom "Apple Glass" dark-mode enterprise UI).
* **Backend:** Node.js, Express.js (REST API routing, asynchronous processing).
* **AI Engine:** Google Gemini 2.5 Flash API.
* **Optimization:** The backend enforces a strict token-limit policy, forcing the LLM to output single-line, highly structured data points to minimize latency and API costs.

---

## 🚀 Local Setup & Installation

### Prerequisites
* Node.js (v14 or higher)
* Google Gemini API Key

### 1. Clone the Repository
```bash
git clone [https://github.com/ARYANBHARDWAJ285/ET-Hackathon-AutoHire.git](https://github.com/ARYANBHARDWAJ285/ET-Hackathon-AutoHire.git)
cd ET-Hackathon-AutoHire
