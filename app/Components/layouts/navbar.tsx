"use client";
import { useState } from "react";
import { Search, Plus } from 'lucide-react';
import { useSearch } from "@/app/lib/context/Searchcontext"; 
import Modal from "../ui/Modal";
import AddBookmarkForm from "@/app/Components/features/AddBookmarkForm";

const Navbar = () => {
  const { setSearchQuery } = useSearch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="h-20 border-b border-gray-800 bg-[#0D0D0D] flex items-center justify-between px-8 sticky top-0 z-40 w-full">
        <div className="relative w-full max-w-md">
          <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" 
            size={18} 
          />
          <input
            type="text"
            placeholder="Search anything..."
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-all active:scale-95 whitespace-nowrap"
        >
          <Plus size={18} />
          <span>New Bookmark</span>
        </button>
      </header>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Add New Bookmark"
      >
        <AddBookmarkForm onSuccess={() => setIsModalOpen(false)}/>
      </Modal>
    </>
  );
};

export default Navbar;