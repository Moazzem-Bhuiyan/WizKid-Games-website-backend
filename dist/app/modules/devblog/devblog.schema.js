"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        default: null,
    },
    description: {
        type: String,
        required: true,
        default: null,
    },
}, { timestamps: true });
const DevblogSchema = (0, mongoose_1.model)('Devblog', schema);
exports.default = DevblogSchema;
