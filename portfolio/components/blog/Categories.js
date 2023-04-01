import ClientSideRoute from "../ClientSideRoute";

function Categories({ categories }) {

    return (
        <div>
            <div className="text-white text-2xl pb-2">Categories</div>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                {categories.map((category) => (
                    <ClientSideRoute key={category._id} route={`/blog/category/${category.slug.current}`}>
                        <div key={category._id} className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-xs font-semibold">
                            <p>{category.title}</p>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    )
}

export default Categories