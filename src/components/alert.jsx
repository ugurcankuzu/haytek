export default function Alert(props) {

    switch (props.type) {
        case 'missingInputField': {
            return (
                <>
                    <div onTransitionEnd={(event)=>{event.target.style.display = 'none'; props.alertDisplayHandler(false)}} style={{transform: 'translate(-50%,-50%)', position: 'fixed' }} className="w-2/3 h-fit left-[50%] right-[50%] top-[120px] sm:top-[100px] p-5 box-border shadow-outer-bold flex flex-col gap-2 rounded-md animate-enterance transition duration-200 bg-white">
                        <h1 className="text-2xl font-bold">Bir hata meydana geldi!</h1>
                        <hr className="h-2" />
                        <p>Lütfen formu doldurduğunuzdan emin olun.</p>
                        <button onClick={(event)=>{
                            event.target.parentElement.style.opacity = '0';
                        }} className="self-end bg-brand p-2 rounded-md text-white font-bold">Tamam</button>
                    </div>
                </>
            )
        }
    }
}