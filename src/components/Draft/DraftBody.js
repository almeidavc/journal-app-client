import { forwardRef } from "react";

const DraftBody = forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      className="my-2 grow focus:outline-none"
      value={props.body}
      onChange={(e) => props.onBodyChange(e.target.value)}
    ></textarea>
  );
});

export default DraftBody;
