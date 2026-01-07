import { Layout } from "@/components/Layout";
import { ScienceFact } from "@/components/ScienceFact";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Sun, Thermometer, Droplets, Clock } from "lucide-react";

import dehydratingImage from "@/assets/dehydrating.jpg";

const Dehydrating = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={dehydratingImage}
            alt="Dehydrated fruits in dehydrator"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">Preservation Method</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Dehydrating: Ancient Method, Modern Science
            </h1>
            <p className="text-lg text-muted-foreground">
              Drying is one of the oldest food preservation methods. By removing moisture, 
              you create an environment where bacteria, yeast, and mold cannot grow—all 
              while concentrating flavors and nutrients.
            </p>
          </div>
        </div>
      </section>

      {/* Science Overview */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">The Science of Dehydration</h2>
              <p className="text-muted-foreground leading-relaxed">
                Microorganisms need water to grow. Most bacteria require a water activity 
                (aw) above 0.91, while molds need at least 0.70. Properly dehydrated foods 
                typically have a water activity below 0.60, making them shelf-stable.
              </p>
              
              <ScienceFact
                fact="Food is considered safely dried when it contains 10–20% moisture (depending on the food type). Fruits should be leathery, vegetables should be brittle."
                source="Penn State Extension"
                sourceUrl="https://extension.psu.edu"
              />
              
              <ScienceFact
                fact="Drying at temperatures between 130–140°F (54–60°C) is ideal. Higher temperatures cause 'case hardening'—a dry exterior trapping moisture inside."
                source="University of Minnesota Extension"
                sourceUrl="https://extension.umn.edu"
              />

              <ScienceFact
                fact="Health Canada advises that properly dried foods with moisture content below 15% are shelf-stable when stored in airtight containers away from light and heat."
                source="Health Canada"
                sourceUrl="https://www.canada.ca/en/health-canada/services/food-safety.html"
              />
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Drying Temperature Guide</h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Herbs</span>
                    <span className="font-medium">95-105°F (35-40°C)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Preserve volatile oils</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Vegetables</span>
                    <span className="font-medium">125-135°F (52-57°C)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Dried until brittle</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Fruits</span>
                    <span className="font-medium">130-140°F (54-60°C)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Leathery, not sticky</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Meat (Jerky)</span>
                    <span className="font-medium">160°F+ (71°C+)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Safety requirement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Dehydration Methods
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Sun Drying</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The oldest method, requiring hot (85°F+ / 30°C+), dry, breezy conditions. 
                Works best for fruits high in sugar and acid.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Takes 2-4 days</li>
                <li>• Requires covering to protect from insects</li>
                <li>• Limited to low-humidity climates</li>
                <li>• Not recommended for vegetables or meat</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 border hover-lift ring-2 ring-primary">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Electric Dehydrator</h3>
              <Badge className="mb-4">Recommended</Badge>
              <p className="text-sm text-muted-foreground mb-4">
                Consistent temperature, airflow, and timing. The most reliable 
                method for all food types.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Precise temperature control</li>
                <li>• Even heat distribution</li>
                <li>• Works in any climate</li>
                <li>• Safe for meat jerky</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Oven Drying</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Can work if your oven maintains low temperatures (140°F / 60°C or below). 
                Uses more energy than a dehydrator.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Leave door slightly open for airflow</li>
                <li>• Rotate trays regularly</li>
                <li>• Not ideal for large batches</li>
                <li>• Watch carefully to prevent burning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Drying Times */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Common Drying Times</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Fruits (130–140°F / 54–60°C)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Apples (sliced)</span>
                  <span className="font-medium">6-12 hours</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Bananas</span>
                  <span className="font-medium">8-16 hours</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Strawberries (halved)</span>
                  <span className="font-medium">8-14 hours</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Peaches (sliced)</span>
                  <span className="font-medium">8-16 hours</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Grapes (whole)</span>
                  <span className="font-medium">24-48 hours</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Fruit is done when leathery and pliable with no moisture pockets.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Vegetables (125–135°F / 52–57°C)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Tomatoes (sliced)</span>
                  <span className="font-medium">8-14 hours</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Peppers (sliced)</span>
                  <span className="font-medium">8-12 hours</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Onions (sliced)</span>
                  <span className="font-medium">6-12 hours</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Zucchini (sliced)</span>
                  <span className="font-medium">8-14 hours</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Mushrooms (sliced)</span>
                  <span className="font-medium">4-10 hours</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Vegetables are done when brittle or crisp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">Proper Storage</h2>
            <p className="text-muted-foreground mb-6">
              Properly dried and stored foods can last 6 months to 1 year at room 
              temperature, and even longer in the freezer.
            </p>
            
            <div className="bg-card rounded-xl p-6 border space-y-4">
              <div className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Conditioning</h4>
                  <p className="text-sm text-muted-foreground">
                    After drying, condition fruits by loosely packing in glass jars 
                    for 7-10 days, shaking daily. This equalizes moisture and reveals 
                    any under-dried pieces.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Store in Dark, Cool, Dry Place</h4>
                  <p className="text-sm text-muted-foreground">
                    Light, heat, and humidity are enemies of dried foods. Use airtight 
                    containers (glass jars, vacuum-sealed bags) stored away from light.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Thermometer className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Consider Oxygen Absorbers</h4>
                  <p className="text-sm text-muted-foreground">
                    For long-term storage, add food-grade oxygen absorbers to containers. 
                    This prevents oxidation and extends shelf life significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Recommended Dehydrators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AffiliateProductCard
              name="NESCO Gardenmaster Pro FD-1018P"
              description="1000W professional dehydrator with 8 trays expandable to 30. Patented Converga-Flow drying system for even results."
              image="https://nesco.com/cdn/shop/products/FD-1018P_Main_1200x.jpg"
              price="$179.99"
              rating={5}
              category="Premium"
              amazonLink="https://www.amazon.com/dp/B0007XQGOG"
              featured
            />
            <AffiliateProductCard
              name="NESCO Snackmaster Pro FD-75A"
              description="700W with adjustable thermostat (95°-160°F). Expandable to 12 trays. Top-mounted fan for even drying."
              image="https://nesco.com/cdn/shop/products/FD-75A_Main_1200x.jpg"
              price="$79.99"
              rating={5}
              category="Budget-Friendly"
              amazonLink="https://www.amazon.com/dp/B0090WOCN0"
            />
            <AffiliateProductCard
              name="Harvest Right Home Freeze Dryer"
              description="Preserve food for 25+ years. Retains 97% nutrition. Perfect for fruits, vegetables, and complete meals."
              image="https://harvestright.com/wp-content/uploads/2023/03/HR-Standard-Size-White-Left-Facing-v2.png"
              price="$2,895.00"
              rating={5}
              category="Freeze Dryer"
              amazonLink="https://harvestright.com/product/medium-freeze-dryer/"
            />
            <AffiliateProductCard
              name="NESCO Jerky Spice Works Kit"
              description="Complete kit with seasoning, cure, and accessories. Makes up to 36 lbs of jerky. Multiple flavor options."
              image="https://nesco.com/cdn/shop/products/BJX-5_Main_1200x.jpg"
              price="$24.99"
              rating={4}
              category="Accessories"
              amazonLink="https://www.amazon.com/dp/B0000CFSV0"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dehydrating;
