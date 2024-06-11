"use client";
import { useState, useEffect, useCallback } from "react";
import { getCommentBySellerId } from "@/data/api-endpoint";
import moment from "moment";

const CommentCard = ({id_seller}) => {

    // useState
    const [comments, setComments] = useState([]);
    
    // use Moment.js for formatting commments.createdAt
    const createdAt = moment(comments.createdAt).locale('id').format('LL LT');


    // Fetch Comments
    const fetchComments = useCallback(async() => {
        if (id_seller) {
            try {
                const response = await getCommentBySellerId(id_seller);
                if (response.comments) {
                    setComments(response.comments);
                } else {
                    console.error("No data received from API");
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
    },[id_seller]);

    // useEffect for fetching comments
    useEffect(() => {
        fetchComments();
    }, [fetchComments]);


    return (
        <>
            {comments ? (
                <>
                    <h3 className="font-semibold text-md text-fbDark">{comments.name}</h3>
                    <p className="text-sm text-gray-400">{comments.description}</p>
                    <p className="text-xs text-gray-400 my-2">{createdAt}</p>
                    <hr className="border-1 border-gray-400 my-2" />
                
                </>
            ) : (
                <>
                    <h3 className="font-semibold text-md text-fbDark">Belum ada komentar</h3>
                </>
            )}
        
        </>
    );

}

export default CommentCard;