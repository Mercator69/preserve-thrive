import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";

import canningImage from "@/assets/canning.jpg";

const BeefStew = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img src={canningImage} alt="Canned beef stew" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container-wide relative z-10">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/recipes"><ArrowLeft className="w-4 h-4 mr-2" />Back to Recipes</Link>
          </Button>
          
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Pressure Canning</Badge>
              <Badge variant="outline">Advanced</Badge>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Pressure Canned Beef Stew</h1>
            <p className="text-lg text-muted-foreground">
              Hearty beef stew with potatoes, carrots, and onions ready for quick weeknight dinners. 
              Just heat and serve for homemade comfort food in minutes.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm">3 hours total</span></div>
              <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /><span className="text-sm">Makes 7 quart (1 L) jars</span></div>
              <div className="flex items-center gap-2"><Thermometer className="w-5 h-5 text-primary" /><span className="text-sm">240°F (116°C) at 10 PSI</span></div>
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
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>4 lbs (1.8 kg) beef chuck, cut into 1-inch (2.5 cm) cubes</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>6 cups (900 g) potatoes, cubed 1/2 inch (12 mm)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>3 cups (450 g) carrots, sliced 1/2 inch (12 mm)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>2 cups (300 g) celery, sliced</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>2 cups (300 g) onion, chopped</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>4 cups (960 mL) beef broth</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>2 cups (480 mL) tomato juice</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1 tbsp (18 g) salt</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1 tsp (2 g) black pepper</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>2 bay leaves</span></li>
              </ul>
              <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-sm text-muted-foreground">
                  <strong>⚠️ Do NOT add:</strong> flour, cornstarch, or thickeners before canning. 
                  They interfere with heat penetration. Thicken after opening if desired.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Equipment Needed</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Pressure canner (NOT pressure cooker)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>7 quart (1 L) jars with new lids</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Large stockpot (12-quart / 12 L)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Heavy skillet for browning meat</span></li>
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
                  <h3 className="font-semibold text-lg mb-2">Brown the Beef</h3>
                  <p className="text-muted-foreground">
                    Season beef cubes with salt and pepper. Brown in batches in a hot skillet 
                    with a little oil—don't crowd the pan. Set browned meat aside.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prepare Vegetables</h3>
                  <p className="text-muted-foreground">
                    Peel and cube potatoes. Slice carrots and celery. Chop onion. Keep potatoes 
                    in water until ready to use to prevent browning.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Make the Stew</h3>
                  <p className="text-muted-foreground">
                    Combine browned beef, all vegetables, beef broth, tomato juice, salt, pepper, 
                    and bay leaves in a large stockpot. Bring to a boil, then simmer 15 minutes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fill Jars</h3>
                  <p className="text-muted-foreground">
                    Remove bay leaves. Ladle hot stew into hot jars, distributing meat and 
                    vegetables evenly. Leave 1 inch (2.5 cm) headspace. Cover with hot liquid. 
                    Remove bubbles, wipe rims, apply lids.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Process in Pressure Canner</h3>
                  <p className="text-muted-foreground">
                    Place jars in canner. Lock lid. Vent 10 minutes, then pressurize. 
                    Process at 10 PSI: <strong>75 minutes for pints, 90 minutes for quarts</strong>. 
                    Adjust pressure for altitude.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">6</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cool Naturally</h3>
                  <p className="text-muted-foreground">
                    Turn off heat. Let canner depressurize naturally (45-60 min). When pressure 
                    is zero, wait 10 more minutes, then remove lid. Remove jars and cool 12-24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* To Serve */}
      <section className="py-12">
        <div className="container-wide">
          <div className="bg-card rounded-xl p-6 border max-w-3xl">
            <h3 className="font-serif text-xl font-semibold mb-4">To Serve</h3>
            <p className="text-muted-foreground">
              Pour contents into a pot and heat thoroughly. If desired, thicken by mixing 2 tbsp (16 g) 
              flour with 1/4 cup (60 mL) cold water, then stir into simmering stew. Cook until thickened. 
              Season to taste with additional salt and pepper.
            </p>
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
                <h3 className="font-semibold mb-2">Critical Safety Information</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Meat stews are low-acid and MUST be pressure canned. Never add thickeners 
                  (flour, cornstarch, pasta, rice, barley) before canning—they prevent proper 
                  heat penetration and can lead to unsafe products.
                </p>
                <p className="text-sm text-muted-foreground">
                  Processing times are based on the ingredient requiring the longest time (beef). 
                  Always use tested USDA recipes for meat canning.
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
            <AffiliateProductCard 
              name="All American 21.5-Quart Pressure Canner" 
              description="Metal-to-metal seal—no gasket to replace. Built for serious canners. Made in USA." 
              image="https://m.media-amazon.com/images/I/71bP-oE7u2L._AC_SL1500_.jpg" 
              price="$349.99" 
              rating={5} 
              category="Pressure Canner" 
              amazonLink="https://www.amazon.com/dp/B00004S88Z"
              featured 
            />
            <AffiliateProductCard 
              name="MasonJars.com Wide Mouth Quart Jars" 
              description="Large size perfect for family meals. Wide mouth for chunky stews." 
              image="https://m.media-amazon.com/images/I/81d+ZeLMhVL._AC_SL1500_.jpg" 
              price="$18.99" 
              rating={5} 
              category="Jars" 
              amazonLink="https://www.amazon.com/dp/B082THSTD1"
            />
            <AffiliateProductCard 
              name="Cuisinart 12-Quart Stockpot" 
              description="Heavy-bottom stainless steel for even browning. Essential for stew prep." 
              image="https://m.media-amazon.com/images/I/81YxCklDnkL._AC_SL1500_.jpg" 
              price="$79.99" 
              rating={5} 
              category="Cookware" 
              amazonLink="https://www.amazon.com/dp/B009JXPS6U"
            />
            <AffiliateProductCard 
              name="Presto Pressure Gauge Tester" 
              description="Verify your canner gauge accuracy at home. Safety essential." 
              image="https://m.media-amazon.com/images/I/71bsVAqMN2L._AC_SL1500_.jpg" 
              price="$15.99" 
              rating={4} 
              category="Safety" 
              amazonLink="https://www.amazon.com/dp/B0000CBJEN"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BeefStew;