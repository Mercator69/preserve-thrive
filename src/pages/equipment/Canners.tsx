import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Flame, Timer, Gauge, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import equipmentImage from "@/assets/equipment.jpg";

const Canners = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/equipment" className="hover:text-foreground transition-colors">Equipment</Link>
            <span>/</span>
            <span className="text-foreground">Canners</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="gap-2">
              <Flame className="h-4 w-4" />
              Equipment Guide
            </Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Canning Equipment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Home canning preserves food through heat processing, creating shelf-stable 
              products that last 1-5+ years. Understand the difference between water bath 
              and pressure canning to choose the right equipment.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">How Canning Works</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                    <Timer className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Water Bath Canning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Jars are submerged in boiling water (212°F at sea level) for a specified time. 
                    Suitable for <strong>high-acid foods</strong> (pH below 4.6):
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Fruits and fruit juices</li>
                    <li>Jams, jellies, and preserves</li>
                    <li>Pickles and relishes</li>
                    <li>Tomatoes (with added acid)</li>
                    <li>Salsa (tested recipes only)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-2">
                    <Gauge className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Pressure Canning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Jars are processed under pressure (10-15 PSI) reaching 240°F-250°F. 
                    <strong>Required</strong> for <strong>low-acid foods</strong> (pH 4.6 or higher):
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Vegetables (except pickled)</li>
                    <li>Meats, poultry, and fish</li>
                    <li>Soups and stews</li>
                    <li>Beans and legumes</li>
                    <li>Stocks and broths</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Safety Warning:</strong> Low-acid foods MUST be pressure canned. Water bath canning 
                low-acid foods can result in botulism, a potentially fatal illness. Always follow USDA or 
                NCHFP tested recipes and processing times.
              </AlertDescription>
            </Alert>
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
                    <p className="text-sm"><strong>Room temperature storage</strong> - no refrigeration or freezer space needed</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Long shelf life</strong> - properly canned foods last 1-5+ years</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Ready-to-eat convenience</strong> - just open and serve or heat</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Preserve complete meals</strong> - can soups, stews, and sauces</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Reusable jars</strong> - only lids need replacement</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Makes great gifts</strong> - homemade jams and pickles are always appreciated</p>
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
                    <p className="text-sm"><strong>Safety knowledge required</strong> - must follow tested recipes exactly</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Time intensive</strong> - prep, processing, and cooling takes hours</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Nutrient loss</strong> - high heat processing reduces some vitamins</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Initial equipment cost</strong> - pressure canners are $100-$300+</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Texture changes</strong> - heat softens vegetables significantly</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Storage space</strong> - glass jars are heavy and take up space</p>
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
            From water bath canners for beginners to pressure canners for serious preservers.
          </p>

          <Tabs defaultValue="entry" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="entry">Entry Level (Water Bath)</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="expert">Expert (Pressure Canning)</TabsTrigger>
            </TabsList>

            <TabsContent value="entry" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Beginners</h3>
                <p className="text-sm text-muted-foreground">
                  Start with water bath canning - it's simpler and requires less expensive equipment. 
                  Perfect for jams, jellies, pickles, and high-acid salsas. A great way to learn 
                  canning basics before investing in a pressure canner.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="Granite Ware Water Bath Canner"
                  description="21.5 quart enamel-on-steel canner. Includes jar rack. Holds 7 quart jars or 9 pint jars. Affordable starter option."
                  image={equipmentImage}
                  price="$39.99"
                  rating={4}
                  amazonLink="https://www.amazon.com/dp/B0001UZL8A"
                  category="Best Budget"
                  featured
                />
                <AffiliateProductCard
                  name="Ball Canning Starter Kit"
                  description="Includes jar lifter, funnel, bubble remover, lid wand, and headspace tool. Essential accessories for safe canning."
                  image={equipmentImage}
                  price="$14.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B0000BYD60"
                  category="Essential Tools"
                />
                <AffiliateProductCard
                  name="Ball Regular Mouth Pint Jars (12 Pack)"
                  description="Classic mason jars perfect for jams, jellies, and pickles. Includes lids and bands."
                  image={equipmentImage}
                  price="$12.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B00B80TK2K"
                  category="Jars"
                />
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Growing Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Ready to expand? NESCO offers electric canners that simplify the process with 
                  digital controls, while weighted-gauge pressure canners are great for entering 
                  the world of low-acid food preservation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="NESCO Electric Water Bath Canner"
                  description="Digital controls with precise temperature management. Holds 7 quart jars. Easy-view lid. No stovetop required."
                  image={equipmentImage}
                  price="$129.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product-category/canning/"
                  category="Best Electric"
                  featured
                />
                <AffiliateProductCard
                  name="Presto 16-Quart Pressure Canner"
                  description="Weighted gauge pressure canner. Holds 10 pint jars or 7 quart jars. Air vent cover lock. Pressure regulator included."
                  image={equipmentImage}
                  price="$89.99"
                  rating={4}
                  amazonLink="https://www.amazon.com/dp/B00008CK4Z"
                  category="Entry Pressure"
                />
                <AffiliateProductCard
                  name="Ball Wide Mouth Quart Jars (12 Pack)"
                  description="Wide mouth for easy filling. Perfect for vegetables, soups, and whole fruits. Includes lids and bands."
                  image={equipmentImage}
                  price="$18.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B00B80TJZ6"
                  category="Large Batches"
                />
              </div>
            </TabsContent>

            <TabsContent value="expert" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Serious Canners</h3>
                <p className="text-sm text-muted-foreground">
                  Dial-gauge pressure canners offer precise pressure control essential for 
                  processing meats and low-acid vegetables. Large capacity models handle 
                  big harvests efficiently.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="All American 21.5 Quart Pressure Canner"
                  description="Made in USA. Dial gauge with precision. Metal-to-metal seal (no gasket). Holds 19 pint jars or 7 quart jars."
                  image={equipmentImage}
                  price="$349.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B00004S88Z"
                  category="Professional Grade"
                  featured
                />
                <AffiliateProductCard
                  name="All American 41.5 Quart Pressure Canner"
                  description="Maximum home capacity. Holds 32 pint jars or 19 quart jars. Built to last generations. Commercial-quality construction."
                  image={equipmentImage}
                  price="$499.99"
                  rating={5}
                  amazonLink="https://www.amazon.com/dp/B00004S892"
                  category="Maximum Capacity"
                />
                <AffiliateProductCard
                  name="Tattler Reusable Canning Lids (24 Pack)"
                  description="BPA-free reusable lids and rubber rings. Fits regular mouth jars. Saves money and reduces waste over time."
                  image={equipmentImage}
                  price="$29.99"
                  rating={4}
                  amazonLink="https://www.amazon.com/dp/B004QJWMNE"
                  category="Sustainable"
                />
              </div>
            </TabsContent>
          </Tabs>

          <p className="text-xs text-muted-foreground text-center mt-8">
            * Affiliate disclosure: We may earn a commission from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Canning Safety Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Use Tested Recipes Only</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Never modify canning recipes or use untested ones from the internet. Stick to USDA, 
                  NCHFP, or Ball Blue Book recipes that have been scientifically tested for safety.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Adjust for Altitude</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Above 1,000 feet elevation, increase processing time (water bath) or pressure 
                  (pressure canning) as specified in your recipe. Altitude affects boiling point.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Inspect Jars Carefully</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Check for chips, cracks, or residue. Discard any damaged jars. Always use new 
                  lids (rings can be reused if not rusted or bent).
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Test Your Seals</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  After 12-24 hours, press the center of each lid. It should not flex. Remove bands 
                  and try to lift the lid with your fingernail. A properly sealed lid won't budge.
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

export default Canners;
