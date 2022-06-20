
const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800 text-center">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight  text-gray-800">
          Testimonios
        </h1>
        <p className="text-lg text-gray-600">What others say about us</p>
        <div className="w-full mb-4 py-3">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
          <div className="p-4 text-gray-800 rounded-lg shadow-md">
            <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img" className="object-cover object-center w-full h-full" />
                </div>
                <h5 className="font-bold text-primary-color">John Doe</h5>
                <p className="text-sm text-gray-600">CEO / Founder</p>
              </div>
            </div>
          </div>
          <div className="p-4 text-gray-800 rounded-lg shadow-md">
            <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img" className="object-cover object-center w-full h-full" />
                </div>
                <h5 className="font-bold text-primary-color">michael james</h5>
                <p className="text-sm text-gray-600">CEO - Arauco</p>
              </div>
            </div>
          </div>
          <div className="p-4 text-gray-800 rounded-lg shadow-md">
            <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img" className="object-cover object-center w-full h-full" />
                </div>
                <h5 className="font-bold text-primary-color">michael james</h5>
                <p className="text-sm text-gray-600">CEO - CCU</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection
