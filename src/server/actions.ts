"use server";

import { redirect } from "next/navigation";
import { getServerAuthSession } from "./auth";
import { db } from "./db";
import { tasks } from "./db/schema";

export async function createTask(formData: FormData) {
  const session = await getServerAuthSession();
  if (!session) throw new Error("Unauthorized");

  const task = formData.get("task");
  console.log(task);
  if (typeof task !== "string" || task.length < 2 || task.length > 50)
    throw new Error("Value task must be a string, 2-50 characters");

  await db.insert(tasks).values({
    task,
    userId: session.user.id,
  });

  redirect("/");
}
