import { Layout } from "@/components/Layout";
import { ScienceFact } from "@/components/ScienceFact";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Snowflake, Timer, ThermometerSnowflake } from "lucide-react";

import freezingImage from "@/assets/freezing.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const Freezing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img src={freezingImage} alt="Frozen fruits and vegetables" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">Preservation Method</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Freezing: The Simplest Preservation Method</h1>
            <p className="text-lg text-muted-foreground">
              Freezing is one of the easiest ways to preserve food while maintaining quality, taste, and nutritional
              value. Understanding the science helps you achieve the best results.
            </p>
          </div>
        </div>
      </section>

      {/* Science Overview */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">The Science of Freezing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Freezing preserves food by slowing down enzyme activity and preventing the growth of microorganisms. At
                0°F (-18°C) or below, bacteria become dormant and enzyme reactions are dramatically slowed, preserving
                the food's quality for extended periods.
              </p>

              <ScienceFact
                fact="Food frozen at 0°F (-18°C) is safe indefinitely. Quality, not safety, is the limiting factor. Proper packaging prevents freezer burn and maintains taste."
                source="USDA Food Safety"
                sourceUrl="https://www.fsis.usda.gov"
              />

              <ScienceFact
                fact="Blanching vegetables before freezing stops enzyme action that causes loss of flavor, color, and texture. It also cleans the surface of dirt and organisms."
                source="National Center for Home Food Preservation"
                sourceUrl="https://nchfp.uga.edu"
              />

              <ScienceFact
                fact="Health Canada recommends maintaining freezer temperature at -18°C (0°F) or colder. Their food safety guidelines for home freezing align with USDA recommendations."
                source="Health Canada"
                sourceUrl="https://www.canada.ca/en/health-canada/services/general-food-safety-tips/safe-food-storage.html"
              />
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Why Blanching Matters</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Enzymes in vegetables cause deterioration even at freezer temperatures. Blanching (brief exposure to
                boiling water) inactivates these enzymes.
              </p>

              <h4 className="font-semibold mb-3">Common Blanching Times:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Broccoli (florets)</span>
                  <span className="font-medium">3 minutes</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Green beans</span>
                  <span className="font-medium">3 minutes</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Corn on cob</span>
                  <span className="font-medium">7-11 minutes</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Peas</span>
                  <span className="font-medium">1.5-2 minutes</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Asparagus</span>
                  <span className="font-medium">2-4 minutes</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Always cool blanched vegetables immediately in ice water for the same duration as blanching time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Keys to Successful Freezing</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Freeze Quickly</h3>
              <p className="text-sm text-muted-foreground">
                Fast freezing creates smaller ice crystals, which cause less cell damage and better texture when thawed.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Snowflake className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Maintain 0°F (-18°C)</h3>
              <p className="text-sm text-muted-foreground">
                Keep your freezer at 0°F (-18°C) or below. Use a freezer thermometer to verify—door thermometers are not
                always accurate.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Remove Air</h3>
              <p className="text-sm text-muted-foreground">
                Air causes freezer burn—those grayish-brown patches that affect texture and taste. Vacuum sealing is
                ideal.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-harvest/10 flex items-center justify-center mb-4">
                <Timer className="w-6 h-6 text-harvest" />
              </div>
              <h3 className="font-semibold mb-2">Label Everything</h3>
              <p className="text-sm text-muted-foreground">
                Include the food name, date frozen, and quantity. Use FIFO (First In, First Out) rotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Times */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Recommended Storage Times</h2>
          <p className="text-muted-foreground mb-8">
            While frozen food is safe indefinitely, quality degrades over time. These are recommended storage times for
            best quality at 0°F (-18°C).
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">Fruits & Vegetables</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Blanched vegetables</span>
                  <span className="font-medium">8-12 months</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Fruits (unsweetened)</span>
                  <span className="font-medium">10-12 months</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Fruits (in syrup)</span>
                  <span className="font-medium">12 months</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Fruit juice</span>
                  <span className="font-medium">8-12 months</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4 text-secondary">Meats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Ground beef/pork</span>
                  <span className="font-medium">3-4 months</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Steaks, roasts</span>
                  <span className="font-medium">6-12 months</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Chicken, whole</span>
                  <span className="font-medium">12 months</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Bacon, sausage</span>
                  <span className="font-medium">1-2 months</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4 text-accent">Prepared Foods</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Soups, stews</span>
                  <span className="font-medium">2-3 months</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Casseroles</span>
                  <span className="font-medium">2-3 months</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Bread, baked goods</span>
                  <span className="font-medium">3 months</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Cookie dough</span>
                  <span className="font-medium">2-3 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freeze Drying Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Badge variant="secondary">Advanced Method</Badge>
              <h2 className="font-serif text-3xl font-bold">Freeze Drying (Lyophilization)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Freeze drying removes up to 99% of moisture through sublimation—ice turns directly to vapor without
                passing through a liquid state. This preserves food for 25+ years while retaining most nutrients,
                flavor, and texture.
              </p>

              <ScienceFact
                fact="Freeze-dried foods retain 97% of their nutritional value compared to 40-60% for other preservation methods. The low-temperature process protects heat-sensitive vitamins and enzymes."
                source="USDA Agricultural Research Service"
                sourceUrl="https://www.ars.usda.gov"
              />

              <div className="space-y-4">
                <h4 className="font-semibold">How It Works:</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs">
                      1
                    </span>
                    <span>
                      <strong>Freezing:</strong> Food is frozen to -40°F (-40°C) or colder
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs">
                      2
                    </span>
                    <span>
                      <strong>Primary Drying:</strong> Vacuum and gentle heat cause ice to sublimate
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs">
                      3
                    </span>
                    <span>
                      <strong>Secondary Drying:</strong> Remaining moisture is removed at slightly higher temps
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Freeze Drying vs. Dehydrating</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-sm font-medium border-b pb-2">
                  <span>Factor</span>
                  <span>Freeze Dry</span>
                  <span>Dehydrate</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <span className="text-muted-foreground">Shelf Life</span>
                  <span className="font-medium text-primary">25+ years</span>
                  <span>1-5 years</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <span className="text-muted-foreground">Nutrition</span>
                  <span className="font-medium text-primary">97% retained</span>
                  <span>40-60%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <span className="text-muted-foreground">Texture</span>
                  <span className="font-medium text-primary">Original when rehydrated</span>
                  <span>Chewy/leathery</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <span className="text-muted-foreground">Equipment Cost</span>
                  <span>$2,000-4,000</span>
                  <span className="font-medium text-primary">$50-200</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <span className="text-muted-foreground">Process Time</span>
                  <span>20-40 hours</span>
                  <span className="font-medium text-primary">4-12 hours</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Best Foods for Freeze Drying</h4>
                <p className="text-sm text-muted-foreground">
                  Fruits, vegetables, cooked meats, eggs, dairy, complete meals, and even ice cream. High-fat and
                  high-sugar foods work less well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Recommended Equipment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AffiliateProductCard
              name="FoodSaver Vacuum Sealer"
              description="Removes air to prevent freezer burn. Keeps food fresh up to 5x longer than ordinary storage."
              image={equipmentImage}
              price="$99.99"
              rating={5}
              category="Vacuum Sealer"
              featured
            />
            <AffiliateProductCard
              name="Silicone Freezer Bags"
              description="Reusable, eco-friendly alternative to plastic bags. Dishwasher safe and airtight seal."
              image={equipmentImage}
              price="$24.99"
              rating={4}
              category="Containers"
            />
            <AffiliateProductCard
              name="Glass Freezer Containers"
              description="BPA-free glass with leak-proof lids. Freezer-to-oven safe for easy meal prep."
              image="https://m.media-amazon.com/images/I/71nsa8rWKiL._AC_SX679_.jpg"
              price="$29.99"
              rating={4}
              category="Containers"
            />
            <AffiliateProductCard
              name="Harvest Right Home Freeze Dryer"
              description="Medium-size home freeze dryer. Preserves 7-10 lbs per batch for long-term storage."
              image={equipmentImage}
              price="$2,895.00"
              rating={5}
              category="Freeze Dryer"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Freezing;
