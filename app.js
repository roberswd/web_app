require('dotenv').config(); // Load environment variables from .env file
import Server from './models/server';
const server = new Server();
server.listen();