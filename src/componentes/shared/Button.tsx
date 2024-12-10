interface ButtonProps {
    text: string;
    className?: string; 
  }

export const Button = ({text, className}:ButtonProps) => {
  return (
    <a href="https://wa.me/+5491127453513" target="_blank">
   <button className={`bg-purple1  lg:max-w-[300px] text-white  rounded ${className} hover:-translate-y-1  transform transition-transform duration-300 hover:bg-[#bc4ba9] hover:shadow-lg`}>

        {text}
        </button>
    </a>
  )
}
