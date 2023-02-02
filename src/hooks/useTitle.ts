import {useEffect} from "react";

export const useTitle = (title?: string, prefix: string = "A-Store") => {
    useEffect(() => {
        if (title) {
            document.title = `${prefix} ${title}`;
        }
    }, [title, prefix]);
}
