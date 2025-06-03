export function Vectors() {
  return (
    <div className="absolute inset-x-0 top-0 h-[423px]">
      <img
        className="absolute top-0 -left-2/3 min-[550px]:-left-1/2 min-[700px]:-left-1/3 xl:left-0"
        src="/vectors/vector-1.svg"
        alt=""
      />
      <img
        className="min-[500px]: xl: absolute top-0 -right-2/3 min-[550px]:-right-1/2 min-[700px]:-right-1/3 xl:right-0"
        src="/vectors/vector-2.svg"
        alt=""
      />

      <div className="absolute top-[87px] left-0 hidden h-[181px] w-[167px] bg-gradient-to-r from-[#d9d9d9]/20 to-transparent xl:block"></div>

      <div className="absolute top-[87px] right-0 hidden h-[181px] w-[167px] bg-gradient-to-l from-[#d9d9d9]/20 to-transparent xl:block"></div>

      <img
        className="absolute -bottom-10 -left-1/2 min-[500px]:-left-4/12 sm:bottom-0 sm:-left-1/5 xl:left-0"
        src="/vectors/vector-3.svg"
        alt=""
      />
      <img
        className="sm: absolute -right-1/2 -bottom-10 min-[500px]:-right-4/12 sm:-right-1/5 sm:bottom-0 xl:right-0"
        src="/vectors/vector-4.svg"
        alt=""
      />
    </div>
  )
}
