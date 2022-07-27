 CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas (nome, nasciemento) VALUES ('Lucas','2003-02-27')
INSERT INTO pessoas (nome, nasciemento) VALUES ('Ana','2000-06-12')
INSERT INTO pessoas (nome, nasciemento) VALUES ('John','1993-04-22')