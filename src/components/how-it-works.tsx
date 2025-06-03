import { Badge } from './badge'
import { Icons } from './icons'

export function HowItWorks() {
  return (
    <section className="space-y-[60px] px-6 py-12 sm:px-10 md:px-14 md:py-16 xl:py-[95px] min-[90rem]:px-[3.75rem]">
      <div className="space-y-5">
        <Badge>Veja como funciona</Badge>

        <div className="space-y-4 xl:flex xl:items-center xl:justify-between">
          <h1 className="text-5xl leading-[130.8%] font-medium tracking-[-0.07em] xl:w-[420px] xl:text-[56px]">
            Sua tranquilidade não tem preço!
          </h1>

          <p className="text-muted-foreground tracking-[-0.02em] xl:w-[826px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="space-y-4 xl:grid xl:grid-cols-2 xl:gap-9">
        <img
          src="/home/familia-no-aeroporto.png"
          alt="Foto de uma família alegre no aeroporto pronta para viajar"
        />

        <div>
          <div className="space-y-3 border-b py-5 xl:px-3">
            <h2 className="text-4xl font-medium tracking-[-0.06em]">
              Etapa Inicial
            </h2>
            <p className="text-muted-foreground tracking-[-0.02em]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="space-y-3 border-b py-5 xl:px-3">
            <h2 className="text-4xl font-medium tracking-[-0.06em]">
              Processo de Entrevista
            </h2>
            <div className="flex items-center gap-2">
              <Icons.plus />
              <span className="tracking-[-0.02em]">Leia mais</span>
            </div>
          </div>
          <div className="space-y-3 border-b py-5 xl:px-3">
            <h2 className="text-4xl font-medium tracking-[-0.06em]">
              Entrega de Documentos
            </h2>
            <div className="flex items-center gap-2">
              <Icons.plus />
              <span className="tracking-[-0.02em]">Leia mais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
