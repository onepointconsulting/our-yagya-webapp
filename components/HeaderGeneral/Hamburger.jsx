import Link from 'next/link'

const Hamburger = () => {
    return (
        <div className="absolute top-4 xs:top-6 md:top-8 right-4 sm:right-10 h-16 w-16 lg:hidden z-30 ">
            <Link href="/">
                <a className="inline-block float-right text-yagya-red-color">
                    <button id="mobile_menu" className="relative h-10 outline-none">
                        <div role="hidden" id="line"
                             className="inset-0 w-4 h-0.5 sm:w-8 md:h-1 m-auto rounded-full bg-yagya-red transition duration-300">
                        </div>
                        <div role="hidden" id="line2"
                             className="inset-0 w-4 h-0.5 sm:w-8 md:h-1 mt-1.5 m-auto rounded-full bg-yagya-red transition duration-300">
                        </div>
                        <div role="hidden" id="line2"
                             className="inset-0 w-4 h-0.5 sm:w-8 md:h-1 mt-1.5 m-auto rounded-full bg-yagya-red transition duration-300">
                        </div>
                    </button>
                </a>
            </Link>
        </div>
    )
}

export default Hamburger