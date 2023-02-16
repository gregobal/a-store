import {BaseSelectChangePayload} from "@alfalab/core-components/select";
import {SelectResponsive} from "@alfalab/core-components/select/Component.responsive";
import {Dispatch, SetStateAction, useMemo} from "react";

type Props = {
    label: string,
    values: string[],
    selected?: string,
    onSetValue: Dispatch<SetStateAction<string | undefined>>
}

export const ProductFormSelect = ({label, values, selected, onSetValue}: Props) => {
    const options = useMemo(() => values.map((v) =>
        ({key: v, content: v})
    ), [values]);

    const handleChange = ({selected}: BaseSelectChangePayload) => {
        if (selected) {
            onSetValue(selected.key);
        }
    }

    return (
        <SelectResponsive
            size="s"
            block={true}
            closeOnSelect={true}
            label={label}
            options={options}
            selected={selected}
            onChange={handleChange}
        />
    );
}
