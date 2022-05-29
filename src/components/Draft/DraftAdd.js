import { useState, useEffect, useRef } from "react";
import DraftTitle from "./DraftTitle";
import DraftPrompt from "./DraftPrompt";
import DraftBody from "./DraftBody";

const DraftAdd = () => {
  const draftBodyRef = useRef(null);

  useEffect(() => {
    draftBodyRef.current.focus();
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    try {
      const response = await fetch("http://localhost:3000/prompts");
      const responseBody = await response.json();
      setPrompts(responseBody);
    } catch (err) {
      console.log(err);
    }
  };

  const [prompts, setPrompts] = useState([]);
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

      // create prompt if it's not an empty string
      let prompt_used = null;
      if (prompt) {
        // check if it already exists
        const promptUsed = prompts.find((p) => p.body === prompt);
        if (promptUsed) {
          prompt_used = promptUsed.id;
        } else {
          const response = await fetch("http://localhost:3000/prompts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
          });
          const responseBody = await response.json();
          prompt_used = responseBody.id;
        }
      }

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
      window.location = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="grow flex flex-col my-8" onSubmit={handleSubmit}>
      <DraftTitle title={title} onTitleChange={handleTitleChange}></DraftTitle>
      <DraftPrompt
        allPrompts={prompts}
        prompt={prompt}
        onPromptChange={handlePromptChange}
      ></DraftPrompt>
      <DraftBody
        ref={draftBodyRef}
        body={body}
        onBodyChange={handleBodyChange}
      ></DraftBody>
      <button className="mt-12 hover:text-neutral-600 hover:font-bold focus:outline-none focus:text-neutral-600 focus:font-bold">
        save
      </button>
    </form>
  );
};

export default DraftAdd;
