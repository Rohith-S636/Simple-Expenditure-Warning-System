# Simple-Expenditure-Warning-System
This project features a Simple Expenditure Warning System implemented across C, Python, and Web platforms to demonstrate budget tracking, real-time limit alerts, and data logging in various programming environments.

## 🚀 Features
* **Web Implementation:** A dynamic dashboard for categorized spending using HTML, CSS, and JavaScript.
* **Python GUI:** A desktop application using Tkinter that provides pop-up budget warnings.
* **C CLI:** A terminal tool that logs transaction history directly to a `expenditure.csv` file.

## 📂 Repository Structure
```text
.
├── web-app/                # Web Dashboard (HTML/CSS/JS)
│   ├── index.html          # UI structure for expense entry
│   ├── style.css           # Styling for the dashboard
│   └── script.js           # Logic for filtering and summaries
├── python-gui/             # Desktop Application (Tkinter)
│   └── warning_system.py   # GUI with pop-up budget alerts
├── c-cli/                  # Terminal Tool (C)
│   └── warning_system.c    # CLI with CSV data logging
├── .gitignore              # Files to be excluded from version control
├── LICENSE                 # MIT License details
└── README.md               # Project documentation

🛠️ Implementation Details
1. Web Implementation (JavaScript/HTML/CSS)
Dynamic Management: Uses an array to store and render expense objects including date, category, and amount.
Category Filtering: Allows users to filter the list by specific categories to analyze spending habits.
Real-time Summaries: Automatically calculates total spent and provides a breakdown by category.
User Interface: Features a clean, responsive layout with structured forms for data entry.

2. Python Implementation (Tkinter GUI)
Visual Warnings: Utilizes messagebox to trigger immediate visual alerts when the budget is exceeded.
Status Tracking: Displays the total expenditure in real-time through a dynamic label.
Input Validation: Includes error handling to ensure budgets and expenditures are valid positive numbers.

3. C Implementation (Standard C)
Data Persistence: Automatically records every transaction—including the amount, total, and remaining balance—into an expenditure.csv file.
Warning Logic: Compares total spending against the user-defined budget and prints immediate terminal warnings.
Terminal Interface: Uses a lightweight loop to allow for continuous expenditure entries within a single session.

## 📂 How to Run
1. **Web:** Open `index.html` in any browser.
2. **Python:** Run `python script_name.py`.
3. **C:** Compile with `gcc` and run the executable.

## 📝 License
This project is licensed under the MIT License.
