export default function FirstBlog({firstBlog}) {
  const dateString = firstBlog?.publishedAt;
  const date = new Date(dateString);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date);
  const year = date.getFullYear();

  return (
    <article className="flex flex-col md:flex-row">
      <div className="w-full md:w-[40%]">
        <div className="h-[500px] w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={firstBlog?.image.url}
            alt={firstBlog?.image.altText}
            width={firstBlog?.image.width}
            height={firstBlog?.image.height}
          />
        </div>
      </div>
      <div className="w-full md:w-[60%] p-5 flex flex-col gap-5">
        <ul className="flex flex-wrap gap-5">
          {firstBlog?.tags.map((tag) => (
            <li key={tag} className="text-[#e7c6ff]">
              {tag}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl">{firstBlog?.title}</h2>
        <p>{firstBlog?.excerpt}</p>
        <div className="flex gap-10 text-slate-400">
          <p>{firstBlog?.authorV2.name}</p>
          <p>{day + ' ' + month + ' ' + year} </p>
        </div>
      </div>
    </article>
  );
}
