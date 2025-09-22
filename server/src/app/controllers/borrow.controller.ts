import express, { Request, Response } from "express"
import { Book } from "../models/book.model";
import { Borrow } from "../models/borrow.model";

export const borrowRoutes = express.Router();

// Borrow Book API
borrowRoutes.post("/", async (req: Request, res: Response)=>{
    try {
        const { book: bookId, quantity, dueDate } = req.body;
        const book = await Book.findById(bookId);
        if(!book){
            res.status(400).json({
                success: false,
                message: 'Did not find the book'
            })
        } else if(book.copies < quantity){
            res.status(400).json({
                success: false,
                message: 'Not enough copies available'
            })
        } else {
            book.copies -= quantity;
            book.updateAvailability();
            await book.save();

            const borrow = await Borrow.create({
                book: book._id, quantity, dueDate
            })

            res.status(201).json({
                success: true,
                message: 'Book borrowed successfully',
                data: borrow
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Borrow failed',
            error
        })
    }
})


// Get Borrowed Books Summary
borrowRoutes.get("/", async (req: Request, res: Response)=>{
    try {
        const summary = await Borrow.aggregate([
            {
                $group: {
                    _id: '$book',
                    totalQuantity: { $sum: '$quantity'}
                }
            },
            {
                $lookup: {
                    from: 'books',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'bookDetails'
                }
            },
            {
                $unwind: '$bookDetails'
            },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: '$bookDetails.title',
                        isbn: '$bookDetails.isbn'
                    },
                    totalQuantity: 1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            message: 'Borrowed books summary retrieved successfully',
            data: summary
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve summary',
            error
        })
    }
})