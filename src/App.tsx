import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Canning from "./pages/Canning";
import Freezing from "./pages/Freezing";
import Dehydrating from "./pages/Dehydrating";
import Fermenting from "./pages/Fermenting";
import Curing from "./pages/Curing";
import Storage from "./pages/Storage";
import Equipment from "./pages/Equipment";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/canning" element={<Canning />} />
          <Route path="/freezing" element={<Freezing />} />
          <Route path="/dehydrating" element={<Dehydrating />} />
          <Route path="/fermenting" element={<Fermenting />} />
          <Route path="/curing" element={<Curing />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
