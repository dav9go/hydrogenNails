export default function BigCard({
  img,
  altText,
  imgW,
  imgH,
  title,
  text,
  tags,
  price,
}) {
  return (
    <article className="flex gap-5 max-w-[1400px] mx-auto">
      <div className="w-[600px] h-[700px] rounded-[8px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={altText}
          width={imgW}
          height={imgH}
        />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-5">
        <h1 className="text-4xl ">{title}</h1>
        <ul className="flex gap-3">
          {tags?.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </ul>
        <p className="font-sans mt-5">{text}</p>
        <p className="text-lg">{parseFloat(price).toFixed(0)} €</p>
      </div>
    </article>
  );
}
