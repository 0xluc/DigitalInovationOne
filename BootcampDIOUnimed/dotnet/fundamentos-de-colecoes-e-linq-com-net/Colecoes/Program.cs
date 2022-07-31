// See https://aka.ms/new-console-template for more information
using Colecoes.helper;
namespace Colecoes
{
    class Program
    {
        static void Main(string[] args)
        {
            OperacoesArray op = new OperacoesArray();
            int[] array = new int[] {5,3,6,9,12,0,4,13,45,22,100,1,10};
            int[] arrayCopia = new int[20];
            System.Console.WriteLine("Array Origial:");
            op.ImprimirArray(array);
            op.OrdenarBubbleSort(ref array);
            System.Console.WriteLine("Array ordenado:");
            op.ImprimirArray(array);

            System.Console.WriteLine("Array ordenado pela classe Array:");
            op.Ordenar(ref array);
            op.Copiar(ref array, ref arrayCopia);
            System.Console.WriteLine("Array cópia: ");
            op.ImprimirArray(arrayCopia);
        }
    }
}
