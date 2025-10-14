import { TodoistOAuthConnection } from "@acme-corp/todoist-lib";
import { component } from "@prismatic-io/spectral";
import actions from "./actions";

export default component({
  key: "todoist",
  public: false,
  display: {
    label: "Todoist",
    description: "Interact with Tasks, Projects, and more in Todoist",
    iconPath: "todoist.png",
  },
  actions,
  connections: [TodoistOAuthConnection],
});
