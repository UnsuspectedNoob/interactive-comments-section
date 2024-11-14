import { replyIcon } from "../assets/images";

function ReplyButton() {
  return (
    <button className="flex items-center font-medium text-primary-blue">
      <div className="mr-2">
        <img src={replyIcon} alt="reply icon" />
      </div>
      Reply
    </button>
  );
}

export default ReplyButton;
