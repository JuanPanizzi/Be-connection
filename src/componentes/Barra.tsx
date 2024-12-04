
export const Barra = ({ text1, text2, text3 }: any) => {
  return (
    <>
      <div className={ `bg-purple1 p-3 lg:py-5  flex justify-center items-center text-white 
        ${!text3 ? 'h-36 sm:h-72' : 'h-64 sm:h-[24rem]'}`}>
        {/* <h1>{text}</h1> */}
        <div className="text-center flex flex-col justify-evenly items-center h-full ">

          <h1 className="text-white text-xl md:text-3xl lg:text-5xl xl:w-2/3 mx-auto " style={{ lineHeight: '1.50' }}>{text1} <span className="text-rosa1"> {text2}</span></h1>
          {
            text3 && <p className="text-white sm:w-2/3 text-xs  sm:text-xl py-2 lg:py-6">{text3}</p>
          }
          <button className="border-4 rounded border-white md:py-4 md:px-10 w-[100px]  md:w-[290px] md:text-2xl text-white">SUMATE</button>
        </div>
      </div>
    </>
  )
}
