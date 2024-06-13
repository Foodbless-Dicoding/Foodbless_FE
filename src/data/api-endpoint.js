import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

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

//getAllComment
export const getAllComments = async() => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getCommentAll`);
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
        window.location.href = "/";
        return response.data;


    } catch (error) {
        console.error("Error sending data: ", error);
        throw error;
    }
}

export const postLogin = async (loginData) => {
    try {
        Swal.fire({
            width: 200,
            height: 200,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, loginData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });

        const results = response.data;
        const token = results.token;
        const user_id = results.data.user_id;
        const role = results.data.role;
        const photo = results.data.photo;
        const username = results.data.username;
        const city_id = results.data.city_id;

        // Simpan token di local storage menggunakan Cookies.js
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("user_id", user_id, { expires: 1 });
        Cookies.set("role", role, { expires: 1 });
        Cookies.set("photo", photo, { expires: 1 });
        Cookies.set("username", username, { expires: 1 });
        Cookies.set("city_id", city_id, { expires: 1 });

        // Jika role == customer, set cookie untuk customer_id
        if (role === "customer") {
            const id_cust = results.data.id_cust;
            Cookies.set("id_cust", id_cust, { expires: 1 });
        }

        // Jika role == seller, set cookie untuk seller_id
        if (role === "seller") {
            const id_seller = results.data.id_seller;
            Cookies.set("id_seller", id_seller, { expires: 1 });
        }

        // Tutup Swal loading
        Swal.close();

        // Tampilkan Swal sukses
        await Swal.fire({
            icon: "success",
            width: 300,
            title: "Login Berhasil!",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
        });

        // Redirect ke /dashboard
        window.location.href = "/dashboard";
        
    } catch (error) {
        // Tutup Swal loading
        Swal.close();
        
        // Tampilkan Swal error
        Swal.fire({
            icon: "error",
            width: 300,
            title: "Login Gagal",
            text: error.response?.data?.message || "Cek apakah semua data sudah diisi dengan benar!",
        });

        console.error("Login Failed: ", error);
    }
}

export const postLogout = async () => {
    try {
        // Get all cookies
        const allCookies = Cookies.get();

        // Remove each cookie
        Object.keys(allCookies).forEach(cookieName => {
            Cookies.remove(cookieName);
        });

        // Tampilkan Swal sukses
        await Swal.fire({
            icon: "success",
            width:300,
            title: "Logout Berhasil!",
            showConfirmButton: false,
            timer: 1500,
        });

        // Redirect ke /login
        window.location.href = "/login";
    } catch (error) {
        // Tampilkan Swal error
        Swal.fire({
            icon: "error",
            title: "Logout Gagal",
            text: "Terjadi kesalahan pada saat logout. Silakan coba lagi.",
        });

        console.error("Logout Failed: ", error);
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
    if (!data && !jwtToken) {
        return; 
    }

    if (!data.password) {
        // Swal error if password is empty
        Swal.fire({
            icon: "error",
            width:300,
            title: "Gagal Memperbarui Data",
            text: "Password tidak boleh kosong!",
        });  
    }
    try {
        Swal.fire({
            width: 200,
            height: 200,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": jwtToken,
            },
        });
        Swal.close();
        return response.data;

    } catch (error) {
        console.error("Error sending data: ", error);
        throw error;
    }
}

export const postCreateFoodItem = async (jwtToken, data) => {
    if (data && data.name && data.price && data.description && data.photo) {
        try {
            // Tampilkan Swal loading
            Swal.fire({
                width: 200,
                height: 200,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
    
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/createFood`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": jwtToken,
                }
            });
            Swal.close();
            // Tampilkan Swal sukses
            await Swal.fire({
                icon: "success",
                width: 300,
                title: "Berhasil!",
                text: "Item makanan berhasil ditambahkan!",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1500,
            });
    
            return response.data;
            
        } catch (error) {
            Swal.close();
            // Tampilkan Swal error
            await Swal.fire({
                icon: "error",
                width: 300,
                title: "Gagal Menambahkan Item",
                text: error.response?.data?.message || "Cek apakah semua data sudah diisi dengan benar!",
            });
            console.error("Error sending data: ", error);
            console.log(error.response.data);
            throw error;  
        }   
    }if (!data && 
        !data.name &&
        !data.price &&
        !data.description && 
        !data.photo
    ) {
        // Give Swal error if data is empty
        Swal.fire({
            icon: "error",
            width: 300,
            title: "Gagal Menambahkan Item",
            text: "Data tidak boleh kosong!",
        });
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

