import {Skeleton} from "@alfalab/core-components/skeleton";
import {useEffect, useRef, useState} from "react";
import {Map as MapType} from "yandex-maps";

import styles from './index.module.css';

type Props = {
    wrapperClassName?: string,
    hint: string,
    description: string
    coordinates: [number, number],
    zoom: number
}

export const YMap = ({wrapperClassName, hint, description, coordinates, zoom}: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<MapType>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const {ymaps} = global;

        if (ymaps) {
            ymaps.ready()
                .then(() => {
                    if (containerRef.current) {
                        const map = new ymaps.Map(
                            containerRef.current,
                            {
                                center: coordinates,
                                zoom,
                                controls: ["smallMapDefaultSet"]
                            },
                        );

                        map.geoObjects.add(new ymaps.Placemark(
                            coordinates,
                            {
                                hintContent: hint,
                                balloonContent: description,
                            },
                            {
                                preset: "islands#redIcon"
                            }));

                        mapRef.current = map;

                        setLoading(false);
                    }
                });
        }

        return () => {
            mapRef.current?.destroy();
        }

    }, [hint, description, coordinates, zoom]);

    return (
        <Skeleton visible={loading} animate={true}>
            <div className={wrapperClassName ?? styles.wrapper}>
                {<div ref={containerRef} className={styles.container}/>}
            </div>
        </Skeleton>
    );
}
