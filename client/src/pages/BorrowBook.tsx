import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Minus, Plus } from "lucide-react";
import ScrollToTop from "@/utils/ScrollToTop";

export default function BorrowBook() {
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
              The Great Gatsby
            </h2>
            <p className="text-gray-600">Author: F. Scott Fitzgerald</p>
            <p className="text-gray-600">Available Copies: 4</p>
          </div>

          {/* Borrow Form */}
          <form className="space-y-5">
            {/* Your Name */}
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="flex items-center gap-5">
              {/* Due Date */}
              <div className="grid gap-2 w-full">
                <Label htmlFor="dueDate">Due Date</Label>
                <div className="relative">
                  <Input id="dueDate" type="date" className="pr-10" />
                  <Calendar className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Borrow Quantity */}
              <div className="grid gap-2 w-full">
                <Label>Quantity</Label>
                <div className="flex items-center gap-2">
                  <Button type="button" variant="outline" size="icon">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-1 border rounded-md bg-white">
                    1
                  </span>
                  <Button type="button" variant="outline" size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4 justify-end">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" className="shadow-md">
                Confirm Borrow
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
