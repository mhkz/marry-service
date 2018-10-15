import { PhotoService } from "./photo.service";
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    getInvitation(): Promise<{
        slideList: import("./photo.entity").PhotoEntity[];
        title: string;
        thumb: string;
    }>;
}
