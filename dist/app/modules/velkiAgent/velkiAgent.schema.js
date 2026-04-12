"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        default: null,
    },
    type: {
        type: String,
        enum: ['home', 'service', 'admin', 'super', 'master'],
        required: true,
        default: null,
    },
    name: {
        type: String,
        required: true,
        default: null,
    },
    phoneNumber: {
        type: String,
        required: true,
        default: null,
    },
}, { timestamps: true });
const VelkiAgent = (0, mongoose_1.model)('VelkiAgent', schema);
exports.default = VelkiAgent;
