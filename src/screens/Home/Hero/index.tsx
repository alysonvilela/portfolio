import { Button } from '@/components/ui/button'
export const Hero = () => {

  return (
    <section className="overflow-hidden">
      <section className="py-8 lg:py-20 mx-auto px-8 lg:px-24 max-w-7xl items-center border-y-0">
        <section>
          <div className="lg:max-w-full mx-auto items-center">
            <div className="max-w-xl text-center mx-auto">
              <span className="text-brand-dark-1 500 text-xs tracking-wide">
                FEATURED
              </span>

              <h2 className="font-semibold text-brand-dark-3 text-3xl font-display lg:text-6xl">
                {/* {data?.personals[0]?.title} */}
                I know the way to make things relevant.
              </h2>
              <p className="text-zinc-400 mt-5">
                {/* {data?.personals[0]?.description} */}
                ... and that's why I can help grow your business.
              </p>
              <div className="flex flex-col md:flex-row gap-4 flex-wrap mt-6 justify-center">
                <Button
                  variant={'link'}
                  className="md:ml-[-30px]"
                >
                  Social medias
                </Button>
                <Button variant={'outline'} className="">
                  Sucess cases
                </Button>
              </div>
            </div>
          </div>
        </section>
        <button
          x-bind="focusableWhenVisible"
          className="px-4 py-2 text-sm hidden"
        >
          Do Something
        </button>
      </section>
    </section>
  )
}
