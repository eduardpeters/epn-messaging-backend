CREATE DATABASE epn_db;

CREATE TABLE users (
    user_id uuid UNIQUE DEFAULT gen_random_uuid(),
    username varchar(255) NOT NULL UNIQUE,
    pass_hash varchar(255) NOT NULL,

    PRIMARY KEY (user_id)
);