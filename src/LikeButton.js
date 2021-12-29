import React, { useState, useEffect } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You liked ${liked} times`;
  });

  return (
    <button onClick={() => setLiked(liked + 1)}>
      Like {liked ? liked : ""}
    </button>
  );
}

export default LikeButton;
