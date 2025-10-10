import { oauth2Connection, OAuth2Type } from "@prismatic-io/spectral";

export const todoistOauth = oauth2Connection({
  key: "todoistOauth",
  oauth2Type: OAuth2Type.AuthorizationCode,
  display: {
    label: "todoist OAuth 2.0",
    description: "Connect to the todoist API using OAuth 2.0",
  },
  inputs: {
    authorizeUrl: {
      label: "Authorize URL",
      placeholder: "Authorization URL",
      type: "string",
      required: true,
      shown: false,
      comments: "The Authorization URL for todoist",
      default: "https://todoist.com/oauth/authorize",
    },
    tokenUrl: {
      label: "Token URL",
      placeholder: "Token URL",
      type: "string",
      required: true,
      shown: false,
      comments: "The Token URL for todoist",
      default: "https://todoist.com/oauth/access_token",
    },
    scopes: {
      label: "Scopes",
      placeholder: "Scopes",
      type: "string",
      required: true,
      comments:
        "Permission scopes for todoist. See https://developer.todoist.com/guides/#permission-scopes",
      default: "data:read_write",
    },
    clientId: {
      label: "Client ID",
      placeholder: "Client Identifier",
      type: "password",
      required: true,
      comments: "Client ID for todoist",
      default: "03022f4dcc274d79a4c466a5b5d7ccfa",
    },
    clientSecret: {
      label: "Client Secret",
      placeholder: "Client Secret",
      type: "password",
      required: true,
      comments: "OAuth client secret for todoist",
      default: "d15a5afbdbd744f6900b81489daccb34",
    },
  },
});

export default [todoistOauth];
