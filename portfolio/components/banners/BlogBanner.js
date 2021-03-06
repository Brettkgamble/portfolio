function BlogBanner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 pt-5 ">
            <div>
                <h1>Brett Gamble&apos;s Blog</h1>
                <h2 className="mt-5 md:mt-0">
                    Welcome to {" "}
                    <span className="underline decoration-4 decoration-[#F7AB0A]">
                        your
                    </span>{" "}
                    new favourite blog!
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                Rants and Raves | Books & Music | Full Stack Tech & More!
            </p>
        </div>
    )
}

export default BlogBanner;