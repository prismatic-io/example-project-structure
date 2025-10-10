import { TodoistClient } from "@acme-corp/todoist-lib";
import { flow } from "@prismatic-io/spectral";

export const listProjects = flow({
  name: "List Projects",
  stableKey: "4dfe8b05-08dc-497a-a0b4-2c97fee1d5d9",
  description: "Fetch projects from Todoist",
  onExecution: async (context, params) => {
    const todoistClient = new TodoistClient({
      connection: context.configVars["Todoist Connection"],
      debug: context.debug.enabled,
    });

    const labels = await todoistClient.labels.list();

    return { data: labels };
  },
});

export default [listProjects];
