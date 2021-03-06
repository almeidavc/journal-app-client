import { useState } from "react";

const DraftPrompt = (props) => {
  const { allPrompts, prompt, onPromptChange } = props;

  const [open, setOpen] = useState(false);

  const DropdownMenu = (props) => {
    const { items } = props;

    return (
      <ul className="flex flex-col divide-y absolute top-10 rounded-md bg-neutral-100 w-full max-h-40 overflow-auto">
        {items.map((item) => (
          <li
            key={item.id}
            className="py-1.5 px-2 hover:bg-neutral-200 focus:bg-neutral-200"
          >
            <a
              onMouseDown={(e) => onPromptChange(item.body)}
              className="hover:text-neutral-600 hover:font-bold focus:text-neutral-600 focus:font-bold"
            >
              {item.body}
            </a>
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
        className="my-2 w-full"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        // if focused show possible completions
        onFocus={(e) => setOpen(true)}
        onBlur={(e) => setOpen(false)}
      />
      {open && (
        <DropdownMenu
          items={allPrompts.filter((p) => p.body.startsWith(prompt))}
        />
      )}
    </div>
  );
};

export default DraftPrompt;
