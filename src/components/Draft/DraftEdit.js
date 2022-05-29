import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import DraftTitle from "./DraftTitle";
import DraftPromptStatic from "./DraftPromptStatic";
import DraftBody from "./DraftBody";

const DraftEdit = () => {
  const UrlParams = useParams();
  const { draftId } = UrlParams;

  const draftBodyRef = useRef(null);

  useEffect(() => {
    fetchDraft(draftId);
    draftBodyRef.current.focus();
  }, []);

  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [body, setBody] = useState("");

  const fetchDraft = async (draftId) => {
    try {
      // fetch draft
      const response = await fetch(`http://localhost:3000/drafts/${draftId}`);
      const responseBody = await response.json();

      // fetch prompt used if it exists
      if (responseBody.prompt_used) {
        const responsePrompt = await fetch(
          `http://localhost:3000/prompts/${responseBody.prompt_used}`
        );
        const responseBodyPrompt = await responsePrompt.json();
        setPrompt(responseBodyPrompt.body);
      }
      setTitle(responseBody.title);
      setBody(responseBody.body);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTitleChange = (title) => {
    setTitle(title);
  };

  const handleBodyChange = (body) => {
    setBody(body);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // edit draft
      await fetch(`http://localhost:3000/drafts/${draftId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="grow flex flex-col my-8" onSubmit={handleSubmit}>
      <DraftTitle title={title} onTitleChange={handleTitleChange}></DraftTitle>
      <DraftPromptStatic prompt={prompt}></DraftPromptStatic>
      <DraftBody
        ref={draftBodyRef}
        body={body}
        onBodyChange={handleBodyChange}
      ></DraftBody>
      <Button>edit</Button>
    </form>
  );
};

export default DraftEdit;
