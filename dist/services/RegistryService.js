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
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const config_1 = require("../config/config");
let RegistryService = class RegistryService {
    constructor() {
        this.registry = [];
    }
    init() {
        this.registry = config_1.appControllers.map((controller) => tsyringe_1.container.resolve(controller));
    }
    connect(app) {
        for (const controller of this.registry) {
            // @ts-ignore
            app.use(controller.baseRoute, controller.router);
            // @ts-ignore
            console.log(`[RegistryService] Registered router ${controller.baseRoute}`);
        }
    }
};
RegistryService = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], RegistryService);
exports.default = RegistryService;
