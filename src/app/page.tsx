import AuthButton from "@/components/auth-btn";
import TaskForm from "@/components/task-form";
import Todo from "@/components/todo";
import { getServerAuthSession } from "@/server/auth";
import { getMyTasks } from "@/server/queries";

export default async function HomePage() {
  const session = await getServerAuthSession();

  if (!session)
    return (
      <main className="mt-28 flex flex-col items-center gap-8">
        <p className="text-4xl">To continue please sign in.</p>
        <AuthButton />
      </main>
    );

  const tasks = await getMyTasks();

  return (
    <main className="mx-auto max-w-[1200px] p-6">
      <h1 className="mb-4 text-4xl font-semibold">To-do</h1>

      <TaskForm className="mb-4" />

      <ul className="flex flex-col gap-4">
        {tasks.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
