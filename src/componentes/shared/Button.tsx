interface ButtonProps {
    text: string;
    className?: string; 
  }

export const Button = ({text, className}:ButtonProps) => {
  return (
   <button className={`bg-purple1  lg:max-w-[300px] text-white  rounded ${className}`}>
    <a href="">

        {text}
    </a>
        </button>
  )
}
