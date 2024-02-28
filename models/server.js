import express from "express";
import cors from "cors";
import { join } from "path";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/*
* path, fileURLtoPath, __filename, and __dirname are necessary b/c nodejs does not natively support __dirname
* resources for fix: https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
*/
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; // Loaded from .env file
        this.paths = {
            auth: "/api/auth",
            homepage: "/api/homepage",
        };

        this.middlewares();
        this.routes;
    }

    middlewares() {
        this.app.use(cors()); // enable CORS
        this.app.use(express.json());

        this.app.use(
            express.static(join(__dirname, "../client/build"))
        );
    }

    // Bind controlelrs to routes
    routes() {
        this.app.use(this.paths.auth, require("../routes/auth"));
        this.app.use(this.paths.homepage, require("../routes/homepage"));
        this.app.get("*", (req, res) => {
            res.sendFile(
                join(__dirname, "../client/build/index.html")
            );
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

export default Server;