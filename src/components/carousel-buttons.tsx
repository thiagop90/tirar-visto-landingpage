import { useCallback, useEffect, useState } from 'react'
import { Button, type ButtonProps } from './button'
import type { EmblaCarouselType } from 'embla-carousel'
import { Icons } from './icons'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export function usePrevNextButtons(
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export function PrevButton(props: ButtonProps) {
  const { children, ...restProps } = props

  return (
    <Button
      className="disabled:text-foreground disabled:!border-foreground cursor-pointer disabled:cursor-not-allowed disabled:border disabled:bg-white xl:size-[54px]"
      size="icon"
      type="button"
      {...restProps}
    >
      <Icons.arrowLeft />
      {children}
    </Button>
  )
}

export function NextButton(props: ButtonProps) {
  const { children, ...restProps } = props

  return (
    <Button
      className="disabled:text-foreground disabled:!border-foreground cursor-pointer disabled:cursor-not-allowed disabled:border disabled:bg-white xl:size-[54px]"
      size="icon"
      type="button"
      {...restProps}
    >
      <Icons.arrowRight />
      {children}
    </Button>
  )
}
