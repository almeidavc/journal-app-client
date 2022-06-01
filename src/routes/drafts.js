import { useState, useEffect } from "react";
import DraftTableRow from "../components/Drafts/DraftTableRow";

function Drafts() {
  useEffect(() => {
    fetchDrafts();
  }, []);

  const [drafts, setDrafts] = useState([]);

  const fetchDrafts = async () => {
    try {
      const response = await fetch("http://localhost:3000/drafts-md");
      const responseBody = await response.json();
      setDrafts(responseBody);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDraftDelete = (draftId) => {
    setDrafts(drafts.filter((draft) => draft.id !== draftId));
  };

  return (
    <table className="grow my-8 flex flex-col">
      <tbody className="divide-y">
        {drafts.map((draft) => (
          <DraftTableRow
            key={draft.id}
            draftId={draft.id}
            draftTitle={draft.title}
            onDraftDelete={handleDraftDelete}
          ></DraftTableRow>
        ))}
      </tbody>
    </table>
  );
}

export default Drafts;
