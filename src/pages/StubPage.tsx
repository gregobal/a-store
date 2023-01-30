import {Typography} from "@alfalab/core-components/typography";
import {useTitle} from "../hooks/useTitle";

type Props = {
    pageTitle: string
}

export const StubPage = ({pageTitle}: Props) => {
    useTitle(`A-Store ${pageTitle}`);

    return (
        <Typography.Title tag="h1">
            {pageTitle}
        </Typography.Title>
    );
}
