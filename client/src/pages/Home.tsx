import BookCard from "@/components/module/BookCard";
import Header from "@/components/module/Header";
import ScrollToTop from "@/utils/ScrollToTop";

const Home = () => {
  return (
    <main>
      <ScrollToTop/>
      <Header/>
      <BookCard/>
    </main>
  );
};

export default Home;
