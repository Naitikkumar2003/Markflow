import Rating from "@/app/Components/ui/Rating";
import { Bookmark } from "@/app/lib/types";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [data, setData] = useState<Bookmark[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => {
        const mapped = json.products.map((p: any) => ({
          id: p.id,
          name: p.title,
          description: p.description,
          category: p.category,
          rating: Math.round(p.rating),
          logoUrl: Array.isArray(p.images) ? p.images : [p.thumbnail],  

        }));
        setData(mapped);
        setLoading(false);
      });
  }, []);

  return { data, loading };
};