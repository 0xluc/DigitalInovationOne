using static System.Console;

WriteLine("Digite o nome do arquivo:");
var name = ReadLine();

name = LimparNome(name);

var path = Path.Combine(Environment.CurrentDirectory, $"{name}.txt");

CriarArquivo(path);


WriteLine("Digite enter para finalizar...");
ReadLine();

static string LimparNome(string path)
{
    foreach (var @char in Path.GetInvalidFileNameChars())
    {
        name = name.Replace(@char,'-');   
    }
    return name;
}

static void CriarArquivo(string path)
{
    try
    {
        using var sw = File.CreateText(path);
        sw.WriteLine("Esta é a linha 1 do arquivo.");   
    }
    catch 
    {
        WriteLine("O nome do arquivo está invalido!");    
    }
    
}

