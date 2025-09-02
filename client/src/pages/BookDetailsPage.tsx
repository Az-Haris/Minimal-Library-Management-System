
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookCover from '../assets/BookCover.svg'
import ScrollToTop from "@/components/ScrollToTop";

export default function BookDetailsPage() {


  return (
    <div className="container mx-auto px-4 py-8">
        <ScrollToTop/>
      <Card className="max-w-4xl mx-auto shadow-lg rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Book Cover */}
          <div className="p-4 relative">
            <img
              src={BookCover}
              alt="Book Cover"
              className="rounded-xl shadow-md"
            />
            <h2 className="text-2xl font-black text-white uppercase max-w-32 text-right absolute right-12 bottom-32 leading-7">The Great Gatsby</h2>
          </div>

          {/* Book Info */}
          <div className="md:col-span-2 p-4 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">The Great Gatsby</h1>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Author:</span> F. Scott Fitzgerald
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Genre:</span> Classic, Fiction
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Published:</span> 1925
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Available Copies:</span> 4
            </p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              A novel set in the Jazz Age on Long Island, near New York City,
              that depicts narrator Nick Carraway’s interactions with mysterious
              millionaire Jay Gatsby and Gatsby’s obsession to reunite with his
              former lover, Daisy Buchanan.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              <Button className="rounded-2xl shadow-md">Borrow</Button>
              <Button variant="outline" className="rounded-2xl">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
