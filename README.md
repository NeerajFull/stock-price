# Stock and Crypto Price Tracker

## Description

This project is a mini-website to collect and display real-time price data for stocks and cryptocurrencies. It uses ReactJs for the frontend, and Express with MongoDB for the backend. Tailwind CSS is used for styling.

## Installation

### Backend

1. Clone the repository and navigate to the root directory (backend directory).
2. Install dependencies:
   ```sh
   npm install
3. Create a .env file in the backend directory.
   ![image](https://github.com/user-attachments/assets/3bed3d92-3cac-4850-9cc4-df00ec84b07b)
4. Add these env variables in your .env file.
   ```sh
   PORT=5000
   DB_URI=YOUR_MONGO_URI
   API_KEY=YOUR_API_KEY
5. To get the MongoDB URI, create a cluster on this website - https://www.mongodb.com/ and read the documenation from MongoDB to get the MONGO_URI and replace MONGO_URI with YOUR_MONGO_URI in .env file.
6. To get API_KEY, create account on it to get the API KEY - https://www.livecoinwatch.com/tools/api and replace that with YOUR_API_KEY in .env file.
7. Now, you are ready to run the project by this command:
   ```sh
   npm start
  It will run your project on port 5000.


### Frontend (my-app)

1. Now, Navigate to the my-app directory.
2. Install dependencies:
   ```sh
   npm install
3. Now, you are ready to run the project by this command:
   ```sh
   npm start
  It will run your project on port 3000.
