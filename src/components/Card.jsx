import React from 'react';

function Card({
    label,
    src="",
    alt="image icon",
    className="",
    ...props

}) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Card container */}
      <div className="flex justify-center items-center p-4 m-4 rounded-xl h-40 w-40 shadow-xl  transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="h-full object-contain"
          {
            ...props
          }
        />
      </div>

      {  label &&
         <p className="text-[#3B82F6] dark:text-[#3B82F6] text-lg font-semibold">
           {label}
         </p>
      }
      </div>
  );
}

export default Card;
