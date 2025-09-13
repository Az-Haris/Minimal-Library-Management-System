import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Loader, Minus, Plus } from "lucide-react";
import ScrollToTop from "@/utils/ScrollToTop";
import { useBorrowBookMutation, useGetSingleBookQuery } from "@/api/baseApi";
import { useNavigate, useParams } from "react-router";
import Loading from "@/utils/Loading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form";
import { useState } from "react";

export default function BorrowBook() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);
  const book = data?.data;
  const [borrowBook, {isLoading: borrowingBook}] = useBorrowBookMutation()
  const navigate = useNavigate()

  const [quantity, setQuantity] = useState(1);

  const form = useForm({
    defaultValues: {
      dueDate: "",
      quantity: 1,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async(values) => {
    const borrowBookData = {
      book: id,
      quantity: values.quantity,
      dueDate: new Date(values.dueDate)
    }
    await borrowBook(borrowBookData)
    navigate("/borrow-summary")
  };

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto px-3 py-8">
      <ScrollToTop />
      <Card className="max-w-2xl mx-auto shadow-lg rounded-2xl overflow-hidden">
        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Borrow Book</h1>
            <p className="text-gray-500 text-sm">
              Fill in the details to borrow this book
            </p>
          </div>

          {/* Book Info */}
          <div className="p-4 rounded-xl border bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-700">
              {book.title}
            </h2>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Available Copies: {book.copies}</p>
            <p className="text-gray-600">ISBN: {book.isbn}</p>
          </div>

          {/* Borrow Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="flex items-center gap-5">
                {/* Due Date */}
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="date"
                            className="pr-10"
                            {...field}
                            required
                          />
                          <Calendar className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Quantity */}
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              const newQty = Math.max(1, quantity - 1);
                              setQuantity(newQty);
                              field.onChange(newQty);
                            }}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-4 py-1 border rounded-md bg-white">
                            {quantity}
                          </span>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              const newQty = quantity + 1;
                              setQuantity(newQty);
                              field.onChange(newQty);
                            }}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4 justify-end">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit" className="shadow-md">
                  {borrowingBook ? <Loader/> : "Confirm Borrow"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
