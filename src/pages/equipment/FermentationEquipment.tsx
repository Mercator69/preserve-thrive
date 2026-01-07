import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, FlaskConical, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import equipmentImage from "@/assets/equipment.jpg";

const FermentationEquipment = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/equipment" className="hover:text-foreground transition-colors">Equipment</Link>
            <span>/</span>
            <span className="text-foreground">Fermentation Equipment</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="gap-2">
              <FlaskConical className="h-4 w-4" />
              Equipment Guide
            </Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Fermentation Equipment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fermentation uses beneficial bacteria and yeasts to preserve food while creating 
              complex flavors and gut-healthy probiotics. The right equipment makes the process 
              foolproof.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">How Fermentation Works</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">1. Anaerobic Environment</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Food is submerged in brine or its own juices, creating an oxygen-free environment where beneficial bacteria thrive.
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">2. Lacto-Fermentation</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Lactobacillus bacteria convert sugars into lactic acid, lowering pH and creating an environment hostile to harmful bacteria.
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">3. Time & Temperature</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Fermentation progresses over days to months at room temperature, developing complex flavors and increasing probiotic content.
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Types of Fermentation</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-sm">Vegetable Fermentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Sauerkraut, kimchi, pickles. Vegetables are salted and kept submerged to 
                    encourage lacto-fermentation.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Beverage Fermentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Kombucha, water kefir, ginger beer. SCOBY or grains ferment sweetened 
                    liquid into probiotic drinks.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Dairy Fermentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Yogurt, kefir, cheese. Cultures transform milk into tangy, 
                    probiotic-rich products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Pros & Cons</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 dark:border-green-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Minimal equipment needed</strong> - can start with just jars and salt</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Health benefits</strong> - creates probiotics for gut health</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Enhanced nutrients</strong> - increases vitamin and enzyme content</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>No heat required</strong> - preserves heat-sensitive nutrients</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Complex flavors</strong> - develops unique tangy, umami notes</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Low cost</strong> - salt is the main preservative needed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                    <XCircle className="h-5 w-5" />
                    Disadvantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Requires refrigeration</strong> - fermented foods need cold storage after active fermentation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Shorter shelf life</strong> - months, not years like canned goods</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Mold risk</strong> - exposed surfaces can develop mold (usually harmless)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Strong flavors</strong> - not everyone enjoys the tangy taste</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Timing variability</strong> - fermentation speed depends on temperature</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Gas production</strong> - can cause jars to overflow or lids to pop</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendations */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-4 text-center">Recommended Products</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            From basic setups to professional fermentation crocks, find the right equipment for your fermentation journey.
          </p>

          <Tabs defaultValue="entry" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="entry">Entry Level</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="expert">Expert / High Volume</TabsTrigger>
            </TabsList>

            <TabsContent value="entry" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Beginners</h3>
                <p className="text-sm text-muted-foreground">
                  Start with mason jar fermentation lids and weights. They're affordable, work with 
                  jars you may already have, and make your first batch of sauerkraut or pickles foolproof.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="Mason Jar Lifestyle Fermentation Lids (4 Pack)"
                  description="BPA-free silicone airlock lids. Fits wide mouth mason jars. No burping required. Dishwasher safe."
                  image={equipmentImage}
                  price="$19.99"
                  rating={5}
                  amazonLink="https://masonjarlifestyle.com/collections/fermentation"
                  category="Best Starter"
                  featured
                />
                <AffiliateProductCard
                  name="Glass Fermentation Weights (4 Pack)"
                  description="Keeps vegetables submerged below brine. Fits wide mouth jars. Food-safe glass."
                  image={equipmentImage}
                  price="$14.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B076V99HTW"
                  category="Essential"
                />
                <AffiliateProductCard
                  name="Ball Wide Mouth Half Gallon Jars (6 Pack)"
                  description="Perfect size for sauerkraut and larger batches. Wide mouth for easy packing."
                  image={equipmentImage}
                  price="$24.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B00B80TJZ0"
                  category="Large Batches"
                />
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Regular Fermenters</h3>
                <p className="text-sm text-muted-foreground">
                  Ready to expand your fermentation practice? Dedicated crocks, kombucha vessels, 
                  and specialized lids make the process more convenient and consistent.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="Masontops Complete Fermentation Kit"
                  description="Includes 4 pickle pipes, 4 pickle pebbles, and recipe book. Everything needed for mason jar fermentation."
                  image={equipmentImage}
                  price="$34.99"
                  rating={5}
                  amazonLink="https://www.masontops.com/collections/fermentation"
                  category="Complete Kit"
                  featured
                />
                <AffiliateProductCard
                  name="1 Gallon Kombucha Brewing Jar"
                  description="Wide mouth glass jar with cloth cover and rubber band. Perfect for continuous brew kombucha."
                  image={equipmentImage}
                  price="$19.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B074N3JGV1"
                  category="Kombucha"
                />
                <AffiliateProductCard
                  name="reCAP Mason Jar Pour Lid (4 Pack)"
                  description="Easy pour spout for finished ferments. No mess dispensing. Fits regular mouth jars."
                  image={equipmentImage}
                  price="$15.99"
                  rating={4}
                  amazonLink="https://recapmasonjars.com"
                  category="Convenience"
                />
              </div>
            </TabsContent>

            <TabsContent value="expert" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Serious Fermenters</h3>
                <p className="text-sm text-muted-foreground">
                  Traditional ceramic crocks with water-seal technology provide the ideal 
                  fermentation environment for large batches of sauerkraut, kimchi, and pickles.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="TSM German-Style Fermentation Crock (5L)"
                  description="Traditional ceramic crock with water-seal lid. Includes weights. Perfect anaerobic environment."
                  image={equipmentImage}
                  price="$79.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B00BPMXQ7E"
                  category="Traditional"
                  featured
                />
                <AffiliateProductCard
                  name="Ohio Stoneware 3 Gallon Crock"
                  description="Made in USA. Lead-free stoneware with lid and weights. Handles large batches."
                  image={equipmentImage}
                  price="$129.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B003YCGC8U"
                  category="Premium"
                />
                <AffiliateProductCard
                  name="Continuous Brew Kombucha System"
                  description="2.5 gallon vessel with stainless spigot. Brew and dispense without disturbing SCOBY."
                  image={equipmentImage}
                  price="$49.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B01MCXXB8J"
                  category="Continuous Brew"
                />
              </div>
            </TabsContent>
          </Tabs>

          <p className="text-xs text-muted-foreground text-center mt-8">
            * Affiliate disclosure: We may earn a commission from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Fermentation Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Keep Everything Submerged</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  The #1 rule of fermentation: all food must stay below the brine. Anything exposed 
                  to air can develop mold. Use weights to keep vegetables pushed down.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Use the Right Salt</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Use pure salt without iodine or anti-caking agents. Sea salt, kosher salt, or 
                  pickling salt are ideal. Iodine can inhibit fermentation.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Temperature Matters</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  60-75°F is ideal for most vegetable fermentation. Warmer = faster (but potentially 
                  mushy). Cooler = slower (but crunchier). Avoid extremes.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Trust Your Senses</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Good ferments smell tangy and sour. Bad ferments smell rotten or "off." When in 
                  doubt, trust your nose - it's evolved to detect spoiled food.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-background">
        <div className="container-wide text-center">
          <Link 
            to="/equipment" 
            className="text-primary hover:underline font-medium"
          >
            ← Back to All Equipment
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FermentationEquipment;
