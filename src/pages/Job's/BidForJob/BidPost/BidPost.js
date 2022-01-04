import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import profilePhoto from "../../../../images/profile.jpg";
import "./BidPost.css";

const BidPost = ({ jobId }) => {
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState([]);
  const [success, setSuccess] = useState(false);
  const userName = user.displayName;
  const userEmail = user.email;
  const userPhoto = user.photoURL;
  const handleComment = (e) => {
    e.preventDefault();
    const commentData = {
      comment,
      jobId,
      userName,
      userEmail,
      userPhoto,
    };

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You bidded successfully");
          e.target.reset();
          setSuccess("You bidded successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/comments?jobId=${jobId}`)
      .then((res) => res.json())
      .then((data) => setShowComments(data));
  }, [showComments]);
  return (
    <div>
      <div>
        {/* <p>This is bid of: {jobId}</p> */}
        <form onSubmit={handleComment}>
          <h6>Bid For Job: </h6>
          <input
            required
            type="text"
            placeholder="Write somthing to buyer.."
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Bid Job</button>
        </form>
        <div>
          <p>
            <b>{showComments.length}</b> people bided for this job
          </p>
          {showComments.map((comments) => (
            <div key={comments._id} className="single-bid">
              <div style={{ alignItems: "center" }} className="d-flex ">
                <div>
                  {comments.userPhoto ? (
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadious: "50%",
                      }}
                      src={comments.userPhoto}
                      alt=""
                      className="img-fluid me-1"
                    />
                  ) : (
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadious: "50%",
                      }}
                      src={profilePhoto}
                      alt=""
                      className="img-fluid me-1"
                    />
                  )}
                </div>
                <div>
                  <h6>
                    {comments.userName}
                    <span style={{ color: "gray" }}>
                      ({comments.userEmail})
                    </span>
                  </h6>
                </div>
              </div>
              <hr />

              <h6>Bidding Message:</h6>
              <p>{comments.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BidPost;
