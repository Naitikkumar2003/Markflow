"use client";
import { useState } from "react";
import { Search, ChevronDown, Edit3, Globe } from "lucide-react";
import Rating from "@/app/Components/ui/Rating";

export default function AddBookmarkPage() {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    description: "",
    category: "",
    rating: 0
  });

  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Add New Bookmark</h1>
        <p className="text-gray-500 text-sm">Save a new bookmark to your collection</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 uppercase">URL *</label>
          <div className="flex gap-3">
            <input 
              name="url"
              type="text" 
              value={formData.url}
              onChange={handleChange}
              placeholder="http://example.com"
              className="flex-1 bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
              <Search size={16} /> Fetch Website Data
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 uppercase">Name</label>
          <div className="relative">
            <input 
              name="name"
              type="text" 
              placeholder="e.g. Figma"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
            />
            <Edit3 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 uppercase">Description</label>
          <div className="relative">
            <textarea 
              name="description"
              placeholder="Cloud-based UI/UX design tool."
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 text-white outline-none h-24 resize-none focus:border-blue-500"
            />
            <Edit3 size={16} className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>

        <div className="flex gap-12">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300 uppercase">Logo</label>
            <div className="w-16 h-16 bg-[#1a1a1a] border border-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                <Globe size={24} className="text-gray-600" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300 uppercase">Bookmark Rating</label>
            <div className="pt-2">
                <Rating 
                  value={formData.rating} 
                  size={24} 
                  interactive={true} 
                  onChange={(val: number) => setFormData(prev => ({...prev, rating: val}))}
                />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 uppercase">Category</label>
          <div className="relative">
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 text-gray-400 outline-none appearance-none cursor-pointer focus:border-blue-500"
            >
              <option value="">Select Category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="productivity">Productivity</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <button className="w-full bg-white text-black font-bold py-3 rounded-xl mt-4 hover:bg-gray-200 transition-transform active:scale-95">
          Save Bookmark
        </button>
      </div>
    </div>
  );
}