"use client";
import { useState, useEffect } from "react"; 
import Mainpage from "@/app/Components/features/Mainpage";
import BookmarkCard from "@/app/Components/features/BookmarksCards";
import { useGetProducts } from "@/app/lib/hooks/Products";
import { useSearch } from "@/app/lib/context/Searchcontext";

export default function HomePage() {
  const [view, setView] = useState('grid');
  const { data: bookmarks, loading } = useGetProducts();
  const { searchQuery = "" } = useSearch(); 
  const [displayData, setDisplayData] = useState<any[]>([]);

  useEffect(() => {
    if (bookmarks) setDisplayData(bookmarks);
  }, [bookmarks]);

  const handleSort = () => {
    const sorted = [...displayData].sort((a, b) => 
      a.title.localeCompare(b.title)
    );
    setDisplayData(sorted);
  };
  const filtered = displayData.filter(b => 
    (b.title || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <Mainpage view={view} setView={setView} onSort={handleSort} />
      
      <div className={view === 'grid' ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8": "flex flex-col gap-4"}>
        {filtered.map((bookmark: any) => (
          <BookmarkCard 
            key={bookmark.id}
            title={bookmark.title} 
            desc={bookmark.description}
            tag={bookmark.category}
            rating={bookmark.rating}
            logoUrl={bookmark.logoUrl}
            variant={view}
          />
        ))}
      </div>
    </div>
  );
}