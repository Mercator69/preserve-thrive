import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { MethodCard } from "@/components/MethodCard";

import freezingImage from "@/assets/freezing.jpg";
import dehydratingImage from "@/assets/dehydrating.jpg";
import canningImage from "@/assets/canning.jpg";
import fermentingImage from "@/assets/fermenting.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const equipmentCategories = [
  {
    title: "Freeze Dryers",
    description: "Preserve food for 25+ years with professional freeze-drying equipment from Harvest Right.",
    image: freezingImage,
    href: "/equipment/freeze-dryers",
  },
  {
    title: "Vacuum Sealers",
    description: "Extend food freshness 3-5x longer by removing air and preventing freezer burn.",
    image: equipmentImage,
    href: "/equipment/vacuum-sealers",
  },
  {
    title: "Dehydrators",
    description: "Create healthy snacks and preserved foods with NESCO's trusted dehydration technology.",
    image: dehydratingImage,
    href: "/equipment/dehydrators",
  },
  {
    title: "Canners",
    description: "Water bath and pressure canners for safe home canning of fruits, vegetables, and meats.",
    image: canningImage,
    href: "/equipment/canners",
  },
  {
    title: "Fermentation Equipment",
    description: "Airlocks, crocks, and accessories for successful fermentation projects.",
    image: fermentingImage,
    href: "/equipment/fermentation",
  },
];

const Equipment = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Equipment Guide</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Food Preservation Equipment
            </h1>
            <p className="text-lg text-muted-foreground">
              Quality equipment makes preservation safer, easier, and more efficient. 
              Choose a category below to explore our honest recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Categories Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category) => (
              <MethodCard
                key={category.title}
                title={category.title}
                description={category.description}
                image={category.image}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-8 bg-accent/10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <span className="text-sm font-medium text-muted-foreground">Featured Brands:</span>
            <a href="https://harvestright.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">Harvest Right</a>
            <a href="https://www.nesco.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">NESCO</a>
            <a href="https://kitchenbossglobal.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">KitchenBoss</a>
            <a href="https://outofair.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">OutOfAir</a>
            <a href="https://www.masontops.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">Mason Jar Lifestyle</a>
            <a href="https://recapmasonjars.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">reCAP Mason Jars</a>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8">
        <div className="container-wide">
          <p className="text-sm text-muted-foreground italic text-center">
            * Affiliate disclosure: We may earn a commission from qualifying purchases at no extra cost to you. Prices and availability subject to change.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;
