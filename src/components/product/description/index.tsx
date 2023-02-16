import {Typography} from "@alfalab/core-components/typography";
import {useMemo} from "react";

type Props = {
    description: string
}

const regex = /(?<=\.)\s+(?=[A-ZА-Я])/gm;

export const ProductDescription = ({description}: Props) => {
    const sentences = useMemo(() => {
        return description.split(regex);
    }, [description]);

    return (
        <>
            {sentences.map((sentence, idx) => (
                <Typography.Text
                    key={sentence}
                    tag="p"
                    defaultMargins={(idx + 1) % 3 === 0}
                    view="secondary-large"
                    weight="medium"
                >
                    {sentence}
                </Typography.Text>
            ))}
        </>
    );
}
