import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router";

const Root = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Toaster />
        </>
    );
};

export default Root;