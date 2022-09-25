import { useState } from "react";
import { checkInputFields } from "../functions";
import Alert from "./alert";

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
    const [input12, updateInput12] = useState("");
    const [input13, updateInput13] = useState("");
    const [input14, updateInput14] = useState("");
    const [input15, updateInput15] = useState("");
    //Şube evet ise açılan inputlara ait stateler
    const [input16, updateInput16] = useState("");
    const [input17, updateInput17] = useState("");
    const [input18, updateInput18] = useState("");
    const [input19, updateInput19] = useState("");
    const [input20, updateInput20] = useState("");
    const [input21, updateInput21] = useState("");

    // Tailwind içerisinde kullanmak üzere conditional rendering stateleri
    const [form1Display, changeForm1Display] = useState(true);
    const [alertDisplay, changeAlertDisplay] = useState(false);
    return (
        <>
            {alertDisplay && <Alert alertDisplayHandler={changeAlertDisplay} type="missingInputField" />}
            {
                /* 
                    *BUG: Header divlerinde tailwind classları ile conditional bg renklendirmede renklerin uygulanmaması gibi bir bug oluştu bu yüzden 
                    conditional rendering için inline css kullanıldı. Vakit olduğunda tekrar dönülebilir.
                */
            }
            <div className="w-full transition duration-200 h-fit sm:h-24 mt-12 mb-12 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-12 px-5 sm:px-[15%]">
                <div style={form1Display ? { background: '#fff' } : { background: 'rgba(255, 255, 255, 0.5)' }} className={`w-full h-full flex justify-center items-center gap-10 rounded-md shadow-xl p-3`}>
                    <p className="text-brand text-5xl">1</p>
                    <p className="text-brand text-2xl text-center">Firma / Kurum bilgileri</p>
                </div>
                <div style={form1Display ? { background: 'rgba(255, 255, 255, 0.5)' } : { background: '#fff' }} className={`w-full h-full transition duration-200 flex justify-center items-center gap-10 bg-${form1Display ? "white-faded" : "white"} rounded-md shadow-xl p-3`}>
                    <p className="text-brand text-5xl">2</p>
                    <p className="text-brand text-2xl text-center">Firma hakkında bilgiler</p>
                </div>
            </div>
            <div className={`w-full h-fit ${form1Display ? "flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-6" : "hidden"} transition duration-200 p-5 sm:px-[15%] sm:py-12`}>
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

                        if (checkInputFields([input1, input2, input3, input4, input5, input6, input7, input8, input9])) {
                            changeForm1Display(false);
                        } else {
                            changeAlertDisplay(true);
                        }

                    }} type="button">Devam et</button>
                </div>
            </div>
            <div className={`w-full h-fit ${form1Display ? "hidden" : "flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-6"} transition duration-200 p-5 sm:px-[15%] sm:py-12`}>
                <input onChange={(event) => { updateInput10(event.target.value) }} name="firmaHayvanSayısı" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Hayvan sayısı" />
                <input onChange={(event) => { updateInput11(event.target.value) }} name="firmaHayvanÇeşidi" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Hayvan türü" />
                <input onChange={(event) => { updateInput12(event.target.value) }} name="firmaTürü" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="İşletme türü" />
                <input onChange={(event) => { updateInput13(event.target.value) }} name="firmaÇalışanSayısı" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Çalışan sayısı" />
                <div className="basis-1/2 rounded-md border-none shadow-outer-bold flex items-center px-1 py-2 sm:px-3 bg-white h-10">
                    <p className="w-1/2 text-gray-500">Şube mevcut mu ?</p>
                    <div className="w-1/2 flex justify-around items-center">
                        <div className="w-1/2 flex justify-center items-center gap-1">
                            <input onChange={(event) => { updateInput14(event.target.value) }} name="firmaŞube" value="1" className="checked:bg-brand focus:outline-none focus:ring-0 hover:cursor-pointer" type="radio" />
                            <label htmlFor="firmaŞube">Evet</label>
                        </div>
                        <div className="w-1/2 flex justify-center items-center gap-1">
                            <input onChange={(event) => { updateInput14(event.target.value) }} type="radio" value="0" name="firmaŞube" className="checked:bg-brand focus:outline-none focus:ring-0 hover:cursor-pointer" />
                            <label htmlFor="firmaŞube">Hayır</label>
                        </div>
                    </div>
                </div>
                <input name="firmaSütSağım" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Süt sağım sıklığı ve zamanı" />
                <div className={`${input14 === "1" ? "w-7full h-fit flex flex-col gap-4 sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-6" : "hidden"} transition duration-200`}>
                    <input onChange={(event) => { updateInput16(event.target.value) }} name="şubeAdı" className="basis-1/2  rounded-md border-none shadow-outer-bold" type="text" placeholder="Şube adı" />
                    <input onChange={(event) => { updateInput17(event.target.value) }} name="şubeYetkiliAdı" className="basis-1/2  rounded-md border-none shadow-outer-bold" type="text" placeholder="Şube yetkilisinin adı" />
                    <input onChange={(event) => { updateInput18(event.target.value) }} name="şubeHayvanSayısı" className="basis-1/2  rounded-md border-none shadow-outer-bold" type="text" placeholder="Hayvan sayısı" />
                    <input onChange={(event) => { updateInput19(event.target.value) }} name="şubeHayvanTürü" className="basis-1/2  rounded-md border-none shadow-outer-bold" type="text" placeholder="Hayvan türü" />
                    <input onChange={(event) => { updateInput20(event.target.value) }} name="şubeÇiftlikTürü" className="basis-1/2  rounded-md border-none shadow-outer-bold" type="text" placeholder="Çiftlik türü" />
                    <input onChange={(event) => { updateInput21(event.target.value) }} name="şubeAdres" className="basis-1/2 rounded-md border-none shadow-outer-bold" type="text" placeholder="Şube adresi" />
                </div>
                <textarea onChange={(event) => { updateInput15(event.target.value) }} name="firmaDenetimNot" className="col-span-2 rounded-md resize-none h-40 border-none shadow-outer-bold" maxLength="256" placeholder="Denetime engel teşkil eden bir sorun mevcut mu ? (Denetime engel durumlarda-Hamilelik, Bulaşıcı Hastalık vb- bilgi verilmesi gerekmektedir.)"></textarea>
                <div className="col-span-2 flex justify-between items-center">
                    <button type="button" onClick={() => { changeForm1Display(true) }} className="bg-transparent p-2 border-2 border-brand rounded-md text-brand transition duration-200 hover:bg-brand hover:text-white">Geri</button>
                    <button type="button" onClick={(event) => {
                        if (input14 === "0" ? !checkInputFields([input10, input11, input12, input13, input14, input15]) : !checkInputFields([input10, input11, input12, input13, input14, input15, input16, input17, input18, input19, input20, input21])) {
                            event.preventDefault();
                            changeAlertDisplay(true);
                        } else {
                            //Test için yazılmıştır. Fetch API yerine AXIOS kullanılabilir.
                            fetch("http://localhost:5000/test", {
                                method: "POST",
                                headers: {
                                    'Content-type': 'application/json'
                                },
                                body: JSON.stringify({
                                    firmaAdi: input1,
                                    firmaTanim: input2,
                                    firmaSahibiAdi: input3,
                                    firmaYetkiliAdi: input4,
                                    firmaFax: input5,
                                    firmaTelefon: input6,
                                    firmaBasvuruKapsami: input7,
                                    firmaBasvuruSebebi: input8,
                                    firmaAdres: input9,
                                    firmaHayvanSayisi: input10,
                                    firmaHayvanTuru: input11,
                                    firmaTuru: input12,
                                    firmaCalisanSayisi: input13,
                                    subeVarlik: input14,
                                    subeBilgi: {
                                        subeAd: input14 === "0" ? null : input16,
                                        subeYetkiliAd: input14 === "0" ? null : input17,
                                        subeHayvanSayisi: input14 === "0" ? null : input18,
                                        subeHayvanTuru: input14 === "0" ? null : input19,
                                        subeCiftlikTuru: input14 === "0" ? null : input20,
                                        subeAdres: input14 === "0" ? null : input21
                                    },
                                    firmaNot: input15

                                }
                                )
                            })
                        }
                    }} className="bg-brand p-2 rounded-md text-white">Başvur</button>
                </div>
            </div>
        </>
    )
}