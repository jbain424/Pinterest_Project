#Tables and Columns

**users**
`id`: SERIAL PRIMARY KEY
`username`: VARCHAR NOT NULL
`email`: VARCHAR NOT NULL

**Boards**
`id`: SERIAL PRIMARY KEY
`user_id`: INT REFERENCES users(id)

**Posts**
`id`: SERIAL PRIMARY KEY
`post_id`: INT REFERENCES users(id)
ON DELETE CASCADE

**Pins**
`id`: SERIAL PRIMARY KEY
`pin_id`: INT REFERENCES posts(id)
`board_id`: INT REFERENCES boards(id)
ON DELETE CASCADE

**Tags**
`id`: SERIAL PRIMARY KEY

**Taggings**
`id`: SERIAL PRIMARY KEY
`taggings_id`: INT REFERENCES tags(id)
`postings_id`: INT REFERENCES posts(id)
ON DELETE CASCADE
