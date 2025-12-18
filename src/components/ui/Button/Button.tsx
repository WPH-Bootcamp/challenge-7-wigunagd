type ButtonPropsType = {
  id: string;
  name?: string;
  type: "button" | "submit" | "reset";
  label: string;
  class?: string;
}

const Button = (props: ButtonPropsType) => {
  return (
    <>
      <button 
      id={props.id}
      name={props.name}
      type={props.type}
      className={`w-full text-center rounded-3xl p-2 text-white globalbackgroundtheme hover:bg-amber-300 ${props.class}`}>{props.label}</button>
    </>
  );
};

export default Button;
