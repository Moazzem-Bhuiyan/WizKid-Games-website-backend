"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        default: null,
    },
}, { timestamps: true });
const MailListSchema = (0, mongoose_1.model)('MailList', schema);
exports.default = MailListSchema;
