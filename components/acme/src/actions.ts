import { AcmeClient } from "@acme-corp/acme-lib";
import { action } from "@prismatic-io/spectral";
import { completedInput, connectionInput, taskInput } from "./inputs";

const listTodos = action({
  display: {
    label: "List Todos",
    description: "Get a list of all todo items",
  },
  inputs: {
    connection: connectionInput,
  },
  perform: async (context, params) => {
    const client = new AcmeClient({
      connection: params.connection,
      debug: context.debug.enabled,
    });
    const todos = await client.todo.list();
    return { data: todos };
  },
});

const createTodo = action({
  display: {
    label: "Create Todo",
    description: "Create a new todo item",
  },
  inputs: {
    connection: connectionInput,
    task: taskInput,
    completed: completedInput,
  },
  perform: async (context, params) => {
    const client = new AcmeClient({
      connection: params.connection,
      debug: context.debug.enabled,
    });
    const todo = await client.todo.create({
      task: params.task,
      completed: params.completed,
    });
    return { data: todo };
  },
});

export default { listTodos, createTodo };
