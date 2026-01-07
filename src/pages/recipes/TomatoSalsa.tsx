import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";

import canningImage from "@/assets/canning.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const TomatoSalsa = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img src={canningImage} alt="Fresh tomato salsa" className="w-full h-full object-cover" />
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
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Classic Tomato Salsa</h1>
            <p className="text-lg text-muted-foreground">
              A fresh, chunky salsa with ripe tomatoes, peppers, onions, cilantro, and a kick of jalapeño. 
              Perfect for chips, tacos, and Mexican-inspired dishes.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm">2 hours total</span></div>
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
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>10 cups (2.4 kg) peeled, cored, chopped tomatoes</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>5 cups (750 g) chopped onions</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>2.5 cups (375 g) seeded, chopped green bell pepper</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1.25 cups (300 g) seeded, finely chopped jalapeño peppers</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>6 cloves garlic, minced</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1.25 cups (300 mL) bottled lemon or lime juice</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1 tbsp (18 g) canning salt</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1/2 cup (20 g) fresh cilantro, chopped (optional)</span></li>
              </ul>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> Use only bottled lemon/lime juice for consistent acidity. 
                  Fresh citrus juice varies in acidity and may not be safe.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Equipment Needed</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Water bath canner with rack</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>6 pint (500 mL) jars with new lids</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Large pot (8-quart / 8 L) for cooking</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Jar lifter, funnel, and bubble remover</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Gloves for handling hot peppers</span></li>
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
                  <h3 className="font-semibold text-lg mb-2">Prepare Tomatoes</h3>
                  <p className="text-muted-foreground">
                    Blanch tomatoes in boiling water 30-60 seconds until skins split. Plunge into ice water, 
                    then slip off skins. Core and chop. Measure exactly 10 cups (2.4 kg).
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
                    Fill water bath canner and begin heating. Wash jars and keep hot until ready to fill.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Combine Ingredients</h3>
                  <p className="text-muted-foreground">
                    Combine tomatoes, onions, peppers, jalapeños, garlic, lemon/lime juice, and salt 
                    in a large pot. Bring to a boil, then reduce heat and simmer 10 minutes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Add Cilantro (Optional)</h3>
                  <p className="text-muted-foreground">
                    If using cilantro, stir it in just before filling jars. Extended cooking dulls the flavor.
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
                    Ladle hot salsa into hot jars, leaving 1/2 inch (12 mm) headspace. 
                    Remove bubbles, wipe rims, apply lids and bands.
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
                    Process in boiling water bath for <strong>15 minutes</strong> for pints (adjust for altitude). 
                    Cool 12-24 hours and check seals. Store up to 1 year.
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
                  This USDA-tested recipe requires exact measurements. Do not reduce acid or increase 
                  low-acid vegetables (tomatoes, peppers, onions). Use only bottled citrus juice.
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
            <AffiliateProductCard name="Food Mill" description="Easily removes tomato skins and seeds. Makes smoother salsa if preferred." image={equipmentImage} price="$44.99" rating={5} category="Tools" featured />
            <AffiliateProductCard name="Bottled Lime Juice (32 oz)" description="Consistent 5% acidity for safe canning. Essential for salsa recipes." image={equipmentImage} price="$5.99" rating={4} category="Ingredients" />
            <AffiliateProductCard name="Nitrile Gloves (100-Pack)" description="Protect hands when handling hot peppers. Prevents capsaicin burns." image={equipmentImage} price="$12.99" rating={5} category="Safety" />
            <AffiliateProductCard name="Ball Pint Jars (12-Pack)" description="Standard pint jars perfect for salsa. Includes lids and bands." image={equipmentImage} price="$14.99" rating={5} category="Jars" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TomatoSalsa;