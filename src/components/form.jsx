import {useState } from "react";
import { checkInputFields } from "../functions"; 

export default function Form() {

    //Form1 İçerisindeki her bir inputa ait stateler
    const [input1, updateInput1] = useState("");
    const [input2, updateInput2] = useState("");
    const [input3, updateInput3] = useState("");
    const [input4, updateInput4] = useState("");
    const [input5, updateInput5] = useState("");
    const [input6, updateInput6] = useState("");
    const [input7, updateInput7] = useState("");
    const [input8, updateInput8] = useState("");
    const [input9, updateInput9] = useState("");

    //Form2 içerisindeki her bit inputa ait stateler;
    const [input10, updateInput10] = useState("");
    const [input11, updateInput11] = useState("");
    const [input12,updateInput12] = useState("");
    const [input13,updateInput13] = useState("");
    const [input14,updateInput14] = useState("");
    const [input15,updateInput15] = useState("");

    // Tailwind içerisinde kullanmak üzere conditional rendering stateleri
    const [form1Display, changeForm1Display] = useState(true);
    return (
        <>
            {
                /* 
                    *BUG: Header divlerinde tailwind classları ile conditional bg renklendirmede renklerin uygulanmaması gibi bir bug oluştu bu yüzden 
                    conditional rendering için inline css kullanıldı. Vakit olduğunda tekrar dönülebilir.
                */
            }
            <div className="w-full transition duration-200 h-24 mt-12 mb-24 flex justify-center items-center gap-12 px-32">
                <div style={form1Display ? { background: '#fff' } : { background: 'rgba(255, 255, 255, 0.5)' }} className={`w-full h-full flex justify-center items-center gap-10 rounded-md shadow-xl`}>
                    <p className="text-brand text-5xl">1</p>
                    <p className="text-brand text-2xl">Firma / Kurum bilgileri</p>
                </div>
                <div style={form1Display ? { background: 'rgba(255, 255, 255, 0.5)' } : { background: '#fff' }} className={`w-full h-full transition duration-200 flex justify-center items-center gap-10 bg-${form1Display ? "white-faded" : "white"} rounded-md shadow-xl`}>
                    <p className="text-brand text-5xl">2</p>
                    <p className="text-brand text-2xl">Firma hakkında bilgiler</p>
                </div>
            </div>
            <form className="w-full h-fit" action="#" method="POST">
                <div className={`w-full h-fit ${form1Display ? "grid grid-cols-2 gap-x-12 gap-y-6" : "hidden"} transition duration-200 px-24 py-12`}>
                    <input name="firmaAdı" onChange={(event) => { updateInput1(event.target.value) }} className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Firma adı" />
                    <input name="firmaTanım" onChange={(event) => { updateInput2(event.target.value) }} className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Firma tanımı" />
                    <input name="firmaSahip" onChange={(event) => { updateInput3(event.target.value) }} className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Firma sahibinin adı" />
                    <input name="firmaYetkili" onChange={(event) => { updateInput4(event.target.value) }} className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Firma yetkilisinin adı" />
                    <input name="firmaFax" onChange={(event) => { updateInput5(event.target.value) }} className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Fax" />
                    <input name="firmaTelefon" onChange={(event) => { updateInput6(event.target.value) }} className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Telefon" />
                    <input name="firmaBaşvuruKapsamı" onChange={(event) => { updateInput7(event.target.value) }} className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Başvuru kapsamı" />
                    <select name="firmaBaşvuruSebebi" onChange={(event) => { updateInput8(event.target.value) }} className="basis-1/2 rounded-md border-none shadow-outer-bold" defaultValue="">
                        <option value="" disabled>Başvuru sebebini seçiniz</option>
                        <option value="1">İlk başvuru</option>
                        <option value="2">Yeniden Belgelendirme</option>
                        <option value="3">Değişiklik başvurusu</option>
                    </select>
                    <textarea name="firmaAdres" onChange={(event) => { updateInput9(event.target.value) }} className="col-span-2 rounded-md resize-none h-40 border-none shadow-outer-bold" maxLength="256" placeholder="Adres" />
                    <div className="col-span-2 flex justify-end items-center">
                        <button className="bg-brand p-2 rounded-md text-white shadow-outer-bold" onClick={() => {
                            /*
                             Anonim fonksiyon: 
                             *İşlevi: form1'e ait tüm input fieldların boş olup olmadığının kontrolü

                             *Döndürülen değer: Input fieldlardan birinin bile boş olması durumunda checkInputFields fonksiyonu bir alert ve false değer
                                                döndürür. Fieldların tamamının dolu olması durumunda ise checkInputFields fonksiyonu true değer döndürür
                                                ve formun ikinci kısmının ekrana getirilmesi işlevi state güncellenerek gerçekleştirir.

                             *TODO --Done: Input fieldların dolu olması durumunda form1 unmount edilip form2 mountlanacak
                            
                            */
                            
                            if(checkInputFields([input1,input2,input3,input4,input5,input6,input7,input8,input9])){
                                changeForm1Display(false);
                            }

                        }} type="button">Devam et</button>
                    </div>
                </div>
                <div className={`w-full h-fit ${form1Display ? "hidden" : "grid grid-cols-2 gap-x-12 gap-y-6"} transition duration-200 px-24 py-12`}>
                    <input onChange={(event)=>{updateInput10(event.target.value)}} name="firmaHayvanSayısı" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Hayvan sayısı" />
                    <input onChange={(event)=>{updateInput11(event.target.value)}} name="firmaHayvanÇeşidi" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Hayvan türü" />
                    <input onChange={(event)=>{updateInput12(event.target.value)}}name="firmaTürü" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="İşletme türü" />
                    <input onChange={(event)=>{updateInput13(event.target.value)}}name="firmaÇalışanSayısı" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Çalışan sayısı" />
                    <div className="basis-1/2 rounded-md border-none shadow-outer-bold flex items-center px-3 bg-white h-10">
                        <p className="w-1/2 text-gray-500">Şube mevcut mu ?</p>
                        <div className="w-1/2 flex justify-around items-center">
                            <div className="w-1/2 flex justify-center items-center gap-1">
                                <input onChange={(event) => {updateInput14(event.target.value)}} name="firmaŞube" value="1" className="checked:bg-brand focus:outline-none focus:ring-0 hover:cursor-pointer" type="radio" />
                                <label htmlFor="firmaŞube">Evet</label>
                            </div>
                            <div className="w-1/2 flex justify-center items-center gap-1">
                                <input onChange={(event) => { updateInput14(event.target.value) }} type="radio" value="0" name="firmaŞube" className="checked:bg-brand focus:outline-none focus:ring-0 hover:cursor-pointer" />
                                <label htmlFor="firmaŞube">Hayır</label>
                            </div>
                        </div>
                    </div>
                    <input name="firmaSütSağım" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Süt sağım sıklığı ve zamanı" />
                    <div className={`${input14 === "1" ? "w-full h-fit col-span-2 grid grid-cols-2 gap-x-12 gap-y-6" : "hidden"} transition duration-200`}>
                        <input name="şubeAdı" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Şube adı" />
                        <input name="şubeYetkiliAdı" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Şube yetkilisinin adı" />
                        <input name="şubeHayvanSayısı" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Hayvan sayısı" />
                        <input name="şubeHayvanTürü" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Hayvan türü" />
                        <input name="şubeÇiftlikTürü" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Çiftlik türü" />
                        <input name="şubeAdres" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Şube adresi" />
                    </div>
                    <textarea onChange={(event)=>{updateInput15(event.target.value)}} name="firmaDenetimNot" className="col-span-2 rounded-md resize-none h-40 border-none shadow-outer-bold" maxLength="256" placeholder="Denetime engel teşkil eden bir sorun mevcut mu ? (Denetime engel durumlarda-Hamilelik, Bulaşıcı Hastalık vb- bilgi verilmesi gerekmektedir.)"></textarea>
                    <div className="col-span-2 flex justify-between items-center">
                        <button type="button" onClick={()=>{changeForm1Display(true)}} className="bg-transparent p-2 border-2 border-brand rounded-md text-brand transition duration-200 hover:bg-brand hover:text-white">Geri</button>
                        <button type="submit" onClick={(event)=>{
                            if(!checkInputFields([input10,input11,input12,input13,input14,input15])){
                                event.preventDefault();
                                alert("Lütfen alanları düzgünce doldurunuz!");
                            }
                        }} className="bg-brand p-2 rounded-md text-white">Başvur</button>
                    </div>
                </div>
            </form>
        </>
    )
}