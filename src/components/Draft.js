import { useState, useEffect, useRef } from "react";
import DraftTitle from "./DraftTitle";
import DraftPrompt from "./DraftPrompt";
import DraftBody from "./DraftBody";

const Draft = () => {
  const draftBodyRef = useRef(null);

  useEffect(() => {
    draftBodyRef.current.focus();
  }, []);

  const [title, setTitle] = useState("Untitled");
  const [prompt, setPrompt] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (title) => {
    setTitle(title);
  };

  const handlePromptChange = (prompt) => {
    setPrompt(prompt);
  };

  const handleBodyChange = (body) => {
    setBody(body);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = fetch("http://localhost:3000/prompts", {
        method: "POST",
        headers: { ContentType: "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="grow flex flex-col">
      <DraftTitle title={title} onTitleChange={handleTitleChange}></DraftTitle>
      <DraftPrompt
        prompt={prompt}
        onPromptChange={handlePromptChange}
      ></DraftPrompt>
      <DraftBody
        ref={draftBodyRef}
        body={body}
        onBodyChange={handleBodyChange}
      ></DraftBody>
    </form>
  );
};

export default Draft;
