    -- • VARCHAR (255) es mejor ya que es menos pesado que el texto ya que el txt lo pone mas lento.
    --   255 equivale a lo largo del texto. Lo podemos poner por ejemplo en code postal para ganar place.
    --    Il faut savoir que tous les caracteres special prendre le double de espace, donc si je 
    --    mets 50 un email corean prendre 25.
    -- • Unique es mas pesado que poner un ID. este ultimo es mas ligero a stocker
    -- • CURRENT_TIMESTAMP es la hora de ahora mismo
    -- •  Por ejemplo en cosas que solo son numeros como price podemos poner 
    -- real, numeric o float, este ultimo es muy anciano.




create table edusign(
id integer primary key autoincrement,
firstname text not null,
lastname text not null,
mail text not null unique, 
date_sign datetime default current_timestamp not null 
)


INSERT INTO edusign (firstname, lastname, mail)
VALUES
('Lina', 'Marchand', 'lina@techschool.com'),
('Omar', 'Diallo', 'omar@techschool.com'),
('Chloe', 'Brunet', 'chloe@techschool.com'),
('Yanis', 'Leclerc', 'yanis@techschool.com'),
('Ines', 'Roche', 'ines@techschool.com'),
('Lucas', 'Moreau', 'lucas@techschool.com'),
('Sarah', 'Benoit', 'sarah@techschool.com');


CREATE TABLE users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
first_name TEXT NOT NULL,
last_name text not null,
mail text not null unique 
)


INSERT INTO users (first_name, last_name, mail)
VALUES
('Ada', 'Love Lace', 'ada@techschool.com'),
('Grace', 'Fanta', 'grace@techschool.com'),
('Melany', 'Scap', 'melany@techschool.com'),
('George', 'Flui', 'george@techschool.com');


UPDATE edusign                    --  update mets à jour ici le tableau edusign
SET firstname = (                     --  set prenne la valeur 
SELECT users.first_name,
FROM users,
WHERE users.id = edusign.id          -- aqui se basa sur le fait que los id corresponden
)     
WHERE EXISTS (         --  es seguridad, verifica si realmente existe, sinon no modifica
SELECT 1  ,    --  manera de decir je cherche si des resulats existent, el 1 no tiene importancia
FROM users,
WHERE users.id = edusign.id
);


SELECT id, first_name, last_name, mail from users    --esto es lo mismo que la linea de abajo 
SELECT * from users       --  el * equivale a todo, 
SELECT * from users where first_name = 'Ada'     -- esto hace que solo selecione una linea en especifico 
SELECT * from users where first_name like 'G%'       --  like permet d’effectuer une recherche sur un modele 
-- particulier, aqui yo dije todos los nombres que empiezan por G, el % equivale al resto de los otros caracteres. 
-- No importa si esta en mayusucula o minuscula. 
select count(*) from users               -- me cuenta todas las lineas que hay en el tablo users.
select count(*) from users where first_name like 'G%'     --  Cuenta cuantos nombres hay con la primera palabra g
select first_name from users      --  muestra unicamente una columna, aqui first_name.


update edusign set date_sign = '2024-05-30 09:30:00' where firstname = 'Ada'
insert into edusign (firstname,lastname, mail, date_sign) values ('Bella', '', '', '2024-05-30 09:30:00')    --aqui puse '' para ponerlo vacio
UPDATE edusign  set date_sign = '2024-09-01 09:30:00'


alter table edusign add user_id varchar(4)
UPDATE edusign SET user_id = '2' WHERE id = 1;
UPDATE edusign SET user_id = '4' WHERE id = 2;
UPDATE edusign SET user_id = '8' WHERE id = 3;
UPDATE edusign SET user_id = '1' WHERE id = 4;
UPDATE edusign SET user_id = '3' WHERE id = 5;
UPDATE edusign SET user_id = '5' WHERE id = 6;  
UPDATE edusign SET user_id = '6' WHERE id = 7;
UPDATE edusign SET user_id = '7' WHERE id = 8;     -- aqui puse otra columna users id para hacer el proximo ejercicio
SELECT * from edusign order by user_id ASC  --aqui podemos verlos de manera ascendiente.


SELECT * from edusign where date_sign like '2024-05-30 09:30:00'
SELECT date_sign, COUNT(*) firstname FROM edusign GROUP BY DATE(date_sign)
-- aqui solo queremos la date, y contamos cuantos nombres hay 
SELECT COUNT(*) AS volume FROM edusign WHERE firstname = 'Ada'; -- as quiere decir que lo renomamos


