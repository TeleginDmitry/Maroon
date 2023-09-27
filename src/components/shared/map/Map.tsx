import {
    YMaps,
    Map as MapInstance,
    TrafficControl,
    RulerControl,
    RouteButton,
    FullscreenControl,
    TypeSelector
} from '@pbe/react-yandex-maps'
import styles from './Map.module.scss'

export function Map() {
    return (
        <YMaps
            query={{
                ns: 'use-load-option',
                load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
            }}
        >
            <MapInstance
                className={styles.map}
                defaultState={{
                    center: [55.75, 37.57],
                    zoom: 9,
                    controls: []
                }}
            >
                <TrafficControl />
                <RulerControl />
                <RouteButton options={{ float: 'right' }} />
                <FullscreenControl />
                <TypeSelector />
            </MapInstance>
        </YMaps>
    )
}
