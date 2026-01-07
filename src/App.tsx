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
import Kombucha from "./pages/Kombucha";
import Curing from "./pages/Curing";
import Storage from "./pages/Storage";
import Equipment from "./pages/Equipment";
import FreezeDryers from "./pages/equipment/FreezeDryers";
import VacuumSealers from "./pages/equipment/VacuumSealers";
import Dehydrators from "./pages/equipment/Dehydrators";
import Canners from "./pages/equipment/Canners";
import FermentationEquipment from "./pages/equipment/FermentationEquipment";
import Tools from "./pages/Tools";
import RecipesIndex from "./pages/recipes/index";
import StrawberryJam from "./pages/recipes/StrawberryJam";
import BreadButterPickles from "./pages/recipes/BreadButterPickles";
import TomatoSalsa from "./pages/recipes/TomatoSalsa";
import AppleButter from "./pages/recipes/AppleButter";
import DillPickles from "./pages/recipes/DillPickles";
import PeachPreserves from "./pages/recipes/PeachPreserves";
import PressureGreenBeans from "./pages/recipes/PressureGreenBeans";
import BeefStew from "./pages/recipes/BeefStew";
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
          <Route path="/kombucha" element={<Kombucha />} />
          <Route path="/curing" element={<Curing />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/equipment/freeze-dryers" element={<FreezeDryers />} />
          <Route path="/equipment/vacuum-sealers" element={<VacuumSealers />} />
          <Route path="/equipment/dehydrators" element={<Dehydrators />} />
          <Route path="/equipment/canners" element={<Canners />} />
          <Route path="/equipment/fermentation" element={<FermentationEquipment />} />
          <Route path="/recipes" element={<RecipesIndex />} />
          <Route path="/recipes/strawberry-jam" element={<StrawberryJam />} />
          <Route path="/recipes/bread-butter-pickles" element={<BreadButterPickles />} />
          <Route path="/recipes/tomato-salsa" element={<TomatoSalsa />} />
          <Route path="/recipes/apple-butter" element={<AppleButter />} />
          <Route path="/recipes/dill-pickles" element={<DillPickles />} />
          <Route path="/recipes/peach-preserves" element={<PeachPreserves />} />
          <Route path="/recipes/pressure-green-beans" element={<PressureGreenBeans />} />
          <Route path="/recipes/beef-stew" element={<BeefStew />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
