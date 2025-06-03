import { Icons } from './icons'

export function WhyChooseUs() {
  return (
    <div className="relative bg-[#F7F7F7] leading-[130.8%] font-medium tracking-[-0.06em] uppercase">
      <div className="xl absolute top-4 right-6 flex size-10 rotate-12 items-center justify-center rounded-[10px] bg-white shadow-lg sm:size-12 md:top-8 md:right-16 xl:top-16 xl:right-80">
        <Icons.phoneCall />
      </div>

      <div className="space-y-6 px-6 py-16 sm:px-10 md:px-14 md:py-[70px] xl:space-y-0 min-[90rem]:px-[3.75rem]">
        <h1 className="max-w-[550px] text-left text-2xl text-pretty min-[450px]:text-3xl sm:text-4xl xl:max-w-[854px] xl:text-5xl min-[90rem]:text-[56px]">
          Consultoria completa para tirar seu visto
        </h1>
        <h1 className="text-right text-2xl italic min-[450px]:text-3xl sm:text-4xl xl:text-5xl min-[90rem]:text-[56px]">
          Você esta em boas mãos!
        </h1>
      </div>

      <div className="absolute bottom-4 left-6 flex size-10 -rotate-12 items-center justify-center rounded-[10px] bg-white shadow-lg sm:size-12 md:bottom-8 md:left-16 xl:bottom-10 xl:left-80">
        <Icons.clock />
      </div>
    </div>
  )
}
