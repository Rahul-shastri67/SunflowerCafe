import { memo, useState } from "react";

export const FoodImage = memo(({ src, alt, className = "" }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-beige ${className}`}>
      <img
        src={failed ? "/images/placeholder.svg" : src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-[opacity,transform] duration-500 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
});