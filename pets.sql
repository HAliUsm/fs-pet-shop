
DROP TABLE IF EXISTS pet_list; 

CREATE TABLE pet_list(
    id SERIAL PRIMARY KEY,
    pet_name varchar(20),
    age int, 
    kind varchar(20)
);


INSERT INTO pet_list(pet_name, age, kind) VALUES
    ('fido', 3, 'Parakeet'), 
    ('Cornflake', 2, 'Parakeet'), 
    ('Whiskey', 4, 'Cat'), 
    ('sillow', 2, 'cat'), 
    ('Bark', 1, 'cat'), 
    ('Meow', 3, 'dog'), 
    ('MC squared', 1, 'dog'), 
    ('Murphy Law', 3, 'dog')
;