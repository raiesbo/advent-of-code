#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int A = 1; // Rock
    int B = 2; // Paper
    int C = 3; // Scissors
    int X = 1; // Rock
    int Y = 2; // Paper
    int Z = 3; // Scissors
    int victory = 6;
    int draw = 3;
    int lose = 0;
    int myScore = 0;

    FILE *data;
    data = fopen("ex2-data.txt", "r");
    char fileData[9999];

    while (fgets(fileData, 9999, data))
    {
        char *figure = strtok(fileData, " ");

        if (strcmp(figure, "A") == 0)
        {
            figure = strtok(NULL, "\n");

            if (strcmp(figure, "X") == 0) // LOSE
            {
                myScore = myScore + Z + lose;
            }
            else if (strcmp(figure, "Y") == 0) // DRAW
            {
                myScore = myScore + X + draw;
            }
            else // WIN
            {
                myScore = myScore + Y + victory;
            }
        }
        else if (strcmp(figure, "B") == 0)
        {
            figure = strtok(NULL, "\n");

            if (strcmp(figure, "X") == 0)
            {
                myScore = myScore + X + lose;
            }
            else if (strcmp(figure, "Y") == 0)
            {
                myScore = myScore + Y + draw;
            }
            else
            {
                myScore = myScore + Z + victory;
            }
        }
        else
        {
            figure = strtok(NULL, "\n");

            if (strcmp(figure, "X") == 0)
            {
                myScore = myScore + Y + lose;
            }
            else if (strcmp(figure, "Y") == 0)
            {
                myScore = myScore + Z + draw;
            }
            else
            {
                myScore = myScore + X + victory;
            }
        }
    }

    fclose(data);

    printf("%d\n", myScore);

    return 0;
}