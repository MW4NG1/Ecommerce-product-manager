## Oak & Time ⌚

A modern React-based e-commerce administrator portal for Oak & Time, a fictional watch store.
The application allows administrators to view, add, and edit watches while providing a responsive experience.

## About the Project

Oak & Time was developed as a Single Page Application using React.
The project demonstrates modern frontend development practices,including component-based architecture, state management with React Hooks, client-side routing, data fetching, simulated backend persistence, and automated testing.

## Features

- Landing page introducing Oak & Time
- Product/shop page displaying available watches
- Dynamic watch search functionality
- Admin form for adding new watches
- Admin functionality for editing existing watches
- Persistent product data using JSON Server
- GET requests for retrieving products
- POST requests for adding products
- PATCH requests for updating products
- Client-side navigation using React Router
- React state management using Hooks
- Custom useProducts hook
- Automated component and interaction testing with Vitest and React Testing Library
- Responsive and modern visual design

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- React Hooks
- JSON Server
- Vitest
- React Testing Library
- Testing Library User Event
- CSS
- Git & GitHub

## Project Structure

Ecommerce-product-manager/

The project is organized into different folders based on the functionality of the application:

- `src/components/` contains the React components used throughout the application.
- `src/hooks/` contains the custom `useProducts` hook used to manage product data.
- `src/styles/` contains the styling used for the application.
- `src/tests/` contains the Vitest and React Testing Library test files.
- `src/App.jsx` contains the main application routes.
- `src/main.jsx` is the entry point of the React application.
- `db.json` contains the mock product data used by JSON Server.
- `vite.config.js` contains the Vite and Vitest configuration.

## How It Works

1. The user opens the Oak & Time application and is taken to the landing page.
2. The navigation bar allows the user to move between the Home, Shop, and Admin pages.
3. The Shop page retrieves watch information from the JSON Server using a GET request.
4. Users can search for watches using the search functionality.
5. The Admin page allows an administrator to enter information for a new watch.
6. A POST request sends the new watch information to JSON Server and adds it to the product collection.
7. Administrators can select an existing watch and edit its information.
8. A PATCH request updates the selected watch in the simulated backend.
9. React state is updated so changes are displayed without manually refreshing the application.

## How to run the project

Before running the project, make sure you have the following installed:

- Node.js
- npm
- Git

1. Clone the repository
   git clone your repository
2. Navigate into the project
   cd Ecommerce-product-manager
3. Install dependencies
   npm install
4. Start the JSON Server
   Open a terminal and run: npm run server
5. Start the React development server

- Open a second terminal in the project directory and run:
  npm run dev
  The application will be available at the local URL provided by Vite.

## Running Tests

The project uses Vitest and React Testing Library.

Run the test suite with:
npm test

The test suite covers:

- Home page rendering
- Navigation and routing
- Add Watch form interaction
- Watch search interaction
- Editing an existing watch
- Custom useProducts hook and data fetching

## Data Management

Product information is stored in db.json and managed through JSON Server.

The application currently supports:
GET

Retrieves the available watches from the simulated backend.
POST

Allows the administrator to add a new watch.
PATCH

Allows the administrator to edit information belonging to an existing watch, including its price.

## Design

Oak & Time uses a custom visual identity designed around a modern luxury-watch aesthetic.

## Known Limitations

- The application uses JSON Server as a simulated backend rather than a production database.
- Product data is intended for development and demonstration purposes.
- Authentication and administrator account management are not currently implemented.
- Product deletion is not currently implemented.
- The application does not include a real payment or checkout system.

## Future Improvements

Possible future improvements include:

- Add product deletion functionality
- Add administrator authentication
- Connect the application to a real backend and database
- Add product images and image management
- Add product categories and advanced filtering
- Add a customer shopping cart and checkout system
- Deploy the application for public use

## Project Purpose

This project was created as a summative React development project to demonstrate proficiency in:

- React component architecture
- State management
- Custom Hooks
- Client-side routing
- CRUD-related data operations
- API interaction
- Form handling
- Automated testing
- Debugging
- Code organization and maintainability
- Git and GitHub workflow

## Author

Developed as a Moringa School Summative Lab project.

## Conclusion

Oak & Time demonstrates the use of React to build a modern Single Page Application with client-side routing, state management, custom hooks, data fetching, form handling, and automated testing.
