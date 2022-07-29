// See https://aka.ms/new-console-template for more information
int[,] matriz = new int[4,2]
{
    { 8,8 },
    { 8,8 },
    { 8,8 },
    { 8,8 }
};
for (int a = 0; a < matriz.GetLength(0); a++)
{
    for (int b = 0; b < matriz.GetLength(1); b++)
    {
        System.Console.WriteLine(matriz[a,b]);
    }
}
