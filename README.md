#  Inventory Management System

A simple inventory management backend system built with Node.js, Express, and MongoDB.

##  Features

- Create inventory items
- View all items
- Server health monitoring
- Logging middleware
- MongoDB database integration

##  Installation

1. Clone the repository:
   ```bash 
   git clone (https://github.com/Akhil001247/Inventory-Management-System.git)

2. Install dependencies:

    npm install

## Running the Server

    Development (with auto-restart):-
    npm run dev

    Production:-
    npm start

## API Endpoints

Method	Endpoint	Description

- GET	        /	   API status check

- GET	        /      health Server health check

- POST	        /      items Add new inventory item

- GET        	/      items List all inventory items


## Technologies Used

-  Node.js

- Express.js

- MongoDB (with Mongoose)

- Dotenv (for environment variables)

## Postman Collection
Download [Inventory-API.postman_collection.json](./Inventory-API.postman_collection.json) to import into Postman.