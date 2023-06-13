# epn-messaging-backend
Venturing into WebSocket territory with a Node server

## Features
- Storage using a PostgreSQL database
- Handles multiple users in a single chat room
- Handles users joining or leaving and updates clients
- Broadcasts when a user is typing

## Installation
Clone the repository and `cd` into it. Run `npm install` to acquire the dependencies.

You will need to provide a *.env* file with the following variables:
- PORT (Port on which server will listen)
- CORS_ORIGIN (Origin from which to allow connections)
- PGHOST (Database host address)
- PGUSER (Database username to connect with)
- PGDATABASE (Database name to connect to)
- PGPASSWORD (Database password for the user)
- PGPORT (Port on which database is running)

Run `npm start` to compile and start the server.
