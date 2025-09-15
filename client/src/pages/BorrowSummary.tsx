import { useGetBorrowSummaryQuery } from "@/api/baseApi";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IBorrow } from "@/types/borrow";
import Loading from "@/utils/Loading";

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

  const books = data?.data;

  if (isLoading) return <Loading />;
  return (
    <div className="container mx-auto px-3 py-8">
      <Card className="shadow-lg rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Borrow Summary</h1>
            <p className="text-gray-500 text-sm">
              Overview of all borrowed books
            </p>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/2 text-gray-700 font-semibold">
                  Book Title
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  ISBN
                </TableHead>
                <TableHead className="text-gray-700 font-semibold text-center">
                  Total Borrowed
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book: IBorrow) => (
                <TableRow key={book._id}>
                  <TableCell>{book?.book.title}</TableCell>
                  <TableCell>{book?.book.isbn}</TableCell>
                  <TableCell className="text-center">
                    {book?.totalQuantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
