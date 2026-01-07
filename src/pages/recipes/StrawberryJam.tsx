import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";

import canningImage from "@/assets/canning.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const StrawberryJam = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src={canningImage}
            alt="Strawberry jam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container-wide relative z-10">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/recipes">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Recipes
            </Link>
          </Button>
          
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge>Water Bath</Badge>
              <Badge variant="outline">Beginner</Badge>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Classic Strawberry Jam
            </h1>
            <p className="text-lg text-muted-foreground">
              A sweet, homemade jam that captures the essence of fresh strawberries. 
              Perfect for spreading on toast, filling pastries, or gifting to friends.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">1.5 hours total</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">Makes 6-7 half-pint (250 mL) jars</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-primary" />
                <span className="text-sm">212°F (100°C) processing</span>
              </div>
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
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>5 cups (1 kg) crushed fresh strawberries (about 2 quarts / 2 L whole)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>7 cups (1.4 kg) granulated white sugar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1 box (1.75 oz / 49 g) powdered pectin</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1/4 cup (60 mL) lemon juice (fresh or bottled)</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Do not reduce sugar—it's essential for proper 
                  gel formation and safe preservation. Use only tested pectin brands.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Equipment Needed</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Water bath canner with rack</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>6-7 half-pint (250 mL) mason jars with new lids</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Large pot (8-quart / 8 L minimum) for cooking jam</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Jar lifter, funnel, and bubble remover</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Potato masher or food processor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Kitchen thermometer (optional)</span>
                </li>
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
                  <h3 className="font-semibold text-lg mb-2">Prepare the Canner & Jars</h3>
                  <p className="text-muted-foreground">
                    Fill your water bath canner half full with water and begin heating. 
                    Wash jars in hot, soapy water or run through dishwasher. Keep jars 
                    hot until ready to fill (you can place them in the warming canner). 
                    Prepare lids according to manufacturer directions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prepare the Strawberries</h3>
                  <p className="text-muted-foreground">
                    Wash and hull strawberries. Crush in batches using a potato masher 
                    or pulse briefly in a food processor (leave some texture—don't purée). 
                    Measure exactly 5 cups (1 kg) of crushed berries into your large pot.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Combine Berries, Pectin & Lemon</h3>
                  <p className="text-muted-foreground">
                    Stir pectin and lemon juice into crushed berries. Bring mixture to 
                    a full rolling boil over high heat, stirring constantly. A rolling 
                    boil cannot be stirred down.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Add Sugar</h3>
                  <p className="text-muted-foreground">
                    Add all 7 cups (1.4 kg) sugar at once, stirring to dissolve. Return 
                    to a full rolling boil and boil hard for exactly 1 minute, stirring 
                    constantly. Remove from heat and skim any foam with a metal spoon.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fill the Jars</h3>
                  <p className="text-muted-foreground">
                    Ladle hot jam into hot jars using a canning funnel, leaving 1/4 inch 
                    (6 mm) headspace. Remove air bubbles by running a bubble remover or 
                    thin spatula around the inside edge. Wipe jar rims with a clean, 
                    damp cloth. Center lids on jars and apply bands until fingertip tight.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">6</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Process in Water Bath</h3>
                  <p className="text-muted-foreground">
                    Lower jars into canner using jar lifter. Water should cover jars by 
                    at least 1-2 inches (2.5-5 cm). Bring to a boil and process for 
                    <strong> 10 minutes</strong> (adjust for altitude—see table below). 
                    Start timing when water returns to a full boil.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">7</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cool & Store</h3>
                  <p className="text-muted-foreground">
                    Turn off heat and let jars sit in canner 5 minutes. Remove jars and 
                    place on a towel-lined counter. Do not tilt jars. Let cool 12-24 hours. 
                    Check seals—lids should not flex when pressed. Store sealed jars in 
                    a cool, dark place for up to 1 year. Refrigerate any unsealed jars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Altitude Adjustment */}
      <section className="py-12">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold mb-6">Altitude Adjustments</h2>
            <div className="bg-card rounded-xl p-6 border">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>0–1,000 ft (0–305 m)</span>
                  <span className="font-medium">10 minutes</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>1,001–3,000 ft (306–914 m)</span>
                  <span className="font-medium">15 minutes</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>3,001–6,000 ft (915–1,829 m)</span>
                  <span className="font-medium">15 minutes</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Above 6,000 ft (1,829+ m)</span>
                  <span className="font-medium">20 minutes</span>
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
                  This recipe is based on USDA and National Center for Home Food Preservation 
                  guidelines. Do not alter ingredient proportions as this affects pH and 
                  safety. Always use new lids for each canning session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-12 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-2xl font-bold mb-8">Recommended Equipment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AffiliateProductCard
              name="Ball FreshTECH Jam Maker"
              description="Automatic stirring and heating for perfect jam every time. Makes up to 4 half-pint (250 mL) jars."
              image={equipmentImage}
              price="$79.99"
              rating={4}
              category="Appliance"
              featured
            />
            <AffiliateProductCard
              name="Sure-Jell Premium Pectin"
              description="Reliable, consistent gelling for jams and jellies. Works with full sugar recipes."
              image={equipmentImage}
              price="$4.99"
              rating={5}
              category="Ingredients"
            />
            <AffiliateProductCard
              name="Ball Half-Pint Jars (12-Pack)"
              description="Perfect size for jams and jellies. Includes lids and bands."
              image={equipmentImage}
              price="$12.99"
              rating={5}
              category="Jars"
            />
            <AffiliateProductCard
              name="Stainless Steel Canning Funnel"
              description="Wide-mouth funnel makes filling jars mess-free. Dishwasher safe."
              image={equipmentImage}
              price="$8.99"
              rating={4}
              category="Tools"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StrawberryJam;