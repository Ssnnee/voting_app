# Voting App
This project has been made as part of the [ESGAE](https://esgae.org/) computer
science club projects.

The app is a simple voting app that allows users to create polls and vote on them.
This is tend to be use in the cultural days of the school to vote for the
miss of the school.

## Content Table
- [How to use](#how-to-use)
- [Technologies](#technologies)
- [Features](#features)
- [Contributors](#contributing)



## How to use

>[!NOTE]
> In this example we use bun as package manager, you can use npm or yarn if you want.
1. Copy `.env.example` and rename to `.env` and add your keys found in the dashboard.

```bash
mv .env.example .env
```

2. Run this to install dependencies
```bash
bun install
```

3. Once installed, ./start-database.sh will start the database
This will create or start a docker container with the postgres database.
This script assumes that you can run docker without sudo.
>[!NOTE]
> You should have docker installed.
```bash
./start-database.sh
```

4. Initialize the prisma database:
This will push the schema to the database and generate the client.
```bash
bun db:push
```

5. Start the server
```bash
bun dev
```

## Technologies
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Drizzle](https://orm.drizzle.team)
- [PostgreSQL](https://www.postgresql.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [tRPC](https://trpc.io/)
- [Authjs](https://authjs.dev/)


## How to contribute
If you want to contribute to the project, you can check the [TODOS.md](./TODOS.md)
file to see what needs to be done.

Since the project does not contain the tests yet, you should be careful when making
changes to the code. You should also make sure that the code is building and running
correctly.

```bash
bun run build
```
And, do not change the build rules, if you want to change the build rules, you
should create an issue and discuss it with the maintainers.

