import React, { useEffect } from 'react';
import { useField, useWatchForm } from 'payload/components/forms';

const convertToSlug = (text: string): string => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
};

const CustomCoinIDField: React.FC<{ path: string }> = ({ path }) => {
    const { value, setValue } = useField({ path });
    const { getField } = useWatchForm();

    useEffect(() => {
        const nameField = getField('name');
        if (nameField && typeof nameField.value === 'string') {
            setValue(convertToSlug(nameField.value));
        }
    }, [getField('name')?.value, setValue]);

    return (
        <div className="field-type text">
            <label className="field-label" htmlFor={`field-${path}`}>
                Coin ID
            </label>
            <div className="input-wrapper">
                <input
                    type="text"
                    value={(value as string) || ''}
                    readOnly
                    data-rtl="false"
                    id={`field-${path}`}
                    name={path}
                    className="input"
                />
            </div>
        </div>
    );
};

export default CustomCoinIDField;
