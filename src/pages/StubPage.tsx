import {Typography} from "@alfalab/core-components/typography";
import {useTitle} from "../hooks/useTitle";

type StubPageProps = {
    pageTitle: string
}

export const StubPage = ({pageTitle}: StubPageProps) => {
    useTitle(`A-Store ${pageTitle}`);

    return (
        <Typography.Title tag="h1">
            {pageTitle}
        </Typography.Title>
    );
}
