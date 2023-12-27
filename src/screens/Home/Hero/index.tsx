import { Button } from '@/components/ui/button'
export const Hero = () => {
  // const { data } = usePersonalsQuery({
  //   variables: {
  //     locales: [Locale.PtBr, Locale.En],
  //   },
  // })
  return (
    <section className="overflow-hidden">
      <section className="py-8 lg:py-10 mx-auto px-8 lg:px-24 max-w-7xl items-center border-y-0">
        <div
          x-data="{
                skip: 1,
                atBeginning: false,
                atEnd: false,
                next() {
                    this.to((current, offset) => current + (offset * this.skip))
                },
                prev() {
                    this.to((current, offset) => current - (offset * this.skip))
                },
                to(strategy) {
                    let slider = this.$refs.slider
                    let current = slider.scrollLeft
                    let offset = slider.firstElementChild.getBoundingClientRect().width
                    slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' })
                },
                focusableWhenVisible: {
                    'x-intersect:enter'() {
                        this.$el.removeAttribute('tabIndex')
                    },
                    'x-intersect:leave'() {
                        this.$el.setAttribute('tabIndex', '-1')
                    },
                },
                disableNextAndPreviousButtons: {
                    'x-intersect:enter.threshold.05'() {
                        let slideEls = this.$el.parentElement.children
                        // If this is the first slide.
                        if (slideEls[0] === this.$el) {
                            this.atBeginning = true
                        // If this is the last slide.
                        } else if (slideEls[slideEls.length-1] === this.$el) {
                            this.atEnd = true
                        }
                    },
                    'x-intersect:leave.threshold.05'() {
                        let slideEls = this.$el.parentElement.children
                        // If this is the first slide.
                        if (slideEls[0] === this.$el) {
                            this.atBeginning = false
                        // If this is the last slide.
                        } else if (slideEls[slideEls.length-1] === this.$el) {
                            this.atEnd = false
                        }
                    },
                },
            }"
          className="flex w-full flex-col h-full"
        >
          <div
            // x-on:keydown.right="next"
            // x-on:keydown.left="prev"
            tabIndex={0}
            role="region"
            aria-labelledby="carousel-label"
            className="flex w-full relative items-center justify-center lg:justify-normal"
          >
            <h2 id="carousel-label" className="sr-only" hidden>
              Carousel
            </h2>
            <span id="carousel-content-label" className="sr-only" hidden>
              Carousel
            </span>
            <div>
              <ul
                x-ref="slider"
                tabIndex={0}
                role="listbox"
                aria-labelledby="carousel-content-label"
                className="flex w-full snap-x snap-mandatory overflow-x-hidden h-full py-6 items-center"
              >
                <li
                  x-bind="disableNextAndPreviousButtons"
                  className="flex w-full shrink-0 snap-start flex-col items-center justify-center h-full lg:w-full"
                  role="option"
                >
                  <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-full mx-auto items-center">
                      <div>
                        <div>
                          <div className="max-w-xl lg:pr-24 text-center lg:text-left">
                            <span className="text-brand-dark-1 500 text-xs tracking-wide">
                              FEATURED
                            </span>

                            <h2 className="font-semibold text-brand-dark-3 text-3xl font-display lg:text-6xl">
                              {/* {data?.personals[0]?.title} */}
                              Impacto
                            </h2>
                            <p className="text-zinc-400 mt-5">
                              {/* {data?.personals[0]?.description} */}
                              Adaptativo. Inclusivo. Exclusivo. Digital
                            </p>
                            <div className="flex flex-row gap-4 flex-wrap mt-6 justify-center lg:justify-start">
                              <Button
                                variant={'link'}
                                className="md:ml-[-30px]"
                              >
                                Redes sociais
                              </Button>
                              <Button variant={'outline'} className="">
                                Cases de sucesso
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="relative max-w-[200px] aspect-square">
                        <Image
                          src={data?.personals[0].picture?.url as string}
                          alt=""
                          fill
                          className="absolute"
                        />
                      </div> */}
                    </div>
                  </section>
                  <button
                    x-bind="focusableWhenVisible"
                    className="px-4 py-2 text-sm hidden"
                  >
                    Do Something
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
