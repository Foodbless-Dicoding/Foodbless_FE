/* 
  This hook checks if the user is authenticated and redirects them to 
  the dashboard if they are authenticated. If they are not authenticated, 
  it redirects them to the login page.
*/

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const useCheckTokenAndRedirect = (urlWithToken, urlWithoutToken) => {
  const router = useRouter();
  
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      router.push(urlWithToken || "/dashboard");
    } else {
      router.push(urlWithoutToken || "/login");
    }

  }, [urlWithToken, urlWithoutToken, router]);
};

export default useCheckTokenAndRedirect;

