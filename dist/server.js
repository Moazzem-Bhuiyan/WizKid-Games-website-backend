"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const defaultTask_1 = require("./app/utils/defaultTask");
const colors_1 = __importDefault(require("colors"));
let server;
let currentPort = Number(config_1.default.port) | 5000;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('🚀 ~ main ~ database_url:', config_1.default.database_url);
            yield mongoose_1.default.connect(config_1.default.database_url);
            (0, defaultTask_1.defaultTask)();
            server = app_1.default.listen(Number(currentPort), () => {
                console.log(colors_1.default.italic.green.bold(`💫 Simple Server Listening on  http://localhost:${currentPort} `));
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();
process.on('unhandledRejection', err => {
    console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on('uncaughtException', () => {
    console.log(`😈 uncaughtException is detected , shutting down ...`);
    process.exit(1);
});
