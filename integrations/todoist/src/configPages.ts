import { TodoistClient, TodoistOAuthConnection } from "@acme-corp/todoist-lib";
import {
  configPage,
  Connection,
  connectionConfigVar,
  dataSourceConfigVar,
  Element,
} from "@prismatic-io/spectral";

export const configPages = {
  Connections: configPage({
    elements: {
      // Your end user will enter connection information on the first page
      "Todoist Connection": connectionConfigVar({
        stableKey: "todoist-connection",
        dataType: "connection",
        oauth2Type: TodoistOAuthConnection.oauth2Type,
        inputs: {
          authorizeUrl: TodoistOAuthConnection.inputs.authorizeUrl,
          tokenUrl: TodoistOAuthConnection.inputs.tokenUrl,
          scopes: {
            ...TodoistOAuthConnection.inputs.scopes,
            shown: false,
          },
          clientId: {
            ...TodoistOAuthConnection.inputs.clientId,
            shown: false,
            default: process.env.TODOIST_CLIENT_ID,
          },
          clientSecret: {
            ...TodoistOAuthConnection.inputs.clientSecret,
            shown: false,
            default: process.env.TODOIST_CLIENT_SECRET,
          },
        },
      }),
    },
  }),
  "Todoist Configuration": configPage({
    elements: {
      _0: "<h2>Todoist Configuration</h2>",
      _1: "When importing tasks into Todoist, you can automatically apply a label to each task. Which label would you like to apply?",
      TaskLabel: dataSourceConfigVar({
        stableKey: "task-label",
        dataSourceType: "picklist",
        perform: async (context) => {
          const todoistClient = new TodoistClient({
            connection: context.configVars["Todoist Connection"] as Connection,
          });
          const labels = await todoistClient.labels.list();
          const options: Element[] = labels.results.map((label) => ({
            key: label.id,
            label: label.name,
          }));
          return { result: options };
        },
      }),
    },
  }),
};
