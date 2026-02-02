import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";
import DIRSLanding from "./pages/dirs/DIRSLanding";
import DIRSStart from "./pages/dirs/DIRSStart";
import DIRSAssessment from "./pages/dirs/DIRSAssessment";
import DIRSResults from "./pages/dirs/DIRSResults";
import DIRSDashboard from "./pages/dirs/DIRSDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/dirs" element={<DIRSLanding />} />
            <Route path="/dirs/start" element={<DIRSStart />} />
            <Route path="/dirs/assessment" element={<DIRSAssessment />} />
            <Route path="/dirs/results" element={<DIRSResults />} />
            <Route path="/dirs/dashboard" element={<DIRSDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
