# Ino Health Assignment

This project contain the files to implement a simple Next.js app with tRPC.

## Running

To run this project locally, you will need to create a docker container for the database. You can do this by running the following command in the project's root folder.

```bash
docker compose up -d
```

After the container is created you will need to install the project dependencies, you can do this with:

```bash
npm i
```

After the dependencies are installed you will need to create the data into the database, for that you can run Prisma migrations with the command:

```bash
npx prisma migrate dev
```

When all the previous steps are done you can run the project with:
```bash
npm run dev
```