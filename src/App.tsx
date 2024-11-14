import { useEffect, useState } from "react";
import Comment from "./components/Comment";
import { CurrentUser } from "./types";

function App() {
  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div className="px-4 py-8 h-screen">
      <div className="flex flex-col gap-y-4">
        {user &&
          user.comments.map((comment) => (
            <Comment commentInfo={comment} key={comment.id} />
          ))}
      </div>
    </div>
  );
}

export default App;
