#include <stdio.h>

int main() {
    float budget, expenditure, totalExpenditure = 0;
    char choice;
    FILE *file;

    do {
        // Set the monthly budget
        printf("Enter your monthly budget: ");
        scanf("%f", &budget);
        totalExpenditure = 0;

        file = fopen("expenditure.csv", "w");
        fprintf(file, "Expenditure,Total,Remaining\n");

        while (1) {
            // Input real-time expenditure
            printf("Enter your expenditure amount: ");
            scanf("%f", &expenditure);

            totalExpenditure += expenditure;
            fprintf(file, "%.2f,%.2f,%.2f\n", expenditure, totalExpenditure, budget - totalExpenditure);

            // Check if the expenditure exceeds the budget
            if (totalExpenditure > budget) {
                printf("Warning! You have exceeded your monthly budget!\n");
                printf("You exceeded your budget by %.2f\n", totalExpenditure - budget);
                printf("Data saved to expenditure.csv\n");
                fclose(file);
                break;
            }

            printf("Current total expenditure: %.2f\n", totalExpenditure);
            printf("Remaining budget: %.2f\n", budget - totalExpenditure);

            // Ask the user if they want to continue
            printf("Do you want to add more expenditure? (y/n): ");
            scanf(" %c", &choice);
            if (choice != 'y' && choice != 'Y') {
                printf("Final total expenditure: %.2f\n", totalExpenditure);
                printf("You stayed within your budget with %.2f remaining.\n", budget - totalExpenditure);
                printf("Data saved to expenditure.csv\n");
                fclose(file);
                break;
            }
        }

        printf("Do you want to start a new expenditure? (y/n): ");
        scanf(" %c", &choice);
    } while (choice == 'y' || choice == 'Y');

    return 0;
}
