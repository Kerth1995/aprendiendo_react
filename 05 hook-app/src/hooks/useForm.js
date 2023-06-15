import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    //const { username, email, password } = formState;

    const onChangeInputText = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        
        setFormState(initialForm);
        
    }

    return {
        formState: formState,
        onChangeInputText,
        onResetForm,
    };
}
