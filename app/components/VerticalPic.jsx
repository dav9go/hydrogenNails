export function VerticalPic({img, alt, text}) {
  return (
    <div class="w-full lg:w-1/3 overflow-hidden relative group transition-transform">
      <img class="w-full h-full object-cover " src={img} alt={alt} />
      <div class="hidden group-hover:block absolute top-0 left-0 h-full w-full bg-[#00000055]"></div>
      <div class="hidden group-hover:flex justify-center items-center absolute bottom-1/4 left-0 h-1/2 w-[101%] transform bg-[#000000BB] translate-y-[50px] -skew-y-12"></div>
    </div>
  );
}
