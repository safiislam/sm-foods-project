
// Show from the top of the page
import { useLocation } from "react-router-dom";
import { resolveConfig } from "vite";
const {pathname} = useLocation();

  useEffect(() => {
    window.scroll(0,0);
  }, [pathname]);

