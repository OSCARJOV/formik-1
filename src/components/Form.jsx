import { useState } from "react";


const Form = ({children, initialText, onSubmit}) => {

    
    const [value, setValue] = useState(initialText)

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
    
        setValue((prev) => ({
            ...prev, [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
    }    

    return children({value, handleChange,handleSubmit }); // el children ejecuta lo que esta dntrl de la funcion debajo de Form
};

export default Form