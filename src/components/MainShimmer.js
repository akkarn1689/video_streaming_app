const MainShimmer = () => {
    return (
        <div className="flex flex-wrap animate-pulse space-x-4">
            {Array(50)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="w-64 p-2 m-2 rounded-lg border animate-pulse border-gray-400">
                        <div className="w-full p-1 m-1 h-32 bg-gray-100 rounded-lg animate-pulse"></div>
                        <div className="w-4/5 p-1 m-1  bg-gray-100 rounded-lg animate-pulse"></div>
                        <div className="w-2/5 p-1 m-1 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div className="w-3/5 p-1 m-1  bg-gray-200 rounded-lg"></div>
                    </div>
                ))}
        </div>
    );
};

export default MainShimmer;

