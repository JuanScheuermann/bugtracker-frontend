import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        const update = {
            ...formState,
            [name]: value
        }
        setFormState(update);
    }

    return {
        ...formState,
        formState,
        onInputChange
    };
}