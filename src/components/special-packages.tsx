import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './carousel-buttons'
import { Button } from './button'
import { Badge } from './badge'

export function SpecialPackage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const packages = [
    {
      title: 'Passaporte',
      imageSrc: '/packages/passaporte.png',
      service: 'On-line',
      time: '45 dias',
      price: 890.0,
    },
    {
      title: 'Passaporte + Visto',
      imageSrc: '/packages/passaporte-visto.png',
      service: 'On-line + Presencial',
      time: '25 dias',
      price: 1290.0,
    },
    {
      title: 'Consultoria Completa',
      imageSrc: '/packages/consultoria-completa.png',
      service: 'Presencial Completo',
      time: '10 dias',
      price: 1890.0,
    },
    {
      title: 'Passaporte',
      imageSrc: '/packages/passaporte.png',
      service: 'On-line',
      time: '45 dias',
      price: 890.0,
    },
  ]

  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <section className="px-6 py-12 sm:px-10 md:px-14 md:py-16 xl:py-[95px] min-[90rem]:px-[3.75rem]">
      <div className="space-y-6 xl:space-y-[60px]">
        <div className="flex flex-col gap-4 min-[550px]:flex-row min-[550px]:items-end min-[550px]:justify-between min-[550px]:gap-0">
          <div className="space-y-2">
            <Badge>Pacotes</Badge>

            <h1 className="text-4xl leading-[130.8%] font-medium tracking-[-0.07em] md:text-5xl xl:text-[56px]">
              Confira nossos pacotes
            </h1>
          </div>

          <div className="flex gap-2">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="pinch-zoom flex touch-pan-y gap-6">
            {packages.map((pack, index) => (
              <div
                className="w-full max-w-[424px] flex-none rounded-3xl border p-4"
                key={index}
              >
                <div className="space-y-8">
                  <img src={pack.imageSrc} alt={pack.title} />

                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="!border-foreground flex h-8 items-center rounded-full border px-5 font-semibold">
                        Basic
                      </div>
                      <div className="text-muted-foreground flex h-8 items-center rounded-full border px-5 font-semibold">
                        Premium
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="space-y-4 border-b pb-5">
                        <h2 className="text-[28px] font-semibold">
                          {pack.title}
                        </h2>

                        <div className="grid grid-cols-2">
                          <div className="space-y-2">
                            <p className="font-medium">Atendimento</p>
                            <span className="text-muted-foreground text-sm sm:text-base">
                              {pack.service}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <p className="font-medium">Tempo</p>
                            <span className="text-muted-foreground">
                              {pack.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">A partir de</p>

                        <span className="text-2xl font-semibold sm:text-[32px]">
                          {formatCurrency(pack.price)}
                        </span>
                      </div>

                      <Button className="h-[54px]">Contratar</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
