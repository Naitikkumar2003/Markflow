"use client";
import { useState } from "react";
import { 
  Download, 
  Upload, 
  Trash2, 
  ChevronDown 
} from "lucide-react";
import Rating from "@/app/Components/ui/Rating";

export default function SettingsPage() {
  const [autoFetch, setAutoFetch] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 text-sm">Manage your app preferences</p>
      </div>

      <div className="space-y-6">

        <section className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-gray-800">
            <h2 className="text-white text-lg font-semibold">General Settings</h2>
          </div>
          <div className="p-6 space-y-8">

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Default category</span>
              <div className="relative w-64">
                <select className="w-full bg-[#222] border border-gray-700 text-gray-300 px-4 py-2 rounded-lg appearance-none outline-none focus:border-blue-500 transition-colors cursor-pointer">
                  <option>Uncategorized</option>
                  <option>Development</option>
                  <option>Design</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
              </div>
            </div>


            <div className="flex items-center justify-between">
              <span className="text-gray-300">Auto-fetch website data</span>
              <button 
                onClick={() => setAutoFetch(!autoFetch)}
                className={`w-12 h-6 rounded-full transition-colors relative ${autoFetch ? 'bg-blue-600' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${autoFetch ? 'right-1' : 'left-1'}`} />
              </button>
            </div>


            <div className="flex items-center justify-between">
              <span className="text-gray-300">Default rating</span>
              <Rating value={0} size={20} interactive={true} />
            </div>
          </div>
        </section>


        <section className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-gray-800">
            <h2 className="text-white text-lg font-semibold">Appearance</h2>
          </div>
          <div className="p-6 space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Dark Mode</span>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-blue-600' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${darkMode ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Language</span>
              <div className="relative w-64">
                <select className="w-full bg-[#222] border border-gray-700 text-gray-300 px-4 py-2 rounded-lg appearance-none outline-none focus:border-blue-500 transition-colors cursor-pointer">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Hindi</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </section>


        <section className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-gray-800">
            <h2 className="text-white text-lg font-semibold">Bookmark Management</h2>
          </div>
          <div className="p-6 space-y-6">


            <div className="flex items-center justify-between">
              <span className="text-gray-300">Export bookmarks</span>
              <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                <Download size={16} /> Export data
              </button>
            </div>


            <div className="flex items-center justify-between">
              <span className="text-gray-300">Import bookmarks</span>
              <div className="flex gap-2">
                <div className="bg-[#111] border border-gray-700 rounded-lg px-3 py-2 text-gray-500 text-sm w-48 truncate">
                  No file chosen
                </div>
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  <Upload size={16} /> Import
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="text-gray-300">Clear all bookmarks</span>
              <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                <Trash2 size={16} /> Clear all
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}