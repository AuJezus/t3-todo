"use client";

import { cn } from "@/lib/utils";
import { createTask } from "@/server/actions";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

function TaskForm(props: { className?: string }) {
  const [task, setTask] = useState("");

  return (
    <form
      action={createTask}
      className={cn("flex items-center gap-4", props.className)}
      onSubmit={() => setTask("")}
    >
      <Label>Task:</Label>
      <Input
        name="task"
        className="max-w-72"
        placeholder="Type in your new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit">Create</Button>
    </form>
  );
}

export default TaskForm;
