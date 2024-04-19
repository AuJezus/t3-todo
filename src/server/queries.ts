import "server-only";

import { getServerAuthSession } from "./auth";
import { db } from "./db";

export async function getMyTasks() {
  const session = await getServerAuthSession();

  if (!session) throw new Error("Unauthorized");

  const tasks = await db.query.tasks.findMany({
    where: (model, { eq }) => eq(model.userId, session.user.id),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return tasks;
}
