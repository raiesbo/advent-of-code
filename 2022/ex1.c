#include <stdio.h>
#include <stdlib.h>

int main()
{
    int maxCalories = 0;
    int currentElfCalories = 0;

    FILE *data;
    data = fopen("ex1-data.txt", "r");
    char fileData[10429];

    while (fgets(fileData, 10429, data))
    {
        int calories = atoi(fileData);
        if (*fileData == '\n')
        {
            maxCalories = (currentElfCalories > maxCalories) ? currentElfCalories : maxCalories;
            currentElfCalories = 0;
        }
        else
        {
            currentElfCalories = currentElfCalories + calories;
        }
    }

    fclose(data);

    printf("%d\n", maxCalories);

    return 0;
}