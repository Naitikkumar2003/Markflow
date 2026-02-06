"use client";
import { useState } from "react";
import { useGetProducts } from "@/app/lib/hooks/Products";
import BookmarkCard from "@/app/Components/features/BookmarksCards";
import {  Laptop, Lightbulb, Tv, Palette, Share2, Bot,  Music, Banknote, Dumbbell, Plane, Book, TrendingUp } from "lucide-react";

const topics = [
  { id: 1, name: "Development", icon: Laptop },
  { id: 2, name: "Inspiration", icon: Lightbulb },
  { id: 3, name: "Entertainment", icon: Tv },
  { id: 4, name: "Design", icon: Palette },
  { id: 5, name: "Social Media", icon: Share2 },
  { id: 6, name: "Ai Tools", icon: Bot },
  { id: 7, name: "Music", icon: Music },
  { id: 8, name: "Finance", icon: Banknote },
  { id: 9, name: "Fitness", icon: Dumbbell },
  { id: 10, name: "Travel", icon: Plane },
  { id: 11, name: "Books", icon: Book },
  { id: 12, name: "Business", icon: TrendingUp },
];

export default function ExplorePage() {
  const [step, setStep] = useState<"interests" | "feed">("interests");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const { data: bookmarks, loading } = useGetProducts();

  const toggleTopic = (name: string) => {
    setSelectedTopics(prev => 
      prev.includes(name) ? prev.filter(t => t !== name) : [...prev, name]
    );
  };
  if (step === "interests") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Explore Your Interests</h1>
        <p className="text-gray-400 mb-12">Select topics you love to unlock top-rated websites tailored to your interests</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full mb-10">
          {topics.map((topic) => {
            const Icon = topic.icon;
            const isSelected = selectedTopics.includes(topic.name);
            return (
              <button
                key={topic.id}
                onClick={() => toggleTopic(topic.name)}
                className={`flex flex-col items-center justify-center p-8 rounded-xl border transition-all ${
                  isSelected 
                  ? "bg-[#1a1a1a] border-blue-500 ring-1 ring-blue-500" 
                  : "bg-[#0d0d0d] border-gray-800 hover:border-gray-600"
                }`}
              >
                <Icon className={`mb-4 ${isSelected ? "text-blue-500" : "text-gray-400"}`} size={32} />
                <span className="text-white font-medium">{topic.name}</span>
              </button>
            );
          })}
        </div>

        <button 
          onClick={() => setStep("feed")}
          disabled={selectedTopics.length === 0}
          className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 text-white px-12 py-3 rounded-lg font-bold flex items-center gap-2 transition-all"
        >
          Continue <span>→</span>
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
        {topics.map(t => (
          <button 
            key={t.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm whitespace-nowrap ${
              selectedTopics.includes(t.name) ? "bg-blue-600/10 border-blue-500 text-white" : "bg-[#1a1a1a] border-gray-800 text-gray-400"
            }`}
          >
            <t.icon size={16} /> {t.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((bookmark) => (
          <BookmarkCard 
            key={bookmark.id}
            title={bookmark.title}
            desc={bookmark.description}
            tag={bookmark.category}
            rating={bookmark.rating}
            variant="grid" 
          />
        ))}
      </div>
    </div>
  );
}