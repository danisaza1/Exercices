CREATE TABLE songs (
    id INTEGER PRIMARY KEY,
    titre TEXT,
    artiste TEXT,
    album TEXT,
    année_de_sortie INTEGER
);

INSERT INTO songs (id, titre, artiste, album, année_de_sortie)
VALUES
(1, 'Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 1975),
(2, 'Smells Like Teen Spirit', 'Nirvana', 'Nevermind', 1991),
(3, 'Hotel California', 'Eagles', 'Hotel California', 1976);