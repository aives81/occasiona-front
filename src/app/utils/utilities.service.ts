import { Injectable } from '@angular/core';
import {GlobalEnum} from "./global.enum";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

    static defineSlug(name: string): string {
        if (!name) {
            return '';
        }
        // Convert to lowercase, replace spaces with hyphens, and remove non-word characters except hyphens
        return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    static defineDefaultImage(image: string | null): string {
        if (!image) {
            return GlobalEnum.CLOUDINARY_DEFAULT_OCCASIONA_IMG;
        }
        return image.includes('storage/') ? GlobalEnum.CLOUDINARY_DEFAULT_OCCASIONA_IMG : image;
    }
}
