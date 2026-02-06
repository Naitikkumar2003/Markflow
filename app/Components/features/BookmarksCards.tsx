import { ExternalLink, Edit2, Share2, Trash2, Bookmark, Heart } from 'lucide-react';
import Rating from '@/app/Components/ui/Rating'; 

export default function BookmarkCard({ name, desc, tag, color, variant = 'grid', rating, logoUrl }: any) {
  

  const Logo = () => (
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 overflow-hidden">
      {logoUrl ? (
        <img src={logoUrl[0]} alt={name} className="w-full h-full object-contain p-1" />
      ) : (
        <div className={`w-8 h-8 rounded ${color || 'bg-blue-600'}`} />
      )}
    </div>
  );  


  if (variant === 'list') {
    return (
      <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-800 p-4 rounded-xl hover:bg-[#222] transition-all">
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-white font-bold text-lg">{name}</h3>
              <Rating value={rating} size={14} />
            </div>
            <p className="text-white-400 text-sm line-clamp-1 max-w-xl">{desc}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-[#252525] text-gray-300 text-[10px] uppercase rounded-md">
              {tag}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Visit website <ExternalLink size={14} />
          </button>
          <button className="p-2 bg-[#252525] text-gray-400 hover:text-white rounded-lg border border-gray-700">
            <Edit2 size={16} />
          </button>
          <button className="p-2 bg-[#252525] text-gray-400 hover:text-white rounded-lg border border-gray-700">
            <Share2 size={16} />
          </button>
          <button className="p-2 bg-[#252525] text-gray-400 hover:text-red-500 rounded-lg border border-gray-700">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-[#1a1a1a] border border-gray-800 p-5 rounded-xl hover:border-gray-700 transition-all flex flex-col h-full group relative">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1 pr-2 overflow-hidden">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate">
            {name}
          </h3>
          <p className="text-gray-400 text-xs line-clamp-2 mt-1">
            {desc}
          </p>
        </div>
        <Logo />
      </div>

      <div className="flex items-center justify-between mb-4">
        <Rating value={rating} size={16} />
        <span className="text-[10px] bg-[#252525] text-gray-400 px-2 py-1 rounded uppercase font-semibold">
          {tag}
        </span>
      </div>

      <div className="mt-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 bg-[#252525] text-gray-400 hover:text-white rounded-lg border border-gray-800 shadow-lg">
          <Edit2 size={14} />
        </button>
        <button className="p-2 bg-[#252525] text-gray-400 hover:text-white rounded-lg border border-gray-800 shadow-lg">
          <Share2 size={14} />
        </button>
        <button className="p-2 bg-[#252525] text-gray-400 hover:text-red-500 rounded-lg border border-gray-800 shadow-lg">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}