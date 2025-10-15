import type { Connection } from "@prismatic-io/spectral";
import {
  type HttpClient,
  createClient,
} from "@prismatic-io/spectral/dist/clients/http";
import type { Todo } from "./types";

interface ConstructorParams {
  connection: Connection;
  debug?: boolean;
}

export class AcmeClient {
  private client: HttpClient;

  constructor({ connection, debug = false }: ConstructorParams) {
    const accessToken = connection.fields.api_key;
    this.client = createClient({
      baseUrl:
        "https://my-json-server.typicode.com/prismatic-io/placeholder-data/",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      debug,
    });
  }

  public readonly todo = {
    /** Get a list of all todo items */
    list: async (): Promise<Todo[]> => {
      const response = await this.client.get<Todo[]>("/todo");
      return response.data;
    },
    create: async (item: Omit<Todo, "id">): Promise<Todo> => {
      const response = await this.client.post<Todo>("/todo", item);
      return response.data;
    },
  };
}
