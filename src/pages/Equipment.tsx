import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, ExternalLink, ArrowRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import equipmentImage from "@/assets/equipment.jpg";

const Equipment = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Equipment Guide</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Food Preservation Equipment
            </h1>
            <p className="text-lg text-muted-foreground">
              Quality equipment makes preservation safer, easier, and more efficient. 
              We've researched products from trusted brands to bring you our honest recommendations.
            </p>
            <p className="text-sm text-muted-foreground italic">
              * Affiliate disclosure: We may earn a commission from qualifying purchases at no extra cost to you. Prices and availability subject to change.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-8 bg-accent/10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <span className="text-sm font-medium text-muted-foreground">Featured Brands:</span>
            <a href="https://harvestright.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">Harvest Right</a>
            <a href="https://www.nesco.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">NESCO</a>
            <a href="https://kitchenbossglobal.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">KitchenBoss</a>
            <a href="https://outofair.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">OutOfAir</a>
            <a href="https://www.masontops.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">Mason Jar Lifestyle</a>
            <a href="https://recapmasonjars.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">reCAP Mason Jars</a>
          </div>
        </div>
      </section>

      {/* Equipment Tabs */}
      <section className="py-16">
        <div className="container-wide">
          <Tabs defaultValue="freeze-drying" className="space-y-8">
            <TabsList className="w-full justify-start overflow-x-auto flex-nowrap bg-muted p-1 h-auto">
              <TabsTrigger value="freeze-drying" className="px-4 py-2">
                <Link to="/equipment/freeze-dryers" className="flex items-center gap-1">Freeze Drying</Link>
              </TabsTrigger>
              <TabsTrigger value="vacuum-sealing" className="px-4 py-2">
                <Link to="/equipment/vacuum-sealers" className="flex items-center gap-1">Vacuum Sealing</Link>
              </TabsTrigger>
              <TabsTrigger value="dehydrating" className="px-4 py-2">
                <Link to="/equipment/dehydrators" className="flex items-center gap-1">Dehydrating</Link>
              </TabsTrigger>
              <TabsTrigger value="canning" className="px-4 py-2">
                <Link to="/equipment/canners" className="flex items-center gap-1">Canning</Link>
              </TabsTrigger>
              <TabsTrigger value="fermenting" className="px-4 py-2">
                <Link to="/equipment/fermentation" className="flex items-center gap-1">Fermenting</Link>
              </TabsTrigger>
              <TabsTrigger value="mason-jars" className="px-4 py-2">Mason Jar Accessories</TabsTrigger>
              <TabsTrigger value="budget" className="px-4 py-2">Budget Options</TabsTrigger>
            </TabsList>

            {/* Freeze Drying - Harvest Right */}
            <TabsContent value="freeze-drying" className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-serif text-2xl font-bold">Freeze Dryers</h2>
                  <Badge variant="outline">Harvest Right</Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  Harvest Right is the leading manufacturer of home freeze dryers, offering machines in multiple sizes to fit any household's needs.<sup>[1]</sup>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    name="Harvest Right Medium Pro Freeze Dryer"
                    description="Most popular size. Freeze dries 10-15 lbs per batch, up to 3,000 lbs yearly. 5 trays with 546 sq in capacity. Great for families."
                    image={equipmentImage}
                    price="$2,695"
                    rating={5}
                    amazonLink="https://harvestright.com/product/home-freeze-dryer/?attribute_pa_attribute-size=attribute-size-medium"
                    category="Best Seller"
                  />
                  <AffiliateProductCard
                    name="Harvest Right Large Pro Freeze Dryer"
                    description="For serious preservers. Freeze dries 18-27 lbs per batch, up to 5,400 lbs yearly. 6 trays with 816 sq in capacity."
                    image={equipmentImage}
                    price="$3,295"
                    rating={5}
                    amazonLink="https://harvestright.com/product/home-freeze-dryer/?attribute_pa_attribute-size=attribute-size-large"
                    category="High Capacity"
                  />
                  <AffiliateProductCard
                    name="Harvest Right XL Pro Freeze Dryer"
                    description="Commercial-grade for homesteaders. Freeze dries 27-45 lbs per batch. 8 extra-large trays with 1,365 sq in capacity."
                    image={equipmentImage}
                    price="$5,295"
                    rating={5}
                    amazonLink="https://harvestright.com/product/home-freeze-dryer/?attribute_pa_attribute-size=attribute-size-xl"
                    category="Commercial"
                  />
                  <AffiliateProductCard
                    name="Harvest Right Oil-Free Pump Upgrade"
                    description="Premier oil-free vacuum pump. No maintenance, no oil changes. Quieter operation and longer lifespan than standard pumps."
                    image={equipmentImage}
                    price="$1,495"
                    rating={5}
                    amazonLink="https://harvestright.com/shop/"
                    category="Accessory"
                  />
                  <AffiliateProductCard
                    name="Harvest Right Mylar Bags Starter Kit"
                    description="50 Mylar bags with oxygen absorbers. Multiple sizes included. Essential for long-term storage of freeze-dried foods."
                    image={equipmentImage}
                    price="$59.99"
                    rating={4}
                    amazonLink="https://harvestright.com/shop/"
                    category="Supplies"
                  />
                  <AffiliateProductCard
                    name="Harvest Right Silicone Tray Liners"
                    description="Reusable silicone liners prevent sticking. Easy cleanup. Set of 4 fits standard trays."
                    image={equipmentImage}
                    price="$39.99"
                    rating={5}
                    amazonLink="https://harvestright.com/shop/"
                    category="Accessory"
                  />
                  <AffiliateProductCard
                    name="Harvest Right Stainless Steel Trays"
                    description="Premium stainless steel replacement trays. More durable than standard trays. Set of 4."
                    image={equipmentImage}
                    price="$149.99"
                    rating={5}
                    amazonLink="https://harvestright.com/shop/"
                    category="Upgrade"
                  />
                </div>
                <Alert className="mt-6 bg-muted/50">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Investment Tip:</strong> While freeze dryers are a significant investment, they pay for themselves over time. Freeze-dried food retains 97% of nutrients and can last 25+ years when properly stored.<sup>[1]</sup>
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>

            {/* Vacuum Sealing - NESCO, KitchenBoss, OutOfAir */}
            <TabsContent value="vacuum-sealing" className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-serif text-2xl font-bold">Vacuum Sealers</h2>
                  <Badge variant="outline">NESCO</Badge>
                  <Badge variant="outline">KitchenBoss</Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  Vacuum sealing extends food freshness 3-5x longer by removing air and preventing freezer burn.<sup>[2]</sup>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="NESCO VS-12 Deluxe Vacuum Sealer"
                    description="130 watts with double heat seal and viewing lid. Includes starter kit with bags. Pulse vacuum for delicate foods. Compact countertop design."
                    image={equipmentImage}
                    price="$89.99"
                    rating={5}
                    amazonLink="https://www.nesco.com/product/deluxe-vacuum-sealer/"
                    category="NESCO"
                    featured
                  />
                  <AffiliateProductCard
                    name="NESCO VS-02 Basic Vacuum Sealer"
                    description="Entry-level sealer with built-in bag cutter. Automatic vacuum and seal. Compact design perfect for beginners."
                    image={equipmentImage}
                    price="$49.99"
                    rating={4}
                    amazonLink="https://www.nesco.com/product-category/vacuum-sealers/sealers/"
                    category="NESCO"
                  />
                  <AffiliateProductCard
                    name="KitchenBoss 3-in-1 Vacuum Sealer"
                    description="Multi-function sealer with dry, moist, and gentle modes. -60kPa suction power. Includes 20 bags and hose for containers."
                    image={equipmentImage}
                    price="$79.99"
                    rating={5}
                    amazonLink="https://kitchenbossglobal.com/collections/vacuum-sealer"
                    category="KitchenBoss"
                  />
                  <AffiliateProductCard
                    name="KitchenBoss Sous Vide Cooker G320"
                    description="1100W precision cooker with ultra-quiet operation. Perfect companion to vacuum sealing for sous vide cooking."
                    image={equipmentImage}
                    price="$89.99"
                    rating={5}
                    amazonLink="https://kitchenbossglobal.com/products/sous-vide-cooker-g320-silver-machine-ultra-quiet-1100-watts"
                    category="KitchenBoss"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-serif text-2xl font-bold">Vacuum Sealer Bags & Rolls</h2>
                  <Badge variant="outline">OutOfAir</Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  OutOfAir specializes in high-quality vacuum sealer bags compatible with most major brands including FoodSaver.<sup>[3]</sup>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="OutOfAir 11in x 100ft Vacuum Sealer Roll"
                    description="Commercial-grade embossed bags with dispenser cutter box. BPA-free, compatible with all clamp-style sealers."
                    image={equipmentImage}
                    price="$29.99"
                    rating={5}
                    amazonLink="https://outofair.com/dispenser-box-rolls"
                    category="Rolls"
                    featured
                  />
                  <AffiliateProductCard
                    name="OutOfAir 8in x 100ft Vacuum Sealer Roll"
                    description="Smaller width for portions and smaller items. Same quality construction with built-in cutter."
                    image={equipmentImage}
                    price="$24.99"
                    rating={5}
                    amazonLink="https://outofair.com/dispenser-box-rolls"
                    category="Rolls"
                  />
                  <AffiliateProductCard
                    name="OutOfAir Pre-Cut Bags (100 Count)"
                    description="Pre-cut quart-size bags for convenience. No cutting required. Heavy-duty 4-mil thickness."
                    image={equipmentImage}
                    price="$19.99"
                    rating={5}
                    amazonLink="https://outofair.com/precut-vacuum-sealer-bags"
                    category="Pre-Cut"
                  />
                  <AffiliateProductCard
                    name="OutOfAir Zipper Bags (50 Count)"
                    description="Resealable zipper vacuum bags. Vacuum seal, use, and reseal multiple times. Great for snacks and portions."
                    image={equipmentImage}
                    price="$24.99"
                    rating={4}
                    amazonLink="https://outofair.com/zipper-vacuum-sealer-bags"
                    category="Reusable"
                  />
                  <AffiliateProductCard
                    name="OutOfAir Bulk Value Pack"
                    description="Combination pack with multiple roll sizes. Best value for serious food preservers. Free shipping on orders over $50."
                    image={equipmentImage}
                    price="$59.99"
                    rating={5}
                    amazonLink="https://outofair.com/bulk"
                    category="Bulk"
                  />
                  <AffiliateProductCard
                    name="OutOfAir Vacuum Accessory Hose"
                    description="Universal accessory hose for vacuum sealing containers, wine bottles, and mason jar attachments."
                    image={equipmentImage}
                    price="$9.99"
                    rating={4}
                    amazonLink="https://outofair.com/vacuum-sealer-accessories"
                    category="Accessory"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Dehydrating - NESCO */}
            <TabsContent value="dehydrating" className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-serif text-2xl font-bold">Food Dehydrators</h2>
                  <Badge variant="outline">NESCO</Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  NESCO has been a trusted name in food dehydration since 1932, proudly made in the USA.<sup>[4]</sup>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    name="NESCO FD-75PR Snackmaster Pro"
                    description="600 watts with 5 trays, expandable to 12. Top-mounted fan for even drying. Adjustable thermostat. Great entry-level option."
                    image={equipmentImage}
                    price="$79.99"
                    rating={4}
                    amazonLink="https://www.nesco.com/product/fd-75pr-5-tray-snackmaster-pro-food-dehydrator/"
                    category="Best Value"
                  />
                  <AffiliateProductCard
                    name="NESCO FD-2000 Digital Dehydrator"
                    description="Digital timer and temperature controls. 6 trays standard. LCD display for precise monitoring."
                    image={equipmentImage}
                    price="$119.99"
                    rating={5}
                    amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrators/"
                    category="Digital"
                  />
                  <AffiliateProductCard
                    name="NESCO Add-A-Tray (2 Pack)"
                    description="Expand your dehydrator capacity. Compatible with Snackmaster and Gardenmaster models."
                    image={equipmentImage}
                    price="$19.99"
                    rating={5}
                    amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                    category="Accessory"
                  />
                  <AffiliateProductCard
                    name="NESCO Fruit Roll Sheets (2 Pack)"
                    description="For making fruit leather and roll-ups. Solid sheets for liquids and purees."
                    image={equipmentImage}
                    price="$12.99"
                    rating={5}
                    amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                    category="Accessory"
                  />
                  <AffiliateProductCard
                    name="NESCO Clean-A-Screen (2 Pack)"
                    description="Fine mesh screens for drying herbs, small items, and sticky foods. Dishwasher safe."
                    image={equipmentImage}
                    price="$14.99"
                    rating={5}
                    amazonLink="https://www.nesco.com/product-category/dehydrating/dehydrator-accessories/"
                    category="Accessory"
                  />
                  <AffiliateProductCard
                    name="NESCO Jerky Seasoning Kit"
                    description="Original flavor jerky seasoning with cure. Makes 6 lbs of jerky. Multiple flavors available."
                    image={equipmentImage}
                    price="$6.99"
                    rating={4}
                    amazonLink="https://www.nesco.com/product-category/jerky-making/jerky-seasoning-cure/"
                    category="Supplies"
                  />
                  <AffiliateProductCard
                    name="NESCO Jerky Gun"
                    description="Make uniform jerky strips from ground meat. Includes 3 tips for different shapes. Dishwasher safe."
                    image={equipmentImage}
                    price="$24.99"
                    rating={4}
                    amazonLink="https://www.nesco.com/product-category/jerky-making/"
                    category="Tool"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Canning Equipment */}
            <TabsContent value="canning" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Canning Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="Ball Enamel Water Bath Canner"
                    description="21-quart capacity with chrome-plated jar rack. Perfect for high-acid foods like jams, pickles, and tomatoes."
                    image={equipmentImage}
                    price="$39.99"
                    rating={5}
                    category="Water Bath"
                    featured
                  />
                  <AffiliateProductCard
                    name="Presto 23-Quart Pressure Canner"
                    description="Aluminum with dial gauge. Holds 7 quart or 20 pint jars. Essential for low-acid vegetables and meats."
                    image={equipmentImage}
                    price="$129.99"
                    rating={5}
                    category="Pressure Canner"
                  />
                  <AffiliateProductCard
                    name="All American 921 Pressure Canner"
                    description="Premium aluminum construction, 21.5 quart. Metal-to-metal seal requires no gaskets. Made in USA."
                    image={equipmentImage}
                    price="$399.99"
                    rating={5}
                    category="Premium"
                  />
                  <AffiliateProductCard
                    name="NESCO Electric Canner"
                    description="Electric water bath canner with digital controls. No stovetop needed. Holds 7 quart jars."
                    image={equipmentImage}
                    price="$159.99"
                    rating={4}
                    amazonLink="https://www.nesco.com/product-category/canning/"
                    category="Electric"
                  />
                  <AffiliateProductCard
                    name="Ball Wide Mouth Mason Jars (12 Pack)"
                    description="Quart size with lids and bands. Wide mouth for easy filling. BPA-free lids."
                    image={equipmentImage}
                    price="$17.99"
                    rating={5}
                    category="Jars"
                  />
                  <AffiliateProductCard
                    name="Ball Regular Mouth Pint Jars (12 Pack)"
                    description="Perfect for jams, jellies, and salsas. Classic style with two-piece lids."
                    image={equipmentImage}
                    price="$12.99"
                    rating={5}
                    category="Jars"
                  />
                  <AffiliateProductCard
                    name="Complete Canning Tool Kit (7 Piece)"
                    description="Jar lifter, funnel, lid wand, bubble remover, headspace tool, tongs, and jar wrench."
                    image={equipmentImage}
                    price="$19.99"
                    rating={4}
                    category="Tools"
                  />
                  <AffiliateProductCard
                    name="Ball Canning Lids (Bulk Pack)"
                    description="100 regular mouth lids. Always use new lids for safe sealing."
                    image={equipmentImage}
                    price="$24.99"
                    rating={5}
                    category="Supplies"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Fermenting Equipment */}
            <TabsContent value="fermenting" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Fermenting Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="Fermentation Crock (5L German Style)"
                    description="Traditional water-seal crock. Creates anaerobic environment for sauerkraut and kimchi. Includes weights."
                    image={equipmentImage}
                    price="$79.99"
                    rating={5}
                    category="Crocks"
                    featured
                  />
                  <AffiliateProductCard
                    name="Glass Fermentation Weights (4 Pack)"
                    description="Fits wide-mouth mason jars. Heavy glass keeps vegetables submerged under brine."
                    image={equipmentImage}
                    price="$18.99"
                    rating={5}
                    category="Weights"
                  />
                  <AffiliateProductCard
                    name="Pickle Pipes Fermentation Lids (4 Pack)"
                    description="Silicone waterless airlock lids. No burping required. Fits wide-mouth jars."
                    image={equipmentImage}
                    price="$19.99"
                    rating={5}
                    category="Lids"
                  />
                  <AffiliateProductCard
                    name="Digital Kitchen Scale"
                    description="Measures to 0.1g accuracy. Essential for precise salt measurements in fermentation."
                    image={equipmentImage}
                    price="$14.99"
                    rating={5}
                    category="Tools"
                  />
                  <AffiliateProductCard
                    name="Kombucha Brewing Kit"
                    description="Includes 1-gallon jar, SCOBY, starter tea, cloth covers, and instructions."
                    image={equipmentImage}
                    price="$34.99"
                    rating={4}
                    category="Kombucha"
                  />
                  <AffiliateProductCard
                    name="Continuous Brew Kombucha Vessel"
                    description="2.5-gallon ceramic crock with stainless spigot. Perfect for ongoing kombucha production."
                    image={equipmentImage}
                    price="$59.99"
                    rating={5}
                    category="Kombucha"
                  />
                  <AffiliateProductCard
                    name="Sea Salt (Fine, 2 lbs)"
                    description="Pure sea salt with no additives or anti-caking agents. Essential for lacto-fermentation."
                    image={equipmentImage}
                    price="$8.99"
                    rating={5}
                    category="Supplies"
                  />
                  <AffiliateProductCard
                    name="The Art of Fermentation Book"
                    description="Sandor Katz's comprehensive guide. James Beard Award winner. 500+ pages."
                    image={equipmentImage}
                    price="$27.99"
                    rating={5}
                    category="Books"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Mason Jar Accessories - Mason Jar Lifestyle, reCAP */}
            <TabsContent value="mason-jars" className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-serif text-2xl font-bold">Mason Jar Lids & Accessories</h2>
                  <Badge variant="outline">Mason Jar Lifestyle</Badge>
                  <Badge variant="outline">reCAP</Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  Specialty lids and accessories that transform standard mason jars into versatile storage, drinking, and fermentation vessels.<sup>[5]</sup>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="reCAP FLIP Pour Lid (Wide Mouth)"
                    description="Flip-top pour spout lid. Perfect for storing and pouring liquids. BPA-free, dishwasher safe."
                    image={equipmentImage}
                    price="$8.99"
                    rating={5}
                    amazonLink="https://recapmasonjars.com/products/recap-mason-jars-lid-flip-cap-regular-mouth"
                    category="reCAP"
                    featured
                  />
                  <AffiliateProductCard
                    name="reCAP POUR Lid (Regular Mouth)"
                    description="Smooth pour spout for oils, dressings, and sauces. Airtight seal when closed."
                    image={equipmentImage}
                    price="$6.99"
                    rating={5}
                    amazonLink="https://recapmasonjars.com/collections/shop-all-products"
                    category="reCAP"
                  />
                  <AffiliateProductCard
                    name="Masontops Pickle Pipes (Wide Mouth, 4 Pack)"
                    description="Waterless airlock fermentation lids. Premium food-grade silicone. No water seal maintenance."
                    image={equipmentImage}
                    price="$19.99"
                    rating={5}
                    amazonLink="https://www.masontops.com/collections/vegetable-fermentation-tools"
                    category="Fermentation"
                  />
                  <AffiliateProductCard
                    name="Masontops Pickle Pebbles (Wide Mouth, 4 Pack)"
                    description="Glass fermentation weights. Keep vegetables submerged. Dishwasher safe."
                    image={equipmentImage}
                    price="$17.99"
                    rating={5}
                    amazonLink="https://www.masontops.com/collections/vegetable-fermentation-tools"
                    category="Fermentation"
                  />
                  <AffiliateProductCard
                    name="Masontops Kefir Caps (2 Pack)"
                    description="Plastic lids with strainer for kefir brewing. Strain grains while pouring."
                    image={equipmentImage}
                    price="$14.99"
                    rating={4}
                    amazonLink="https://www.masontops.com/collections/kefir-brewing"
                    category="Kefir"
                  />
                  <AffiliateProductCard
                    name="Cuppow Drinking Lid (Wide Mouth)"
                    description="Turn any mason jar into a travel mug. Spill-resistant design. Multiple colors."
                    image={equipmentImage}
                    price="$8.99"
                    rating={4}
                    amazonLink="https://recapmasonjars.com/collections/cuppow-1"
                    category="Drinkware"
                  />
                  <AffiliateProductCard
                    name="Mason Jar Sprouting Lids (4 Pack)"
                    description="Stainless steel mesh lids for growing sprouts. Multiple mesh sizes for different seeds."
                    image={equipmentImage}
                    price="$12.99"
                    rating={5}
                    amazonLink="https://www.masontops.com/collections/off-grid-with-masontops"
                    category="Sprouting"
                  />
                  <AffiliateProductCard
                    name="Mason Jar Vacuum Sealing Kit"
                    description="Wide and regular mouth attachments for vacuum sealing mason jars. Works with most vacuum sealers."
                    image={equipmentImage}
                    price="$19.99"
                    rating={4}
                    category="Storage"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Budget Options - Amazon & Walmart */}
            <TabsContent value="budget" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-2">Budget-Friendly Options</h2>
                <p className="text-muted-foreground mb-6">
                  Quality preservation equipment doesn't have to break the bank. These affordable options from Amazon and Walmart offer great value for beginners.
                </p>
                
                <h3 className="font-serif text-xl font-semibold mb-4">Vacuum Sealers Under $50</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <AffiliateProductCard
                    name="Amazon Basics Vacuum Sealer"
                    description="Compact design with automatic sealing. Includes 10 bags to get started. Simple one-touch operation."
                    image={equipmentImage}
                    price="$34.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=vacuum+sealer+machine"
                    category="Amazon"
                    featured
                  />
                  <AffiliateProductCard
                    name="NutriChef Vacuum Sealer"
                    description="Compact countertop sealer with soft-touch buttons. Includes starter roll. Great for beginners."
                    image={equipmentImage}
                    price="$39.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=nutrichef+vacuum+sealer"
                    category="Amazon"
                  />
                  <AffiliateProductCard
                    name="GERYON Vacuum Sealer Machine"
                    description="LED indicator lights, compact design. Includes 5 bags and 1 roll. Moist/dry food modes."
                    image={equipmentImage}
                    price="$35.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=geryon+vacuum+sealer"
                    category="Amazon"
                  />
                  <AffiliateProductCard
                    name="Walmart MainStays Vacuum Sealer"
                    description="Basic sealer at an unbeatable price. Perfect for trying vacuum sealing on a budget."
                    image={equipmentImage}
                    price="$29.99"
                    rating={3}
                    amazonLink="https://www.walmart.com/search?q=vacuum+sealer"
                    category="Walmart"
                  />
                </div>

                <h3 className="font-serif text-xl font-semibold mb-4">Dehydrators Under $60</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <AffiliateProductCard
                    name="Presto 06300 Dehydro"
                    description="6-tray electric dehydrator. Expandable to 12 trays. Simple dial thermostat. Affordable quality."
                    image={equipmentImage}
                    price="$49.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=presto+dehydrator"
                    category="Amazon"
                    featured
                  />
                  <AffiliateProductCard
                    name="Hamilton Beach 32100A Dehydrator"
                    description="5-tray stackable design. Continuous airflow. 500 watts. Digital temperature control."
                    image={equipmentImage}
                    price="$54.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=hamilton+beach+dehydrator"
                    category="Amazon"
                  />
                  <AffiliateProductCard
                    name="Ronco 5-Tray Dehydrator"
                    description="Classic design with even drying. Easy to use and clean. Great starter dehydrator."
                    image={equipmentImage}
                    price="$44.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=ronco+dehydrator"
                    category="Amazon"
                  />
                  <AffiliateProductCard
                    name="Walmart Mainstays 5-Tray Dehydrator"
                    description="Budget-friendly option for occasional use. Adjustable temperature control."
                    image={equipmentImage}
                    price="$29.99"
                    rating={3}
                    amazonLink="https://www.walmart.com/search?q=food+dehydrator"
                    category="Walmart"
                  />
                </div>

                <h3 className="font-serif text-xl font-semibold mb-4">Canning Starter Kits Under $50</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <AffiliateProductCard
                    name="Ball Canning Discovery Kit"
                    description="Everything needed to start canning. Includes pot, rack, tools, jars, and recipe book."
                    image={equipmentImage}
                    price="$44.99"
                    rating={5}
                    amazonLink="https://www.amazon.com/s?k=ball+canning+kit"
                    category="Amazon"
                    featured
                  />
                  <AffiliateProductCard
                    name="Granite Ware Water Bath Canner"
                    description="21.5-quart enamel canner with jar rack. Holds 7 quart jars. Classic design."
                    image={equipmentImage}
                    price="$29.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=granite+ware+canner"
                    category="Amazon"
                  />
                  <AffiliateProductCard
                    name="Basic Canning Tool Set (5 Piece)"
                    description="Essential tools: jar lifter, funnel, lid lifter, bubble remover, and headspace gauge."
                    image={equipmentImage}
                    price="$14.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=canning+tool+set"
                    category="Amazon"
                  />
                  <AffiliateProductCard
                    name="Mason Jars Bulk Pack (24 Pint)"
                    description="Regular mouth pint jars with lids and bands. Stock up at a great price."
                    image={equipmentImage}
                    price="$21.99"
                    rating={5}
                    amazonLink="https://www.amazon.com/s?k=mason+jars+pint"
                    category="Amazon"
                  />
                </div>

                <h3 className="font-serif text-xl font-semibold mb-4">Fermentation Kits Under $30</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="Complete Fermentation Kit"
                    description="Includes 4 glass weights, 4 airlock lids, and instruction guide. Everything for mason jar fermenting."
                    image={equipmentImage}
                    price="$24.99"
                    rating={5}
                    amazonLink="https://www.amazon.com/s?k=fermentation+kit"
                    category="Amazon"
                    featured
                  />
                  <AffiliateProductCard
                    name="Silicone Fermentation Lids (6 Pack)"
                    description="Waterless airlock lids for wide-mouth jars. Easy to use and clean."
                    image={equipmentImage}
                    price="$12.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=fermentation+lids"
                    category="Amazon"
                  />
                  <AffiliateProductCard
                    name="Glass Fermentation Weights (6 Pack)"
                    description="Heavy glass weights keep vegetables submerged. Fits wide-mouth jars."
                    image={equipmentImage}
                    price="$15.99"
                    rating={5}
                    amazonLink="https://www.amazon.com/s?k=fermentation+weights"
                    category="Amazon"
                  />
                  <AffiliateProductCard
                    name="Kombucha SCOBY with Starter Tea"
                    description="Live organic SCOBY with 1 cup starter liquid. Begin brewing immediately."
                    image={equipmentImage}
                    price="$14.99"
                    rating={4}
                    amazonLink="https://www.amazon.com/s?k=kombucha+scoby"
                    category="Amazon"
                  />
                </div>
              </div>

              <Alert className="bg-accent/10 border-accent">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Budget Buying Tip:</strong> While budget equipment works well for beginners, consider upgrading to premium brands like NESCO or Harvest Right as you advance. Quality equipment lasts longer and often performs more consistently.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sources */}
      <section className="py-8 border-t">
        <div className="container-wide">
          <h3 className="font-serif text-lg font-semibold mb-4">Sources & References</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li id="ref-1">
              <a href="https://harvestright.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Harvest Right™ - Home Freeze Dryers
              </a>. Product specifications and pricing retrieved January 2025.
            </li>
            <li id="ref-2">
              <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/vacuum-packaging" target="_blank" rel="noopener noreferrer" className="hover:underline">
                USDA Food Safety and Inspection Service - Vacuum Packaging
              </a>. Guidelines for vacuum sealing food safely.
            </li>
            <li id="ref-3">
              <a href="https://outofair.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                OutOfAir - Vacuum Sealer Bags & Rolls
              </a>. Product information and compatibility details.
            </li>
            <li id="ref-4">
              <a href="https://www.nesco.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                NESCO - Food Dehydrators and Vacuum Sealers
              </a>. Official product specifications and pricing.
            </li>
            <li id="ref-5">
              <a href="https://recapmasonjars.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                reCAP Mason Jars
              </a> and <a href="https://www.masontops.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Masontops</a>. Mason jar accessory product information.
            </li>
          </ol>
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;
