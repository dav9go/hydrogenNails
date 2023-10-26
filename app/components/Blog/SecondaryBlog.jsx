export default function SecondaryBlog({blog}) {
  return (
    <article className="flex flex-col">
      <div className="w-full">
        <div className="h-[450px] w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={blog?.image.url}
            alt={blog?.image.altText}
            width={blog?.image.width}
            height={blog?.image.height}
          />
        </div>
      </div>
      <div className="w-full p-5 flex flex-col gap-5">
        <div className="flex justify-between text-slate-400">
          <p className="text-[#e7c6ff]">{blog?.tags[0]}</p>
          <p>{blog?.authorV2.name}</p>
        </div>
        <h2 className="text-2xl line-clamp-3">{blog?.title}</h2>
        <p className="line-clamp-6">{blog?.excerpt}</p>
      </div>
    </article>
  );
}
