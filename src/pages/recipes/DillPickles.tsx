import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";

import canningImage from "@/assets/canning.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const DillPickles = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img src={canningImage} alt="Dill pickles" className="w-full h-full object-cover" />
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
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Classic Dill Pickles</h1>
            <p className="text-lg text-muted-foreground">
              Crispy, garlicky, and briny—the quintessential dill pickle. Use fresh pickling cucumbers 
              for the best crunch and flavor.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm">2 hours total</span></div>
              <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /><span className="text-sm">Makes 7 quart (1 L) jars</span></div>
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
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>8 lbs (3.6 kg) pickling cucumbers, 4-6 inches (10-15 cm)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>4 cups (960 mL) water</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>4 cups (960 mL) white vinegar (5% acidity)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>1/2 cup (145 g) canning salt</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>14 heads fresh dill or 7 tbsp (21 g) dill seed</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>28 cloves garlic, peeled</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>7 tsp (21 g) whole black peppercorns</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>7 small dried red peppers (optional, for heat)</span></li>
              </ul>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>For crispest pickles:</strong> Soak cucumbers in ice water 4-5 hours before canning. 
                  Cut 1/16 inch (2 mm) off blossom end—enzymes there cause softening.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Equipment Needed</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Water bath canner with rack</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>7 quart (1 L) wide-mouth jars with new lids</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Large pot for brine</span></li>
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
                  <h3 className="font-semibold text-lg mb-2">Prepare Cucumbers</h3>
                  <p className="text-muted-foreground">
                    Wash cucumbers thoroughly. Trim 1/16 inch (2 mm) from blossom end (opposite the stem). 
                    Leave whole, halve lengthwise, or cut into spears.
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
                    Fill water bath canner and begin heating. Wash jars and keep hot.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Make Brine</h3>
                  <p className="text-muted-foreground">
                    Combine water, vinegar, and salt in a large pot. Bring to a boil, stirring until salt dissolves.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Pack Jars</h3>
                  <p className="text-muted-foreground">
                    In each hot jar, place 2 heads dill (or 1 tbsp dill seed), 4 garlic cloves, 1 tsp peppercorns, 
                    and 1 red pepper if using. Pack cucumbers tightly, leaving 1/2 inch (12 mm) headspace.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Add Brine</h3>
                  <p className="text-muted-foreground">
                    Pour hot brine over cucumbers, maintaining 1/2 inch (12 mm) headspace. 
                    Remove air bubbles, wipe rims, apply lids and bands.
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
                    Process in boiling water bath for <strong>15 minutes</strong> for quarts (adjust for altitude). 
                    Cool 12-24 hours. Wait 3-4 weeks before eating for best flavor development.
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
                  Do not reduce vinegar proportion or increase cucumbers. The 1:1 water to vinegar ratio 
                  ensures safe acidity. Use only vinegar with 5% acidity.
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
            <AffiliateProductCard name="Wide-Mouth Quart Jars (12-Pack)" description="Essential for whole dill pickles. Wide mouth makes packing easy." image={equipmentImage} price="$17.99" rating={5} category="Jars" featured />
            <AffiliateProductCard name="Pickle Crisp Granules" description="Calcium chloride keeps pickles crunchy. 1/8 tsp per quart jar." image={equipmentImage} price="$7.99" rating={5} category="Ingredients" />
            <AffiliateProductCard name="Pickling Salt (4 lb)" description="Pure salt without anti-caking agents or iodine that clouds brine." image={equipmentImage} price="$6.99" rating={4} category="Ingredients" />
            <AffiliateProductCard name="Jar Packer Tool" description="Helps pack cucumbers tightly without bruising. Doubles as bubble remover." image={equipmentImage} price="$5.99" rating={4} category="Tools" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DillPickles;