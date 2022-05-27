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

      // create prompt
      const response = await fetch("http://localhost:3000/prompts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const responseBody = await response.json();
      const prompt_used = responseBody.id;

      // create draft
      await fetch("http://localhost:3000/drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          prompt_used,
          body,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="grow flex flex-col" onSubmit={handleSubmit}>
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
      <button className="hover:text-neutral-600 hover:font-bold">save</button>
    </form>
  );
};

export default Draft;
