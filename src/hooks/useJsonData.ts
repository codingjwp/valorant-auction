import { useEffect, useState } from "react";

interface PromiseProps {
  quote: string;
  person: string;
  personLink: string;
  id: number;
}


export const useJsonData = (url: string, type?: string) => {
  const [ jsonData, setJsonData ] = useState<PromiseProps[] | null>(null);

  useEffect(() => {
     const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setJsonData(data[type || 'english']);
    }
    fetchData();
    return (()=> {

    });
  }, [url, type])

  return [ jsonData ];
}