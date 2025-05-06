import Google from "../../../public/asset/Image/Google.webp"
import { useNavigate } from "react-router-dom"

const LoginWith = ({
    icon = Google,
    background = "bg-slate-100",
    textColor = "text-brown-300",
    hover = "hover:bg-brown-300 hover:text-white"
}) => {

    const navigate = useNavigate()

    return (
        <>
        <div 
        onClick={() => navigate('/Home')}
        className={`${background} ${hover} flex gap-2 w-[210px] justify-between items-center px-4 py-2 shadow-2xl rounded-2xl ${textColor}
            transition-all duration-300 ease-out`}>
           <p className={` font-montserrat font-bold text-lg `}>Masuk Dengan</p>
           <img className="w-5" src={icon} alt={icon} />
        </div>
        </>
    )
}

export default LoginWith