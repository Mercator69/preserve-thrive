import { Layout } from "@/components/Layout";
import { MethodCard } from "@/components/MethodCard";
import { InfoCard } from "@/components/InfoCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { PreservationSearch } from "@/components/PreservationSearch";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Shield, Beaker, Clock } from "lucide-react";

import heroImage from "@/assets/hero-preservation.jpg";
import canningImage from "@/assets/canning.jpg";
import dehydratingImage from "@/assets/dehydrating.jpg";
import fermentingImage from "@/assets/fermenting.jpg";
import freezingImage from "@/assets/freezing.jpg";
import curingImage from "@/assets/curing.jpg";
import rootCellarImage from "@/assets/root-cellar.jpg";

const preservationMethods = [
  {
    title: "Water Bath & Pressure Canning",
    description: "Learn the science behind safe canning practices. Understand pH levels, processing times, and how to prevent botulism.",
    image: canningImage,
    href: "/canning",
  },
  {
    title: "Freezing Preservation",
    description: "Discover proper blanching techniques, flash freezing methods, and optimal storage temperatures for maximum quality.",
    image: freezingImage,
    href: "/freezing",
  },
  {
    title: "Dehydrating & Drying",
    description: "Master food dehydration with precise temperature and time guidelines. Learn about moisture content and storage.",
    image: dehydratingImage,
    href: "/dehydrating",
  },
  {
    title: "Fermentation",
    description: "Explore lacto-fermentation science, understand beneficial bacteria, and create probiotic-rich foods safely.",
    image: fermentingImage,
    href: "/fermenting",
  },
  {
    title: "Curing & Smoking",
    description: "Traditional preservation methods explained through modern food science. Salt ratios, nitrite safety, and smoking temperatures.",
    image: curingImage,
    href: "/curing",
  },
  {
    title: "DIY Cold Storage",
    description: "Build your own root cellar or cold storage. Understand temperature, humidity, and ventilation requirements.",
    image: rootCellarImage,
    href: "/storage",
  },
];

const features = [
  {
    icon: Beaker,
    title: "Science-Based Methods",
    description: "Every technique we share is backed by research from USDA, university extensions, and peer-reviewed studies.",
  },
  {
    icon: Shield,
    title: "Food Safety First",
    description: "Understand why certain practices are critical for preventing foodborne illness and spoilage.",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Guides",
    description: "Clear, detailed instructions with processing times, temperatures, and troubleshooting tips.",
  },
  {
    icon: Clock,
    title: "Seasonal Planning",
    description: "Learn when to preserve what, with guides aligned to harvest seasons and peak freshness.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Beautiful preserved foods in mason jars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Science-Based Food Preservation
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Preserve Your Harvest
              <span className="text-primary"> Safely</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Learn proven food preservation techniques backed by USDA research and university 
              extensions. From canning to fermentation, we'll help you store your food safely 
              and enjoy it year-round.
            </p>
            <div className="pt-6">
              <PreservationSearch />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/canning">
                  Start with Canning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/equipment">
                  View Equipment Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Why Trust Our Guides?
            </h2>
            <p className="text-muted-foreground">
              Food preservation is both art and science. We focus on the science to ensure 
              your preserved foods are safe, delicious, and long-lasting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`animate-slide-up opacity-0 stagger-${index + 1}`}
                style={{ animationFillMode: "forwards" }}
              >
                <InfoCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant="primary"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preservation Methods Grid */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Preservation Methods
            </h2>
            <p className="text-muted-foreground">
              Explore our comprehensive guides covering every major food preservation technique. 
              Each method includes safety guidelines, step-by-step instructions, and the science 
              behind why it works.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preservationMethods.map((method, index) => (
              <div
                key={method.title}
                className={`animate-scale-in opacity-0 stagger-${index + 1}`}
                style={{ animationFillMode: "forwards" }}
              >
                <MethodCard {...method} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="bg-destructive/5 border-y border-destructive/20 py-12">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl font-semibold mb-2">
                Food Safety is Not Optional
              </h3>
              <p className="text-muted-foreground">
                Improper food preservation can lead to serious illness, including botulism. 
                Always use tested recipes from reliable sources like the USDA Complete Guide 
                to Home Canning or university extension programs.
              </p>
            </div>
            <Button asChild variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
              <Link to="/safety">
                Read Safety Guidelines
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Trusted Sources */}
      <section className="py-20 bg-muted/50">
        <div className="container-wide text-center">
          <h2 className="font-serif text-2xl font-bold mb-8">
            Our Information Comes From Trusted Sources
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <a
              href="https://nchfp.uga.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              National Center for Home Food Preservation
            </a>
            <span className="hidden md:block">•</span>
            <a
              href="https://www.fsis.usda.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              USDA Food Safety
            </a>
            <span className="hidden md:block">•</span>
            <a
              href="https://extension.psu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              Penn State Extension
            </a>
            <span className="hidden md:block">•</span>
            <a
              href="https://extension.umn.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              University of Minnesota Extension
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
