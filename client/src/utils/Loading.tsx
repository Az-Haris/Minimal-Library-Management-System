import { Loader } from "lucide-react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Loader className="animate-spin my-20"/>
        </div>
    );
};

export default Loading;