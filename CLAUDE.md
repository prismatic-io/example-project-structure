# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a template Prismatic repository demonstrating how to organize custom components and code-native integrations. It uses npm workspaces to manage multiple packages.

## Commands

### Install dependencies (from root)

```bash
npm install
```

### Build and publish a component

```bash
cd components/<name>
npm run build
npm run publish  # builds + publishes to Prismatic
```

### Build and import an integration

```bash
cd integrations/<name>
npm run build
npm run import  # builds + imports to Prismatic
```

### Run tests

```bash
cd components/<name>
npm test
```

### Run linting

```bash
cd components/<name>
npm run lint
```

### Generate component manifest (for use in code-native integrations)

```bash
cd components/<name>
npm run generate:manifest
npm run generate:manifest:dev  # skips signature verification
```

## Architecture

### Workspace Structure

The repo uses npm workspaces with three package types:

- `components/*` - Custom components for the Prismatic low-code builder
- `integrations/*` - Code-native integrations deployed to customers
- `shared-libs/*` - TypeScript packages shared between components and integrations

### Shared Libraries Pattern

Shared libraries contain reusable code that both components and integrations can import:

- API clients (classes with HTTP methods wrapping external APIs)
- Connection definitions for authentication
- Type definitions

This avoids code duplication. When you update a shared library, all dependent components and integrations benefit without republishing manifests.

### Component Structure

Components export a `component()` definition with:

- `actions` - Individual operations (list, create, update, delete, etc.)
- `connections` - Authentication configurations

### Code-Native Integration Structure

Integrations export an `integration()` definition with:

- `flows` - Business logic executed on schedules or triggers
- `configPages` - Configuration UI for end users
- `componentRegistry` - External component manifests
- `scopedConfigVars` - Organization-level configuration

### Using External Components in Integrations

Code-native integrations can use built-in Prismatic components via manifests. Import the component manifest into `src/manifests/`, register it in `componentRegistry.ts`, then call actions via `context.components.<name>.<action>()`.

### Environment Variables

Integrations may require environment variables for OAuth credentials (client ID, client secret, signing secret). These are checked at build time in `configPages.ts`.

## Prism MCP Server

**IMPORTANT:** When the Prism MCP server is available, you MUST use it for scaffolding and code generation. Do NOT manually create boilerplate files for integrations, components, flows, or config pages. The MCP tools generate properly structured code with correct imports and patterns.

See https://github.com/prismatic-io/prism-mcp for setup.

### Required Actions by User Request

When the user says **"build/create a new integration"**:
→ Execute `prism_integrations_init` to scaffold the integration

When the user says **"add a new flow"** or **"create a flow"**:
→ Execute `prism_integrations_generate_flow` to generate the flow boilerplate

When the user says **"add a config page"** or **"update the config wizard"**:
→ Execute `prism_integrations_generate_config_page` to generate the page boilerplate

When the user says **"add a config variable"**:
→ Execute `prism_integrations_generate_config_var` to generate the variable

When the user says **"add a connection"** or **"add auth"**:
→ Execute `prism_integrations_add_connection_config_var` to add the connection

When the user says **"use component X"** or **"add the X component"**:
→ Execute `prism_install_component_manifest` to install the component manifest

When the user says **"create a new component"**:
→ Execute `prism_components_init` to scaffold the component

When the user says **"publish"** or **"deploy"**:
→ Execute `prism_components_publish` for components
→ Execute `prism_integrations_import` for integrations

When the user says **"test the flow"**:
→ Execute `prism_integrations_flows_test` to run the flow

### All Available MCP Tools

**General:**

- `prism_me` - Check login status and current user
- `prism_components_list` - List all available components with versions

**Integration Development:**

- `prism_integrations_list` - List all integrations
- `prism_integrations_init` - Initialize a new code-native integration
- `prism_integrations_import` - Import/deploy an integration
- `prism_integrations_flows_list` - List flows for an integration
- `prism_integrations_flows_test` - Test a flow
- `prism_integrations_convert` - Convert low-code YAML to code-native

**Integration Code Generation:**

- `prism_integrations_generate_flow` - Generate boilerplate for a new flow
- `prism_integrations_generate_config_page` - Generate config page boilerplate
- `prism_integrations_generate_config_var` - Generate config variable boilerplate
- `prism_integrations_add_connection_config_var` - Add connection config var
- `prism_integrations_add_datasource_config_var` - Add datasource config var
- `prism_install_component_manifest` - Install a component manifest into a CNI

**Component Development:**

- `prism_components_init` - Initialize a new component (supports WSDL/OpenAPI)
- `prism_components_publish` - Publish a component to Prismatic
- `prism_components_generate_manifest` - Generate component manifest
