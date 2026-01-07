import { Layout } from "@/components/Layout";
import { ScienceFact } from "@/components/ScienceFact";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Beaker, Clock, Thermometer, AlertTriangle, Heart, CheckCircle } from "lucide-react";

import fermentingImage from "@/assets/fermenting.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const Kombucha = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={fermentingImage}
            alt="Kombucha brewing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        
        <div className="container-wide relative z-10">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/fermenting">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Fermentation
            </Link>
          </Button>
          
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">Fermented Beverage</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Kombucha: The Complete Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Kombucha is a fermented tea beverage made using a symbiotic culture of 
              bacteria and yeast (SCOBY). Learn the science, master the process, and 
              explore delicious flavor combinations.
            </p>
          </div>
        </div>
      </section>

      {/* What is Kombucha */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">What is Kombucha?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kombucha is a fermented tea drink that has been consumed for thousands 
                of years. It's made by adding a SCOBY (Symbiotic Culture of Bacteria 
                and Yeast) to sweetened tea. The fermentation process takes 7-14 days 
                and produces a slightly effervescent, tangy beverage.
              </p>
              
              <ScienceFact
                fact="The SCOBY is a living home for the bacteria and yeast that transform sweet tea into tangy, fizzy kombucha. The primary bacteria are acetic acid bacteria (Acetobacter), and the yeasts convert sugar to alcohol, which the bacteria then convert to acids."
                source="Journal of Food Science"
                sourceUrl="https://ift.onlinelibrary.wiley.com/journal/17503841"
              />
              
              <ScienceFact
                fact="Research indicates kombucha contains organic acids, vitamins (particularly B vitamins), and beneficial probiotics. However, health claims should be viewed with caution as large-scale human studies are limited."
                source="NIH National Center for Complementary and Integrative Health"
                sourceUrl="https://www.nccih.nih.gov/"
              />
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Key Components</h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">The SCOBY</h4>
                  <p className="text-sm text-muted-foreground">
                    A rubbery, pancake-like disc that floats on the tea surface. 
                    It contains beneficial bacteria and yeast that perform fermentation.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Starter Tea</h4>
                  <p className="text-sm text-muted-foreground">
                    Mature kombucha from a previous batch (about 1-2 cups / 240-480 mL). 
                    Its acidity protects against harmful bacteria during early fermentation.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Sweet Tea Base</h4>
                  <p className="text-sm text-muted-foreground">
                    Black or green tea with white sugar provides nutrients for fermentation. 
                    The sugar is consumed by the SCOBY—the final drink is much less sweet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Recipe */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Basic Kombucha Recipe</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Ingredients (1 gallon / 3.8 L batch)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  14 cups (3.3 L) filtered water
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  1 cup (200 g) white granulated sugar
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  8 bags black or green tea (or 2 tbsp / 10 g loose leaf)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  1 SCOBY
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  2 cups (480 mL) starter tea (mature kombucha)
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Fermentation Parameters</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Temperature</p>
                    <p className="text-sm text-muted-foreground">68–85°F (20–29°C), ideal: 75–80°F (24–27°C)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">First Fermentation (F1)</p>
                    <p className="text-sm text-muted-foreground">7–14 days depending on temperature and taste preference</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Beaker className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Target pH</p>
                    <p className="text-sm text-muted-foreground">2.5–3.5 when finished</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step by Step */}
          <div className="mt-8">
            <h3 className="font-serif text-xl font-semibold mb-6">Step-by-Step Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-card rounded-xl p-5 border">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-3">1</div>
                <h4 className="font-semibold mb-2">Make Sweet Tea</h4>
                <p className="text-sm text-muted-foreground">
                  Boil 4 cups (1 L) water, remove from heat, add tea bags and sugar. 
                  Steep 10–15 minutes, then remove tea bags.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-5 border">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-3">2</div>
                <h4 className="font-semibold mb-2">Cool the Tea</h4>
                <p className="text-sm text-muted-foreground">
                  Add remaining 10 cups (2.4 L) cold water to cool. Tea must be below 
                  85°F (29°C) before adding SCOBY—heat kills the culture.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-5 border">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-3">3</div>
                <h4 className="font-semibold mb-2">Add Starter & SCOBY</h4>
                <p className="text-sm text-muted-foreground">
                  Pour sweet tea into a glass jar. Add starter tea and gently place 
                  SCOBY on top (it may sink—that's okay).
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-5 border">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-3">4</div>
                <h4 className="font-semibold mb-2">Cover & Ferment</h4>
                <p className="text-sm text-muted-foreground">
                  Cover with a tightly woven cloth secured with a rubber band. 
                  Place in a warm, dark spot away from direct sunlight.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-5 border">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-3">5</div>
                <h4 className="font-semibold mb-2">Taste Test</h4>
                <p className="text-sm text-muted-foreground">
                  Start tasting after 7 days. When it's tangy but not too sour 
                  or sweet, it's ready for second fermentation or drinking.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-5 border">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-3">6</div>
                <h4 className="font-semibold mb-2">Bottle or Flavor</h4>
                <p className="text-sm text-muted-foreground">
                  Reserve 2 cups (480 mL) and SCOBY for next batch. Bottle the rest 
                  plain or proceed to second fermentation for carbonation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Fermentation */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Second Fermentation (F2): Adding Flavor & Fizz</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            The second fermentation is where you add fruit, juice, or other flavorings 
            and build carbonation in sealed bottles. This step is optional but highly recommended.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="font-serif text-xl font-semibold mb-4">F2 Process</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                    <span>Add 1–2 tbsp (15–30 mL) of fruit juice, purée, or 1–2 tsp (5–10 g) sugar per 16 oz (500 mL) bottle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                    <span>Fill bottles leaving 1–2 inches (2.5–5 cm) headspace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                    <span>Seal tightly with flip-top or screw-cap lids</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                    <span>Leave at room temperature 2–4 days (burp daily to release excess pressure)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">5</span>
                    <span>Refrigerate to stop fermentation and enjoy cold</span>
                  </li>
                </ol>
              </div>
              
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Bottle Safety Warning</h4>
                    <p className="text-sm text-muted-foreground">
                      CO₂ buildup can cause bottles to explode. Use pressure-rated bottles 
                      (flip-top brewing bottles or plastic soda bottles). Burp bottles 
                      daily and refrigerate promptly to prevent over-carbonation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Popular Flavor Combinations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-primary">Ginger Lemon</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    1 tbsp (15 mL) fresh ginger juice + 1 tbsp (15 mL) lemon juice per 16 oz (500 mL)
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-secondary">Berry Blast</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    2 tbsp (30 g) mashed mixed berries (blueberry, raspberry, strawberry) per 16 oz (500 mL)
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-accent">Tropical Paradise</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    2 tbsp (30 mL) mango purée + 1 tbsp (15 mL) pineapple juice per 16 oz (500 mL)
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-harvest">Apple Cinnamon</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    2 tbsp (30 mL) apple juice + 1/4 tsp cinnamon per 16 oz (500 mL)
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-primary">Lavender Honey</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    1 tsp (5 g) dried lavender + 1 tbsp (20 g) honey per 16 oz (500 mL)
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-secondary">Peach Basil</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    2 tbsp (30 g) peach purée + 2-3 fresh basil leaves per 16 oz (500 mL)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Health Considerations & Safety</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Potential Benefits
              </h3>
              <div className="bg-card rounded-xl p-6 border space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Probiotics:</strong> Contains beneficial bacteria that may support 
                  gut health, though strains vary by batch.<sup className="text-xs">[1]</sup>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Antioxidants:</strong> Retains polyphenols from tea, which have 
                  antioxidant properties.<sup className="text-xs">[2]</sup>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Organic Acids:</strong> Contains acetic acid and gluconic acid, 
                  which may have antimicrobial properties.<sup className="text-xs">[3]</sup>
                </p>
                <p className="text-xs text-muted-foreground mt-4 border-t pt-4">
                  [1] Coton M, et al. J Food Sci. 2017<br/>
                  [2] Jayabalan R, et al. Comprehensive Reviews in Food Science. 2014<br/>
                  [3] Greenwalt CJ, et al. J Food Prot. 2000
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Safety Considerations
              </h3>
              <div className="bg-card rounded-xl p-6 border space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Alcohol Content:</strong> Typically 0.5–3% ABV. Those avoiding 
                  alcohol should be aware.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Acidity:</strong> High acidity may aggravate acid reflux or 
                  GERD symptoms in some individuals.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Caffeine:</strong> Contains caffeine from tea (less than 
                  brewed tea due to fermentation).
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Contamination Risk:</strong> Improperly brewed kombucha can 
                  harbor harmful bacteria or mold. Always use clean equipment.
                </p>
                <p className="text-xs text-muted-foreground mt-4 border-t pt-4 italic">
                  Pregnant women, immunocompromised individuals, and children should 
                  consult a healthcare provider before consuming homemade kombucha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Troubleshooting Common Issues</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border">
              <h4 className="font-semibold mb-2">SCOBY Sinks</h4>
              <p className="text-sm text-muted-foreground">
                This is normal! A new SCOBY will form on top. The mother may float, 
                sink, or sit sideways—all are fine.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h4 className="font-semibold mb-2">Not Carbonating (F2)</h4>
              <p className="text-sm text-muted-foreground">
                Add more sugar source, ensure tight seals, keep warmer (75–80°F / 24–27°C), 
                or extend F2 time to 4-5 days.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h4 className="font-semibold mb-2">Too Sour</h4>
              <p className="text-sm text-muted-foreground">
                Fermented too long. Reduce F1 time next batch. Very sour kombucha 
                can be used as starter tea or as vinegar.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h4 className="font-semibold mb-2">Too Sweet</h4>
              <p className="text-sm text-muted-foreground">
                Needs more fermentation time. Ensure temperature is warm enough 
                (above 68°F / 20°C) and SCOBY is healthy.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h4 className="font-semibold mb-2">Mold on SCOBY</h4>
              <p className="text-sm text-muted-foreground">
                Fuzzy, colored growth (green, black, white fuzzy) means contamination. 
                Discard everything and start fresh with new SCOBY and starter.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h4 className="font-semibold mb-2">Vinegar Flies</h4>
              <p className="text-sm text-muted-foreground">
                Cover jar with tightly woven cloth (not cheesecloth). Fruit flies 
                carry harmful bacteria. If infested, discard and start over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Recommended Equipment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AffiliateProductCard
              name="1-Gallon Glass Jar"
              description="Wide-mouth glass jar perfect for brewing kombucha. Easy to clean and monitor fermentation."
              image={equipmentImage}
              price="$14.99"
              rating={5}
              category="Brewing Vessel"
              featured
            />
            <AffiliateProductCard
              name="Flip-Top Bottles (6-Pack)"
              description="Pressure-rated swing-top bottles for safe second fermentation and carbonation."
              image={equipmentImage}
              price="$24.99"
              rating={5}
              category="Bottles"
            />
            <AffiliateProductCard
              name="Organic SCOBY with Starter"
              description="Healthy, organic SCOBY with 12 oz (355 mL) of strong starter tea. Everything you need to begin brewing."
              image={equipmentImage}
              price="$19.99"
              rating={4}
              category="SCOBY"
            />
            <AffiliateProductCard
              name="pH Test Strips"
              description="Accurate pH strips to ensure your kombucha reaches safe acidity levels (below 4.0)."
              image={equipmentImage}
              price="$8.99"
              rating={4}
              category="Testing"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kombucha;