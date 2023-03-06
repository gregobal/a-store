import {Gap} from "@alfalab/core-components/gap";
import {Typography} from "@alfalab/core-components/typography";
import {policy} from "../../constants/routes";
import {useTitle} from "../../hooks/useTitle";

import policyContent from "./policy.json";

export const PolicyPage = () => {
    useTitle(policy.title);

    return (
        <>
            <Typography.TitleResponsive tag="h1" view="xsmall" weight="bold">
                {policy.title}
            </Typography.TitleResponsive>
            <ol>
                {policyContent.map(({title, description, paragraphs}) => (
                    <li key={title}>
                        <Gap size="xl"/>
                        <Typography.Text view="primary-medium" weight="bold">
                            {title}
                        </Typography.Text>
                        <Gap size="s"/>
                        <Typography.Text view="primary-medium" weight="bold">
                            {description}
                        </Typography.Text>
                        <Gap size="s"/>
                        <ol>
                            {paragraphs.map((paragraph) => (
                                <li key={paragraph}>
                                    <Typography.Text view="primary-medium" weight="bold">
                                        {paragraph}
                                    </Typography.Text>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    );
}
