"use client";
import {postComment} from "@/data/api-endpoint";
import Cookies from "js-cookie";
import { useState } from "react";

const CommentForm = ({sellerDetail}) => {

    const id_cust = Cookies.get("id_cust");
    const [description, setDescription] = useState("");

    const submitComment = async(e) => {
        e.preventDefault();
        const commentData = {
            id_cust: id_cust,
            id_seller: sellerDetail.id_seller,
            description: description,
        }

        if(commentData) {
            try {
                await postComment(commentData);
                window.location.reload();
            } catch (error) {
                console.error("Error posting comment: ", error);
            }
        }
    }

    return (
        <>
            <form onSubmit={submitComment}>
                <div className="w-full space-y-3">
                    <textarea 
                    className="py-3 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-400 text-sm  focus:border-transparent focus:border-x-transparent focus:ring-0 disabled:opacity-50 disabled:pointer-events-none" 
                    rows="2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tulis komentarmu..."></textarea>
                </div>
                <div className="flex flex-row flex-wrap justify-end items-center my-2">
                    <button className="px-8 py-1 inline-flex bg-primaryGreen rounded-lg text-sm text-fbWhite" type="submit">Kirim</button>
                </div>
            </form>
        </>
    );

}

export default CommentForm;