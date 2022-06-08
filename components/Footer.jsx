const Footer = () => {
    return (
        // <!-- Footer -->
        <footer className="filosofia_italic  flex flex-wrap xl:flex-row items-center  justify-center md:justify-between p-2 md:p-4 px-2 bg-grayfull text-white text-center">
            <div className="hidden md:block md:pl-4 lg:pl-8">
                <a href="#!" className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">Our Yagya  <span>@</span>2022</a>
            </div>

            <div className="md:pr-4 lg:pr-8">
                <a href="/signup_for_seva.html" className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">Signup for Seva</a>
                <a href="#!" className="px-2"> |</a>
                <a href="#!" className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">FAQ</a>
                <a href="#!" className="px-2"> |</a>
                <a href="#!" className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">contact us</a>
                <a href="#!" className="px-2"> |</a>
                <a href="#!" className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">terms of use</a>
                <a href="#!" className="px-2"> |</a>
                <a href="#!" className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">site map</a>
                <a href="#!" className="px-2"> |</a>
                <a href="#!" className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">Privacy Policy</a>
            </div>
            <div className="md:hidden md:md:pl-4 lg:pl-8">
                <a href="#!" className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">Our Yagya <span>@</span>2022</a>
            </div>
        </footer>

    )
}

export default Footer