import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";

import canningImage from "@/assets/canning.jpg";

const BreadButterPickles = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img src={canningImage} alt="Bread and butter pickles" className="w-full h-full object-cover" />
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
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Bread & Butter Pickles</h1>
            <p className="text-lg text-muted-foreground">
              Sweet and tangy sliced cucumber pickles with onion, mustard seed, and turmeric. 
              A classic American pickle perfect for sandwiches and burgers.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm">2 hours total</span></div>
              <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /><span className="text-sm">Makes 7 pint (500 mL) jars</span></div>
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
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>6 lbs (2.7 kg) pickling cucumbers, sliced 1/4 inch (6 mm) thick</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1.5 lbs (680 g) onions, thinly sliced</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1/2 cup (145 g) canning salt</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>4 cups (800 g) sugar</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>3 cups (720 mL) white vinegar (5% acidity)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>2 tbsp (18 g) mustard seed</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1 tsp (2 g) ground turmeric</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1 tsp (2 g) celery seed</span></li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Equipment Needed</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Water bath canner with rack</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>7 pint (500 mL) jars with new lids</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Large bowl for salting</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Large pot for brine</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Jar lifter, funnel, and bubble remover</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Mandoline or sharp knife</span></li>
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
                  <h3 className="font-semibold text-lg mb-2">Salt the Vegetables</h3>
                  <p className="text-muted-foreground">
                    Combine sliced cucumbers and onions in a large bowl. Sprinkle with salt 
                    and toss well. Cover with ice and let stand 2 hours. Drain thoroughly—do not rinse.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prepare Canner & Jars</h3>
                  <p className="text-muted-foreground">
                    Fill water bath canner and begin heating. Wash jars and keep hot. Prepare lids per manufacturer directions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Make the Brine</h3>
                  <p className="text-muted-foreground">
                    Combine sugar, vinegar, mustard seed, turmeric, and celery seed in a large pot. 
                    Bring to a boil, stirring until sugar dissolves.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Add Vegetables</h3>
                  <p className="text-muted-foreground">
                    Add drained cucumbers and onions to the boiling brine. Return to a boil, 
                    then immediately remove from heat.
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
                    Pack pickles into hot jars, leaving 1/2 inch (12 mm) headspace. Cover with hot brine, 
                    maintaining headspace. Remove bubbles and wipe rims. Apply lids and bands.
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
                    Process in boiling water bath for <strong>10 minutes</strong> for pints (adjust for altitude). 
                    Remove and cool 12-24 hours. Check seals. Wait 2 weeks before eating for best flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-8">
        <div className="container-wide">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 max-w-3xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Recipe Safety</h3>
                <p className="text-sm text-muted-foreground">
                  This recipe is based on USDA guidelines. Use vinegar with exactly 5% acidity. 
                  Do not reduce vinegar or increase vegetables as this affects safety.
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
              name="OXO V-Blade Mandoline Slicer" 
              description="Adjustable blade for uniform cucumber slices. Non-slip base and hand guard." 
              image="https://m.media-amazon.com/images/I/71dn7nz7LCL._AC_SL1500_.jpg" 
              price="$39.99" 
              rating={5} 
              category="Tools" 
              amazonLink="https://www.amazon.com/dp/B00004OCLE"
              featured 
            />
            <AffiliateProductCard 
              name="Mason Jar Lifestyle Pint Jars (12-Pack)" 
              description="Standard pint jars perfect for pickles. Includes stainless steel lids." 
              image="https://masonjarlifestyle.com/cdn/shop/products/pint-16-oz-mason-jar-with-wide-mouth-lid_1200x.jpg" 
              price="$29.99" 
              rating={5} 
              category="Jars" 
              amazonLink="https://masonjarlifestyle.com/products/pint-16-oz-wide-mouth-mason-jars"
            />
            <AffiliateProductCard 
              name="Morton Canning & Pickling Salt" 
              description="Pure salt without additives that can cloud brine. 4 lb container." 
              image="https://m.media-amazon.com/images/I/71aKCf9lEoL._SL1500_.jpg" 
              price="$6.99" 
              rating={4} 
              category="Ingredients" 
              amazonLink="https://www.amazon.com/dp/B004RD6UFE"
            />
            <AffiliateProductCard 
              name="Norpro Wide-Mouth Funnel" 
              description="Fits pint and quart jars. Stainless steel for easy cleaning." 
              image="https://m.media-amazon.com/images/I/71iwPBYbLpL._AC_SL1500_.jpg" 
              price="$8.99" 
              rating={4} 
              category="Tools" 
              amazonLink="https://www.amazon.com/dp/B001ULC7WW"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BreadButterPickles;