import { Fragment, useState } from "react";

const AddPrompt = (props) => {
  const { onPromptAdd } = props;
  const [showModal, setShowModal] = useState(false);

  const AddButton = () => {
    return (
      <button
        onClick={() => setShowModal(true)}
        className="w-full mt-12 hover:text-neutral-600 hover:font-bold focus:text-neutral-600 focus:font-bold"
      >
        add +
      </button>
    );
  };

  const Modal = (props) => {
    const { allPrompts } = props;
    const [input, setInput] = useState("");

    const handleClickOutside = (e) => {
      e.preventDefault();
      if (e.target === e.currentTarget) {
        setShowModal(false);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (!input) {
          alert("Error: prompt is empty.");
        } else if (allPrompts.some((p) => p.body === input)) {
          alert("Error: prompt already exists.");
        } else {
          const response = await fetch("http://localhost:3000/prompts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: input }),
          });
          const responseBody = await response.json();
          setShowModal(false);
          onPromptAdd(responseBody);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      // div overlays whole screen
      <div
        onClick={handleClickOutside}
        className="overlay fixed inset-0 w-screen h-screen flex flex-col justify-center items-center"
      >
        <div className="w-3/6 relative mb-16 bg-white rounded-md border drop-shadow-xl">
          <div className="absolute w-full p-4 flex justify-end">
            <button
              onClick={() => setShowModal(false)}
              className="hover:text-neutral-600 focus:text-neutral-600 hover:font-bold focus:font-bold"
            >
              x
            </button>
          </div>
          <form className="p-4 flex flex-col justify-between gap-y-3">
            <label htmlFor="prompt">New Prompt</label>
            <input
              id="prompt"
              type="text"
              placeholder="write your prompt here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <div className="buttons flex justify-end gap-x-3">
              <button
                onClick={handleSubmit}
                className="hover:text-neutral-600 focus:text-neutral-600 hover:font-bold focus:font-bold"
              >
                add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="hover:text-neutral-600 focus:text-neutral-600 hover:font-bold focus:font-bold"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <AddButton />
      {showModal && <Modal allPrompts={props.allPrompts}></Modal>}
    </Fragment>
  );
};

export default AddPrompt;
