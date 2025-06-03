import { Button } from './button'
import { Header } from './header'
import { Icons } from './icons'

export function Hero() {
  const stats = [
    { number: '509', label: 'Vistos Tirados' },
    { number: '602', label: 'Passaportes Tirados' },
    { number: '634', label: 'Famílias Felizes' },
  ]

  return (
    <section className="grid xl:grid-cols-2">
      <div className="pt-[100px] xl:pt-0">
        <Header />

        <div className="space-y-8 px-6 py-12 sm:space-y-10 sm:px-10 md:px-14 min-[90rem]:px-[3.75rem]">
          <h1 className="text-4xl leading-[130.8%] font-medium tracking-[-0.07em] text-pretty min-[450px]:text-[44px] min-[500px]:text-[54px] sm:text-center xl:text-left">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>

          <div className="w-full border-t" />

          <div className="mb-14 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-5">
            <div className="space-y-8 sm:space-y-10">
              <p className="text-muted-foreground tracking-[-0.02em] text-pretty">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>

              <Button className="w-full sm:h-[3.375rem] sm:w-fit">
                <span className="font-semibold">Saiba mais</span>
                <Icons.arrowRight />
              </Button>
            </div>

            <div className="grid size-fit grid-cols-[1fr_auto] items-center gap-4 sm:grid-cols-1">
              <img
                src="/home/video-cover.png"
                alt="Capa do vídeo"
                className="max-h-[110px]"
              />

              <div className="flex w-full gap-4">
                <div>
                  <h3 className="font-semibold">Conheça a Bruna</h3>
                  <p className="text-muted-foreground text-xs">Ver vídeo</p>
                </div>

                <Button size="icon">
                  <Icons.arrowRight />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 divide-x">
            {stats.map((stat, index) => (
              <div key={index} className="sm:text-center xl:text-left">
                <h2 className="mb-2 text-3xl leading-[130.8%] font-medium tracking-[-0.05em] min-[500px]:text-4xl xl:text-[44px]">
                  {stat.number}
                </h2>
                <p className="text-muted-foreground text-sm leading-[130.8%] tracking-[-0.05em] min-[500px]:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-5 mr-5 mb-5 hidden overflow-hidden rounded-2xl xl:inline-flex">
        <img
          src="/home/roda-gigante.png"
          alt="Foto da roda gigante"
          className="object-cover"
        />

        <Button variant="yellow" className="absolute top-4 right-4 h-11">
          <span className="font-semibold">Tirar meu visto agora!</span>
        </Button>

        <div className="from-foreground absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t to-transparent" />

        <div className="absolute inset-x-10 bottom-10">
          <div className="max-w-[522px] space-y-3 text-white">
            <h1 className="text-[44px] leading-[130.8%] font-semibold tracking-[0.02em]">
              Realize o seu sonho com a ajuda da Tirar Visto!
            </h1>
            <p className="leading-[130.8%] tracking-[0.02em]">
              Com um serviço profissional, você não terá dor de cabeça para todo
              o processo do visto e entrevistas no consulado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
