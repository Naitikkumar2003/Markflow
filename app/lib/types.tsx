"use client";
import { useState, useEffect } from 'react';

export interface Bookmark {
  id: number;
  title: string;       
  description: string; 
  logoUrl: Array<String>;
  rating: number;     
  category: string;     
  color?: string;
}

export const useGetProducts = () => {
  const [data, setData] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {       
        const response = await fetch('https://dummyjson.com/products?limit=12');
        const json = await response.json();

        const mappedData: Bookmark[] = json.products.map((p: any) => ({
          id: p.id,
          title: p.title,        
          description: p.description,
          logoUrl: Array.isArray(p.images) ? p.images[0] : p.thumbnail,  
          rating: Math.round(p.rating),
          category: p.category,
          color: "bg-blue-500" 
        }));

        setData(mappedData);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return { data, loading };
};