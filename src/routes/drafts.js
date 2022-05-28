import { useState, useEffect } from "react";

function Drafts() {
  useEffect(() => {
    fetchDrafts();
  }, []);

  const [drafts, setDrafts] = useState([]);

  const fetchDrafts = async () => {
    try {
      const response = await fetch("http://localhost:3000/drafts");
      const responseBody = await response.json();
      setDrafts(responseBody);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <table className="grow my-8">
      <tbody>
        {drafts.map((draft) => (
          <tr key={draft.id}>
            <td>{draft.id}</td>
            <td>{draft.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Drafts;
