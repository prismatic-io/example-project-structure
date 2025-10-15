import { integration } from "@prismatic-io/spectral";
import flows from "./flows";
import { configPages } from "./configPages";
import { componentRegistry } from "./componentRegistry";

export { configPages, componentRegistry };

export default integration({
  name: "Todoist",
  description: "Sync tasks between Acme and Todoist.",
  iconPath: "todoist.png",
  flows,
  configPages,
  componentRegistry,
});
