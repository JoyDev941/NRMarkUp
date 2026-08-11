import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const notesTable = sqliteTable("notes_table", {
    id: int().primaryKey().notNull(),
    title: text().notNull(),
    body: text().notNull(),
    tile_colour: text().notNull(),
})