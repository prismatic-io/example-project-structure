import { createHarness } from "@prismatic-io/spectral/dist/testing";
import myComponent from ".";

const harness = createHarness(myComponent);

if (!process.env.PRISMATIC_CONNECTION_VALUE) {
  throw new Error("You must run this with prism components:dev:run");
}

const connection = JSON.parse(process.env.PRISMATIC_CONNECTION_VALUE);

test("Test create task action", async () => {
  const result = await harness.action("", {
    connection,
    content: "Prep for Webinar!",
    projectId: "2348766805",
  });
  console.log(JSON.stringify(result?.data, null, 2));
});
