# TypeScript

- Using Typescript with Node.js gives you type safety, better tooling and cleaner code.
- Strong type safety and compile-time errors.
- Catches many bugs before run time.

## Set up Node.js project
1. Initialize app
    - mkdir my-node-ts-app && cd my-node-ts-app
    - npm init -y
2. Install TypeScript & Types
    - npm install typescript ts-node-dev --save-dev
    - npm install @types/node --save-dev
3. Create a tsconfig.json
    - npx tsc --init
4. Edit tsconfig.json file
    ```
    {
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true
        }
    }
    ```
5. Create src/index.ts file and add some code.
6. Add ts-node-dev script in `package.json` file
    ```
        "scripts": {
        "start": "ts-node-dev --respawn src/index.ts",
        "build": "tsc",
        "serve": "node dist/index.js"
        }
    ```
7. Run your application using `npm run start` command.
8. Build for production
    - npm run build
    - npm run serve

## REST API with TypeScript and Express
1. Create project folder
2. Install dependencies
    - npm install express
    - npm install --save-dev typescript ts-node-dev @types/node @types/express
3. Create a tsconfig.json
    - npx tsc --init
4. Edit tsconfig.json file
    ```
        {
        "compilerOptions": {
            "target": "ES2020",
            "module": "commonjs",
            "outDir": "./dist",
            "rootDir": "./src",
            "strict": true,
            "esModuleInterop": true,
            "skipLibCheck": true
        }
        }
    ```
5. Create project structure
    - ├── src/
    - │   ├── index.ts
    - │   ├── routes/
    - │   │   └── userRoutes.ts
    - │   └── controllers/
    - │       └── userController.ts
    - ├── package.json
    - └── tsconfig.json
6. Create an Express Server
7. Create routes
    - src/routes/userRoutes.ts
8. Create Controller
    - src/controllers/userController.ts

## Express + TypeScript + MongoDB
- **MongoDB (NoSQL)** - great for document-based, flexible schemas
1. Install dependencies
    - npm install mongoose
    - npm install --save-dev @types/mongoose
2. Create model
    - src/models/userModel.ts
3. Connect to mongoDB

- **mySQL/PostgresSQL (SQL)** - great for relational, structured data.
