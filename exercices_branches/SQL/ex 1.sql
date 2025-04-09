CREATE TABLE books (
	id INTEGER PRIMARY KEY,
	bookname TEXT NOT NULL,
	author TEXT NOT NULL,
	parution_date INTEGER
);

INSERT INTO books (bookname, author, parution_date)
SELECT 'Le Deuxième Sexe', 'Simone de Beauvoir', 1949
UNION SELECT 'Une chambre à soi', 'Virginia Woolf', 1929
UNION SELECT 'Le rire de la Méduse', 'Hélène Cixous', 1975
UNION SELECT 'La cloche de détresse', 'Sylvia Plath', 1963
UNION SELECT 'Sorcières : La puissance invaincue des femmes', 'Mona Chollet', 2018
UNION SELECT 'Les Argonautes', ' Maggie Nelson', 2015
UNION SELECT 'Nous sommes tous des féministes', 'Chimamanda Ngozi Adichie', 2014
UNION SELECT 'L''Amie prodigieuse', 'Elena Ferrante', 2011
UNION SELECT 'Futur-es', 'Lauren Bastide', 2022
UNION SELECT 'King Kong Théorie', 'Virginie Despentes', 2006
UNION SELECT 'La Femme rompue', 'Simone de Beauvoir', 1967
UNION SELECT 'La Vieillesse', 'Simone de Beauvoir', 1970;


select * from books 
select * from books limit 5
select bookname, parution_date from books order by parution_date ASC 
select bookname, author from books where author = 'Simone de Beauvoir'
select bookname, author, parution_date from books where author = 'Simone de Beauvoir' and parution_date = 1949
select count(*) FROM books
