import axios from "axios";
import Cookies from "js-cookie";

export const getFoodblessAPI = async (resource, query) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}

export const postRegister = async (resource, data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;

    } catch (error) {
        console.error("Error sending data: ", error);
        throw error;
    }
}

export const postLogin = async (loginData) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, loginData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });

        const results = response.data;
        const token = results.token;
        const user_id = results.data.user_id;
        const role = results.data.role;

        // Store token in local storage using Cookies.js: set 1 day expiry
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("user_id", user_id, { expires: 1 });
        Cookies.set("role", role, { expires: 1 });

        // Redirect to /dashboard
        window.location.href = "/dashboard";
        
    } catch (error) {
        console.error("Login Failed: ", error);
        throw error;
    }
}

export const postCreateFoodItem = async (data) => {

}


