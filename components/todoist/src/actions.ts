import { TodoistClient } from "@acme-corp/todoist-lib";
import { action } from "@prismatic-io/spectral";
import {
  connectionInput,
  labelFilterInput,
  parentIdFilterInput,
  projectIdFilterInput,
  projectIdInput,
  sectionIdFilterInput,
  taskContentInput,
} from "./inputs";

const listProjects = action({
  display: { label: "List Projects", description: "Fetch a list of projects" },
  inputs: { connection: connectionInput },
  perform: async (context, params) => {
    const todoistClient = new TodoistClient({
      connection: params.connection,
      debug: context.debug.enabled,
    });
    const response = await todoistClient.projects.list();
    return { data: response };
  },
});

const listTasks = action({
  display: { label: "List Tasks", description: "Fetch a list of tasks" },
  inputs: {
    connection: connectionInput,
    label: labelFilterInput,
    project_id: projectIdFilterInput,
    section_id: sectionIdFilterInput,
    parent_id: parentIdFilterInput,
  },
  perform: async (context, params) => {
    const todoistClient = new TodoistClient({
      connection: params.connection,
      debug: context.debug.enabled,
    });
    const response = await todoistClient.tasks.list({
      label: params.label,
      project_id: params.project_id,
      section_id: params.section_id,
      parent_id: params.parent_id,
    });
    return { data: response };
  },
});

const createTask = action({
  display: { label: "Create Task", description: "Create a new task" },
  inputs: {
    connection: connectionInput,
    content: taskContentInput,
    project_id: projectIdInput,
  },
  perform: async (context, params) => {
    const todoistClient = new TodoistClient({
      connection: params.connection,
      debug: context.debug.enabled,
    });
    const response = await todoistClient.tasks.create({
      content: params.content,
      project_id: params.project_id,
    });
    return { data: response };
  },
});

export default { listProjects, listTasks, createTask };
