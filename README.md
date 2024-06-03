# Chat App
This project is a simple real-time chat application built with Node.js, Express, and Socket.IO, using MongoDB for message storage. This is a basic project intended to run locally for personal practice and learning purposes.


## Features
- Real-time messaging
- Message history persistence with MongoDB
- Simple and intuitive user interface


## Requirements
- Node.js and npm installed
- MongoDB instance (local or MongoDB Atlas)


## Setup
1. Clone the repository:
```sh
git clone https://github/j1unyeong/Global-Chatting.git
cd Global-Chatting
```

2. Install dependencies:
```sh
npm install
```

3. Start the MongoDB server if using a local instance:
```sh
mongod --dbpath /Global-Chatting/db
```

4. Start the Node.js server:
```sh
node server.js
```

5. Open your browser and navigate to http://localhost:3000


## Project Structure
```plaintext
chat-app/
│
├── public/
│   ├── client.js       # Client-side JavaScript
│   ├── index.html      # Main HTML file
│   └── styles.css      # CSS styles
│
├── models/
│   └── Message.js      # Mongoose model for messages
│
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # NPM package file
└── server.js           # Node.js server
```


## Usage
1. **Sending Messages**: Type a message in input field and click "Send" to broadcast it to all connected users.

2. **Message Persistence**: Previous messages are loaded from MongoDB when a user connects, providing message history.


## Deployment
To deploy the application, you can use platforms like Heroku or Vercel. Ensure you set the environment variable appropriately in your deployment settings.


## Note
This project is intended to be run locally as a simple, personal practice and learning tool. It is not designed for production use.


## License
This project is licensed under the MIT License.


## Acknowledgments
• This project uses [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [Socket.IO](https://socket.io/), and [MongoDB](https://www.mongodb.com/).