import express, { Request, Response } from "express";
import { Book } from "../models/book.model";
import { z } from "zod";

export const bookRoutes = express.Router();

// Create Book Schema Zod Validation
const CreateBookZodSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  isbn: z.string(),
  description: z.string().optional(),
  copies: z.number(),
  available: z.boolean().optional(),
});

// Create Book
bookRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const bookData = await CreateBookZodSchema.parseAsync(req.body);
    const newBook = await Book.create(bookData);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      error,
    });
  }
});

// Get All Books
bookRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = 10,
    } = req.query;
    const query: any = filter ? { genre: filter } : {};
    const books = await Book.find(query)
      .sort({ [sortBy as string]: sort === "asc" ? 1 : -1 })
      .limit(Number(limit));
    res.json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve books",
      error,
    });
  }
});

// Get Book By ID
bookRoutes.get("/:bookId", async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if(!book){
        res.status(404).json({
            success: false,
            message: "Book not found"
        })
    } else{
        res.json({
            success: true,
            message: "Book retrieved successfully",
            data: book
        })
    }
  } catch (error) {
    res.status(500).json({ 
        success: false, 
        message: "Error retrieving book", 
        error 
    });
  }
});

// Update a Book
bookRoutes.put("/:bookId", async (req: Request, res: Response)=>{
    try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true, runValidators: true });
    if (!book) {
        res.status(404).json({ 
            success: false, 
            message: 'Book not found' 
        });
    } else{
        res.json({ success: true, 
            message: 'Book updated successfully', 
            data: book 
        });
    }
  } catch (error) {
    res.status(400).json({ 
        success: false, 
        message: 'Update failed', 
        error 
    });
  }
})

// Delete a Book By ID
bookRoutes.delete("/:bookId", async (req: Request, res: Response)=>{
    try{
        await Book.findByIdAndDelete(req.params.bookId);
        res.json({
            success: true,
            message: "Book deleted successfully",
            data: null
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Delete failed",
            error
        })
    }
})
