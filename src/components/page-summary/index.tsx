interface PageSummaryProps {
  title: string
  description: string
}

export const PageSummary = ({ title, description }: PageSummaryProps) => {
  return (
    <section
      id="explain"
      className="md:text-center py-8 lg:py-24 max-w-lg lg:max-w-2xl mx-auto px-4 md:px-0"
    >
      <div>
        <p className="text-brand-dark-3 text-lg lg:text-4xl tracking-widest uppercase mb-2 lg:mb-12">
          {title}
        </p>
        <p className="text-brand-dark-1/80 text-sm lg:text-lg font-medium leading-relaxed lg:leading-normal">
          {description}
        </p>
      </div>
    </section>
  )
}
