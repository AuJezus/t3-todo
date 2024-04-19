"use client";

import { cn } from "@/lib/utils";
import type { Task } from "@/server/db/schema";
import { Checkbox } from "./ui/checkbox";
import { EditIcon, Trash2Icon } from "lucide-react";
import { editTaskCompletion, deleteTask, editTask } from "@/server/actions";
import { useState } from "react";

function Todo(props: { todo: Task }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <li
      className="bg-secondary flex w-fit items-center gap-4 rounded-md p-2"
      key={props.todo.task}
    >
      {isEdit && (
        <form action={editTask} onSubmit={() => setIsEdit(false)}>
          <input name="taskId" hidden defaultValue={props.todo.id} />
          <input
            className="w-80 bg-transparent outline-none"
            name="task"
            autoFocus
            defaultValue={props.todo.task}
            onBlur={() => setIsEdit(false)}
          />
          <input type="submit" hidden />
        </form>
      )}
      {!isEdit && (
        <p
          className={cn(
            props.todo.isDone && "text-muted-foreground line-through",
          )}
        >
          {props.todo.task}
        </p>
      )}

      <form action={editTaskCompletion} className="flex items-center">
        <input hidden name="taskId" defaultValue={props.todo.id} />
        <Checkbox
          type="submit"
          name="isDone"
          className="h-6 w-6"
          defaultChecked={props.todo.isDone}
        />
      </form>

      <EditIcon
        onClick={() => setIsEdit((e) => !e)}
        className="text-muted-foreground cursor-pointer"
      />

      <form action={deleteTask} className="flex items-center">
        <input hidden name="taskId" defaultValue={props.todo.id} />
        <button type="submit">
          <Trash2Icon className="text-destructive" />
        </button>
      </form>
    </li>
  );
}

export default Todo;
