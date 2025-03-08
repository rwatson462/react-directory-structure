import {Router} from "./components/router/Router.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./lib/api/queryClient.ts";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router/>
    </QueryClientProvider>
  )
}
