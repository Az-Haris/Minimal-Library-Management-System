import { model, Schema } from "mongoose";
import { Genre, IBook } from "../interfaces/book.interface";



const bookSchema = new Schema<IBook>({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, enum: Object.values(Genre), required: true},
    isbn: {type: String, required: true, unique: true},
    description: {type: String},
    copies: {type: Number, required: true, min: 0},
    available: {type: Boolean, default: true}
}, {timestamps: true, versionKey: false})


bookSchema.methods.updateAvailability = function (){
    this.available = this.copies > 0;
};

export const Book = model<IBook>('Book', bookSchema)