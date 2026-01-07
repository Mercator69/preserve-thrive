import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Wind, Package, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import equipmentImage from "@/assets/equipment.jpg";

const VacuumSealers = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/equipment" className="hover:text-foreground transition-colors">Equipment</Link>
            <span>/</span>
            <span className="text-foreground">Vacuum Sealers</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="gap-2">
              <Wind className="h-4 w-4" />
              Equipment Guide
            </Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Vacuum Sealers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vacuum sealing removes air from food packaging, extending freshness 3-5x longer 
              and preventing freezer burn. Essential for meal prep, sous vide, and long-term storage.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">How Vacuum Sealing Works</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">1. Bag Placement</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Food is placed in a specially textured bag with channels that allow air to be extracted evenly.
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Wind className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">2. Air Extraction</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  A vacuum pump removes up to 99% of air from the bag, creating negative pressure around the food.
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">3. Heat Sealing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  A heated bar melts the bag opening, creating an airtight seal that locks out oxygen and moisture.
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Why Removing Air Matters</h3>
              <p className="text-muted-foreground">
                Oxygen is the primary enemy of food freshness. It promotes bacterial growth, causes oxidation 
                (which leads to rancidity in fats and browning), and contributes to freezer burn. By removing 
                99% of air, vacuum sealing dramatically slows these processes. Vacuum-sealed foods in the freezer 
                can last 2-3 years compared to 3-6 months for traditionally wrapped foods.
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
                    <p className="text-sm"><strong>Extends freezer life 3-5x</strong> - prevents freezer burn and ice crystals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Affordable entry point</strong> - quality sealers start around $50</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Sous vide compatible</strong> - perfect for precision cooking</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Compact storage</strong> - removes bulky air pockets from packaging</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Quick and easy</strong> - seal a bag in under 30 seconds</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Versatile uses</strong> - marinating, portioning, protecting valuables</p>
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
                    <p className="text-sm"><strong>Ongoing bag costs</strong> - specialized bags are more expensive than regular storage</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Not for soft/delicate foods</strong> - can crush berries, bread, chips</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Liquid limitations</strong> - liquids can interfere with sealing on basic models</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Overheating on heavy use</strong> - budget models need cooling breaks</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Single-use bags</strong> - creates plastic waste (though bags can sometimes be reused)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                    <p className="text-sm"><strong>Freezing still required</strong> - doesn't preserve at room temperature alone</p>
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
            From budget-friendly basics to professional-grade machines, find the right sealer for your needs.
          </p>

          <Tabs defaultValue="entry" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="entry">Entry Level</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="expert">Expert / Heavy Use</TabsTrigger>
            </TabsList>

            <TabsContent value="entry" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Beginners</h3>
                <p className="text-sm text-muted-foreground">
                  Starting out? These affordable options handle occasional use well. Perfect for 
                  weekly meal prep, buying bulk meats, or trying sous vide cooking for the first time.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="NESCO VS-02 Basic Vacuum Sealer"
                  description="Entry-level sealer with built-in bag cutter. Automatic vacuum and seal. Compact design perfect for beginners."
                  image={equipmentImage}
                  price="$49.99"
                  rating={4}
                  amazonLink="https://www.nesco.com/product-category/vacuum-sealers/sealers/"
                  category="Best Budget"
                  featured
                />
                <AffiliateProductCard
                  name="OutOfAir 8in x 100ft Vacuum Roll"
                  description="Smaller width for portions and smaller items. Same quality construction with built-in cutter. Budget-friendly."
                  image={equipmentImage}
                  price="$24.99"
                  rating={5}
                  amazonLink="https://outofair.com/dispenser-box-rolls"
                  category="Starter Bags"
                />
                <AffiliateProductCard
                  name="OutOfAir Pre-Cut Bags (100 Count)"
                  description="Pre-cut quart-size bags for convenience. No cutting required. Heavy-duty 4-mil thickness."
                  image={equipmentImage}
                  price="$19.99"
                  rating={5}
                  amazonLink="https://outofair.com/precut-vacuum-sealer-bags"
                  category="Convenient"
                />
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Regular Users</h3>
                <p className="text-sm text-muted-foreground">
                  If you seal several times a week, invest in a mid-range model with better suction, 
                  moist food modes, and accessory ports for jars and containers.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="NESCO VS-12 Deluxe Vacuum Sealer"
                  description="130 watts with double heat seal and viewing lid. Includes starter kit with bags. Pulse vacuum for delicate foods."
                  image={equipmentImage}
                  price="$89.99"
                  rating={5}
                  amazonLink="https://www.nesco.com/product/deluxe-vacuum-sealer/"
                  category="Best Value"
                  featured
                />
                <AffiliateProductCard
                  name="KitchenBoss 3-in-1 Vacuum Sealer"
                  description="Multi-function sealer with dry, moist, and gentle modes. -60kPa suction power. Includes 20 bags and hose for containers."
                  image={equipmentImage}
                  price="$79.99"
                  rating={5}
                  amazonLink="https://kitchenbossglobal.com/collections/vacuum-sealer"
                  category="Most Versatile"
                />
                <AffiliateProductCard
                  name="OutOfAir 11in x 100ft Vacuum Roll"
                  description="Commercial-grade embossed bags with dispenser cutter box. BPA-free, compatible with all clamp-style sealers."
                  image={equipmentImage}
                  price="$29.99"
                  rating={5}
                  amazonLink="https://outofair.com/dispenser-box-rolls"
                  category="Best Bags"
                />
              </div>
            </TabsContent>

            <TabsContent value="expert" className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Best For Heavy Users & Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  Processing large quantities or running a business? Chamber sealers and commercial-grade 
                  external sealers offer superior performance, liquid handling, and durability.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AffiliateProductCard
                  name="KitchenBoss Sous Vide Cooker G320"
                  description="1100W precision cooker with ultra-quiet operation. Perfect companion to vacuum sealing for sous vide cooking."
                  image={equipmentImage}
                  price="$89.99"
                  rating={5}
                  amazonLink="https://kitchenbossglobal.com/products/sous-vide-cooker-g320-silver-machine-ultra-quiet-1100-watts"
                  category="Sous Vide"
                  featured
                />
                <AffiliateProductCard
                  name="OutOfAir Bulk Value Pack"
                  description="Combination pack with multiple roll sizes. Best value for serious food preservers. Free shipping on orders over $50."
                  image={equipmentImage}
                  price="$59.99"
                  rating={5}
                  amazonLink="https://outofair.com/bulk"
                  category="Bulk Bags"
                />
                <AffiliateProductCard
                  name="OutOfAir Vacuum Accessory Hose"
                  description="Universal accessory hose for vacuum sealing containers, wine bottles, and mason jar attachments."
                  image={equipmentImage}
                  price="$9.99"
                  rating={4}
                  amazonLink="https://outofair.com/vacuum-sealer-accessories"
                  category="Essential"
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
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Pro Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Freeze Liquids First</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  When vacuum sealing soups or marinades, freeze them first. The frozen liquid won't 
                  get sucked into the machine during the vacuum process.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Leave Extra Bag Length</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Cut bags 3-4 inches longer than needed. This gives you room to reseal if the bag 
                  gets opened, or to trim and reseal after partial use.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Use the Pulse Function</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  For delicate items like chips, crackers, or ripe fruit, use manual pulse mode to 
                  control vacuum strength and prevent crushing.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Double Seal for Long Storage</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  For foods you'll store for months, run the seal cycle twice to create a double-wide 
                  seal. This provides extra insurance against leaks.
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

export default VacuumSealers;
