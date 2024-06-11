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

// get SellerDetail by seller_id
export const getSellerDetail = async(id) => {
    if (id) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seller/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            throw error;
        }
    }
}

// Get Food Data By ID
export const getFoodDataById = async (id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/food/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }

}

// Get Order Data By seller_id
export const getOrderBySellerId = async(id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getOrdersBySellerId/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}

// Get Order Data By customer_id
export const getOrderByCustomerId = async(id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getOrdersByCustomerId/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}

// Get Order Data By food_id
export const getOrderByFoodId = async(id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getOrdersByFoodId/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}

// Get Order Data by order_id
export const getOrderByOrderId = async(id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getOrdersByOrderId/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }

}

// get Comment by id_seller
export const getCommentBySellerId = async(id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getCommentByIdSeller/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }

}


// Function for Authentication System

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
        console.log(results);
        const token = results.token;
        const user_id = results.data.user_id;
        const role = results.data.role;
        const photo = results.data.photo;
        const username = results.data.username;
        const city_id = results.data.city_id;

        // Store token in local storage using Cookies.js
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("user_id", user_id, { expires: 1 });
        Cookies.set("role", role, { expires: 1 });
        Cookies.set("photo", photo, { expires: 1 });
        Cookies.set("username", username, { expires: 1 });
        Cookies.set("city_id", city_id, { expires: 1 });

        // If role == customer, set cookie for customer_id
        if (role === "customer") {
            const id_cust = results.data.id_cust;
            Cookies.set("id_cust", id_cust, { expires: 1 });
        }

        // If role == seller, set cookie for seller_id
        if (role === "seller") {
            const id_seller = results.data.id_seller;
            Cookies.set("id_seller", id_seller, { expires: 1 });
        }

        // Redirect to /dashboard
        window.location.href = "/dashboard";
        
    } catch (error) {
        console.error("Login Failed: ", error);
        throw error;
    }
}

export const postLogout = () => {
    try {
        // Get all cookies
        const allCookies = Cookies.get();

        // Remove each cookie
        Object.keys(allCookies).forEach(cookieName => {
            Cookies.remove(cookieName);
        });

        // Redirect to /login
        window.location.href = "/login";
    } catch (error) {
        console.error("Logout Failed: ", error);
        throw error;
    }
};

export const postComment = async(data) => {
    if (data) {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}createComment`, data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            });
            return response.data;
            
        } catch (error) {
            console.error("Error sending data: ", error);
            throw error;
        }
        
    }
}


// Using JWT Token - Functions
export const putUpdateUser = async (resource, jwtToken, data) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": jwtToken,
            },
        });
        return response.data;

    } catch (error) {
        console.error("Error sending data: ", error);
        console.log(error.response.data);
        throw error;
    }
}

export const postCreateFoodItem = async (jwtToken, data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/createFood`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": jwtToken,
            }
        });
        // console.log(response.data);
        return response.data;
        
    } catch (error) {
        console.error("Error sending data: ", error);
        console.log(error.response.data);
        throw error;  
    }
}

export const putUpdateFoodItem = async(jwtToken, data) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/updateFood`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": jwtToken,
            },
        });
        return response.data;

    } catch (error) {
        console.error("Error sending data: ", error);
        console.log(error.response.data);
        throw error;
    }

}

export const postOrderFood = async (jwtToken, data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}orders`, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": jwtToken,
            }
        });
        return response.data;

    } catch (error) {
        console.error("Error sending data: ", error);
        console.log(error.response.data);
        throw error;
    }
}

export const putOrderToProcess = async (jwtToken, data) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}updateOrderToDiproses`, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": jwtToken,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error sending data: ", error);
        console.log(error.response.data);
        throw error;  
    }
}

export const putOrderToFinish = async (jwtToken, data) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}updateOrderToSelesai`, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": jwtToken,
            }
        });
        return response.data;
        
    } catch (error) {
        console.error("Error sending data: ", error);
        console.log(error.response.data);
        throw error;
        
    }

}

export const putOrderToCancel = async (jwtToken, data) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}updateOrderToDibatalkan`, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": jwtToken,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error sending data: ", error);
        console.log(error.response.data);
        throw error;
    }
}

