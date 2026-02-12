import tkinter as tk
from tkinter import messagebox

class ExpenditureWarningSystem:
    def __init__(self, root):
        self.root = root
        self.root.title("Expenditure Warning System")

        
        self.budget = 0
        self.total_expenditure = 0

        
        tk.Label(root, text="Set Monthly Budget:").grid(row=0, column=0, padx=10, pady=10)
        self.budget_entry = tk.Entry(root)
        self.budget_entry.grid(row=0, column=1, padx=10, pady=10)

        tk.Button(root, text="Set Budget", command=self.set_budget).grid(row=0, column=2, padx=10, pady=10)

        tk.Label(root, text="Enter Expenditure:").grid(row=1, column=0, padx=10, pady=10)
        self.expenditure_entry = tk.Entry(root)
        self.expenditure_entry.grid(row=1, column=1, padx=10, pady=10)

        tk.Button(root, text="Add Expenditure", command=self.add_expenditure).grid(row=1, column=2, padx=10, pady=10)

        self.status_label = tk.Label(root, text="Total Expenditure: ₹0", fg="blue", font=("Arial", 12))
        self.status_label.grid(row=2, column=0, columnspan=3, pady=10)

    def set_budget(self):
        try:
            self.budget = float(self.budget_entry.get())
            if self.budget <= 0:
                raise ValueError
            messagebox.showinfo("Success", f"Budget set to ₹{self.budget}")
        except ValueError:
            messagebox.showerror("Error", "Please enter a valid positive number for the budget.")
    
    def add_expenditure(self):
        try:
            expenditure = float(self.expenditure_entry.get())
            if expenditure <= 0:
                raise ValueError
            self.total_expenditure += expenditure
            self.update_status()
        except ValueError:
            messagebox.showerror("Error", "Please enter a valid positive number for the expenditure.")

    def update_status(self):
        if self.total_expenditure > self.budget:
            messagebox.showwarning("Warning", f"Budget exceeded! Total Expenditure: ₹{self.total_expenditure}")
        else:
            remaining_budget = self.budget - self.total_expenditure
            messagebox.showinfo("Update", f"Expenditure added. Remaining Budget: ₹{remaining_budget}")
        self.status_label.config(text=f"Total Expenditure: ₹{self.total_expenditure}")


if __name__ == "__main__":
    root = tk.Tk()
    app = ExpenditureWarningSystem(root)
    root.mainloop()
