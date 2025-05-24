# my-ts-template

## Description

A TypeScript Express.js project template designed for quick setup and development. It includes essential tools for building robust and maintainable web applications.

## Features

*   TypeScript for static typing
*   Express.js framework for building APIs
*   Jest for unit and integration testing
*   ESLint for code linting
*   Prettier for code formatting
*   Husky for pre-commit hooks (linting and formatting)
*   Docker support for containerization (`Dockerfile` and `docker-compose.yml`)
*   Environment variable management with `.env` files
*   Basic health check endpoint (`/api/health`)
*   Bun support for running and development (as seen in `package.json` scripts)

## Prerequisites

Before you begin, ensure you have the following installed:
*   Node.js (v20.15.1 recommended - as per `package.json` Volta config)
*   pnpm (or npm/yarn if you prefer, though `pnpm-lock.yaml` is present)
*   Optionally, Bun for using Bun-specific scripts (`dev:bun`, `start`)
*   Optionally, Docker Desktop for containerized development and deployment

## Getting Started

### Installation

1.  Navigate to your project's root directory.
2.  Install dependencies (choose your preferred package manager, pnpm is used for the lockfile):
    ```bash
    # Using pnpm
    pnpm install

    # Or using npm
    # npm install

    # Or using yarn
    # yarn install
    ```

## Environment Configuration

This project uses `.env` files for environment variable management.
1.  Create a `.env` file by copying the sample:
    ```bash
    cp .env.sample .env
    ```
2.  Modify the `.env` file with your specific configurations. The primary variable used by default is `PORT` for the server.

## Available Scripts

Here are the main scripts available in this project:

*   `clean`: Removes `node_modules`, `dist`, and `coverage` directories.
    ```bash
    pnpm clean
    ```
*   `build`: Compiles TypeScript to JavaScript, outputting to the `dist` directory.
    ```bash
    pnpm build
    ```
*   `dev`: Starts the application in development mode with `nodemon` for automatic restarts on file changes.
    ```bash
    pnpm dev
    ```
*   `dev:bun`: Starts the application in development mode using `bun --hot` for hot reloading.
    ```bash
    pnpm dev:bun
    ```
*   `start`: Starts the application using `bun src/index.ts`. (Note: For production, it's generally recommended to run the compiled JavaScript from the `dist` folder, e.g., `node dist/index.js` or `bun dist/index.js` after `pnpm build`).
    ```bash
    pnpm start
    ```
*   `lint`: Lints the codebase using ESLint.
    ```bash
    pnpm lint
    ```
*   `lint:fix`: Lints the codebase and attempts to fix issues automatically.
    ```bash
    pnpm lint:fix
    ```
*   `format`: Formats the code using Prettier.
    ```bash
    pnpm format
    ```
*   `test`: Runs tests using Jest.
    ```bash
    pnpm test
    ```
*   `lint-staged`: Runs linters on staged files (part of pre-commit hook).
*   `prepare`: Sets up Husky pre-commit hooks.

## Running the Application

### Development Mode

For development, you can use either `nodemon` (with Node.js) or `bun` for hot reloading:
```bash
# Using nodemon (Node.js)
pnpm dev
```
Or with Bun:
```bash
pnpm dev:bun
```
The server will start on the port specified in your `.env` file (default is `4000` as per `.env.sample`).

### Production Mode

For a production environment, it's recommended to build the project first and then run the compiled JavaScript:
1.  Build the application:
    ```bash
    pnpm build
    ```
2.  Run the application:
    ```bash
    node dist/index.js
    ```
    Alternatively, if using Bun as your runtime in production:
    ```bash
    bun dist/index.js
    ```
    Ensure your `.env` file has the correct production settings.

## Running Tests

To run the test suite (using Jest):
```bash
pnpm test
```
This will execute all `*.spec.ts` and `*.test.ts` files.

## Linting and Formatting

To check for linting issues:
```bash
pnpm lint
```
To automatically fix linting and formatting issues:
```bash
pnpm lint:fix
pnpm format
```
These are also run automatically on staged files before commits thanks to Husky and lint-staged.

## Building for Production

To compile the TypeScript code to JavaScript for production deployment:
```bash
pnpm build
```
The compiled output will be placed in the `dist` directory.

## Docker Support

This project includes a `Dockerfile` and `docker-compose.yml` for containerization.
To build and run the application using Docker Compose:
```bash
# Ensure your .env file is configured, Docker Compose will use it
docker-compose up --build
```
To run in detached mode:
```bash
docker-compose up --build -d
```
To stop the services:
```bash
docker-compose down
```
The `Dockerfile` is optimized for production builds by default.

## Project Structure

```
my-ts-template/
├── .husky/             # Husky pre-commit hooks
├── dist/               # Compiled JavaScript output (after build)
├── node_modules/       # Project dependencies
├── src/                # Source code
│   ├── app.ts          # Express application setup
│   ├── config.ts       # Configuration loader (e.g., for .env)
│   ├── index.ts        # Application entry point
│   ├── routes/         # API route definitions
│   │   └── index.ts    # Main router
│   ├── *.spec.ts       # Test files
├── .env.sample         # Sample environment variables
├── .eslintrc.mjs       # ESLint configuration
├── .gitignore          # Git ignore rules
├── .prettierrc         # Prettier configuration
├── Dockerfile          # Docker build instructions
├── docker-compose.yml  # Docker Compose configuration
├── jest.config.js      # Jest test runner configuration
├── package.json        # Project metadata and dependencies
├── pnpm-lock.yaml      # PNPM lock file
├── README.md           # This file
└── tsconfig.json       # TypeScript compiler options (for development)
└── tsconfig.prod.json  # TypeScript compiler options (for production builds)
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
If you find any issues or have suggestions for improvements, please open an issue in the repository.
Ensure your code adheres to the linting and formatting standards by running `pnpm lint:fix` and `pnpm format` before committing.

## License

This project is licensed under the ISC License. You may want to create a `LICENSE` file in the root of your project with the full ISC license text.
