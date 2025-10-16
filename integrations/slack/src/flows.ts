import { AcmeClient } from "@acme-corp/acme-lib";
import { flow } from "@prismatic-io/spectral";

export const sendTodoItems = flow({
  name: "Send Todo Items",
  stableKey: "send-todo-items",
  description: "Fetch items from an API",
  schedule: { configVar: "Fetch Schedule" },
  onExecution: async (context, params) => {
    const acmeClient = new AcmeClient({
      connection: context.configVars["Acme API Key"],
      debug: context.debug.enabled,
    });

    const todoItems = await acmeClient.todo.list();

    for (const todoItem of todoItems) {
      if (todoItem.completed) {
        context.logger.debug(`Skipping completed todo item ${todoItem.task}`);
      } else {
        await context.components.slack.postMessage({
          connection: context.configVars["Slack Connection"],
          message: `*Incomplete Todo Item*: ${todoItem.task}`,
          channelName: context.configVars["Select Slack Channel"],
        });
      }
    }

    return { data: null };
  },
});

export default [sendTodoItems];
