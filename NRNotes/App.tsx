import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as SQLite from 'expo-sqlite';

const expo = SQLite.openDatabaseSync('notesList.db')
const db = drizzle(expo)