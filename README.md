# Example Prismatic Repository Structure

This repository provides an example structure for organizing the custom components and code-native integrations that you build within the [Prismatic](https://prismatic.io/docs/) integration platform.

## Build Status

[![Deploy Prismatic custom components](https://github.com/prismatic-io/example-project-structure/actions/workflows/components.yml/badge.svg)](https://github.com/prismatic-io/example-project-structure/actions/workflows/components.yml)

[![Deploy Prismatic code-native integrations](https://github.com/prismatic-io/example-project-structure/actions/workflows/integrations.yml/badge.svg)](https://github.com/prismatic-io/example-project-structure/actions/workflows/integrations.yml)

## Project Structure

This project contains four main directories:

- `.github/` contains GitHub configuration files, including workflows for CI/CD.
- `components/` contains [custom components](https://prismatic.io/docs/custom-connectors/) that can be used across multiple integrations.
- `integrations/` contains [code-native integrations](https://prismatic.io/docs/integrations/code-native/) that can be deployed to customers.
- `shared-libs/` contains shared code that can be used by both components and integrations.
- `misc/` contains miscellaneous files and scripts unrelated to components or integrations.

---

## What is Prismatic?

Prismatic is the leading embedded iPaaS, enabling B2B SaaS teams to ship product integrations faster and with less dev time. The only embedded iPaaS that empowers both developers and non-developers with tools for the complete integration lifecycle, Prismatic includes low-code and code-native building options, deployment and management tooling, and self-serve customer tools.

Prismatic's unparalleled versatility lets teams deliver any integration from simple to complex in one powerful platform. SaaS companies worldwide, from startups to Fortune 500s, trust Prismatic to help connect their products to the other products their customers use.

With Prismatic, you can:

- Build [integrations](https://prismatic.io/docs/integrations/) using our [intuitive low-code designer](https://prismatic.io/docs/integrations/low-code-integration-designer/) or [code-native](https://prismatic.io/docs/integrations/code-native/) approach in your preferred IDE
- Leverage pre-built [connectors](https://prismatic.io/docs/components/) for common integration tasks, or develop custom connectors using our TypeScript SDK
- Embed a native [integration marketplace](https://prismatic.io/docs/embed/) in your product for customer self-service
- Configure and deploy customer-specific integration instances with powerful configuration tools
- Support customers efficiently with comprehensive [logging, monitoring, and alerting](https://prismatic.io/docs/monitor-instances/)
- Run integrations in a secure, scalable infrastructure designed for B2B SaaS
- Customize the platform to fit your product, industry, and development workflows

## Who uses Prismatic?

Prismatic is built for B2B software companies that need to provide integrations to their customers. Whether you're a growing SaaS startup or an established enterprise, Prismatic's platform scales with your integration needs.

Our platform is particularly powerful for teams serving specialized vertical markets. We provide the flexibility and tools to build exactly the integrations your customers need, regardless of the systems you're connecting to or how unique your integration requirements may be.

## What kind of integrations can you build using Prismatic?

Prismatic supports integrations of any complexity - from simple data syncs to sophisticated, industry-specific solutions. Teams use it to build integrations between any type of system, whether modern SaaS or legacy with standard or custom protocols. Here are some example use cases:

- Connect your product with customers' ERPs, CRMs, and other business systems
- Process data from multiple sources with customer-specific transformation requirements
- Automate workflows with customizable triggers, actions, and schedules
- Handle complex authentication flows and data mapping scenarios

For information on the Prismatic platform, check out our [website](https://prismatic.io/) and [docs](https://prismatic.io/docs/).

## License

This repository is MIT licensed.
