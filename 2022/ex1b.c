#include <stdio.h>
#include <stdlib.h>

int main()
{
    int endOfFile;
    int maxCalories[] = {0, 0, 0};
    int currentElfCalories = 0;

    FILE *data;
    data = fopen("ex1-data.txt", "r");
    char fileData[10429];

    while (fgets(fileData, 10429, data))
    {
        int calories = atoi(fileData);

        if (*fileData == '\n')
        {
            if (currentElfCalories > maxCalories[0])
            {
                maxCalories[2] = maxCalories[1];
                maxCalories[1] = maxCalories[0];
                maxCalories[0] = currentElfCalories;
            }
            else if (currentElfCalories > maxCalories[1])
            {
                maxCalories[2] = maxCalories[1];
                maxCalories[1] = currentElfCalories;
            }
            else if (currentElfCalories > maxCalories[2])
            {
                maxCalories[2] = currentElfCalories;
            }

            currentElfCalories = 0;
        }
        else
        {
            currentElfCalories = currentElfCalories + calories;
        }
    }

    if (currentElfCalories > maxCalories[0])
    {
        maxCalories[2] = maxCalories[1];
        maxCalories[1] = maxCalories[0];
        maxCalories[0] = currentElfCalories;
    }
    else if (currentElfCalories > maxCalories[1])
    {
        maxCalories[2] = maxCalories[1];
        maxCalories[1] = currentElfCalories;
    }
    else if (currentElfCalories > maxCalories[2])
    {
        maxCalories[2] = currentElfCalories;
    }

    fclose(data);

    printf("%d\n", maxCalories[0] + maxCalories[1] + maxCalories[2]);

    return 0;
}