"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const RegistryService_1 = __importDefault(require("./services/RegistryService"));
const tsyringe_1 = require("tsyringe");
// https://aech.dev/posts/tsyringe-express/
/*
 * middleware to redirect all requests to router
 * */
// app.use("/", router);
let App = class App {
    constructor(registry) {
        this.registry = registry;
        this.startingTime = new Date();
        this.registry.init();
        this.app = (0, express_1.default)();
        this.server = undefined;
        this.initExpress();
    }
    initExpress() {
        this.app.set("port", process.env.PORT || 8080);
        this.app.use(body_parser_1.default.json());
        this.registry.connect(this.app);
        /*
         * middleware to catch any errors and send to the front end
         * */
        this.app.use((err, req, res, next) => {
            res.json({ error: err.message });
        });
    }
    start() {
        this.server = this.app.listen(this.app.get("port"), () => {
            console.log("[Server] App is running at http://localhost:%d in %s mode", this.app.get("port"), this.app.get("env"));
        });
    }
    stop() {
        if (!this.server) {
            console.log("[App] Server is not running, could not stop.");
            return;
        }
        this.server.close((err) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log("[App] Successfully closed server.");
            }
        });
    }
};
App = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [RegistryService_1.default])
], App);
exports.App = App;
const app = tsyringe_1.container.resolve(App);
app.start();
process.on("SIGINT", () => {
    app.stop();
    process.exit(0);
});
