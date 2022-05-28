const DraftPrompt = (props) => {
  return (
    <input
      type="text"
      placeholder="choose a prompt or write down a new one..."
      className="my-2 w-full focus:outline-none"
      value={props.prompt}
      onChange={(e) => props.onPromptChange(e.target.value)}
    />
  );
};

export default DraftPrompt;
