import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch();

    const toggleSidebarHandler = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleSidebarHandler()}
                    className="h-10 cursor-pointer"
                    alt="sidebar"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
                />
                <a href="/">
                    <img
                        className="h-10 mx-2"
                        alt="logo"
                        src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png"
                    />
                </a>
            </div>
            <div className="col-span-10 text-center">
                <input className="w-2/5 border border-gray-400 p-2 rounded-l-full" type="text" />
                <button className="border border-gray-400 p-2 text-gray-500 rounded-r-full">Search</button>
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                    alt="user"
                    src="https://icon-library.com/images/google-user-icon/google-user-icon-16.jpg"
                />
            </div>
        </div>
    )
}

export default Header