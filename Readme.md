# Todo App

This is a simple Todo application built with Express.js and React/Redux. The backend is powered by Express.js, Prisma, and PostgreSQL, while the frontend is developed using React and Redux.

## Features

- Add new todos
- Mark todos as completed
- Filter todos by completed and active
- Delete completed todos
- Real-time updates using web sockets

## Technologies Used

- Backend:
  - Express.js: Fast and minimalist web application framework for Node.js
  - Prisma: Modern database toolkit for Node.js and TypeScript
  - PostgreSQL: Open-source relational database management system
  - Yup: JavaScript schema validation library
  - CORS: Middleware to enable cross-origin resource sharing

- Frontend:
  - React: JavaScript library for building user interfaces
  - Redux: Predictable state container for JavaScript apps
  - Axios: Promise-based HTTP client for the browser and Node.js

## Hosting

- Todo App: Vercel
- Express App : Render
- Postgresql : ElephantSql

## Getting Started

To run the application locally, you need to have Node.js and PostgreSQL installed on your machine.

### Backend Setup

1. Clone the repository: git clone https://gitlab.com/AkshitSinghal24/todo-app-express

2. Navigate to the backend directory: cd src/index.js

3. Install the dependencies: npm install

4. Set up your PostgreSQL database and update the connection string in the `.env` file.

5. Run the database migrations: npx prisma install

6. Start the backend server: npm run dev

The server will start on `http://localhost:8080`.

### Frontend Setup

1. Clone and Navigate to the frontend directory: git clone https://gitlab.com/AkshitSinghal24/react-todo-expressjs

2. Install the dependencies: npm install

3. Update the API URL in the `src/index.js` file to match your backend server URL.

4. Start the frontend development server: npm run dev

The application will open in your browser at `http://localhost:3000`.

## Deployment

The backend of the application can be deployed to Render, a cloud hosting platform that supports Node.js applications. Follow the Render documentation for deploying Node.js apps.

The frontend can be deployed to a static site hosting platform like Vercel, Netlify, or GitHub Pages. Follow the respective documentation for deploying React apps.

## License

This project is licensed under the [MIT License](LICENSE).




