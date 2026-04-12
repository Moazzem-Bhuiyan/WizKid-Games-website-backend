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
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const velkiAgent_schema_1 = __importDefault(require("./velkiAgent.schema"));
const QueryBuilder_1 = __importDefault(require("../../class/builder/QueryBuilder"));
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield velkiAgent_schema_1.default.create(payload);
    if (!result)
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Velki agent create failed');
    return result;
});
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield velkiAgent_schema_1.default.findByIdAndUpdate(id, payload, { new: true });
    if (!result)
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Velki agent update failed');
    return result;
});
const findAll = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const builder = new QueryBuilder_1.default(velkiAgent_schema_1.default.find({}), query)
        .search(['name', 'phoneNumber', 'type', 'id'])
        .filter()
        .paginate()
        .sort();
    const data = yield builder.modelQuery;
    const meta = yield builder.countTotal();
    return {
        data,
        meta,
    };
});
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = velkiAgent_schema_1.default.findById(id);
    if (!result)
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Velki agent not found');
    return result;
});
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = velkiAgent_schema_1.default.findByIdAndDelete(id);
    if (!result)
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Velki agent Delete failed');
    return result;
});
const velkiAgentService = {
    create,
    update,
    findAll,
    findById,
    deleteById,
};
exports.default = velkiAgentService;
