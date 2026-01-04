import { Layout } from "@/components/Layout";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              We've researched and tested tools across every category to bring you 
              our honest recommendations.
            </p>
            <p className="text-sm text-muted-foreground italic">
              * Affiliate disclosure: We may earn a commission from qualifying purchases at no extra cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Tabs */}
      <section className="py-16">
        <div className="container-wide">
          <Tabs defaultValue="canning" className="space-y-8">
            <TabsList className="w-full justify-start overflow-x-auto flex-nowrap bg-muted p-1 h-auto">
              <TabsTrigger value="canning" className="px-4 py-2">Canning</TabsTrigger>
              <TabsTrigger value="freezing" className="px-4 py-2">Freezing</TabsTrigger>
              <TabsTrigger value="dehydrating" className="px-4 py-2">Dehydrating</TabsTrigger>
              <TabsTrigger value="fermenting" className="px-4 py-2">Fermenting</TabsTrigger>
              <TabsTrigger value="smoking" className="px-4 py-2">Curing & Smoking</TabsTrigger>
              <TabsTrigger value="storage" className="px-4 py-2">Storage</TabsTrigger>
            </TabsList>

            <TabsContent value="canning" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Canning Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="Ball Enamel Water Bath Canner"
                    description="21-quart capacity with jar rack. Perfect for high-acid foods like fruits, pickles, and jams."
                    image={equipmentImage}
                    price="$39.99"
                    rating={5}
                    category="Water Bath"
                    featured
                  />
                  <AffiliateProductCard
                    name="Presto 23-Quart Pressure Canner"
                    description="Aluminum with dial gauge. Holds 7 quart jars. Essential for low-acid vegetables and meats."
                    image={equipmentImage}
                    price="$129.99"
                    rating={5}
                    category="Pressure Canner"
                  />
                  <AffiliateProductCard
                    name="All American 921 Pressure Canner"
                    description="Premium aluminum construction, 21.5 quart. Metal-to-metal seal, no gasket to replace."
                    image={equipmentImage}
                    price="$399.99"
                    rating={5}
                    category="Premium"
                  />
                  <AffiliateProductCard
                    name="Ball Wide Mouth Mason Jars (12-Pack)"
                    description="Quart size with lids and bands. Wide mouth for easy filling and cleaning."
                    image={equipmentImage}
                    price="$17.99"
                    rating={5}
                    category="Jars"
                  />
                  <AffiliateProductCard
                    name="Ball Regular Mouth Mason Jars (12-Pack)"
                    description="Pint size, perfect for jams, jellies, and salsas. Classic style."
                    image={equipmentImage}
                    price="$12.99"
                    rating={4}
                    category="Jars"
                  />
                  <AffiliateProductCard
                    name="Canning Tool Kit (7-Piece)"
                    description="Jar lifter, funnel, lid wand, bubble remover, headspace tool, tongs, and wrench."
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
                  <AffiliateProductCard
                    name="pH Test Strips"
                    description="Test acidity of tomatoes and other borderline foods. Range 0-14 pH."
                    image={equipmentImage}
                    price="$8.99"
                    rating={4}
                    category="Tools"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="freezing" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Freezing Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="FoodSaver V4400 Vacuum Sealer"
                    description="2-in-1 system for bags and containers. Automatic bag detection, built-in cutter."
                    image={equipmentImage}
                    price="$149.99"
                    rating={5}
                    category="Vacuum Sealer"
                    featured
                  />
                  <AffiliateProductCard
                    name="FoodSaver Vacuum Sealer Rolls"
                    description="8 inch x 50 foot rolls (2-pack). Make custom-sized bags for any food."
                    image={equipmentImage}
                    price="$24.99"
                    rating={5}
                    category="Supplies"
                  />
                  <AffiliateProductCard
                    name="Stasher Silicone Reusable Bags"
                    description="Platinum silicone, dishwasher safe. Freezer to microwave safe. 4-pack variety."
                    image={equipmentImage}
                    price="$49.99"
                    rating={4}
                    category="Eco-Friendly"
                  />
                  <AffiliateProductCard
                    name="Pyrex Glass Storage Set"
                    description="18-piece set with lids. Freezer to oven safe. BPA-free lids."
                    image={equipmentImage}
                    price="$39.99"
                    rating={5}
                    category="Containers"
                  />
                  <AffiliateProductCard
                    name="Chest Freezer (5.0 cu ft)"
                    description="Energy efficient deep freezer for bulk storage. Manual defrost."
                    image={equipmentImage}
                    price="$199.99"
                    rating={4}
                    category="Appliance"
                  />
                  <AffiliateProductCard
                    name="Freezer Thermometer"
                    description="Digital with alarm. Ensure your freezer stays at 0°F or below."
                    image={equipmentImage}
                    price="$12.99"
                    rating={5}
                    category="Tools"
                  />
                  <AffiliateProductCard
                    name="Blanching Pot with Basket"
                    description="8-quart pot with strainer basket. Perfect for blanching vegetables before freezing."
                    image={equipmentImage}
                    price="$34.99"
                    rating={4}
                    category="Tools"
                  />
                  <AffiliateProductCard
                    name="Freezer Labels"
                    description="500 labels with date lines. Removable adhesive, freezer safe."
                    image={equipmentImage}
                    price="$9.99"
                    rating={4}
                    category="Supplies"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dehydrating" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Dehydrating Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="Excalibur 3926TB 9-Tray Dehydrator"
                    description="Professional-grade, 15 sq ft drying space. Horizontal airflow, adjustable thermostat."
                    image={equipmentImage}
                    price="$299.99"
                    rating={5}
                    category="Premium"
                    featured
                  />
                  <AffiliateProductCard
                    name="NESCO Snackmaster Pro"
                    description="5-tray expandable to 12. Adjustable temperature, top-mounted fan. Great value."
                    image={equipmentImage}
                    price="$79.99"
                    rating={4}
                    category="Budget-Friendly"
                  />
                  <AffiliateProductCard
                    name="Cosori Premium 6-Tray Dehydrator"
                    description="Stainless steel, glass door, digital controls. Timer up to 48 hours."
                    image={equipmentImage}
                    price="$169.99"
                    rating={5}
                    category="Mid-Range"
                  />
                  <AffiliateProductCard
                    name="Mesh Drying Sheets (6-Pack)"
                    description="Fine mesh for small items and herbs. Fits most round dehydrators."
                    image={equipmentImage}
                    price="$14.99"
                    rating={4}
                    category="Accessories"
                  />
                  <AffiliateProductCard
                    name="Fruit Leather Sheets"
                    description="Silicone sheets for making fruit leather. Reusable, dishwasher safe."
                    image={equipmentImage}
                    price="$16.99"
                    rating={4}
                    category="Accessories"
                  />
                  <AffiliateProductCard
                    name="Mandoline Slicer"
                    description="Adjustable thickness for uniform slices. Cuts drying time and improves results."
                    image={equipmentImage}
                    price="$29.99"
                    rating={4}
                    category="Tools"
                  />
                  <AffiliateProductCard
                    name="Oxygen Absorbers (100-Pack)"
                    description="300cc oxygen absorbers for long-term storage of dried foods."
                    image={equipmentImage}
                    price="$15.99"
                    rating={5}
                    category="Supplies"
                  />
                  <AffiliateProductCard
                    name="Mylar Bags (50-Pack)"
                    description="1-gallon size with zip seal. Pair with oxygen absorbers for years of storage."
                    image={equipmentImage}
                    price="$19.99"
                    rating={4}
                    category="Storage"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fermenting" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Fermenting Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="Fermentation Crock (5L)"
                    description="Traditional German-style with water seal lid. Perfect for sauerkraut and kimchi."
                    image={equipmentImage}
                    price="$79.99"
                    rating={5}
                    category="Crocks"
                    featured
                  />
                  <AffiliateProductCard
                    name="Glass Fermentation Weights (4-Pack)"
                    description="Fits wide-mouth mason jars. Keeps vegetables submerged under brine."
                    image={equipmentImage}
                    price="$18.99"
                    rating={5}
                    category="Weights"
                  />
                  <AffiliateProductCard
                    name="Airlock Lids for Mason Jars (4-Pack)"
                    description="Silicone lids with airlocks. Allows CO₂ to escape, prevents oxygen entry."
                    image={equipmentImage}
                    price="$21.99"
                    rating={4}
                    category="Lids"
                  />
                  <AffiliateProductCard
                    name="Digital Kitchen Scale"
                    description="Measures to 0.1g. Essential for accurate salt measurements."
                    image={equipmentImage}
                    price="$12.99"
                    rating={5}
                    category="Tools"
                  />
                  <AffiliateProductCard
                    name="Wide Mouth Mason Jars (6-Pack)"
                    description="Half-gallon size. Great for large-batch ferments."
                    image={equipmentImage}
                    price="$18.99"
                    rating={4}
                    category="Jars"
                  />
                  <AffiliateProductCard
                    name="Sea Salt (Fine, 2 lbs)"
                    description="Pure sea salt, no additives. Essential for successful lacto-fermentation."
                    image={equipmentImage}
                    price="$8.99"
                    rating={5}
                    category="Supplies"
                  />
                  <AffiliateProductCard
                    name="Cabbage Tamper/Pounder"
                    description="Wood pounder for bruising cabbage and packing jars. Makes quick work of prep."
                    image={equipmentImage}
                    price="$14.99"
                    rating={4}
                    category="Tools"
                  />
                  <AffiliateProductCard
                    name="Fermentation Book (Art of Fermentation)"
                    description="Sandor Katz's comprehensive guide. 500+ pages of fermentation wisdom."
                    image={equipmentImage}
                    price="$27.99"
                    rating={5}
                    category="Books"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="smoking" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Curing & Smoking Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AffiliateProductCard
                    name="Masterbuilt 40 inch Digital Electric Smoker"
                    description="Fully digital temperature control. 4 chrome-coated racks, 721 sq in cooking space."
                    image={equipmentImage}
                    price="$299.99"
                    rating={5}
                    category="Electric Smoker"
                    featured
                  />
                  <AffiliateProductCard
                    name="Weck Canning Jars (12-Pack)"
                    description="Beautiful glass jars with glass lids and rubber seals. Display-worthy storage."
                    image={equipmentImage}
                    price="$39.99"
                    rating={5}
                    category="Glass"
                  />
                  <AffiliateProductCard
                    name="Root Storage Crate"
                    description="Wooden slat crate for root cellar storage. Allows airflow around produce."
                    image={equipmentImage}
                    price="$24.99"
                    rating={4}
                    category="Root Cellar"
                  />
                  <AffiliateProductCard
                    name="Hygrometer/Thermometer"
                    description="Digital combo for monitoring root cellar or pantry conditions."
                    image={equipmentImage}
                    price="$14.99"
                    rating={4}
                    category="Tools"
                  />
                  <AffiliateProductCard
                    name="Wire Pantry Shelving"
                    description="5-tier adjustable chrome shelving. 18x48x72 inches. Holds heavy jars."
                    image={equipmentImage}
                    price="$89.99"
                    rating={4}
                    category="Shelving"
                  />
                  <AffiliateProductCard
                    name="Canning Jar Storage Racks"
                    description="Stackable racks for organizing canned goods. FIFO rotation system."
                    image={equipmentImage}
                    price="$29.99"
                    rating={4}
                    category="Organization"
                  />
                  <AffiliateProductCard
                    name="Mesh Produce Bags"
                    description="Reusable cotton mesh bags for onions, garlic, potatoes. Allows airflow."
                    image={equipmentImage}
                    price="$12.99"
                    rating={4}
                    category="Supplies"
                  />
                  <AffiliateProductCard
                    name="Pantry Inventory Notebook"
                    description="Pre-formatted pages for tracking your preserved food inventory by date."
                    image={equipmentImage}
                    price="$9.99"
                    rating={4}
                    category="Organization"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;
