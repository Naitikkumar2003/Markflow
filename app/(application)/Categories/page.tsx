"use client";
import { useState } from "react";
import Link from "next/link";
import { useGetProducts } from "@/app/lib/hooks/Products";
import CategoryCard from "@/app/Components/features/CategoryCard";
import { Plus, X } from "lucide-react";

export default function CategoriesPage() {
  const { data: bookmarks, loading } = useGetProducts();
  const [showModal, setShowModal] = useState(false);
  const [newCat, setNewCat] = useState("");

  if (loading) return <div className="p-8 text-white animate-pulse">Scanning...</div>;
  const uniqueCategories = Array.from(new Set(bookmarks.map(b => b.category)));

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating:", newCat);
    setShowModal(false);
    setNewCat("");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Categories</h1>
          <p className="text-gray-500 text-sm">Organize your bookmarks by topic.</p>
        </div>
        
        <button 
          onClick={() => setShowModal(true)}
          className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          <Plus size={18} /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {uniqueCategories.map((cat) => (
          <Link href={`/categories/${cat}`} key={cat}>
            <CategoryCard 
               name={cat} 
               count={bookmarks.filter(b => b.category === cat).length} 
               color="bg-[#141414]" 
               iconType="folder" 
            />
          </Link>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#141414] border border-gray-800 w-full max-w-sm rounded-xl p-6 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500">
              <X size={20} />
            </button>
            
            <h2 className="text-xl font-bold text-white mb-4">New Category</h2>
            
            <form onSubmit={handleCreate} className="space-y-4">
              <input 
                autoFocus
                className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
                placeholder="Category Name..."
                value={newCat}
                onChange={(e) => setNewCat(e.target.value)}
              />
              
              <div className="flex gap-2">
                <button 
                  type="submit" 
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-500"
                >
                  Create
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-800 text-gray-300 py-2 rounded-lg font-bold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}