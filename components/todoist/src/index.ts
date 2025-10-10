import { component } from "@prismatic-io/spectral";
import connections from "./connections";
import actions from "./actions";

export default component({
  key: "todoist",
  public: false,
  display: {
    label: "todoist",
    description: "Interact with todoist's API",
    iconPath: "icon.png",
  },
  actions,
  connections,
});
