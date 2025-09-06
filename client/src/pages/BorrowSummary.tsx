import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BorrowSummary() {
  return (
    <div className="container mx-auto px-3 py-8">
      <Card className="shadow-lg rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Borrow Summary</h1>
            <p className="text-gray-500 text-sm">Overview of all borrowed books</p>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/2 text-gray-700 font-semibold">Book Title</TableHead>
                <TableHead className="text-gray-700 font-semibold">ISBN</TableHead>
                <TableHead className="text-gray-700 font-semibold text-center">Total Borrowed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Dummy Data */}
              <TableRow>
                <TableCell>The Great Gatsby</TableCell>
                <TableCell>9780743273565</TableCell>
                <TableCell className="text-center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>To Kill a Mockingbird</TableCell>
                <TableCell>9780061120084</TableCell>
                <TableCell className="text-center">5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1984</TableCell>
                <TableCell>9780451524935</TableCell>
                <TableCell className="text-center">2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
