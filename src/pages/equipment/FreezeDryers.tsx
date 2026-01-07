import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Snowflake, Timer, Zap, ThermometerSnowflake } from "lucide-react";
import { Link } from "react-router-dom";
import equipmentImage from "@/assets/equipment.jpg";

const FreezeDryers = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/equipment" className="hover:text-foreground transition-colors">Equipment</Link>
            <span>/</span>
            <span className="text-foreground">Freeze Dryers</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="gap-2">
              <Snowflake className="h-4 w-4" />
              Equipment Guide
            </Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Freeze Dryers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Freeze drying (lyophilization) preserves food by removing moisture through sublimation, 
              retaining 97% of nutrients and extending shelf life up to 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">How Freeze Drying Works</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <ThermometerSnowflake className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">1. Freezing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Food is frozen to -30°F to -50°F, converting all moisture into solid ice crystals.
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">2. Primary Drying</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  A vacuum is applied and gentle heat causes ice to sublimate directly into vapor, bypassing the liquid phase.
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Timer className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">3. Secondary Drying</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Temperature increases slightly to remove any remaining bound moisture, achieving 1-4% final moisture content.
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">The Science Behind Sublimation</h3>
              <p className="text-muted-foreground">
                Unlike conventional drying that uses heat (which damages nutrients and changes texture), 
                freeze drying works at low temperatures under vacuum conditions. Water transitions directly 
                from ice to vapor without ever becoming liquid. This preserves the cellular structure, 
                color, flavor, and nutritional content of foods. When rehydrated, freeze-dried foods 
                return to near-original texture and taste.
              </p>
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
                    <p className="text-sm"><strong>25+ year shelf life</strong> when properly stored in Mylar with oxygen absorbers</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>97% nutrient retention</strong> - far superior to canning (60-80%) or dehydrating (50-60%)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Original texture preserved</strong> - rehydrates to near-fresh quality</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Lightweight</strong> - perfect for camping, hiking, and emergency kits</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Can preserve almost anything</strong> - including dairy, eggs, and complete meals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>No additives needed</strong> - preserves food naturally</p>
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
                    <p className="text-sm"><strong>High initial cost</strong> - $1,800-$5,300 for home units</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Long cycle times</strong> - 20-40 hours per batch depending on food type</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Electricity consumption</strong> - uses significant power during operation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Maintenance required</strong> - oil changes for standard pumps, filter replacements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Large footprint</strong> - requires dedicated counter or floor space</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Noise level</strong> - vacuum pumps can be loud during operation</p>
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
            Harvest Right dominates the home freeze dryer market. Here are our picks for different experience levels and budgets.
          </p>

          <Tabs defaultValue="entry" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="entry">Entry Level</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="expert">Expert / Commercial</TabsTrigger>
            </TabsList>

            <TabsContent value="entry" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Beginners</h3>
                <p className="text-sm text-muted-foreground">
                  If you're new to freeze drying, start with the Small Pro. It's perfect for learning 
                  the process without the commitment of larger machines. Great for individuals, couples, 
                  or small families who want to preserve seasonal produce, make healthy snacks, or 
                  build a modest emergency food supply.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="Harvest Right Small Pro Freeze Dryer"
                  description="Perfect for beginners. Freeze dries 6-10 lbs per batch, up to 1,800 lbs yearly. 4 trays included. Ideal for small families or individuals."
                  image={equipmentImage}
                  price="$1,795"
                  rating={5}
                  amazonLink="https://harvestright.com/product/home-freeze-dryer/?attribute_pa_attribute-size=attribute-size-small"
                  category="Entry Level"
                  featured
                />
                <AffiliateProductCard
                  name="Harvest Right Mylar Bags Starter Kit"
                  description="50 Mylar bags with oxygen absorbers. Multiple sizes included. Essential for long-term storage of freeze-dried foods."
                  image={equipmentImage}
                  price="$59.99"
                  rating={4}
                  amazonLink="https://harvestright.com/shop/"
                  category="Essential Supply"
                />
                <AffiliateProductCard
                  name="Harvest Right Silicone Tray Liners"
                  description="Reusable silicone liners prevent sticking. Easy cleanup. Set of 4 fits standard trays."
                  image={equipmentImage}
                  price="$39.99"
                  rating={5}
                  amazonLink="https://harvestright.com/shop/"
                  category="Recommended Accessory"
                />
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Growing Families</h3>
                <p className="text-sm text-muted-foreground">
                  The Medium Pro is Harvest Right's best-selling model for good reason. It offers 
                  the perfect balance of capacity and price. Ideal for families who want to preserve 
                  garden harvests, make their own camping meals, or build a year's worth of emergency food.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="Harvest Right Medium Pro Freeze Dryer"
                  description="Most popular size. Freeze dries 10-15 lbs per batch, up to 3,000 lbs yearly. 5 trays with 546 sq in capacity. Great for families."
                  image={equipmentImage}
                  price="$2,695"
                  rating={5}
                  amazonLink="https://harvestright.com/product/home-freeze-dryer/?attribute_pa_attribute-size=attribute-size-medium"
                  category="Best Seller"
                  featured
                />
                <AffiliateProductCard
                  name="Harvest Right Oil-Free Pump Upgrade"
                  description="Premier oil-free vacuum pump. No maintenance, no oil changes. Quieter operation and longer lifespan than standard pumps."
                  image={equipmentImage}
                  price="$1,495"
                  rating={5}
                  amazonLink="https://harvestright.com/shop/"
                  category="Recommended Upgrade"
                />
                <AffiliateProductCard
                  name="Harvest Right Stainless Steel Trays"
                  description="Premium stainless steel replacement trays. More durable than standard trays. Set of 5."
                  image={equipmentImage}
                  price="$149.99"
                  rating={5}
                  amazonLink="https://harvestright.com/shop/"
                  category="Premium Upgrade"
                />
              </div>
            </TabsContent>

            <TabsContent value="expert" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Serious Preservers & Homesteaders</h3>
                <p className="text-sm text-muted-foreground">
                  The Large and XL models are for serious food preservers, homesteaders, or those 
                  looking to start a small freeze-dried food business. Maximum capacity for processing 
                  large harvests quickly. The XL is essentially commercial-grade for home use.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="Harvest Right Large Pro Freeze Dryer"
                  description="For serious preservers. Freeze dries 18-27 lbs per batch, up to 5,400 lbs yearly. 6 trays with 816 sq in capacity."
                  image={equipmentImage}
                  price="$3,295"
                  rating={5}
                  amazonLink="https://harvestright.com/product/home-freeze-dryer/?attribute_pa_attribute-size=attribute-size-large"
                  category="High Capacity"
                  featured
                />
                <AffiliateProductCard
                  name="Harvest Right XL Pro Freeze Dryer"
                  description="Commercial-grade for homesteaders. Freeze dries 27-45 lbs per batch. 8 extra-large trays with 1,365 sq in capacity."
                  image={equipmentImage}
                  price="$5,295"
                  rating={5}
                  amazonLink="https://harvestright.com/product/home-freeze-dryer/?attribute_pa_attribute-size=attribute-size-xl"
                  category="Commercial Grade"
                />
                <AffiliateProductCard
                  name="Harvest Right Oil-Free Pump (Premier)"
                  description="Essential for heavy use. No maintenance required. Quieter and more reliable for continuous operation."
                  image={equipmentImage}
                  price="$1,495"
                  rating={5}
                  amazonLink="https://harvestright.com/shop/"
                  category="Essential for XL"
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
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Getting Started Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pre-Freeze Your Food</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Pre-freezing food in your regular freezer for 24 hours before loading the freeze dryer 
                  can significantly reduce cycle times and energy consumption.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Slice Uniformly</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Cut food into uniform pieces (¼" to ½" thick) for even drying. Uneven pieces mean 
                  some items finish before others, extending total cycle time.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Don't Overload Trays</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Spread food in a single layer without overlapping. Overcrowding reduces air circulation 
                  and can result in incomplete drying.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Store Immediately</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Freeze-dried food reabsorbs moisture quickly. Package in Mylar bags with oxygen 
                  absorbers within minutes of completing a batch.
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

export default FreezeDryers;
