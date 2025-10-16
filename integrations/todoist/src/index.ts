import { integration } from "@prismatic-io/spectral";
import documentation from "../documentation.md";
import { componentRegistry } from "./componentRegistry";
import { configPages } from "./configPages";
import flows from "./flows";

export { configPages, componentRegistry };

export default integration({
  name: "Todoist",
  description: "Sync tasks between Acme and Todoist.",
  iconPath: "todoist.png",
  documentation,
  flows,
  configPages,
  componentRegistry,
});
