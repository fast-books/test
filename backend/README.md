# FASTBOOKS Backend

This project is a Node.js server utilizing 
  Express.js 
  Prisma as an ORM to interact with a PostgreSQL database
  It provides several API endpoints to fetch and manipulate data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or above)
- NPM (v9.x or above)
- PostgreSQL (v15.x or above)

You can check the versions using the following commands:

```bash
node -v
npm -v
psql -V
```

### Installing

Navigate to the back end folder
install node modules
  ```bash
  cd backend 
  npm install
  ```

### Configuring Environment Variables

- Duplicate `.env.example` and create a `.env` file in the backend folder.

- Inside the `.env` file, add your environment variables:
```
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database>"
```

- Replace `<username>`, `<password>`, and `<database>` with your PostgreSQL username, password, and database name respectively.

- Make sure the `.env` file is added to `.gitignore` to avoid exposing your sensitive information.

### Using Prisma

- To generate Prisma client:

  ```bash
  npx prisma generate
  ```

- To initialize and apply database migrations:

  ```bash
  npx prisma migrate dev
  ```

- To apply database seed data, navigate back to the root directory and run the following command:

  ```bash
  npx prisma db seed --preview-feature
  ```

- To interact with your data in a visual interface:

  ```bash
  npx prisma studio
  ```

### Running the Server

- To start the server:

```bash
 For Production:  npm start
 For Development:  npm startdev
```

- By default, the server will run on `localhost:8080`.

## Available API Endpoints

- `GET /` - Welcome route
- `GET /api/items.json` - Fetch all items
- `GET /api/items/:id` - Fetch details of a specific item by ID
- `GET /api/invoice/:id` - Fetch details of a specific invoice by ID
- `GET /api/parties.json` - Fetch all parties
- `GET /api/party/:id` - Fetch details of a specific party by ID

## Built With

- [Node.js](https://nodejs.org/) - The runtime environment used
- [Express.js](https://expressjs.com/) - The web application framework used
- [Prisma](https://www.prisma.io/) - The ORM used
- [PostgreSQL](https://www.postgresql.org/) - The database used