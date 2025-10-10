import { action, input } from "@prismatic-io/spectral";
import { createTodoistClient } from "./client";

const listProjects = action({
  display: { label: "List Projects", description: "List a bunch of projects" },
  inputs: {
    connection: input({
      label: "Connection",
      type: "connection",
      required: true,
    }),
  },
  perform: async (context, params) => {
    const todoistclient = createTodoistClient(params.connection);
    const response = await todoistclient.get("/projects");
    return { data: response.data };
  },
});

const createTask = action({
  display: { label: "Create Task", description: "create a task in a project" },
  inputs: {
    connection: input({
      label: "Connection",
      type: "connection",
      required: true,
    }),
    content: input({ label: "Content", type: "string", required: true }),
    projectId: input({ label: "Project ID", type: "string", required: true }),
  },
  perform: async (context, params) => {
    const todoistclient = createTodoistClient(params.connection);
    const response = await todoistclient.post("/task", {
      content: params.content,
      project_id: params.projectId,
    });
    return { data: response.data };
  },
});

export default { listProjects, helloWorld, createTask };
