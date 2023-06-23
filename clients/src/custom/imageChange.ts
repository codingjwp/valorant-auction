import { useState, useEffect } from "react";

export const useImageChange = (src: string | File | Blob | undefined) => {
  const [images, setImage] = useState('');

  useEffect(() => {
    const reader = new FileReader();
    if (src instanceof File) {
      reader.readAsDataURL(src as File);
      reader.onloadend = () => {
        setImage(reader.result as string);
      }
    } else if ((typeof src) === 'string') {
      setImage(src as string);
    } else if (src instanceof Blob) {
      setImage(URL.createObjectURL(src));
    } 
    else setImage('');
  }, [src])
  return images;
}