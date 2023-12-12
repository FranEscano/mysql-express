# MySQL Express App

This repository contains an Express server connected to a MySQL database. You can access the application in two ways: by cloning the repository from GitHub or by downloading the Docker images from Docker Hub.

## Clone the Repository

1. Clone the repository:

   ```bash
   git clone https://github.com/FranEscano/mysql-express.git
   ```

2. Install the dependencies:

   ```bash
   cd mysql-express
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The server will be available at [http://localhost:9898](http://localhost:9898).

## Connect with MySQL Workbench

1. Open MySQL Workbench and create a new connection.

2. Enter the connection information:

   - **Host:** mysql
   - **Port:** 3306
   - **User:** root
   - **Password:** password
   - **Database:** mysql-express (already configured in `config.js`)

3. Save the connection and establish the connection.

## Docker Usage

This repository includes Docker files to facilitate deployment through Docker containers. Ensure that Docker is installed on your machine.

1. Build the container image:

   ```bash
   docker build -t mysql-express-app .
   ```

2. Run the container using `docker-compose`:

   ```bash
   docker-compose up -d
   ```

   The server will be available at [http://localhost:9898](http://localhost:9898).

## Postman Integration

The repository includes a Postman collection for testing this app. This collection will run when the container is started in Docker. The results can be viewed directly in the console or in a automatically generated JSON file that will be saved in the local repository of the application.

This collection runs on a pre-assembled Docker image with Node and Newman installed. The docker-compose.yml includes instructions for this collection to function. Additionally, the Postman collection is integrated with the GitHub repository, so every time a change is made to the collection, it will be updated in the repository.