import Image from 'next/image'
// import '@/../public/next.svg'
export default function Home() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto my-6 bg-white rounded-lg shadow-xl flex items-center space-x-5">
        <div className="shrink-0">
          <img className="h-12 w-12" src="vercel.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Vercel</div>
          <p className="text-slate-500">Hello Vercel</p>
        </div>
      </div>
      <div className='max-w-sm bg-white mx-auto p-6 rounded-xl'>
        <ul>
          <li>p-6 속성은 6/4 = 1.5rem</li>
          <li>padding : px py pt pl pr pb</li>
          <li>margin  : mx my mt ml mr mb</li>
          <li>rounded-sm rounded rounded-md rounded-lg 0.125</li>
        </ul>
      </div>
      <div className="py-8 px-8 max-w-sm mx-auto my-6 bg-white sm:bg-blue-400 md:bg-red-400 lg:bg-green-500 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src="black.jpg" alt="Woman's Face" />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Erin Lindford
            </p>
            <p className="text-slate-500 font-medium">
              Product Engineer
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
    </>
  )
}
