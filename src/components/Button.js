const Button = (props) => {
  return (
    <button className="w-full mt-12 hover:text-neutral-600 hover:font-bold focus:text-neutral-600 focus:font-bold">
      {props.children}
    </button>
  );
};

export default Button;
