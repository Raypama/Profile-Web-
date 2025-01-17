interface ButtonProps {
    textButton1: string;
    textButton2: string;
}


const Button = ({ textButton1, textButton2 }: ButtonProps) => {
    return (
        <div className="flex gap-8">

            <button onClick={()=>alert("Loaded")} type="button" className="w-32 h-12 shadow-lg border border-white rounded-3xl text-white text-xl font-medium hover:text-blue-900 hover:bg-white duration-200" >
                {textButton1}
            </button>
            <button onClick={()=>alert("Loaded")} type="button" className="w-32 h-12 shadow-lg border border-white rounded-3xl text-white text-xl font-medium hover:text-blue-900 hover:bg-white duration-200" >
                {textButton2}
            </button>

        </div>
    )
}

export default Button
