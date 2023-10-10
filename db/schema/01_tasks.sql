DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);
