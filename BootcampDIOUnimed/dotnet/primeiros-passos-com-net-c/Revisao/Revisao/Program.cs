// See https://aka.ms/new-console-template for more information
namespace Revisao
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno[] alunos = new Aluno[5]; // é necessária a alocação prévia desse array struct
            var indiceAluno = 0;
            string opcaoUsuario = ObterOpcaoUsuario();
                        
            while (opcaoUsuario.ToUpper() != "X")
            {
                switch (opcaoUsuario)
                {
                   case "1":
                        Console.WriteLine("Informe o nome do aluno:");
                        var aluno = new Aluno(); // atribuiçao em nota sem ter que saber qual o tipo da variável

                        aluno.Nome = Console.ReadLine();

                        Console.WriteLine("Informe a nota do aluno:");
                        if(decimal.TryParse(Console.ReadLine(), out decimal nota))
                        {
                            aluno.Nota = nota;
                        }
                        else
                        {
                            throw new ArgumentException("Valor da nota deve ser decimal!");
                        }
                        alunos[indiceAluno] = aluno; // adiciona aluno ao array alunos 
                        indiceAluno++;

                        break;   
                    case "2":
                        foreach (var a in alunos)
                        {
                            if(!string.IsNullOrEmpty(a.Nome)){
                                Console.WriteLine($"Aluno: {a.Nome} - Nota {a.Nota} ");

                            }
                        }
                        break;
                    case "3":
                        decimal notaTotal = 0;
                        var nmrAlunos = 0;
                        for (int i = 0; i < alunos.Length; i++)
                        {
                            if(!string.IsNullOrEmpty(alunos[i].Nome))
                            {
                                notaTotal += alunos[i].Nota; 
                                nmrAlunos++;
                            }
                        }
                        var mediaGeral = notaTotal / nmrAlunos;
                        conceito conceitoGeral;

                        if (mediaGeral < 3)
                        {
                            conceitoGeral = conceito.E;
                        }
                        else if (mediaGeral < 5)
                        {
                            conceitoGeral = conceito.D;
                        }
                        else if (mediaGeral < 6)
                        {
                            conceitoGeral = conceito.C;
                        }
                        else if (mediaGeral < 8)
                        {
                            conceitoGeral = conceito.B;
                        }
                        else
                        {
                            conceitoGeral = conceito.A;
                        } 
                        Console.WriteLine($"Média Geral: {mediaGeral} - Conceito geral: {conceitoGeral}");
                        break;
                    
                    default:
                        throw new ArgumentOutOfRangeException();
                }
                opcaoUsuario = ObterOpcaoUsuario();
            }

            static string ObterOpcaoUsuario()
            {
                Console.WriteLine("Informe a opção desejada:");
                Console.WriteLine("1 - Inserir novo aluno");
                Console.WriteLine("2 - Listar alunos");
                Console.WriteLine("3 - Calcular média geral");
                Console.WriteLine("X - Sair");
                Console.WriteLine();

                string opcaoUsuario = Console.ReadLine();
                return opcaoUsuario;
            }   
        }
    }
}

