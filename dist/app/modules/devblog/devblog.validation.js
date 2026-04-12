"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devBlogValidator = exports.schema = void 0;
const zod_1 = require("zod");
exports.schema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    description: zod_1.z.string().min(1, 'Description is required'),
});
const create = zod_1.z.object({ body: exports.schema });
const update = zod_1.z.object({ body: exports.schema.deepPartial() });
exports.devBlogValidator = {
    create,
    update,
};
