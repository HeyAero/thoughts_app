DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    name varchar(255),
    title varchar(255),
    date varchar(255),
    body varchar(10000)
);