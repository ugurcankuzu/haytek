import { Link } from "react-router-dom"
export default function Navbar() {
    return (

        <div className="w-screen h-14 flex flex-col sm:flex-row gap-3 justify-between items-center py-2 sm:px-20">
            <Link className="text-3xl font-bold text-white" to={"/"}>HayTek</Link>
            <div className="w-fit h-full flex justify-center items-center gap-5 text-white">
                <Link to={"#"}>Page1</Link>
                <Link to={"#"}>Page2</Link>
                <Link to={"#"}>Page3</Link>
                <Link to={"#"}>Page4</Link>
            </div>
        </div>

    )
}