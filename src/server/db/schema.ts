// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import { int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => name);

export const hooks = createTable("hooks", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  description: text("description", { length: 1024 }),
  source: text("source", { length: 1024 }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" })
});

export const hooksRelations = relations(hooks, ({ one }) => ({
  hooksStatistics: one(hooksStatistics)
}));

export const hooksStatistics = createTable("hooksStatistics", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  hookId: int("hookId", { mode: "number" }).references(() => hooks.id),
  clickCount: int("clickCount", { mode: "number" }).default(0),
  copyCount: int("copyCount", { mode: "number" }).default(0),
  usefullCount: int("usefullCount", { mode: "number" }).default(0),
  uselessCount: int("uselessCount", { mode: "number" }).default(0),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" })
});

export type Hook = typeof hooks.$inferSelect;
export type HookInsert = typeof hooks.$inferInsert;
export type HookStatistics = typeof hooksStatistics.$inferSelect;
export type HooksStatisticsInsert = typeof hooksStatistics.$inferInsert;
