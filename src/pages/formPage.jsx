import Form from "../components/form";
import Header from "../components/header";
import Navbar from "../components/navbar";
import '../pages/formPage.css';


export default function FormPage(){
    return(
        <div className="body w-screen h-screen">
            <Navbar/>
            <Header/>
            <Form/>
        </div>
    )
}