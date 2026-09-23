# Sustainable Products Guide - Planning & Architecture

## Overview
The "Sustainable Products Guide" is a Minimum Viable Product (MVP) designed to display a list of products with a filtering mechanism to show only eco-friendly items.

## Architecture & Tools Chosen
- **Frontend Framework**: React. Chosen for its simple component-based architecture, which is ideal for isolating the product list and filtering logic.
- **Unit Testing**: Jest & React Testing Library. Jest is a comprehensive, industry-standard testing framework. React Testing Library allows testing components from a user's perspective, effectively verifying the filtering logic works as expected.
- **CI/CD**: GitHub Actions. Provides a seamless, built-in CI/CD platform that integrates with GitHub repositories to automatically build the project and run tests on every push.
- **Containerization**: Docker. Packages the application along with its dependencies using a multi-stage build, minimizing the final image size by serving the static production files via an Nginx alpine image.

## Initialization Steps
1. **Scaffolding**: Created a clean project structure to hold the React components, tests, and configuration files.
2. **Component Creation**: 
   - `App.jsx`: Holds the application state (`filterEco`) and the mock data.
   - `ProductList.jsx`: Receives products and the filter flag as props, and renders the products conditionally.
3. **Testing Setup**: Authored two automated unit tests in `ProductList.test.jsx` to verify both unfiltered and filtered states using Jest.
4. **CI/CD Pipeline**: Authored `.github/workflows/main.yml` to checkout the code, setup Node.js, install dependencies, run tests, and build the project on every push to `main`.
5. **Dockerization**: Created a multi-stage `Dockerfile`. The first stage builds the React application, and the second stage serves the static files using a lightweight Nginx web server.
