import {
  configPage,
  configVar,
  organizationActivatedConnection,
} from "@prismatic-io/spectral";
import { slackOauth2 } from "./manifests/slack/connections/oauth2";
import { slackSelectChannels } from "./manifests/slack/dataSources/selectChannels";

if (
  !process.env.SLACK_CLIENT_ID ||
  !process.env.SLACK_CLIENT_SECRET ||
  !process.env.SLACK_SIGNING_SECRET
) {
  throw new Error(
    "SLACK_CLIENT_ID, SLACK_CLIENT_SECRET, and SLACK_SIGNING_SECRET environment variables are required to run this integration."
  );
}

export const configPages = {
  Connections: configPage({
    tagline: "Authenticate with Slack",
    elements: {
      "Slack Connection": slackOauth2("slack-oauth-connection", {
        clientId: {
          value: process.env.SLACK_CLIENT_ID,
          permissionAndVisibilityType: "organization",
          visibleToOrgDeployer: false,
        },
        clientSecret: {
          value: process.env.SLACK_CLIENT_SECRET,
          permissionAndVisibilityType: "organization",
          visibleToOrgDeployer: false,
        },
        signingSecret: {
          value: process.env.SLACK_SIGNING_SECRET,
          permissionAndVisibilityType: "organization",
          visibleToOrgDeployer: false,
        },
        scopes: {
          value: "chat:write chat:write.public channels:read",
          permissionAndVisibilityType: "organization",
          visibleToOrgDeployer: false,
        },
        // @ts-ignore (use default value; will be optional in future)
        authorizeUrl: {
          permissionAndVisibilityType: "organization",
          visibleToOrgDeployer: false,
        },
        // @ts-ignore (use default value; will be optional in future)
        isUser: {
          permissionAndVisibilityType: "organization",
          visibleToOrgDeployer: false,
        },
        // @ts-ignore (use default value; will be optional in future)
        tokenUrl: {
          permissionAndVisibilityType: "organization",
          visibleToOrgDeployer: false,
        },
        // @ts-ignore
        revokeUrl: {
          permissionAndVisibilityType: "organization",
          visibleToOrgDeployer: false,
        },
      }),
    },
  }),
  "Slack Configuration": configPage({
    tagline: "Select a Slack channel from a dropdown menu",
    elements: {
      _0: "Which Slack channel should we send todo items to?",
      "Select Slack Channel": slackSelectChannels("select-slack-channel", {
        connection: { configVar: "Slack Connection" },
        includePublicChannels: { value: true },
      }),
    },
  }),
  "Schedule Configuration": configPage({
    tagline: "Run frequency",
    elements: {
      _1: "How often should we fetch todo items from Acme?",
      "Fetch Schedule": configVar({
        stableKey: "fetch-schedule",
        dataType: "schedule",
        defaultValue: "30 12 * * *", // Default to every day at 12:30 PM
        timeZone: "America/Chicago",
      }),
    },
  }),
};

// Organization-activated customer connection
// https://prismatic.io/docs/integrations/connections/integration-agnostic-connections/org-activated-customer/
// This will be set by the organization. Users will not see this config variable.
export const scopedConfigVars = {
  "Acme API Key": organizationActivatedConnection({
    stableKey: "acme-api-key",
  }),
};
