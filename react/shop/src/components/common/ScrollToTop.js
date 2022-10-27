
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        console.log("현재스크롤값 "+document.documentElement.scrollTop)
        window.scrollTo(0, 0);
        console.log(pathname)
    }, );

    return null;
};