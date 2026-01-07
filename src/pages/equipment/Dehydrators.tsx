import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Sun, Wind, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import equipmentImage from "@/assets/equipment.jpg";

const Dehydrators = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/equipment" className="hover:text-foreground transition-colors">Equipment</Link>
            <span>/</span>
            <span className="text-foreground">Dehydrators</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="gap-2">
              <Sun className="h-4 w-4" />
              Equipment Guide
            </Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Food Dehydrators
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dehydrating removes moisture from food through controlled heat and airflow, 
              creating shelf-stable snacks, ingredients, and emergency food supplies.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">How Dehydrating Works</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">1. Gentle Heat</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  A heating element warms air to 95°F-160°F, depending on the food type being dried.
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Wind className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">2. Air Circulation</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  A fan circulates warm air evenly across all trays, carrying moisture away from the food surface.
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">3. Moisture Removal</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Over 4-24 hours, moisture content drops to 5-20%, inhibiting bacterial growth and enzyme activity.
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Two Types of Dehydrators</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm">Vertical Flow (Stackable)</h4>
                  <p className="text-sm text-muted-foreground">
                    Fan mounted on top or bottom pushes air through stacked trays. More affordable, 
                    but may require rotating trays for even drying. Great for beginners.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Horizontal Flow (Box Style)</h4>
                  <p className="text-sm text-muted-foreground">
                    Fan mounted on back blows air across slide-in trays. More even drying without 
                    rotation. Prevents flavor mixing between trays. Professional-grade option.
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
                    <p className="text-sm"><strong>Affordable equipment</strong> - quality dehydrators start around $50-80</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Low operating cost</strong> - uses less electricity than an oven</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Healthy snacks</strong> - make jerky, fruit leather, and veggie chips with no additives</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Compact storage</strong> - dried foods take up 1/6 the space of fresh</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>No special supplies needed</strong> - store in any airtight container</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Set and forget</strong> - runs unattended for hours</p>
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
                    <p className="text-sm"><strong>Long drying times</strong> - most foods take 8-24 hours</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Nutrient loss</strong> - some vitamins (especially C) degrade with heat exposure</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Texture changes</strong> - foods become chewy or crispy, not fresh</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Shorter shelf life</strong> - 1-2 years vs 25+ years for freeze-dried</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Prep work required</strong> - foods must be sliced uniformly thin</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Some flavor mixing</strong> - especially in vertical flow models</p>
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
            NESCO has been the trusted name in food dehydration since 1932. Here are our picks for every level.
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
                  Start with a basic stackable dehydrator to learn the process. Perfect for making 
                  occasional jerky, dried fruits, or experimenting with new recipes without a big investment.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="NESCO FD-75PR Snackmaster Pro"
                  description="600 watts with 5 trays, expandable to 12. Top-mounted fan for even drying. Adjustable thermostat. Great entry-level option."
                  image={equipmentImage}
                  price="$79.99"
                  rating={4}
                  amazonLink="https://www.nesco.com/product/fd-75pr-5-tray-snackmaster-pro-food-dehydrator/"
                  category="Best Value"
                  featured
                />
                <AffiliateProductCard
                  name="NESCO Jerky Gun"
                  description="Make perfect jerky strips and snack sticks. Includes 5 attachments for different shapes."
                  image={equipmentImage}
                  price="$24.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                  category="Must-Have Accessory"
                />
                <AffiliateProductCard
                  name="NESCO Add-A-Tray (2 Pack)"
                  description="Expand your dehydrator capacity. Compatible with Snackmaster models."
                  image={equipmentImage}
                  price="$19.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                  category="Expand Capacity"
                />
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Regular Dehydrators</h3>
                <p className="text-sm text-muted-foreground">
                  If you dehydrate weekly or process garden harvests, a digital model with timer and 
                  temperature controls makes the process more precise and convenient.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="NESCO FD-2000 Digital Dehydrator"
                  description="Digital timer and temperature controls. 6 trays standard. LCD display for precise monitoring."
                  image={equipmentImage}
                  price="$119.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrators/"
                  category="Digital Control"
                  featured
                />
                <AffiliateProductCard
                  name="NESCO Fruit Roll Sheets (2 Pack)"
                  description="Make fruit leather and roll-ups. Fits all NESCO dehydrator trays. Dishwasher safe."
                  image={equipmentImage}
                  price="$14.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                  category="Fruit Leather"
                />
                <AffiliateProductCard
                  name="NESCO Clean-A-Screen (2 Pack)"
                  description="Fine mesh screens for drying small items like herbs, berries, and spices without falling through."
                  image={equipmentImage}
                  price="$12.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                  category="Herbs & Small Items"
                />
              </div>
            </TabsContent>

            <TabsContent value="expert" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Serious Preservers</h3>
                <p className="text-sm text-muted-foreground">
                  The Gardenmaster Pro is the gold standard for home dehydrating. Massive capacity, 
                  professional power, and expansion capability for processing large harvests efficiently.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="NESCO FD-1010 Gardenmaster Pro"
                  description="1000 watts of drying power. Expandable from 4 to 30 trays. Adjustable temp 95°F-160°F. Includes fruit roll sheet and jerky kit."
                  image={equipmentImage}
                  price="$139.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product/fd-1010-gardenmaster-pro-food-dehydrator/"
                  category="Professional"
                  featured
                />
                <AffiliateProductCard
                  name="NESCO Gardenmaster Add-A-Tray (2 Pack)"
                  description="Expand Gardenmaster capacity up to 30 trays. Process entire harvests in one batch."
                  image={equipmentImage}
                  price="$24.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                  category="Max Capacity"
                />
                <AffiliateProductCard
                  name="NESCO Jerky Spice Kit (3-Pack)"
                  description="Original, hot & spicy, and teriyaki seasonings. Each pack makes 6 lbs of jerky."
                  image={equipmentImage}
                  price="$12.99"
                  rating={4}
                  amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                  category="Flavor Variety"
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
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Dehydrating Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Slice Uniformly</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Use a mandoline slicer for consistent ⅛" to ¼" slices. Uniform thickness means 
                  all pieces finish at the same time.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Don't Overlap</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Arrange food in a single layer with space between pieces. Overlapping prevents 
                  airflow and creates moist spots that can spoil.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pre-Treat Fruits</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Dip light-colored fruits in lemon juice or ascorbic acid solution to prevent 
                  browning and preserve vitamin C content.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Condition Before Storage</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  After drying, place in a glass jar for 7-10 days, shaking daily. This 
                  redistributes any remaining moisture and reveals under-dried pieces.
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

export default Dehydrators;
