"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.velkiAgentValidator = exports.schema = void 0;
const zod_1 = require("zod");
exports.schema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'ID is required'),
    type: zod_1.z.string().min(1, 'Type is required'),
    name: zod_1.z.string().min(1, 'Name is required'),
    phoneNumber: zod_1.z
        .string()
        .regex(/^(\+?\d{8,15})$/, 'Invalid phone number format'),
});
const create = zod_1.z.object({ body: exports.schema });
const update = zod_1.z.object({ body: exports.schema.deepPartial() });
exports.velkiAgentValidator = {
    create,
    update,
};
