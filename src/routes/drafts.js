import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <table className="grow my-8 flex flex-col">
      <tbody>
        {drafts.map((draft) => (
          <tr key={draft.id} className="flex justify-between">
            <td className="min-w-0 basis-3/4">
              <Link
                to={`/drafts/${draft.id}`}
                className="break-all text-left hover:text-neutral-600 hover:font-bold focus:outline-none focus:text-neutral-600 focus:font-bold"
              >
                {draft.title}
              </Link>
            </td>
            <td>{`id:${draft.id}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Drafts;
