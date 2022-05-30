const DraftTitle = (props) => {
  return (
    <input
      type="text"
      className="my-3 text-2xl"
      value={props.title}
      onChange={(e) => props.onTitleChange(e.target.value)}
    />
  );
};

export default DraftTitle;
