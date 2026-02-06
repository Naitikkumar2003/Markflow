"use client";
import { useGetProducts } from "@/app/lib/hooks/Products";
import BookmarkCard from "@/app/Components/features/BookmarksCards";
import { List, ArrowUpDown } from "lucide-react";

export default function FrequentPage() {
  const { data: bookmarks, loading } = useGetProducts();
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Frequent</h1>
          <p className="text-gray-400 text-sm">Your most visited bookmarks, always at hand.</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 px-3 py-1.5 rounded-md text-gray-300 hover:bg-gray-800">
            <ArrowUpDown size={16} /> Sort
          </button>
          <button className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 px-3 py-1.5 rounded-md text-white-300 hover:white-800">
            <List size={16} /> List
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {bookmarks.map((bookmark) => (
          <BookmarkCard 
            key={bookmark.id}
            title={bookmark.title}
            desc={bookmark.description}
            tag={bookmark.category}
            rating={bookmark.rating}
            color="bg-blue-500"
            variant="list" 
          />
        ))}
      </div>
    </div>
  );
}