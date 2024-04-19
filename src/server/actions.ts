"use server";

import { getServerAuthSession } from "./auth";

export async function createTask(task: string) {
  const session = await getServerAuthSession();

  // if (!session) throw new Error("Unauthorized");

  console.log("yes");
}
