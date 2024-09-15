import { MARQUEE_TEXT } from "../constants"


const Marquee = () => {
  return (
    <div className="mt-6 w-full bg-lime-300 text-black lg:py-6">
        <div className="flex overflow-hidden whitespace-nowrap">
            {[...Array(2)].map((_, i) =>(
                <h1 key={i} className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl">
                    {MARQUEE_TEXT}
                </h1>
            ))}

        </div>
    </div>
  )
}

export default Marquee