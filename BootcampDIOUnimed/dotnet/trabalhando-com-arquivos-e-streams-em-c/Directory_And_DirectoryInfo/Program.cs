var path = Path.Combine(Environment.CurrentDirectory,"globo");
var dirGlobal = Directory.CreateDirectory(path);
var dirAmCentral = dirGlobal.CreateSubdirectory("América Central");
dirAmCentral.CreateSubdirectory("México");

