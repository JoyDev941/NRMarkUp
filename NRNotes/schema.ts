export const createTables = `
  CREATE TABLE IF NOT EXISTS tiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    tile_color TEXT NOT NULL
  );
`;