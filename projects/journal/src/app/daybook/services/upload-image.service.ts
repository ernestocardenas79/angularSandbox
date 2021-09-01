import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UploadImageService {
  constructor(private http: HttpClient) {}

  uploadImage = (file) => {
    if (!file) return of(null);
    try {
      const formData = new FormData();
      formData.append('upload_preset', 'curso-vue');
      formData.append('file', file);

      const url = 'https://api.cloudinary.com/v1_1/dtqw2ohcj/image/upload';

      return this.http.post(url, formData).pipe(
        tap((r) => console.log('tap', r)),
        map((data: any) => data.secure_url)
      );
    } catch (error) {
      console.error('Erro al cargar la imagen, revisar logs');
      console.log(error);
      return throwError('Erro al cargar la imagen, revisar logs');
    }
  };
}
