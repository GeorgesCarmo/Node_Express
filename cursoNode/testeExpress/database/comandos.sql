SHOW DATABASES;

CREATE DATABASE sistemadecadastro;

USE sistemadecadastro;

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(50),
    idade INT
);

INSERT INTO usuarios (nome, email, idade) VALUES("Georges", "georgesdc13@gmail.com", 29);

UPDATE usuarios SET nome = "novo nome" WHERE nome = "nome antigo";

DELETE FROM usuarios WHERE name = "nome para deletar";