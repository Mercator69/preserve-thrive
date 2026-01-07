import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";

import canningImage from "@/assets/canning.jpg";

const AppleButter = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img src={canningImage} alt="Apple butter" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container-wide relative z-10">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/recipes"><ArrowLeft className="w-4 h-4 mr-2" />Back to Recipes</Link>
          </Button>
          
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge>Water Bath</Badge>
              <Badge variant="outline">Beginner</Badge>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Apple Butter</h1>
            <p className="text-lg text-muted-foreground">
              Rich, slow-cooked apple spread with warm spices. No added pectin needed—the natural 
              pectin in apples creates a smooth, spreadable butter perfect for toast and biscuits.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm">4 hours total</span></div>
              <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /><span className="text-sm">Makes 8-9 half-pint (250 mL) jars</span></div>
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
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>8 lbs (3.6 kg) apples (mixed varieties work best)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>2 cups (480 mL) apple cider or water</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>4 cups (800 g) sugar</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>2 tsp (5 g) ground cinnamon</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1/4 tsp (0.5 g) ground cloves</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1/4 tsp (0.5 g) ground allspice</span></li>
              </ul>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Apple varieties:</strong> Mix tart (Granny Smith) with sweet (Fuji, Gala) for best flavor and texture.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Equipment Needed</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Water bath canner with rack</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>8-9 half-pint (250 mL) jars with new lids</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Large heavy-bottomed pot or slow cooker</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Food mill or immersion blender</span></li>
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
                  <h3 className="font-semibold text-lg mb-2">Prepare Apples</h3>
                  <p className="text-muted-foreground">
                    Wash, quarter, and core apples. No need to peel if using a food mill. 
                    Place in a large pot with cider or water.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cook Until Soft</h3>
                  <p className="text-muted-foreground">
                    Bring to a boil, then reduce heat and simmer 20-30 minutes until apples are very soft, 
                    stirring occasionally.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Purée</h3>
                  <p className="text-muted-foreground">
                    Pass through a food mill to remove skins and create smooth purée. 
                    Alternatively, peel apples before cooking and use an immersion blender.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Add Sugar & Spices</h3>
                  <p className="text-muted-foreground">
                    Return purée to pot. Stir in sugar, cinnamon, cloves, and allspice. 
                    Cook over low heat, stirring frequently to prevent scorching.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cook Until Thick</h3>
                  <p className="text-muted-foreground">
                    Continue cooking 2-3 hours until mixture is thick, dark, and mounds on a spoon. 
                    The "sheet test": it should sheet off a spoon rather than drip. Stir frequently.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">6</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fill Jars & Process</h3>
                  <p className="text-muted-foreground">
                    Ladle hot apple butter into hot jars, leaving 1/4 inch (6 mm) headspace. 
                    Remove bubbles, wipe rims, apply lids. Process in boiling water bath 
                    <strong> 10 minutes</strong> for half-pints (adjust for altitude).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slow Cooker Variation */}
      <section className="py-12">
        <div className="container-wide">
          <div className="bg-card rounded-xl p-6 border max-w-3xl">
            <h3 className="font-serif text-xl font-semibold mb-4">Slow Cooker Method</h3>
            <p className="text-muted-foreground mb-4">
              After puréeing, transfer to a slow cooker. Cook on LOW for 8-10 hours or HIGH for 4-5 hours 
              with the lid slightly ajar to allow steam to escape. Stir occasionally. The low, slow 
              cooking develops deep caramelized flavor.
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
                <h3 className="font-semibold mb-2">Recipe Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Apple butter is naturally high-acid due to the apples. However, ensure thorough 
                  processing and proper jar seals. Discard any jars that don't seal properly.
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
              name="OXO Good Grips Food Mill" 
              description="3 grinding discs included. Easily removes apple skins while creating smooth purée." 
              image="https://m.media-amazon.com/images/I/71RQ6M+hSML._AC_SL1500_.jpg" 
              price="$59.99" 
              rating={5} 
              category="Tools" 
              amazonLink="https://www.amazon.com/dp/B000I0MGKE"
              featured 
            />
            <AffiliateProductCard 
              name="Crock-Pot 7-Quart Slow Cooker" 
              description="Perfect for hands-off apple butter. Programmable with keep warm setting." 
              image="https://m.media-amazon.com/images/I/71KZuW5LKZL._AC_SL1500_.jpg" 
              price="$49.99" 
              rating={5} 
              category="Appliance" 
              amazonLink="https://www.amazon.com/dp/B003HF6PUO"
            />
            <AffiliateProductCard 
              name="Mason Jar Lifestyle Half-Pint Jars" 
              description="Ideal size for spreads and butters. Wide-mouth for easy filling." 
              image="https://masonjarlifestyle.com/cdn/shop/products/half-pint-8-oz-mason-jar-with-wide-mouth-lid_1200x.jpg" 
              price="$22.99" 
              rating={5} 
              category="Jars" 
              amazonLink="https://masonjarlifestyle.com/products/half-pint-8-oz-wide-mouth-mason-jars"
            />
            <AffiliateProductCard 
              name="Progressive Apple Slicer/Corer" 
              description="Cores and slices apples in one motion. Speeds up prep significantly." 
              image="https://m.media-amazon.com/images/I/71T4+r7RHFL._AC_SL1500_.jpg" 
              price="$12.99" 
              rating={4} 
              category="Tools" 
              amazonLink="https://www.amazon.com/dp/B0000DDVN6"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AppleButter;