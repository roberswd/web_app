const express = require("experss");
const cors = require("cors"));
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; // Loaded from .env file
        this.paths = {
            auth: "/api/homepage",
        };

        this.middlewares();
        this.routes;
    }

    middlewares() {
        this.app.use(cors()); // enable CORS
    }

    // Bind controlelrs to routes
    routes() {
        this.app.use(this.paths.auth, require("../routes/auth"));
        this.app.use(this.paths.homepage, require("../routes/homepage"));
    }

    listenerCount() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

module.exports = Server;