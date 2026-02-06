"use client";
import { useParams } from "next/navigation";
import { useGetProducts } from "@/app/lib/hooks/Products";
import BookmarkCard from "@/app/Components/features/BookmarksCards";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoryDetailPage() {
  const params = useParams();
  const { data: bookmarks, loading } = useGetProducts();

  const categoryId = params.id ? decodeURIComponent(params.id as string) : "";

  if (loading) {
    return <div className="p-8 text-white animate-pulse text-center">Loading {categoryId}...</div>;
  }

  const filtered = bookmarks.filter(
    (b) => b.category?.toLowerCase() === categoryId.toLowerCase()
  );

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white capitalize">{categoryId}</h1>
          <p className="text-gray-500 text-sm">{filtered.length} bookmarks found</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.length > 0 ? (
          filtered.map((bookmark) => (
            <BookmarkCard 
              key={bookmark.id}

              name={bookmark.title} 
              desc={bookmark.description}
              tag={bookmark.category}    
              rating={bookmark.rating}
              logoUrl={bookmark.logoUrl}
              variant="list" 
            />
          ))
        ) : (
          <div className="py-20 text-center border border-dashed border-gray-800 rounded-2xl">
            <p className="text-gray-500">No bookmarks found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}