import Image, { StaticImageData } from 'next/image'

interface Props{
    image: StaticImageData;

}
const RightContent = ({image}:Props) => {
    return (
        <div className="w-full md:w-3/5 py-6 text-center">
              <Image
                className="w-full md:w-4/5 "
                src={image}
              ></Image>
        </div>
    )
  }
  
  export default RightContent
  