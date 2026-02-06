"use client";
import { ArrowUpDown, List, Grid } from "lucide-react";

interface MainpageProps {
  view: string;
  setView: (v: string) => void;
  onSort: () => void;
}

export default function Mainpage({ view, setView ,onSort}: MainpageProps){
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Home</h1>
        <p className="text-gray-500 text-sm">Effortless Bookmark Management</p>
      </div>
      
      <div className="flex gap-3">
        <button onClick={onSort} className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 px-3 py-1.5 rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
          <ArrowUpDown size={16} /> Sort
        </button>
        
        <button 
          onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
          className={`flex items-center gap-2 border px-3 py-1.5 rounded-md transition-all ${
            view === 'list' 
            ? "bg-blue-600 border-blue-500 text-white" 
            : "bg-[#1a1a1a] border-gray-800 text-gray-300 hover:bg-gray-800"
          }`}
        >
          {view === 'grid' ? <List size={16} /> : <Grid size={16} />}
          <span className="capitalize">{view === 'grid' ? 'List' : 'Grid'}</span>
        </button>
      </div>
    </div>
  );
}