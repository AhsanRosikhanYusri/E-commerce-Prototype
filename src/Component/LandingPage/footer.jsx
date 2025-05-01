
import Facebook from "../../../public/asset/Image/devicon_facebook.png"
import Instagram from "../../../public/asset/Image/skill-icons_instagram.png"
import Twitter from "../../../public/asset/Image/skill-icons_twitter.png"


export default function Footer() {
    return (
        <footer className="bg-[#4E342E]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-center">
                            <span className="self-center text-2xl font-montserrat font-bold whitespace-nowrap text-white">
                                LOGO
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Sumber</h2>
                            <ul className="text-[#FFD8A8] font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:text-white">Ahsan RY</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:text-white">X RPL 5</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Ikuti kami</h2>
                            <ul className="text-[#FFD8A8] font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-white">Github</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                            <ul className="text-[#FFD8A8] font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-white">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-[#795548] sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-[#D7CCC8] sm:text-center">
                        © 2025 <a href="#" className="hover:text-white">SMK</a>. Taruna Bhakti Depok.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-[#D7CCC8] hover:text-white">
                            <img className="w-8 h-8" src={Twitter} alt="" />
                        </a>
                        <a href="#" className="text-[#D7CCC8] hover:text-white ms-5">
                            <img className="w-8 h-8" src={Facebook} alt="" />
                        </a>
                        <a href="#" className="text-[#D7CCC8] hover:text-white ms-5">
                            <img className="w-8 h-8" src={Instagram} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
