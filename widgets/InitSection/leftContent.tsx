interface Props{
    upperText: string;
    mainText: string;
    bottomText: string;
    buttonText: string;
}
const LeftContent = ({upperText, mainText, bottomText, buttonText}:Props) => {

    return (
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="uppercase tracking-loose w-full">{upperText}</p>
              <h1 className="my-4 text-5xl font-bold leading-tight">
                {mainText}
              </h1>
              <p className="leading-normal text-2xl mb-8">
                {bottomText}
              </p>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                {buttonText}
              </button>
            </div>
    )
  }
  
  export default LeftContent
  