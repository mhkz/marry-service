export declare class MapController {
    getMapInfo(): Promise<{
        lng: string;
        lat: string;
        title: string;
        thumb: string;
        hotel: string;
        address: string;
    }>;
}
