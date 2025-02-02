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

>! NOTE:
> In this example we use bun as package manager, you can use npm or yarn if you want.
1. Copy `.env.example` and rename to `.env` and add your keys found in the dashboard.

```
    mv .env.example .env
```

2. Run this to install dependencies
```
 bun install
```

3. Once installed, ./start-database.sh will start the database
This will create or start a docker container with the postgres database.
>! NOTE:
> You should have docker installed.
```
./start-database.sh
```

4. Initialize the prisma database:
This will push the schema to the database and generate the client.
```
bun db:push
```

6. Start the server
```
bun dev
```

## Technologies
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Drizzle](https://orm.drizzle.team)
- [PostgreSQL](https://www.postgresql.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [tRPC](https://trpc.io/)
