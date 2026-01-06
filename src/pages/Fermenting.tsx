import { Layout } from "@/components/Layout";
import { ScienceFact } from "@/components/ScienceFact";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Beaker, Heart, Clock, AlertTriangle } from "lucide-react";

import fermentingImage from "@/assets/fermenting.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const Fermenting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={fermentingImage}
            alt="Fermented vegetables in jars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">Preservation Method</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Fermentation: Living Preservation
            </h1>
            <p className="text-lg text-muted-foreground">
              Fermentation uses beneficial bacteria to transform and preserve food. 
              This ancient technique creates probiotic-rich foods while enhancing 
              flavor and nutritional value.
            </p>
          </div>
        </div>
      </section>

      {/* Science Overview */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">The Science of Lacto-Fermentation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lacto-fermentation is driven by Lactobacillus bacteria, which are 
                naturally present on vegetables. In an anaerobic (oxygen-free) salt 
                brine, these bacteria convert sugars into lactic acid, which preserves 
                the food and creates the characteristic tangy flavor.
              </p>
              
              <ScienceFact
                fact="The salt concentration of 2–3% creates a selective environment where beneficial Lactobacillus thrive while harmful bacteria are inhibited. Too little salt allows pathogens; too much kills beneficial bacteria."
                source="University of Georgia Extension"
                sourceUrl="https://nchfp.uga.edu"
              />
              
              <ScienceFact
                fact="As fermentation progresses, pH drops from around 6.5 to below 4.6, creating an acidic environment that prevents the growth of pathogenic bacteria including Clostridium botulinum."
                source="Revolution Fermentation"
                sourceUrl="https://revolutionfermentation.com"
              />

              <ScienceFact
                fact="Health Canada confirms that properly fermented vegetables with a pH below 4.6 are safe for storage. The Canadian Food Inspection Agency recognizes lacto-fermentation as a valid preservation method."
                source="Health Canada"
                sourceUrl="https://www.canada.ca/en/health-canada/services/food-safety.html"
              />
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">The Fermentation Process</h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</div>
                    <span className="font-semibold">Days 1-3: Initiation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lactobacillus begins consuming sugars and producing lactic acid. 
                    CO₂ bubbles appear. pH starts dropping.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">2</div>
                    <span className="font-semibold">Days 3-7: Active Fermentation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lactic acid builds rapidly. Harmful bacteria die off. 
                    Bubbling is most active. Flavor develops.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">3</div>
                    <span className="font-semibold">Week 2+: Maturation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fermentation slows as sugars deplete. Flavors deepen and 
                    mellow. pH stabilizes below 4.6. Ready to refrigerate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">
            Health Benefits of Fermented Foods
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Research supports numerous health benefits from consuming fermented vegetables, 
            from improved digestion to enhanced immune function.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border hover-lift text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Probiotic-Rich</h3>
              <p className="text-sm text-muted-foreground">
                Live beneficial bacteria support gut health and the microbiome.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border hover-lift text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Beaker className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Enhanced Nutrients</h3>
              <p className="text-sm text-muted-foreground">
                Fermentation increases bioavailability of vitamins and minerals.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border hover-lift text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Better Digestion</h3>
              <p className="text-sm text-muted-foreground">
                Pre-digested by bacteria, making nutrients easier to absorb.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border hover-lift text-center">
              <div className="w-12 h-12 rounded-full bg-harvest/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-harvest" />
              </div>
              <h3 className="font-semibold mb-2">No Heat Required</h3>
              <p className="text-sm text-muted-foreground">
                Preserves heat-sensitive vitamins that cooking destroys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Ferments */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Popular Fermented Foods</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-3">Sauerkraut</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The classic fermented cabbage. Simple to make with just cabbage and salt.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Salt ratio</span>
                  <span className="font-medium">2% by weight (20 g/kg)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temperature</span>
                  <span className="font-medium">65–75°F (18–24°C)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">3-4 weeks</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-3">Kimchi</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Korean fermented vegetables with gochugaru (chili flakes), garlic, and ginger.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Salt ratio</span>
                  <span className="font-medium">2–3% by weight (20–30 g/kg)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temperature</span>
                  <span className="font-medium">65–75°F (18–24°C)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">1-2 weeks</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-3">Fermented Pickles</h3>
              <p className="text-sm text-muted-foreground mb-4">
                True lacto-fermented cucumbers (not vinegar pickles). Crunchy and probiotic.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Brine</span>
                  <span className="font-medium">3.5% salt solution (35 g/L)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temperature</span>
                  <span className="font-medium">68–75°F (20–24°C)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">3-7 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">Fermentation Safety</h2>
            <p className="text-muted-foreground mb-6">
              Lacto-fermentation is one of the safest preservation methods when done correctly. 
              Follow these guidelines for successful, safe ferments.
            </p>
            
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 border">
                <h4 className="font-semibold mb-2">Use the Right Salt</h4>
                <p className="text-sm text-muted-foreground">
                  Use non-iodized salt (sea salt, kosher salt, or pickling salt). 
                  Iodine can inhibit beneficial bacteria. Avoid salt with anti-caking agents.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border">
                <h4 className="font-semibold mb-2">Keep Vegetables Submerged</h4>
                <p className="text-sm text-muted-foreground">
                  Vegetables exposed to air can develop mold. Use weights to keep 
                  everything below the brine. Skim any surface growth (kahm yeast is 
                  harmless but unpleasant).
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border">
                <h4 className="font-semibold mb-2">Trust Your Senses</h4>
                <p className="text-sm text-muted-foreground">
                  Good ferments smell sour and tangy. Bad ferments smell putrid or 
                  rotten. If it smells off, looks slimy, or has visible mold throughout 
                  (not just surface), discard it.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border">
                <h4 className="font-semibold mb-2">Refrigerate When Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Once fermented to your taste, refrigerate to slow the process. 
                  Fermented vegetables keep for months in the refrigerator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Fermentation Equipment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AffiliateProductCard
              name="Wide-Mouth Mason Jars (6-Pack)"
              description="Perfect for small-batch ferments. Wide mouth makes packing and cleaning easy."
              image={equipmentImage}
              price="$14.99"
              rating={5}
              category="Jars"
            />
            <AffiliateProductCard
              name="Fermentation Weights"
              description="Glass weights keep vegetables submerged below brine. Fits wide-mouth jars."
              image={equipmentImage}
              price="$18.99"
              rating={5}
              category="Weights"
              featured
            />
            <AffiliateProductCard
              name="Airlock Lids for Mason Jars"
              description="Allow CO₂ to escape while preventing oxygen entry. Reduces monitoring needs."
              image={equipmentImage}
              price="$21.99"
              rating={4}
              category="Lids"
            />
            <AffiliateProductCard
              name="Digital Kitchen Scale"
              description="Accurate salt measurements are crucial. This scale measures to 0.1g precision."
              image={equipmentImage}
              price="$12.99"
              rating={4}
              category="Tools"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fermenting;
