"use client";
import { useState } from "react";
import { Search, ChevronDown, Edit3, Globe } from "lucide-react";
import Rating from "@/app/Components/ui/Rating";

interface AddBookmarkFormProps {
  onSuccess?: () => void;
}

export default function AddBookmarkForm({ onSuccess }: AddBookmarkFormProps) {
  const [isFetching, setIsFetching] = useState(false);
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    description: "",
    category: "",
    rating: 0,
    logoUrl: ""
  });

  const handleFetchData = async () => {
    if (!formData.url) return;
    setIsFetching(true);
    
    try {
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          name: "Sample Website",
          description: "This is a description fetched automatically from the meta tags.",
          logoUrl: "https://via.placeholder.com/150"
        }));
        setIsFetching(false);
      }, 1000);
    } catch (error) {
      console.error("Fetch failed", error);
      setIsFetching(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving Bookmark Data:", formData);
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#0D0D0D] text-white">
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">URL *</label>
        <div className="flex gap-2">
          <input 
            type="url"
            required
            placeholder="http://example.com"
            value={formData.url}
            onChange={(e) => setFormData({...formData, url: e.target.value})}
            className="flex-1 bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors"
          />
          <button 
            type="button"
            onClick={handleFetchData}
            disabled={isFetching || !formData.url}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all active:scale-95"
          >
            {isFetching ? "Fetching..." : <><Search size={16} /> Fetch Website Data</>}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Name</label>
        <div className="relative">
          <input 
            type="text"
            placeholder="e.g. Figma"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
          />
          <Edit3 size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Description</label>
        <div className="relative">
          <textarea 
            placeholder="Cloud-based UI/UX design tool."
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 h-24 resize-none"
          />
          <Edit3 size={14} className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>

      <div className="flex items-start gap-12">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Logo</label>
          <div className="w-16 h-16 bg-[#1a1a1a] border border-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
            {formData.logoUrl ? (
              <img src={formData.logoUrl} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <Globe size={24} className="text-gray-700" />
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Bookmark Rating</label>
          <div className="pt-2">
            <Rating 
              value={formData.rating} 
              interactive={true} 
              onChange={(val: number) => setFormData({...formData, rating: val})} 
              size={24} 
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Category</label>
        <div className="relative">
          <select 
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-400 outline-none appearance-none cursor-pointer focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="ai-tools">AI Tools</option>
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-white text-black font-bold py-3.5 rounded-xl mt-4 hover:bg-gray-200 transition-all active:scale-[0.98]"
      >
        Save Bookmark
      </button>
    </form>
  );
}