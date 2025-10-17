import type { Connection } from "@prismatic-io/spectral";
import {
  type HttpClient,
  createClient,
} from "@prismatic-io/spectral/dist/clients/http";
import type {
  CreateTaskParams,
  GetTasksParams,
  Label,
  ListLabelsParams,
  ListLabelsReturn,
  Project,
  Task,
} from "./types";

interface ConstructorParams {
  connection: Connection;
  debug?: boolean;
}

export class TodoistClient {
  private client: HttpClient;

  constructor({ connection, debug = false }: ConstructorParams) {
    const accessToken = connection.token?.access_token;
    if (!accessToken) {
      throw new Error("Connection is missing access token");
    }
    this.client = createClient({
      baseUrl: "https://api.todoist.com/api/v1",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      debug,
    });
  }

  public readonly projects = {
    /** Get a list of all projects */
    list: async (): Promise<{ results: Project[] }> => {
      const response = await this.client.get<{ results: Project[] }>(
        "/projects"
      );
      return response.data;
    },
  };

  public readonly tasks = {
    /** Get a list of tasks, optionally filtered by project, section, parent task, or label */
    list: async (params: GetTasksParams = {}): Promise<{ results: Task[] }> => {
      const response = await this.client.get<{ results: Task[] }>("/tasks", {
        params,
      });
      return response.data;
    },
    /** Create a new task in a specified project */
    create: async (params: CreateTaskParams): Promise<Task> => {
      const response = await this.client.post<Task>("/tasks", params);
      return response.data;
    },
  };

  public readonly labels = {
    /** Get a list of labels */
    list: async (params: ListLabelsParams = {}): ListLabelsReturn => {
      const response = await this.client.get<{
        results: Label[];
        next_cursor?: string;
      }>("/labels", {
        params: { cursor: params.cursor },
      });
      return response.data;
    },
  };
}
