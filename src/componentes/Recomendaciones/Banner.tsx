export const Banner = ({imagen}:any) => {
  return (
    <>
     <div className="relative w-full h-[180px] lg:h-[350px] xl:h-[500px] overflow-hidden">
      <img src={imagen} alt="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
    </div>
    </>
  )
}
