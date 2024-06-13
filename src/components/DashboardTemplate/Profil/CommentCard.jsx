"use client";
import { useState, useEffect, useCallback } from "react";
import { getAllComments } from "@/data/api-endpoint";
import moment from "moment";

const CommentCard = ({ id_seller }) => {
  // useState
  const [comments, setComments] = useState([]);

  // Fetch Comments
  const fetchComments = useCallback(async () => {
    if (id_seller) {
      try {
        const response = await getAllComments();
        if (response.comments) {
            // filtering comments by id_seller
            const filteredComments = response.comments.filter((comment) => comment.id_seller === id_seller);
            // sort comments by createdAt
            filteredComments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setComments(filteredComments);
        } else {
          console.error("No data received from API");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
  }, [id_seller]);

  // useEffect for fetching comments
  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <>
      {comments.length > 0 ? (
        <>
          {comments.map((comment) => (
            <div key={comment.id}> {/* Added key for list rendering */}
              <h3 className="font-semibold text-md text-fbDark">{comment.name}</h3>
              <p className="text-sm text-gray-400">{comment.description}</p>
              <p className="text-xs text-gray-400 my-2">
                {moment(comment.createdAt).locale('id').format('LL LT')}
              </p>
              <hr className="border-1 border-gray-400 my-2" />
            </div>
          ))}
        </>
      ) : (
        <h3 className="font-semibold text-md text-fbDark">Belum ada komentar</h3>
      )}
    </>
  );
}

export default CommentCard;
