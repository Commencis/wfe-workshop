# Commencis WFE - Workshop

## Getting Started

### Prerequisites

#### Node.js

Before you begin, ensure you have `node: >= 22.14` installed on your system.

#### pnpm

This project uses `pnpm` as the package manager. You can install it either by activating with `corepack` which is the recommended way:

```bash
corepack prepare pnpm@latest --activate
corepack enable pnpm
```

or install globally on your system with npm.

```bash
npm install -g pnpm
```

### Installation

Run the following command to install project dependencies:

```bash
pnpm install
```

## Development

To start the development server, run the following command:

```bash
pnpm dev
```

This will launch the development server and you can access your application at `http://localhost:3000`.
