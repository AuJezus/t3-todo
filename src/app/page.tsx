import TaskForm from "@/components/task-form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { EditIcon, Trash2Icon } from "lucide-react";
import { z } from "zod";

const todoList = [
  { task: "Clean room", done: false },
  { task: "Code a new frontend", done: false },
  { task: "Take out the trash", done: true },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1200px] p-6">
      <h1 className="mb-4 text-4xl font-semibold">To-do</h1>

      <TaskForm className="mb-4" />

      <ul className="flex flex-col gap-4">
        {todoList.map((todo) => (
          <li
            className="bg-secondary flex w-fit items-center gap-4 rounded-md p-2"
            key={todo.task}
          >
            <p
              className={cn(todo.done && "text-muted-foreground line-through")}
            >
              {todo.task}
            </p>
            <Checkbox className="h-6 w-6" defaultChecked={todo.done} />
            <EditIcon className="text-muted-foreground" />
            <Trash2Icon className="text-destructive" />
          </li>
        ))}
      </ul>
    </main>
  );
}
