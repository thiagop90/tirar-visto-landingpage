import { Badge } from './badge'
import { Button } from './button'
import { Vectors } from './vectors'

export function TopDestination() {
  const destinations = [
    { src: '/destinations/bali-indonesia.png', label: 'Bali, Indonesia' },
    {
      src: '/destinations/new-york-eua.png',
      label: 'Nova York, Estados Unidos',
    },
    { src: '/destinations/santorini-grecia.png', label: 'Santorini, Grecia' },
    { src: '/destinations/paris-franca.png', label: 'Paris, França' },
    {
      src: '/destinations/cidade-do-cabo-africa.png',
      label: 'Cidade do Cabo, Africa do Sul',
    },
    { src: '/destinations/mumbai-india.png', label: 'Mumbai, India' },
  ]

  return (
    <section className="relative overflow-hidden px-6 py-12 sm:px-10 md:px-14 md:py-16">
      <Vectors />

      <div className="space-y-[60px] xl:mx-auto xl:max-w-[880px]">
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="space-y-2 text-center">
            <Badge>Top Destinos</Badge>

            <div className="space-y-3">
              <h1 className="text-5xl leading-[130.8%] font-medium tracking-[-0.07em] xl:text-[56px]">
                Destinos mais procurados
              </h1>

              <p className="text-muted-foreground tracking-[-0.02em] text-pretty sm:w-[584px]">
                Confira os destinos mais procurados por nossos clientes nos
                últimos meses, qual seria o seu novo destino?
              </p>
            </div>
          </div>

          <Button className="h-[54px]">Conheça mais</Button>
        </div>

        <div className="grid gap-5 min-[550px]:grid-cols-2 xl:grid-cols-3 xl:[&>div:nth-child(-n+3)]:self-end xl:[&>div:nth-child(n+4)]:self-start">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[28px]"
            >
              <img
                className="size-full object-cover"
                src={destination.src}
                alt={destination.label}
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2.5 backdrop-blur-[20px]">
                <p className="tracking-[-0.08em] text-nowrap text-white">
                  {destination.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
