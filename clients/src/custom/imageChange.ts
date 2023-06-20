import { useState, useEffect } from "react";

export const useImageChange = (src: string | File | undefined) => {
  const [images, setImage] = useState('');

  useEffect(() => {
    const reader = new FileReader();
    if ((typeof src) === 'object') {
      reader.readAsDataURL(src as File);
      reader.onloadend = () => {
        setImage(reader.result as string);
      }
    } else if ((typeof src) === 'string') {
      setImage(src as string);
    } else {
      setImage('');
    }
  }, [src])
  return images;
}