CREATE TABLE usuario(
    id serial NOT NULL,
    nombre character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    edad integer NOT NULL,
    PRIMARY KEY (id)
);