import { Link } from "react-router-dom";
import { HomeIcon } from  "@heroicons/react/24/solid";

const NotFound : React.FC = ()=>{
    
    return <div className="my-5 m-auto text-white text-center font-extrabold bg-gray-800 max-w-xl border-4 border-b-purple-800 border-r-purple-800 p-10">
        <div style={{textShadow: '7px 7px rgb(107, 33, 168)'}} >
            <span className="text-9xl line">404</span>
            <h1 className="text-7xl">Page Not Found!</h1>    
        </div>

        <div className="h-12"></div>
        <Link to="/" id="backToHomeButton" className="text-4xl border-b-8 border-purple-800 text-bold italic hover:text-">
            Go Home <HomeIcon className="w-10 h-10 inline align-bottom" />
        </Link>
    </div>
}
export default NotFound;
