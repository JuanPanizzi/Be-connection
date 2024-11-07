
export const Barra = ({text1, text2}:any) => {
  return (
    <>
     <div className="bg-purple1 h-72 flex justify-center items-center text-white">
        {/* <h1>{text}</h1> */}
        <div className="text-center flex flex-col justify-evenly items-center h-full">

        <h1 className="text-white lg:text-5xl w-2/3 mx-auto " style={{ lineHeight: '1.50' }}>{text1} <span className="text-rosa1"> {text2}</span></h1>
        <button className="border-4 rounded border-white py-4 px-10  w-[300px] text-2xl text-white">SUMATE</button>
        </div>   
        </div>
    </>
  )
}
