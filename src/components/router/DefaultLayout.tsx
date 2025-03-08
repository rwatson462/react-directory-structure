import {Suspense} from "react";
import {LoadingSpinner} from "./LoadingSpinner.tsx";
import {Outlet} from "react-router";

export function DefaultLayout() {
  return (
    <div className={'max-w-4xl mx-auto flex flex-col min-h-dvh py-4 space-y-4'}>
      <header className={'rounded-lg bg-linear-to-b to-pink-500 from-pink-400 shadow py-2 px-4'}>
        <h1 className={'text-5xl font-black text-black'}>
          Pokemon
        </h1>
      </header>

      <main className={'flex-grow p-4 bg-white rounded-lg shadow-lg'}>
        <Suspense fallback={<LoadingSpinner/>}>
          <Outlet/>
        </Suspense>
      </main>

      <footer className={'p-4'}>
        <p className={'text-sm'}>&copy; 2025 Source Pot</p>
      </footer>
    </div>
  )
}