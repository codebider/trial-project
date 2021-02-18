# NUX - Trial Project

Build a document management application (API or Web), [requirements here](./docs/requirements.md)

## Architecture & Design

-   Model diagram in https://app.diagrams.net/#G1La5WxWMo2eoVDKB31GXK-ol0sGabgEOY

### API layer

- [x] POST /v1/login
- [x] POST /v1/register
- [x] GET /v1/documents - list documents
- [x] POST /v1/documents - create a document
- [x] GET /v1/documents/{id}
- [x] DELETE /v1/documents/{id}
- [x] PUT /v1/documents/{id}
- [x] GET /v1/documents/one?identityNumber

## Codebase Structure

### Naming convention:

-   Folder name: use dash-case name, e.g. `get-one`
-   File name: use camel-case name, starting with **lower case** character, e.g. `documentService.ts`

### Structure

| Name                       | Description                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| __tests__                  | Contains unit test, component test, ...                                                                             |
| dist                       | Contains the distributable (or output) from TypeScript build.                                                       |
| node_modules               | Contains all npm dependencies                                                                                       |
| jest.config.js | Used to configure Jest                                                                                                          |
| package.json               | File that contains npm dependencies                                                                                 |
| tsconfig.json              | Config settings for compiling server code written in TypeScript when develop                                        |
| src                        | Contains source code that will be compiled to the dist dir. See below for subfolder convention and notes            |

#### `src > apis`:

-   Code for REST API endpoint specific logic:
    - Handlers
    - Request / Response validation
    - Request / Response conversion to internal data transfer object
    - Request / Response schema

#### `src > domains`:

-   Code for business logic related to Document and Users:
    - core business data model & data model management
    - generic external data provider
    - naming convention for subdomain folders: noun, reflecting process or data model

#### `src > common`:

-   Code for common utility logics.
-   Should NOT be aware of business.

#### `src > connector`:

-   Code for any connector like db connector, pu-sub, ...

#### `src > migrations`:

-  All files for migrations

## Prepare for first setup

1. Install node modules: `npm install`

2. Build a local database: `docker-compose up --detach`

3. Migrate database: `npm run sequelize-cli db:migrate`


## Development

1. Run the app `npm run develop`

2. Run unit test `npm test`

3. Run unit test with coverage `npm run test:coverage`

4. Run linter `npm run lint`

## Migration

- Use this command line to create new model

`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

- Migrate database:

`npm run sequelize-cli db:migrate`

- Undo migrate:

`npm run sequelize-cli db:migrate:undo`


## Add a new module alias

### What is Module Alias


```ts
// From
import { UserManager } from '../../../../server';
// To -->
import { UserManager } from '@server';
```

### Steps to add a new module mapping

Since we have 3 "platforms" to run our code so we need 3 kinds of configuration

-   TypeScript Code
-   Jest

#### 1. Code

Open [tsconfig.json](./tsconfig.json) and add new config at the following block.

```json
{
    "compilerOptions": {
        // ...
        "paths": {
            "@server/*": ["src/*"],
            "@tests/*": ["__tests__/*"]
        }
        // ...
    }
}
```

#### 2. Jest

Jest already supported customized module mapping. Open [jest.config.js](./jest.config.js).

```js
{
	// ...
	moduleNameMapper: {
		'@tests': '<rootDir>/tests'
	}
	// ...
}
```

## Testing

We use [Jest](https://facebook.github.io/jest/) as our test framework. To execute all the tests run `npm run test`.

Note this will also generate a coverage report

## Logger:

We use consolog for logging (for now).
Should log in-out for each function
