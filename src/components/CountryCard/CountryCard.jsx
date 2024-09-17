import { useState } from "react";

function CountryCard({ country }) {
    const [isDeleted, setIsDeleted] = useState(false)

    const handleDelete = () => {
        setIsDeleted(true); 
    };
    if (isDeleted) return null; 

    return (
        <div className="pb-[31px] bg-white shadow-xl rounded-md w-[267px] text-black dark:bg-[#2B3844] dark:text-white overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]">
            <img className="w-[100%] h-[170px] object-cover mb-6" src={country.flag} alt="country img" width={"267"} height={"170"} />

            <div className="px-[24px]">
                <h3 className="mb-[16px] font-extrabold text-[18px] leading-[26px] ">{country.name}</h3>
                <p className="text-[14px] leading-4 mb-2"><strong className="font-bold">Population:</strong> {country.population}</p>
                <p className="text-[14px] leading-4 mb-2"><strong className="font-bold">Capital:</strong> {country.capital}</p>
            </div>
            <div className="flex items-center space-x-3 ml-[60px] mt-[25px]">
                <button className="border-[2px] border-gray-500 rounded-md hover:bg-slate-400 p-2">
                    Up Date
                </button>
            <button onClick={handleDelete} className="group relative flex h-11 w-11 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600">
  <svg
    viewBox="0 0 1.625 1.625"
    class="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
    height="15"
    width="15"
  >
    <path
      d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
    ></path>
    <path
      d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
    ></path>
    <path
      d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
    ></path>
  </svg>
  <svg
    width="16"
    fill="none"
    viewBox="0 0 39 7"
    class="origin-right duration-500 group-hover:rotate-90"
  >
    <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
    <line
      stroke-width="3"
      stroke="white"
      y2="1.5"
      x2="26.0357"
      y1="1.5"
      x1="12"
    ></line>
  </svg>
  <svg width="16" fill="none" viewBox="0 0 33 39" >
    <mask fill="white" id="path-1-inside-1_8_19">
      <path
        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
      ></path>
    </mask>
    <path
      mask="url(#path-1-inside-1_8_19)"
      fill="white"
      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
    ></path>
    <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
    <path stroke-width="4" stroke="white" d="M21 6V29"></path>
  </svg>
            </button>    
            </div>
        </div>
    );
}

export default CountryCard;
