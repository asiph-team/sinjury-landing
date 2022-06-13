interface Props{
    upperText: string;
    mainText: string;
    bottomText: string;
    buttonText: string;
}
const LeftContent = ({upperText, mainText, bottomText, buttonText}:Props) => {

    return (
            <div className=" w-full md:w-2/5  text-left md:text-left">
              <p className="uppercase tracking-loose w-full text-white">{upperText}</p>
              <div>
              <h1 className="my-4 text-5xl font-bold leading-tight text-white">
                {mainText}
              </h1>
              </div>
              <p className="leading-normal text-2xl mb-8 text-white">
                {bottomText}
              </p>
              <div className="">
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                {buttonText}
              </button>
              </div>
            </div>
    )
  }
  
  export default LeftContent
  