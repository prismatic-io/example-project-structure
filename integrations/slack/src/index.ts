import { integration } from "@prismatic-io/spectral";
import documentation from "../documentation.md";
import { componentRegistry } from "./componentRegistry";
import { configPages, scopedConfigVars } from "./configPages";
import flows from "./flows";

export { componentRegistry, configPages, scopedConfigVars };

export default integration({
  name: "slack",
  description: "Send incomplete todo tasks from Acme to Slack",
  iconPath: "slack.png",
  documentation,
  flows,
  configPages,
  componentRegistry,
  scopedConfigVars,
});
