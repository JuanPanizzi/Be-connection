interface ButtonProps {
    text: string;
    className?: string; 
  }

export const Button = ({text, className}:ButtonProps) => {
  return (
   <button className={`bg-purple1 max-w-[300px] text-white  rounded ${className}`}>
        {text}
        </button>
  )
}
