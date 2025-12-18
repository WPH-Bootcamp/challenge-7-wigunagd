type InputPropsType = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  class?: string;
}

const TextArea = (props: InputPropsType) => {
  return (
    <>
      <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <textarea id={props.id} name={props.name} rows={4} style={{ resize: "none" }} 
            className={`bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-500 dark:text-white focus:border-orange-600 outline-none focus:outline-orange-600 ${props.class}`} placeholder={props.placeholder}></textarea>
    </>
  )
};

export default TextArea;