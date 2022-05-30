import { useState, useEffect } from "react";
import PromptTableRow from "../components/Prompts/PromptTableRow";
import AddPrompt from "../components/Prompts/AddPrompt";

function Prompts() {
  useEffect(() => {
    fetchPrompts();
  }, []);

  const [prompts, setPrompts] = useState([]);

  const fetchPrompts = async () => {
    try {
      const response = await fetch("http://localhost:3000/prompts");
      const responseBody = await response.json();
      setPrompts(responseBody);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePromptDelete = (promptId) => {
    setPrompts(prompts.filter((prompt) => prompt.id !== promptId));
  };

  const handlePromptAdd = (prompt) => {
    setPrompts(prompts.concat([prompt]));
  };

  return (
    <div>
      <table className="grow my-8 flex flex-col">
        <tbody className="divide-y">
          {prompts.map((prompt) => (
            <PromptTableRow
              key={prompt.id}
              promptId={prompt.id}
              promptBody={prompt.body}
              onPromptDelete={handlePromptDelete}
            ></PromptTableRow>
          ))}
        </tbody>
      </table>
      <AddPrompt allPrompts={prompts} onPromptAdd={handlePromptAdd}></AddPrompt>
    </div>
  );
}

export default Prompts;
