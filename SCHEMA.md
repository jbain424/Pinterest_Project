#Tables and Columns

**Users**
`id`: SERIAL PRIMARY KEY,
`username`: VARCHAR NOT NULL,
`email`: VARCHAR NOT NULL,
`profile_pic`: VARCHAR

**Boards**
`id`: SERIAL PRIMARY KEY,
`user_id`: INT REFERENCES users(id) ON DELETE CASCADE,
`board_content`: VARCHAR
`board_name`: VARCHAR NOT NULL

**Pins**
`id`: SERIAL PRIMARY KEY,
`user_id`: INT REFERENCES users(id) ON DELETE CASCADE,
`board_id`: INT REFERENCES pin(id) ON DELETE CASCADE,
`pin_name`: VARCHAR NOT NULL,
`pin_url`: VARCHAR NOT NULL
