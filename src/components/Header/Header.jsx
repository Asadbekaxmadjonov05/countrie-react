import { useState } from "react"
import { ModeIcon } from "../../assets/images/Icon"
import Modal from "../Modal"
import Button from "../Button"
import EmptyImg from "../../assets/images/empty-img.png"
import { Toaster, toast } from "react-hot-toast"

function Header({countries, setCountries, setIsLoading}) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [flag, setFlag] = useState(EmptyImg)

    const [name, setName] = useState("")
    const [capital, setCapital] = useState("")
    const [population, setPopulation] = useState("")

    function DarkMode() {
        document.documentElement.classList.toggle("dark")
    }
    function handleCancelBtnClick(){
        setIsOpenModal(false)
        setFlag(EmptyImg)
    }

    function handleSubmitCountry(e){
        e.preventDefault()
        const data = {
            id: countries.length ? countries[countries.length - 1].id + 1 : 1,
            name, capital,population,flag,
            isLiked: false,
            isBasket: false
        }
        setIsOpenModal(false)
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            toast.success('Country successfully added')
            setCountries([data,...countries])
        },1000)

        setName("")
        setCapital("")
        setPopulation("")
        setFlag(EmptyImg)
    }

    return (
        <>
        <Toaster position="top-center"  reverseOrder={false}/>
            <header className="py-[23px] px-[80px] mx-auto bg-white dark:text-white dark:bg-[#2B3844]  shadow-2xl dark:shadow-xl">
                <div className="mx-auto w-[1280px] flex items-center justify-between">
                    <h1 className="text-[24px] leading-[32px] font-bold">Where in the world?</h1>
                    <div className="flex item-center space-x-2">
                        <button  className="flex items-center gap-2 dark:hover:bg-[#ffffff] bg-white dark:bg-transparent dark:text-yellow-50 py-2 px-2 rounded-md duration-300 hover:bg-slate-200">
                            <span className="font-semibold text-[16px] leading-[21px]"></span>
                        </button> 
                        <button onClick={() => { DarkMode() }} class="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"> </span>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                        Dark Mode <ModeIcon /></span> </button> 
                        <button onClick={() => setIsOpenModal(true)} class="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                        <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">Add Country</span>
                        </button>
                        
                    </div>
                </div>
            </header>
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <form onSubmit={handleSubmitCountry} autoComplete="off">
                    <div className="flex justify-between items-center">
                        <label className="w-[49%]">
                            <input onChange={(e) => setFlag(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file" />
                            <img className="h-[180px] object-contain" src={flag} alt="Choose img" width={"100%"}/>
                        </label>
                        <div className="w-[49%] space-y-4">
                            <input onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500" required placeholder="Enter country name" name="name" />
                            <input onChange={(e) => setCapital(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500" required placeholder="Enter country capital" name="capital" />
                            <input onChange={(e) => setPopulation(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500" required placeholder="Enter country population" name="population" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button onClick={handleCancelBtnClick} type={"button"} title={"Cancel"} extraStyle={"w-[49%] mt-5 bg-red-600 text-white"} />
                        <Button type={"submit"} title={"Submit"} extraStyle={"w-[49%] mt-5 bg-green-600 text-white"} />
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default Header