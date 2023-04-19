import { Locale, usePersonalsQuery } from '@/graphql/generated/index.generated'
import Image from 'next/image'

export const Hero = () => {
  const { data } = usePersonalsQuery({
    variables: {
      locales: [Locale.PtBr, Locale.En],
    },
  })
  return (
    <section className="overflow-hidden bg-black">
      <section className="bg-black py-36 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-white border-y-0 border">
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
            className="flex mx-auto relative items-center max-h-[50vh]"
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 px-8 lg:max-w-6xl mx-auto items-center">
                      <div>
                        <div>
                          <div className="max-w-xl lg:pr-24 text-center lg:text-left">
                            <span className="text-white 500 text-xs">
                              Featured
                            </span>

                            <h2 className="font-semibold text-white mt-6 text-3xl font-display lg:text-6xl">
                              {data?.personals[0]?.title}
                            </h2>
                            <p className="text-zinc-400 mt-5">
                              {data?.personals[0]?.description}
                            </p>
                            <div className="flex flex-wrap mt-6 justify-center lg:justify-start">
                              <a
                                className="relative flex items-center text-white/90 text-white gap-3"
                                href=""
                              >
                                Saiba mais
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_837_5665)">
                                    <line
                                      x1="0.5"
                                      y1="11.5"
                                      x2="23.5"
                                      y2="11.5"
                                      stroke="white"
                                      strokeLinecap="square"
                                    ></line>
                                    <mask
                                      id="path-2-inside-1_837_5665"
                                      fill="white"
                                    >
                                      <path d="M24 12C20.8174 12 17.7652 10.7357 15.5147 8.48528L16.3239 7.67605C18.3598 9.71187 21.1209 10.8556 24 10.8556L24 12Z"></path>
                                    </mask>
                                    <path
                                      d="M24 12C20.8174 12 17.7652 10.7357 15.5147 8.48528L16.3239 7.67605C18.3598 9.71187 21.1209 10.8556 24 10.8556L24 12Z"
                                      stroke="white"
                                      strokeWidth="8"
                                      mask="url(#path-2-inside-1_837_5665)"
                                    ></path>
                                    <mask
                                      id="path-3-inside-2_837_5665"
                                      fill="white"
                                    >
                                      <path d="M24 11C20.8174 11 17.7652 12.2643 15.5147 14.5147L16.3243 15.3243C18.36 13.2886 21.1211 12.1449 24 12.1449L24 11Z"></path>
                                    </mask>
                                    <path
                                      d="M24 11C20.8174 11 17.7652 12.2643 15.5147 14.5147L16.3243 15.3243C18.36 13.2886 21.1211 12.1449 24 12.1449L24 11Z"
                                      stroke="white"
                                      strokeWidth="8"
                                      mask="url(#path-3-inside-2_837_5665)"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_837_5665">
                                      <rect
                                        width="24"
                                        height="9"
                                        fill="white"
                                        transform="translate(0 7)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative max-w-xl aspect-square">
                        <Image
                          src={data?.personals[0].picture?.url as string}
                          alt=""
                          fill
                          className="absolute"
                        />
                      </div>
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
