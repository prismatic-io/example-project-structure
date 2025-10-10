import { input, util } from "@prismatic-io/spectral";

/** Cast input to a string (or undefined if empty) */
const optionalString = (value: unknown) =>
  util.types.toString(value) || undefined;

export const connectionInput = input({
  label: "Connection",
  type: "connection",
  required: true,
});

export const projectIdInput = input({
  label: "Project ID",
  type: "string",
  required: true,
  comments: "The ID of a project",
  clean: util.types.toString,
});

export const labelFilterInput = input({
  label: "Label",
  type: "string",
  required: false,
  comments: "Only fetch tasks that have this label",
  clean: optionalString,
});

export const projectIdFilterInput = input({
  label: "Project ID",
  type: "string",
  required: false,
  comments: "Only fetch tasks that are part of this project",
  clean: optionalString,
});

export const sectionIdFilterInput = input({
  label: "Section ID",
  type: "string",
  required: false,
  comments: "Only fetch tasks that are part of this section",
  clean: optionalString,
});

export const parentIdFilterInput = input({
  label: "Parent Task ID",
  type: "string",
  required: false,
  comments: "Only fetch tasks that are sub-tasks of this parent task",
  clean: optionalString,
});

export const taskContentInput = input({
  label: "Task Content",
  type: "string",
  required: true,
  comments: "The text content of the task",
  clean: util.types.toString,
});
