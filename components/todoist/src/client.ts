import type { Connection } from "@prismatic-io/spectral";
import { createClient } from "@prismatic-io/spectral/dist/clients/http";

export const createTodoistClient = (connection: Connection) =>
  createClient({
    baseUrl: "https://api.todoist.com/rest/v2",
    headers: {
      Authorization: `Bearer ${connection.token?.access_token}`,
    },
    debug: true,
  });
