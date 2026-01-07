import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";

import canningImage from "@/assets/canning.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const PeachPreserves = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img src={canningImage} alt="Peach preserves" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container-wide relative z-10">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/recipes"><ArrowLeft className="w-4 h-4 mr-2" />Back to Recipes</Link>
          </Button>
          
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge>Water Bath</Badge>
              <Badge variant="outline">Intermediate</Badge>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Peach Preserves</h1>
            <p className="text-lg text-muted-foreground">
              Juicy chunks of ripe peaches in a light syrup. Capture the taste of summer to enjoy 
              year-round over ice cream, on toast, or in desserts.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm">2.5 hours total</span></div>
              <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /><span className="text-sm">Makes 6 pint (500 mL) jars</span></div>
              <div className="flex items-center gap-2"><Thermometer className="w-5 h-5 text-primary" /><span className="text-sm">212°F (100°C) processing</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients & Equipment */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Ingredients</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>6 lbs (2.7 kg) ripe peaches</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>3 cups (600 g) sugar</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1/4 cup (60 mL) lemon juice</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1/2 tsp (1 g) almond extract (optional)</span></li>
              </ul>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Syrup options:</strong> Light syrup (2 cups sugar per 4 cups water) or raw-pack 
                  in juice for less sugar. Adjust sugar to taste—acidity is what matters for safety.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Equipment Needed</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Water bath canner with rack</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>6 pint (500 mL) jars with new lids</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Large pot for blanching and syrup</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Slotted spoon and ice bath</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Jar lifter, funnel, and bubble remover</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-12 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Step-by-Step Instructions</h2>
          
          <div className="space-y-6 max-w-3xl">
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prepare Peaches</h3>
                  <p className="text-muted-foreground">
                    Blanch peaches in boiling water 30-60 seconds, then plunge into ice water. 
                    Slip off skins, halve, remove pits, and slice into wedges or chunks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prevent Browning</h3>
                  <p className="text-muted-foreground">
                    As you work, place peach slices in a bowl with water and lemon juice 
                    (1 tbsp lemon juice per quart water) to prevent browning.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Make Syrup</h3>
                  <p className="text-muted-foreground">
                    Combine sugar, 4 cups (960 mL) water, and lemon juice in a large pot. 
                    Bring to a boil, stirring until sugar dissolves. Add almond extract if using.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hot Pack Method</h3>
                  <p className="text-muted-foreground">
                    Drain peaches and add to hot syrup. Bring to a boil and cook 5 minutes. 
                    Hot packing reduces floating fruit in jars.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fill Jars</h3>
                  <p className="text-muted-foreground">
                    Pack hot peaches into hot jars, cavity side down. Cover with hot syrup, 
                    leaving 1/2 inch (12 mm) headspace. Remove bubbles, wipe rims, apply lids.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">6</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Process</h3>
                  <p className="text-muted-foreground">
                    Process in boiling water bath for <strong>25 minutes</strong> for pints, 
                    30 minutes for quarts (adjust for altitude). Cool and check seals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-8">
        <div className="container-wide">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 max-w-3xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Recipe Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Peaches are naturally high-acid and safe for water bath canning. Adding lemon juice 
                  ensures consistent acidity. Follow processing times exactly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-2xl font-bold mb-8">Recommended Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AffiliateProductCard name="Peach/Tomato Peeler" description="Y-shaped serrated peeler for quick skin removal without blanching." image={equipmentImage} price="$8.99" rating={4} category="Tools" featured />
            <AffiliateProductCard name="Ball Pint Jars (12-Pack)" description="Standard pint jars perfect for preserves. Includes lids and bands." image={equipmentImage} price="$14.99" rating={5} category="Jars" />
            <AffiliateProductCard name="Fruit-Fresh Produce Protector" description="Prevents browning while you work. Just add to water." image={equipmentImage} price="$5.99" rating={4} category="Ingredients" />
            <AffiliateProductCard name="Cherry/Olive Pitter" description="Works for peach pits too. Speeds up prep for halved peaches." image={equipmentImage} price="$12.99" rating={4} category="Tools" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PeachPreserves;