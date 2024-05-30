/* 
  This hook checks if the user role is correct and redirects them to the current page,
  if not they will be redirected to the dashboard page.
*/

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { postLogout } from "@/data/api-endpoint";

const useCheckRoleAndRedirect = (decidedRoles, urlWithRole) => {
    const router = useRouter();

    useEffect(() => {
        const role = Cookies.get("role");

        if (role) {
            if (role === decidedRoles) {
                router.push(urlWithRole || "/dashboard");
            }else {
                router.push("/dashboard");
            }
            
        }else {
            postLogout();
        }
    });
}

export default useCheckRoleAndRedirect;