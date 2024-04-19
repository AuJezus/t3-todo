"use server";

import { redirect } from "next/navigation";
import { getServerAuthSession } from "./auth";
import { db } from "./db";
import { tasks } from "./db/schema";
import { and, eq } from "drizzle-orm";

export async function createTask(formData: FormData) {
  const session = await getServerAuthSession();
  if (!session) throw new Error("Unauthorized");

  const task = formData.get("task");
  if (typeof task !== "string" || task.length < 2 || task.length > 50)
    throw new Error("Value task must be a string, 2-50 characters");

  await db.insert(tasks).values({
    task,
    userId: session.user.id,
  });

  redirect("/");
}

export async function deleteTask(formData: FormData) {
  const session = await getServerAuthSession();
  if (!session) throw new Error("Unauthorized");

  const taskId = Number(formData.get("taskId"));
  if (isNaN(taskId)) throw new Error("Task id must be a number");

  await db
    .delete(tasks)
    .where(and(eq(tasks.id, taskId), eq(tasks.userId, session.user.id)));

  redirect("/");
}

export async function editTaskCompletion(formData: FormData) {
  const session = await getServerAuthSession();
  if (!session) throw new Error("Unauthorized");

  const taskId = Number(formData.get("taskId"));
  if (isNaN(taskId)) throw new Error("Task id must be a number");

  const isDone = Boolean(formData.get("isDone"));

  await db
    .update(tasks)
    .set({ isDone: isDone })
    .where(and(eq(tasks.id, taskId), eq(tasks.userId, session.user.id)));

  redirect("/");
}

export async function editTask(formData: FormData) {
  const session = await getServerAuthSession();
  if (!session) throw new Error("Unauthorized");

  const taskId = Number(formData.get("taskId"));
  if (isNaN(taskId) || !taskId) throw new Error("Task id must be a number");

  const task = formData.get("task");
  if (typeof task !== "string" || task.length < 2 || task.length > 50)
    throw new Error("Value task must be a string, 2-50 characters");

  await db
    .update(tasks)
    .set({ task })
    .where(and(eq(tasks.id, taskId), eq(tasks.userId, session.user.id)));

  redirect("/");
}
