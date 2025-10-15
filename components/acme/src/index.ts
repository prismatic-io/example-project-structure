import { component } from "@prismatic-io/spectral";
import actions from "./actions";
import { AcmeAPIKeyConnection } from "@acme-corp/acme-lib";

export default component({
  key: "acme",
  public: false,
  display: {
    label: "Acme",
    description: "Interact with the Acme todo API",
    iconPath: "icon.png",
  },
  actions,
  connections: [AcmeAPIKeyConnection],
});
