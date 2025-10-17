import { AcmeClient } from "@acme-corp/acme-lib";
import { TodoistClient } from "@acme-corp/todoist-lib";
import { flow } from "@prismatic-io/spectral";

export const importTasks = flow({
  name: "Import Tasks",
  stableKey: "4dfe8b05-08dc-497a-a0b4-2c97fee1d5d9",
  description: "Import tasks with a certain label from Todoist into Acme",
  onExecution: async (context, params) => {
    const todoistClient = new TodoistClient({
      connection: context.configVars["Todoist Connection"],
      debug: context.debug.enabled,
    });
    const acmeClient = new AcmeClient({
      connection: context.configVars["Acme API Key"],
      debug: context.debug.enabled,
    });

    const tasks = await todoistClient.tasks.list({
      label: context.configVars["Task Label"],
    });

    // Import tasks from Todoist into Acme
    for (const task of tasks.results) {
      context.logger.info(`Importing task: ${task.content} (ID: ${task.id})`);
      await acmeClient.todo.create({
        task: task.content,
        completed: task.checked,
      });
    }

    return { data: null };
  },
});

export default [importTasks];
