import { db } from ".";

export async function getAllHooks() {
  return await db.query.hooks.findMany();
}

export async function getHookById(id: number) {
  return await db.query.hooks.findMany({
    where: (hooks, { eq }) => eq(hooks.id, id)
  });
}
