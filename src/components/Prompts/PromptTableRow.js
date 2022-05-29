const PromptTableRow = (props) => {
  const { promptId, promptBody } = props;

  const handleClickDelete = async () => {
    try {
      await fetch(`http://localhost:3000/prompts/${promptId}`, {
        method: "DELETE",
      });
      props.onPromptDelete(promptId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr className="flex justify-between">
      <td className="min-w-0 basis-3/4">{promptBody}</td>
      <td>{`id:${promptId}`}</td>
      <td>
        <a
          className="focus:outline-none
                focus:text-red-600
                hover:text-red-600
                focus:font-bold
                hover:font-bold"
          onClick={handleClickDelete}
        >
          x
        </a>
      </td>
    </tr>
  );
};

export default PromptTableRow;