import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";

import canningImage from "@/assets/canning.jpg";

const PressureGreenBeans = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img src={canningImage} alt="Canned green beans" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container-wide relative z-10">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/recipes"><ArrowLeft className="w-4 h-4 mr-2" />Back to Recipes</Link>
          </Button>
          
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Pressure Canning</Badge>
              <Badge variant="outline">Intermediate</Badge>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">Pressure Canned Green Beans</h1>
            <p className="text-lg text-muted-foreground">
              Tender green beans preserved at peak freshness. Pressure canning is required for this 
              low-acid vegetable—there's no safe water bath method.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm">2 hours total</span></div>
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
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>14 lbs (6.4 kg) fresh green beans</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Canning salt (1 tsp / 6 g per quart, optional)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Boiling water for covering</span></li>
              </ul>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Salt is optional and for flavor only—it does not affect 
                  safety in pressure canning. Use fresh, tender beans without blemishes.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="font-serif text-2xl font-semibold mb-6">Equipment Needed</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Pressure canner (NOT pressure cooker)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>7 quart (1 L) jars with new lids</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Large pot for blanching (raw-pack: for boiling water)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><span>Jar lifter, funnel, and bubble remover</span></li>
              </ul>
              
              <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-sm font-medium text-destructive">
                  ⚠️ Green beans MUST be pressure canned. Water bath canning is NOT safe 
                  for any low-acid vegetable.
                </p>
              </div>
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
                  <h3 className="font-semibold text-lg mb-2">Prepare Beans</h3>
                  <p className="text-muted-foreground">
                    Wash beans thoroughly. Trim ends and remove strings. Cut or break into 
                    1-2 inch (2.5-5 cm) pieces, or leave whole.
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
                    Add 2-3 inches (5-7.5 cm) water to pressure canner and begin heating. 
                    Wash jars and keep hot. Have a pot of boiling water ready.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Raw Pack Method</h3>
                  <p className="text-muted-foreground">
                    Pack raw beans tightly into hot jars, leaving 1 inch (2.5 cm) headspace. 
                    Add 1 tsp (6 g) salt per quart if desired. Cover with boiling water, 
                    maintaining 1 inch headspace.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Remove Bubbles & Seal</h3>
                  <p className="text-muted-foreground">
                    Remove air bubbles by running a bubble remover around the inside. 
                    Readjust headspace if needed. Wipe rims, apply lids and bands fingertip tight.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Vent & Pressurize</h3>
                  <p className="text-muted-foreground">
                    Place jars on rack in canner. Lock lid. Heat on high until steam flows 
                    from vent. Vent for 10 minutes, then close vent or add weighted gauge. 
                    Let pressure build to 10 PSI (dial gauge) or 10 lbs (weighted gauge).
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
                    Process at 10 PSI: <strong>20 minutes for pints, 25 minutes for quarts</strong>. 
                    Maintain steady pressure—if it drops, restart timing. Adjust pressure for altitude (see table).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">7</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cool Naturally</h3>
                  <p className="text-muted-foreground">
                    Turn off heat. Let canner depressurize naturally—do NOT force cool. 
                    When pressure reaches zero (about 30-45 min), wait 10 more minutes before 
                    opening. Remove jars and cool 12-24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Altitude */}
      <section className="py-12">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold mb-6">Altitude Pressure Adjustments</h2>
            <div className="bg-card rounded-xl p-6 border">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>0–1,000 ft (0–305 m)</span>
                  <span className="font-medium">10 PSI (dial) / 10 lb (weighted)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>1,001–2,000 ft (306–610 m)</span>
                  <span className="font-medium">11 PSI (dial) / 15 lb (weighted)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>2,001–4,000 ft (611–1,219 m)</span>
                  <span className="font-medium">12 PSI (dial) / 15 lb (weighted)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>4,001–6,000 ft (1,220–1,829 m)</span>
                  <span className="font-medium">13 PSI (dial) / 15 lb (weighted)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Above 6,000 ft (1,829+ m)</span>
                  <span className="font-medium">14-15 PSI (dial) / 15 lb (weighted)</span>
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
                <h3 className="font-semibold mb-2">Critical Safety Information</h3>
                <p className="text-sm text-muted-foreground">
                  Green beans are low-acid and MUST be pressure canned. Water bath canning cannot 
                  reach temperatures high enough to destroy Clostridium botulinum spores. Use a 
                  pressure canner (not pressure cooker) with an accurate gauge.
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
              name="Presto 23-Quart Pressure Canner" 
              description="Holds 7 quart jars. Dial gauge for precise pressure control. Essential for low-acid foods." 
              image="https://m.media-amazon.com/images/I/81f9h7vXEEL._AC_SL1500_.jpg" 
              price="$129.99" 
              rating={5} 
              category="Pressure Canner" 
              amazonLink="https://www.amazon.com/dp/B0000BYCFU"
              featured 
            />
            <AffiliateProductCard 
              name="MasonJars.com Wide Mouth Quart Jars" 
              description="Perfect size for family servings of vegetables. 12-pack with lids." 
              image="https://m.media-amazon.com/images/I/81d+ZeLMhVL._AC_SL1500_.jpg" 
              price="$18.99" 
              rating={5} 
              category="Jars" 
              amazonLink="https://www.amazon.com/dp/B082THSTD1"
            />
            <AffiliateProductCard 
              name="Presto Pressure Canner Gauge" 
              description="Replacement dial gauge. Test accuracy annually at your local extension office." 
              image="https://m.media-amazon.com/images/I/71bsVAqMN2L._AC_SL1500_.jpg" 
              price="$15.99" 
              rating={4} 
              category="Safety" 
              amazonLink="https://www.amazon.com/dp/B0000CBJEN"
            />
            <AffiliateProductCard 
              name="Norpro Canning Jar Lifter" 
              description="Safely removes hot jars from canner. Secure non-slip grip." 
              image="https://m.media-amazon.com/images/I/61vxz-d6zHL._AC_SL1500_.jpg" 
              price="$9.99" 
              rating={5} 
              category="Tools" 
              amazonLink="https://www.amazon.com/dp/B000HJBFBM"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PressureGreenBeans;