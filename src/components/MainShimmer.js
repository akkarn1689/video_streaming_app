const MainShimmer = () => {
    return (
        <div className="flex flex-wrap">
            {Array(50)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="w-64 p-2 m-2 rounded-md border border-gray-400">
                        <div className="w-full p-1 h-32 bg-gray-100"></div>
                        <div className="w-4/5 p-1 bg-gray-100"></div>
                        <div className="w-2/5 p-1 bg-gray-200"></div>
                        <div className="w-3/5 p-1 bg-gray-200"></div>
                    </div>
                ))}
        </div>
    );
};

export default MainShimmer;

