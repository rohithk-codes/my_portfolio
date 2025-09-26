import { Suspense } from "react";
import ThemeToggle from "@/context/ThemeToggle";

export default function App() {
  return (
    <Suspense fallback={null}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white font-sans">
        <header className="p-6">
          <h1 className="text-3xl font-bold">Alex Johnson - Full-Stack Developer & Designer</h1>
          <p className="mt-2">Professional portfolio showcasing full-stack development and UI/UX design work</p>
          <ThemeToggle />
        </header>
        <main className="p-6">
          {/* your page content goes here */}
        </main>
      </div>
    </Suspense>
  );
}
