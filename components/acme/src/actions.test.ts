import { AcmeAPIKeyConnection } from "@acme-corp/acme-lib";
import type { Todo } from "@acme-corp/acme-lib/types";
import {
  createConnection,
  createHarness,
} from "@prismatic-io/spectral/dist/testing";
import dotenv from "dotenv";
import { z } from "zod";
import acmeComponent from ".";

dotenv.config();

const harness = createHarness(acmeComponent);

if (!process.env.ACME_TEST_API_KEY) {
  throw new Error(
    "ACME_TEST_API_KEY environment variable is required to run tests"
  );
}

const acmeConnection = createConnection(AcmeAPIKeyConnection, {
  api_key: process.env.ACME_TEST_API_KEY,
});

describe("Acme Component Actions", () => {
  it("should return an array of todo items", async () => {
    const result = await harness.action("listTodos", {
      connection: acmeConnection,
    });

    const todoArraySchema = z.array(
      z.object({
        id: z.number(),
        task: z.string(),
        completed: z.boolean(),
      })
    );

    expect(() => todoArraySchema.parse(result?.data)).not.toThrow();
  });

  it("should create a new todo item", async () => {
    const newTask = `Test Task ${Date.now()}`;
    const result = (await harness.action("createTodo", {
      connection: acmeConnection,
      task: newTask,
      completed: false,
    })) as { data: Todo };
    const todoSchema = z.object({
      id: z.number(),
      task: z.string(),
      completed: z.boolean(),
    });
    expect(() => todoSchema.parse(result?.data)).not.toThrow();
    expect(result?.data.task).toBe(newTask);
    expect(result?.data.completed).toBe(false);
  });
});
