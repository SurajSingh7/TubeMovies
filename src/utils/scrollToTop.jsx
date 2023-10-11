import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
const {pathname} = useLocation()
const {page} = useSelector((state)=>state.pagination);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname,page]);
  return null;
};

export default ScrollToTop;