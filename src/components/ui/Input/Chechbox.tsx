type InputPropsType = {
    id: string;
    name: string;
    value: string;
    label: string;
}

const Checkbox = (props: InputPropsType) => {
    return (
        <>
            <input type="checkbox"
                value={props.value}
                id={props.id}
                name={props.name}
                className="appearance-none mychk w-4 h-4 border border-gray-600 rounded-sm 
                             checked:bg-orange-500 checked:border-orange-500 
                                checked:bg-center checked:bg-no-repeat checked:bg-contain mr-3" />
            <label htmlFor={props.id} 
            className="text-gray-400 dark:text-gray-400 select-none text-sm">{props.label}</label>
        </>
    );
};

export default Checkbox;