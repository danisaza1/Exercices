CREATE TABLE articles (
    id INTEGER,
    description TEXT NULL,
    price REAL
)


INSERT INTO articles (id, description, price)
VALUES
(1, 'Malabar', 2.0),
(2, 'Fraise Tagada', 2.5),
(3, 'Carambar', 1.5),
(4, 'Michoko', 3.5),
(5, 'Calissons d''Aix', 8.0);


UPDATE articles
SET price = 1.1
WHERE id = 3;
 
 
DELETE from articles
WHERE id = 2