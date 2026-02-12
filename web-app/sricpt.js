document.addEventListener('DOMContentLoaded', () => {
    const addExpenseForm = document.getElementById('addExpenseForm');
    const expensesListDiv = document.getElementById('expensesList');
    const filterCategorySelect = document.getElementById('filterCategory');
    const filterButton = document.getElementById('filterButton');
    const summaryOutputDiv = document.getElementById('summaryOutput');

    let expenses = []; 

    
    function renderExpenses(currentExpenses) {
        expensesListDiv.innerHTML = '';
        if (currentExpenses.length === 0) {
            expensesListDiv.innerHTML = '<p>No expenses recorded.</p>';
            return;
        }
        const ul = document.createElement('ul');
        currentExpenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.textContent = `${expense.date} | ${expense.category} | ${expense.description || '-'} | ₹${expense.amount.toFixed(2)}`;
            ul.appendChild(li);
        });
        expensesListDiv.appendChild(ul);
    }

  
    function updateCategoryFilter() {
        const categories = [...new Set(expenses.map(exp => exp.category))];
        filterCategorySelect.innerHTML = '<option value="">All Categories</option>';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filterCategorySelect.appendChild(option);
        });
    }

    
    function generateSummary(currentExpenses) {
        const categoryTotals = {};
        let totalSpent = 0;
        currentExpenses.forEach(expense => {
            if (categoryTotals[expense.category]) {
                categoryTotals[expense.category] += expense.amount;
            } else {
                categoryTotals[expense.category] = expense.amount;
            }
            totalSpent += expense.amount;
        });

        summaryOutputDiv.innerHTML = '';
        const summaryTitle = document.createElement('h3');
        summaryTitle.textContent = 'Spending by Category:';
        summaryOutputDiv.appendChild(summaryTitle);

        const ul = document.createElement('ul');
        for (const category in categoryTotals) {
            const li = document.createElement('li');
            li.textContent = `${category}: ₹${categoryTotals[category].toFixed(2)}`;
            ul.appendChild(li);
        }
        summaryOutputDiv.appendChild(ul);

        const totalParagraph = document.createElement('p');
        totalParagraph.textContent = `Total Spent: ₹${totalSpent.toFixed(2)}`;
        summaryOutputDiv.appendChild(totalParagraph);
    }

    
    addExpenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = document.getElementById('date').value;
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (date && category && !isNaN(amount)) {
            const newExpense = { date, category, description, amount };
            expenses.push(newExpense);
            renderExpenses(expenses);
            updateCategoryFilter();
            generateSummary(expenses);
            addExpenseForm.reset();
        } else {
            alert('Please fill in all required fields with valid data.');
        }
    });

    
    filterButton.addEventListener('click', () => {
        const selectedCategory = filterCategorySelect.value;
        const filteredExpenses = selectedCategory
            ? expenses.filter(exp => exp.category === selectedCategory)
            : expenses;
        renderExpenses(filteredExpenses);
        generateSummary(filteredExpenses);
    });

    
    renderExpenses(expenses);
    updateCategoryFilter();
    generateSummary(expenses);
});
