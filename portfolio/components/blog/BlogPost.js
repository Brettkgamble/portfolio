import BlogHeader from "../headers/BlogHeader";
import BlogBanner from "../banners/BlogBanner";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import {PortableText} from "@portabletext/react";
import {RichTextComponents} from "../richtext/RichTextComponents";

function BlogPost({ post }) {
    return (
        <div>
            <BlogHeader/>
            <BlogBanner/>
            <article className="px-10 pb-28">
                <section className="space-y-2 border bg-[#F7AB0A] text-white">
                    <div className="relative min-h-56 flex flex-col md:flex-row">
                        <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                            <Image
                                className="object-cover object-center mx-auto"
                                src={urlFor(post.mainImage.asset).url()}
                                alt={post.author.name}
                                fill
                            />
                        </div>
                        <section className="p-5 bg-[#F7ABoA] w-full">
                            <div className="flex flex-col md:flex-row justify-between gap-y-5">
                                <div>
                                    <h1 className="text-4xl font-extrabold">{post.title}</h1>
                                    <p>
                                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2 ">
                                    <Image
                                        className="rounded-full"
                                        src={urlFor(post.author.image).url()}
                                        alt={post.author.name}
                                        height={40}
                                        width={40}
                                    />
                                    <div className="w-64">
                                        <h3 className="text-lg font-bold">{post.author.name}</h3>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="italic pt-10">{post.seoDescription}</h2>
                                <div className="flex items-center justify-end mt-auto space-x-2 ">
                                    {post.categories.map((category) => (
                                        <p key={category._id}
                                           className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                            {category.title}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <PortableText value={post.body.body} components={RichTextComponents}/>

            </article>
        </div>
    )
}
export default BlogPost;