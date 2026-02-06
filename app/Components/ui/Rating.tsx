"use client";
import { Star } from "lucide-react";

interface RatingProps {
  value: number;       
  max?: number;        
  size?: number;       
  interactive?: boolean; 
  onChange?: (val: number) => void;
}

export default function Rating({ 
  value, 
  max = 5, 
  size = 14, 
  interactive = false, 
  onChange 
}: RatingProps) {
  
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(max)].map((_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= Math.round(value);

        return (
          <button
            key={index}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onChange?.(starNumber)}
            className={`${interactive ? "cursor-pointer" : "cursor-default"} transition-transform active:scale-90`}
          >
            <Star
              size={size}
              strokeWidth={2}
              className={`
                ${isFilled 
                  ? "fill-yellow-400 text-yellow-400" 
                  : "fill-white-400 text-white-700"
                } 
                ${interactive && "hover:text-yellow-300"}
              `}
            />
          </button>
        );
      })}
      

      {value > 0 && (
        <span className="text-[10px] text-gray-500 font-medium ml-1.5">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}