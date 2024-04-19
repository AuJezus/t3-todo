import AuthButton from "@/components/auth-btn";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { createTask } from "@/server/actions";
import { getServerAuthSession } from "@/server/auth";
import { getMyTasks } from "@/server/queries";
import { EditIcon, Trash2Icon } from "lucide-react";

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

      <form action={createTask} className="mb-4 flex items-center gap-4">
        <Label>Task:</Label>
        <Input
          name="task"
          className="max-w-72"
          placeholder="Program a new backend"
        />
        <Button type="submit">Create</Button>
      </form>

      <ul className="flex flex-col gap-4">
        {tasks.map((todo) => (
          <li
            className="bg-secondary flex w-fit items-center gap-4 rounded-md p-2"
            key={todo.task}
          >
            <p
              className={cn(
                todo.isDone && "text-muted-foreground line-through",
              )}
            >
              {todo.task}
            </p>
            <Checkbox className="h-6 w-6" defaultChecked={todo.isDone} />
            <EditIcon className="text-muted-foreground" />
            <Trash2Icon className="text-destructive" />
          </li>
        ))}
      </ul>
    </main>
  );
}
