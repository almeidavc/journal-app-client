import { useEffect, useRef } from "react";

const Draft = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <div className="grow flex flex-col">
      <input
        type="text"
        value="Untitled"
        className="my-3 text-2xl focus:outline-none"
      />
      <div>
        <input
          type="text"
          placeholder="choose a prompt or write down a new one..."
          className="my-2 w-full focus:outline-none"
        />
      </div>
      <textarea
        ref={textareaRef}
        className="my-2 grow focus:outline-none"
      ></textarea>
    </div>
  );
};

export default Draft;
