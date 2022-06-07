import CardContainer from "./cardContainer"
interface Props {
  title: string,
}
const KeysSection = ({title}:Props) => {
    return (
        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              {title}
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <CardContainer
            title="Primer titulo"
            upper="Upper Text"
            description="ur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor"
            />
            <CardContainer
            title="Segundo titulo"
            upper="Upper Text2 "
            description="ur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor"
           />
            <CardContainer
            title="Tercer titulo"
            upper="Upper Text 3"
            description="ur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor"
           />
          </div>
        </section>
    )
  }
  
  export default KeysSection
  