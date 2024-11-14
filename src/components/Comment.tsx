import { useState } from "react";
import { CommentInfo } from "../types";
import Counter from "./Counter";
import ReplyButton from "./ReplyButton";

function Comment({ commentInfo }: { commentInfo: CommentInfo }) {
  const [score, setScore] = useState(commentInfo.score);
  const [userVote, setUserVote] = useState<"upvote" | "downvote" | null>(null);

  return (
    <div className="flex flex-col gap-y-4 bg-white p-4 rounded-md">
      <div className="flex items-center gap-x-4">
        <img
          src={commentInfo.user.image.webp}
          alt="profile-icon"
          className="w-8 h-8"
        />

        <p className="font-medium text-neutral-d-blue">
          {commentInfo.user.username}
        </p>

        <p className="text-neutral-g-blue">{commentInfo.createdAt}</p>
      </div>

      <p className="text-neutral-g-blue">{commentInfo.content}</p>

      <div className="flex justify-between">
        <Counter score={score} onVote={handleVote} userVote={userVote} />
        <ReplyButton />
      </div>
    </div>
  );

  function handleVote(type: "upvote" | "downvote") {
    if (userVote === type) {
      // If the user clicks the same vote, reset the vote (undo)
      setScore((prevScore) =>
        type === "upvote" ? prevScore - 1 : prevScore + 1
      );
      setUserVote(null);
    } else {
      // If the user clicks the opposite vote, switch it
      setScore((prevScore) => {
        if (userVote === null) {
          // First-time vote
          return type === "upvote" ? prevScore + 1 : prevScore - 1;
        } else {
          // Switching from upvote to downvote or vice versa
          return type === "upvote" ? prevScore + 2 : prevScore - 2;
        }
      });
      setUserVote(type);
    }
  }
}

export default Comment;
