import ScrollToTop from "@/utils/ScrollToTop";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "@/api/baseApi";
import { Loader } from "lucide-react";

const CreateBookPage = () => {

  const form = useForm({
    defaultValues: {
      title: "",
      genre: "",
      isbn: "",
      author: "",
      description: "",
      copies: 1,
      available: true,
    },
  });


  const [createBook, {isLoading}] = useCreateBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    
    const res = await createBook(data).unwrap()
    console.log(res)
  };

  return (
    <div className="container mx-auto px-3 mt-8">
      <ScrollToTop />
      <div className="max-w-md mx-auto">
        <h1 className="text-center font-black text-2xl mb-5">Create Book</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Title</FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder="e.g. The Theory of Computation"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <Select
                        required
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select genre of the book" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Genre</SelectLabel>
                            <SelectItem value="FICTION">FICTION</SelectItem>
                            <SelectItem value="NON_FICTION">
                              NON_FICTION
                            </SelectItem>
                            <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                            <SelectItem value="HISTORY">HISTORY</SelectItem>
                            <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                            <SelectItem value="FANTASY">FANTASY</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="e.g. 9780553380165"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input required placeholder="e.g. John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Copies</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        required
                        placeholder="e.g. 12"
                        {...field}
                        onChange={(e)=> field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="available"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Availability</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value === "true")
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Availability</SelectLabel>
                            <SelectItem value="true">True</SelectItem>
                            <SelectItem value="false">False</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      required
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {isLoading ? <Loader/> : "Create"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateBookPage;
