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
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_model_1 = require("../models/book.model");
const zod_1 = require("zod");
exports.bookRoutes = express_1.default.Router();
// Create Book Schema Zod Validation
const CreateBookZodSchema = zod_1.z.object({
    title: zod_1.z.string(),
    author: zod_1.z.string(),
    genre: zod_1.z.string(),
    isbn: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    copies: zod_1.z.number(),
    available: zod_1.z.boolean().optional(),
});
// Create Book
exports.bookRoutes.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookData = yield CreateBookZodSchema.parseAsync(req.body);
        const newBook = yield book_model_1.Book.create(bookData);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: newBook,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Validation failed",
            error,
        });
    }
}));
// Get All Books
exports.bookRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy = "createdAt", sort = "desc", limit = 10, } = req.query;
        const query = filter ? { genre: filter } : {};
        const books = yield book_model_1.Book.find(query)
            .sort({ [sortBy]: sort === "asc" ? 1 : -1 })
            .limit(Number(limit));
        res.json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve books",
            error,
        });
    }
}));
// Get Book By ID
exports.bookRoutes.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.Book.findById(req.params.bookId);
        if (!book) {
            res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        else {
            res.json({
                success: true,
                message: "Book retrieved successfully",
                data: book
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving book",
            error
        });
    }
}));
// Update a Book
exports.bookRoutes.put("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true, runValidators: true });
        if (!book) {
            res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }
        else {
            res.json({ success: true,
                message: 'Book updated successfully',
                data: book
            });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Update failed',
            error
        });
    }
}));
// Delete a Book By ID
exports.bookRoutes.delete("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield book_model_1.Book.findByIdAndDelete(req.params.bookId);
        res.json({
            success: true,
            message: "Book deleted successfully",
            data: null
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Delete failed",
            error
        });
    }
}));
