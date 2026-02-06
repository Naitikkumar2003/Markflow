"use client";
interface CategoryCardProps {
  name: string;
  count: number;    
  color: string;    
  iconType?: string; 
}

export default function CategoryCard({ name, count, color, iconType }: CategoryCardProps) {
  return (
    <div className={`${color} p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer`}>
      <h3 className="text-xl font-bold text-white capitalize">{name}</h3>
      <p className="text-white/80 text-sm">{count} Bookmarks</p>
    </div>
  );
}