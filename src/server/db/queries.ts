import { db } from ".";
import { eq } from "drizzle-orm";
import { hooks, hooksStatistics } from "./schema";

export async function getAllHooks() {
  return await db.query.hooks.findMany();
}

export async function getPopularHooks() {
  return await db
    .select()
    .from(hooks)
    .leftJoin(hooksStatistics, eq(hooks.id, hooksStatistics.id))
    .orderBy(hooksStatistics.copyCount)
    .limit(4);
}

export async function getHooksByIds(ids: number[]) {
  return await db.query.hooks.findMany({
    where: (hooks, { inArray }) => inArray(hooks.id, ids)
  });
}

export async function getHookById(id: number) {
  return await db.query.hooks.findMany({
    where: (hooks, { eq }) => eq(hooks.id, id)
  });
}
