"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { createTask } from "@/server/actions";

const formSchema = z.object({
  task: z.string().min(2).max(50),
});

function TaskForm(props: { className: string } | Record<string, never>) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          async (data) => await createTask(data.task),
        )}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem className={props.className}>
              <div className="flex items-center gap-4">
                <FormLabel>Task:</FormLabel>
                <FormControl>
                  <Input
                    className="w-96"
                    placeholder="Program a new backend"
                    {...field}
                  />
                </FormControl>
                <Button type="submit">Create</Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default TaskForm;
