import { useState, useEffect } from "react";

const DraftPrompt = (props) => {
  const { prompt, onPromptChange } = props;

  const [prompts, setPrompts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
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

  const DropdownMenu = (props) => {
    const { items } = props;

    return (
      <ul className="flex flex-col divide-y absolute top-10 rounded-md bg-neutral-100 w-full max-h-40 overflow-auto">
        {items.map((item) => (
          <li key={item.id} className="py-1.5 px-2">
            <a onMouseDown={(e) => onPromptChange(item.body)}>{item.body}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex relative">
      <input
        type="text"
        placeholder="choose a prompt or write down a new one..."
        className="my-2 w-full focus:outline-none"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        // if focused show possible completions
        onFocus={(e) => setOpen(true)}
        onBlur={(e) => setOpen(false)}
      />
      {open && (
        <DropdownMenu
          items={prompts.filter((p) => p.body.startsWith(prompt))}
        />
      )}
    </div>
  );
};

export default DraftPrompt;
