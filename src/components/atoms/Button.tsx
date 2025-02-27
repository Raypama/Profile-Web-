interface ButtonProps {
  textButton1: string;
  textButton2: string;
  onDownloadCV?: () => void;
}

const Button = ({ textButton1, textButton2, onDownloadCV }: ButtonProps) => {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-8 justify-center sm:justify-start">
      <button
        onClick={() => alert("Loaded")}
        type="button"
        className="w-28 sm:w-32 h-10 sm:h-12 shadow-lg border border-blue-950 rounded-3xl 
                       text-blue-900 text-lg sm:text-xl font-medium 
                       hover:text-white hover:bg-blue-950 transition-all duration-300"
      >
        {textButton1}
      </button>

      <button
        onClick={onDownloadCV}
        type="button"
        className="w-28 sm:w-32 h-10 sm:h-12 shadow-lg border border-blue-950 rounded-3xl 
                       text-blue-900 text-lg sm:text-xl font-medium 
                       hover:text-white hover:bg-blue-950 transition-all duration-300"
      >
        {textButton2}
      </button>
    </div>
  );
};

export default Button;
