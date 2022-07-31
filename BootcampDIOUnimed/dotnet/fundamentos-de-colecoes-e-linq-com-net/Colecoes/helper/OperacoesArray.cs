namespace Colecoes.helper
{
    public class OperacoesArray
    {
        public void ImprimirArray(int[] array)
        {
                foreach (var item in array)
                {
                    Console.Write($"{item} ");
                }
        }
        public void OrdenarBubbleSort(ref int[] a)
        {
            var isUnsorted = true;
            while (isUnsorted)
            {
                isUnsorted = false;
                for (int i = 0; i < a.Length - 1; i++)
                {
                    
                    if (a[i] > a[i+1])
                    {
                        isUnsorted = true;
                        var tempnum = a[i];
                        a[i] = a[i+1];
                        a[i+1] = tempnum;
                    }
                    
                }
            }
        }
        public void Ordenar(ref int[] array)
        {
            Array.Sort(array);
        }
        public void Copiar(ref int[] array, ref int[] arrayDeDestino)
        {
            Array.Copy(array, arrayDeDestino, array.Length); // copia sua totalidade
        }
        
        
    

    }
}