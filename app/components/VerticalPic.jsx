export function VerticalPic({img, alt, text, width, height}) {
  return (
    <div class="w-full lg:w-1/3 overflow-hidden relative group transition-transform">
      <img
        class="w-full h-full object-cover "
        src={img}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
}
