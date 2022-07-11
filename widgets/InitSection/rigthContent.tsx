import Image, { StaticImageData } from 'next/image'

interface Props{
  image: StaticImageData;
  image2: StaticImageData;

}
const RightContent = ({image,image2}:Props) => {
    return (
      <div className='md:w-2/5  flex'>
        <div className=" py-6 text-center">
              <Image
                src={image}
              ></Image>
        </div>
          <div className="py-6 text-center">
                <Image
                  src={image2}
                ></Image>
          </div>
        </div>
    )
  }
  
  export default RightContent
  