import { Link } from "react-router-dom";

const DraftTableRow = (props) => {
  const { draftId, draftTitle } = props;

  const handleClickDelete = async () => {
    try {
      await fetch(`http://localhost:3000/drafts/${draftId}`, {
        method: "DELETE",
      });
      props.onDraftDelete(draftId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr className="flex justify-between">
      <td className="min-w-0 basis-3/4">
        <Link
          to={`/drafts/${draftId}`}
          className="break-all text-left hover:text-neutral-600 hover:font-bold focus:outline-none focus:text-neutral-600 focus:font-bold"
        >
          {draftTitle}
        </Link>
      </td>
      <td>{`id:${draftId}`}</td>
      <td>
        <button
          className="focus:outline-none
                focus:text-red-600
                hover:text-red-600
                focus:font-bold
                hover:font-bold"
          onClick={handleClickDelete}
        >
          x
        </button>
      </td>
    </tr>
  );
};

export default DraftTableRow;
