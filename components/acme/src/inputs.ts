import { input, util } from "@prismatic-io/spectral";

export const connectionInput = input({
  label: "Connection",
  type: "connection",
  required: true,
});

export const taskInput = input({
  label: "Task",
  type: "string",
  required: true,
  comments: "The task of the todo item",
  clean: util.types.toString,
});

export const completedInput = input({
  label: "Completed",
  type: "boolean",
  required: true,
  comments: "Whether the todo item is completed",
  clean: util.types.toBool,
});
