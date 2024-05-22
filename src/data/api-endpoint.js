import axios from "axios";

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


export const postLogin = async (data) => {

}

export const postCreateFoodItem = async (data) => {

}
