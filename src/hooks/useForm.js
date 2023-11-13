import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [errors, setErros] = useState({});

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        const update = {
            ...formState,
            [name]: value
        }
        setFormState(prev => update);

        if (!!errors[name]) {
            setErros({
                ...errors,
                [name]: null
            })
        }
    }

    return {
        ...formState,
        errors,
        formState,
        onInputChange
    };
}