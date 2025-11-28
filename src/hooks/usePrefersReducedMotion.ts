import { useEffect, useState } from "react"

export function usePrefersReducedMotion (){
    const initialValue = () => {
        if(typeof window === "undefined") return false;
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }
    const [reducedMotion, setReducedMotion] = useState(initialValue);

    useEffect(() => {
        if(typeof window === "undefined") return
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        const handler =() => {
            setReducedMotion(mediaQuery.matches)
        }
        mediaQuery.addEventListener("change", handler);
        return() => mediaQuery.removeEventListener("change", handler);
    },[])
    
  return reducedMotion;
}