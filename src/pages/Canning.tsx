import { Layout } from "@/components/Layout";
import { ScienceFact } from "@/components/ScienceFact";
import { InfoCard } from "@/components/InfoCard";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, Thermometer, Clock, Droplets, CheckCircle, ArrowRight } from "lucide-react";

import canningImage from "@/assets/canning.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const Canning = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img src={canningImage} alt="Water bath canning process" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">Preservation Method</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Canning: Water Bath & Pressure Methods</h1>
            <p className="text-lg text-muted-foreground">
              Home canning is a time-honored preservation method that, when done correctly, can safely preserve food for
              1-5 years. Understanding the science behind canning is essential for preventing foodborne illness.
            </p>
          </div>
        </div>
      </section>

      {/* Science Overview */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">The Science of Canning</h2>
              <p className="text-muted-foreground leading-relaxed">
                Canning preserves food through the application of heat, which destroys microorganisms and inactivates
                enzymes that cause spoilage. The sealed environment prevents recontamination. The key to safe canning is
                understanding pH levels and their relationship to processing methods.
              </p>

              <ScienceFact
                fact="Clostridium botulinum spores can only be destroyed at temperatures above 240°F (116°C), which requires pressure canning. Water bath canning reaches only 212°F (100°C)."
                source="USDA Complete Guide to Home Canning"
                sourceUrl="https://nchfp.uga.edu"
              />

              <ScienceFact
                fact="Foods with a pH of 4.6 or lower (high-acid foods) can be safely processed in a water bath canner. Low-acid foods (pH above 4.6) require pressure canning."
                source="Penn State Extension"
                sourceUrl="https://extension.psu.edu"
              />

              <ScienceFact
                fact="Health Canada recommends using only tested recipes from trusted sources and adjusting processing times for altitude. Canadian guidelines align with USDA standards for home canning safety."
                source="Health Canada - Food Safety"
                sourceUrl="https://www.canada.ca/en/services/health/food-safety.html"
              />
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">pH Guide for Canning</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium">High-Acid (pH ≤ 4.6)</span>
                  <Badge className="bg-primary">Water Bath Safe</Badge>
                </div>
                <ul className="text-sm text-muted-foreground pl-4 space-y-1">
                  <li>• Tomatoes (with added acid)</li>
                  <li>• Most fruits and fruit juices</li>
                  <li>• Pickles and relishes</li>
                  <li>• Jams, jellies, and preserves</li>
                </ul>

                <div className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg mt-4">
                  <span className="font-medium">Low-Acid (pH &gt; 4.6)</span>
                  <Badge variant="destructive">Pressure Canning Required</Badge>
                </div>
                <ul className="text-sm text-muted-foreground pl-4 space-y-1">
                  <li>• All vegetables (except pickled)</li>
                  <li>• Meat, poultry, and seafood</li>
                  <li>• Soups, stocks, and broths</li>
                  <li>• Beans and legumes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Methods */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Two Canning Methods</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Water Bath */}
            <div className="bg-card rounded-xl p-8 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Water Bath Canning</h3>
              <p className="text-muted-foreground mb-6">
                Uses boiling water at 212°F (100°C) to process high-acid foods. The acid prevents the growth of
                Clostridium botulinum, making this method safe for fruits, pickles, and properly acidified tomatoes.
              </p>

              <h4 className="font-semibold mb-3">Basic Process:</h4>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs">
                    1
                  </span>
                  Fill canner with water, place rack in bottom, heat water
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs">
                    2
                  </span>
                  Fill hot, sterilized jars with prepared food, leaving proper headspace
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs">
                    3
                  </span>
                  Remove air bubbles, wipe rims, apply lids and bands
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs">
                    4
                  </span>
                  Process in boiling water for specified time
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs">
                    5
                  </span>
                  Cool on rack for 12-24 hours, check seals
                </li>
              </ol>
            </div>

            {/* Pressure Canning */}
            <div className="bg-card rounded-xl p-8 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Pressure Canning</h3>
              <p className="text-muted-foreground mb-6">
                Creates temperatures of 240–250°F (116–121°C) under pressure, required for low-acid foods. This is the
                ONLY safe method for canning vegetables, meats, poultry, and seafood.
              </p>

              <h4 className="font-semibold mb-3">Critical Points:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Use a tested pressure canner (not a pressure cooker)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Check dial gauge accuracy annually
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Adjust pressure for altitude: add 0.5 psi per 1,000 ft (300 m) above sea level, or add 1 lb (0.07 bar)
                  per 2,000 ft (610 m)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Vent canner for 10 minutes before pressurizing
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Never force-cool the canner after processing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-12 bg-destructive/5 border-y border-destructive/20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-2">Botulism Prevention</h3>
              <p className="text-muted-foreground mb-4">
                Clostridium botulinum produces a deadly toxin in low-acid, anaerobic (sealed) environments. Never
                process low-acid foods in a water bath canner. The toxin is odorless and tasteless—you cannot detect
                contaminated food by smell or appearance.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • <strong>Always use tested recipes</strong> from USDA or university extensions
                </li>
                <li>
                  • <strong>Never modify</strong> ingredient proportions in canning recipes
                </li>
                <li>
                  • <strong>Discard any jars</strong> with broken seals, off-odors, or spurting liquid
                </li>
                <li>
                  • <strong>When in doubt, throw it out</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold">Essential Canning Equipment</h2>
              <p className="text-muted-foreground mt-2">Quality equipment makes canning safer and more efficient.</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/equipment">
                View All Equipment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AffiliateProductCard
              name="Ball Enamel Water Bath Canner"
              description="21-quart (20 L) capacity, includes jar rack. Perfect for beginners and high-acid foods."
              image={equipmentImage}
              price="$39.99"
              rating={5}
              category="Water Bath"
              featured
            />
            <AffiliateProductCard
              name="Presto 23-Quart Pressure Canner"
              description="Holds 7 quart jars (946 mL each) or 20 pint jars (473 mL each). Dial gauge for precise pressure control."
              image={equipmentImage}
              price="$129.99"
              rating={5}
              category="Pressure Canner"
            />
            <AffiliateProductCard
              name="Ball Regular Mount Pint (16 oz.) Mason Jars (8-Pack)"
              description="Regular-mouth pint jars (454 mL) with lids and bands. BPA-free lids for safe food preservation."
              image="https://m.media-amazon.com/images/I/41l0xDX4q1L._AC_.jpg"
              price="$35.87"
              rating={4.7}
              category="Jars"
            />
            <AffiliateProductCard
              name="Kitchen Mama 7-Piece Canning Kit"
              description="Jar lifter, funnel, lid wand, bubble remover, and more. Essential tools for any canner."
              image={equipmentImage}
              price="$19.99"
              rating={4}
              category="Tools"
            />
          </div>
        </div>
      </section>

      {/* Processing Times */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Common Processing Times</h2>
          <p className="text-muted-foreground mb-8">
            Processing times vary based on jar size, food type, and altitude. Always consult USDA guidelines for your
            specific recipe.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-primary" />
                Water Bath Times (at sea level)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Peaches, Pears (hot pack)</span>
                  <span className="font-medium">20-25 min</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Tomatoes (whole, with acid)</span>
                  <span className="font-medium">45 min</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Pickles (cucumber)</span>
                  <span className="font-medium">10-15 min</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Jam/Jelly</span>
                  <span className="font-medium">5-10 min</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Apple Sauce</span>
                  <span className="font-medium">20 min</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-secondary" />
                Pressure Canning Times (10 PSI, sea level)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Green Beans (quarts)</span>
                  <span className="font-medium">25 min</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Corn, whole kernel (pints)</span>
                  <span className="font-medium">55 min</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Chicken, bone-in (quarts)</span>
                  <span className="font-medium">75 min</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Beef, cubed (quarts)</span>
                  <span className="font-medium">90 min</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Vegetable Soup</span>
                  <span className="font-medium">75 min</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            <strong>Altitude Adjustment:</strong> Add 5 minutes processing time for altitudes 1,001–6,000 ft (305–1,830
            m); add 10 minutes for 6,001+ ft (1,830+ m). Canadian and US guidelines are the same.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Canning;
