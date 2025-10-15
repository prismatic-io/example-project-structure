import { connection, input } from "@prismatic-io/spectral";

export const AcmeAPIKeyConnection = connection({
  key: "acmeApiKey",
  display: {
    label: "Acme API Key",
    description: "Connect to the Acme API using an API key",
  },
  inputs: {
    api_key: input({
      label: "API Key",
      type: "password",
      required: true,
      comments: "The API key provided by Acme",
    }),
  },
});
