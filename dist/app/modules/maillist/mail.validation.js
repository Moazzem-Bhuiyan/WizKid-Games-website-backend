"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailValidator = exports.schema = void 0;
const zod_1 = require("zod");
exports.schema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address').min(1, 'Email is required'),
});
const create = zod_1.z.object({ body: exports.schema });
const update = zod_1.z.object({ body: exports.schema.deepPartial() });
exports.mailValidator = {
    create,
    update,
};
