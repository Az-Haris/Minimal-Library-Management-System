import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookCover from "../assets/BookCover.svg";
import ScrollToTop from "@/utils/ScrollToTop";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SquarePen, Trash2 } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteBookMutation, useGetSingleBookQuery } from "@/api/baseApi";
import Loading from "@/utils/Loading";
import { toast } from "sonner";

export default function BookDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const {data, isLoading} = useGetSingleBookQuery(id)
  const navigate = useNavigate()

  const [deleteBook] = useDeleteBookMutation();
  
  
    const handleDelete = async(id: string) =>{
    try {
      await deleteBook(id).unwrap();
      toast("Book deleted successfully!")
      navigate("/books")
    } catch (error) {
      toast("Failed to delete book")
      console.error("Failed to delete book:", error)
    }
  }

  
  if(isLoading) return <Loading/>
  
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollToTop />
      <Card className="max-w-4xl mx-auto shadow-lg rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Book Cover */}
          <div>
            <div className="p-4 relative">
              <img
                src={BookCover}
                alt="Book Cover"
                className="rounded-xl shadow-md"
              />
              <h2 className="text-2xl font-black text-white uppercase max-w-32 absolute left-8 bottom-22 leading-7">
                {data?.data?.title}
              </h2>
            </div>
          </div>

          {/* Book Info */}
          <div className="md:col-span-2 p-4 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{data?.data?.title}</h1>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Author:</span> {data?.data?.author}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Genre:</span> {data?.data?.genre}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Available Copies:</span>{" "}
              {data?.data?.copies}
            </p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{data?.data?.description}</p>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
                <Button
                  size={"lg"}
                  className="hover:bg-primary hover:text-white"
                  disabled={!data?.data?.available}
                >
              <Link to={`/borrow/${data?.data?._id}`}>
                  {data?.data?.available? "Borrow" : "Not Available"}
              </Link>
                </Button>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to={`/edit-book/${data?.data?._id}`} state={{book: data?.data}}>
                    <Button
                      size={"lg"}
                      variant={"outline"}
                      className="hover:bg-primary hover:text-white"
                    >
                      <SquarePen />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit Book</p>
                </TooltipContent>
              </Tooltip>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className="text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure want to delete?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      this book and remove it from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={()=>handleDelete(data?.data?._id)}
                     className="bg-red-500">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
