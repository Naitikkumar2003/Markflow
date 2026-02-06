"use client";
import { SearchProvider } from "@/app/lib/context/Searchcontext"; 
import Sidebar from "../Components/layouts/sidebar";
import Navbar from "../Components/layouts/navbar";

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
    return (
        <SearchProvider>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 ml-64 flex flex-col min-h-screen">
                    <Navbar />
                    <main className="p-8">
                        {children}
                    </main>
                </div>
            </div>
        </SearchProvider>
    );
}