interface PageTitleProps {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <section className="bg-brand-accent-blue/20">
      <div className="mx-auto max-w-7xl px-8 lg:px-24 py-8">
        <div className="relative flex justify-start flex-col">
          <h1 className="pr-3 text-lg lg:text-3xl font-black text-brand-light-1 font-display">
            {title}
            <span className="text-brand-dark-1/30">.</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
