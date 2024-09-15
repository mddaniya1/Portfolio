import { LuImport } from "react-icons/lu"
import hero from "../assets/hero.jpg"


const Hero = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
                    Muhammad <br /> Daniyal
                </h1>
                <div className="mt-8">
                    <a href="/Benson-Langford.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="flex itmes-center rounded-xl bg-lime-300 p-2
                         px-6 font-sans font-medium text-black hover:bg-lime-400">
                        <span>Resume.pdf</span>
                        <LuImport className="ml-2" />
                    </a>
                </div>
                <div className="w-full">
                    <img src={hero} alt="Benson Langford" className="mt-8 h-96 w-full object-cover"/>
                </div>
            </div>
        </section>
    )
}

export default Hero