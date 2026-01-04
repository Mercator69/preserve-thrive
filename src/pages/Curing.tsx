import { Layout } from "@/components/Layout";
import { ScienceFact } from "@/components/ScienceFact";
import { AffiliateProductCard } from "@/components/AffiliateProductCard";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Thermometer, Clock, Flame } from "lucide-react";

import curingImage from "@/assets/curing.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const Curing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={curingImage}
            alt="Cured meats hanging"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">Preservation Method</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Curing & Smoking: Traditional Meat Preservation
            </h1>
            <p className="text-lg text-muted-foreground">
              Salt-curing and smoking are ancient techniques that preserve meat through 
              dehydration, antimicrobial action of salt and smoke, and careful temperature 
              control. These methods require precision and food safety knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-8 bg-destructive/5 border-y border-destructive/20">
        <div className="container-wide">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Important Safety Notice</h3>
              <p className="text-sm text-muted-foreground">
                Curing meat carries risks of botulism and other foodborne illness if not 
                done correctly. This guide provides an overview—always follow tested recipes 
                from USDA or university extension sources. Use curing salts exactly as 
                directed; too much is toxic, too little is unsafe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Overview */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">The Science of Curing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Curing preserves meat through salt (which draws out moisture and inhibits 
                bacteria), nitrites/nitrates (which prevent botulism and maintain color), 
                and controlled drying. The combination creates an environment hostile to 
                pathogenic microorganisms.
              </p>
              
              <ScienceFact
                fact="Sodium nitrite (in curing salt) is essential for preventing Clostridium botulinum growth in cured meats. It also gives cured meat its characteristic pink color and distinctive flavor."
                source="USDA Food Safety"
                sourceUrl="https://www.fsis.usda.gov"
              />
              
              <ScienceFact
                fact="The USDA recommends using 1 oz (28g) of Prague Powder #1 per 25 lbs of meat for wet-curing, or 1 level teaspoon per 5 lbs for dry-curing. Never exceed these amounts."
                source="USDA Meat Processing Guide"
              />
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Types of Curing Salt</h3>
              <div className="space-y-4">
                <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive">Prague Powder #1</Badge>
                    <span className="text-xs text-muted-foreground">(6.25% nitrite)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For short cures: bacon, ham, sausages, corned beef. Meats that 
                    will be cooked before eating.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-secondary text-secondary-foreground">Prague Powder #2</Badge>
                    <span className="text-xs text-muted-foreground">(nitrite + nitrate)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For dry-cured products: prosciutto, salami, country hams. Long 
                    cures where nitrate slowly converts to nitrite.
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Never substitute table salt for curing salt.</strong> Curing 
                  salts are dyed pink to prevent confusion. Regular salt alone cannot 
                  prevent botulism in cured meats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curing Methods */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Curing Methods
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Dry Curing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Salt and cure mixture applied directly to meat, which is then aged 
                for weeks to months. Used for bacon, pancetta, prosciutto.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Meat loses 25-35% of weight</li>
                <li>• Requires precise temperature (36-40°F)</li>
                <li>• Humidity control critical (60-70%)</li>
                <li>• Results in concentrated flavor</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Wet Curing (Brining)</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Meat submerged in salt/cure solution. Faster than dry curing but 
                produces moister product. Used for corned beef, some hams.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Typically 5-14 days</li>
                <li>• Refrigerator temperature required</li>
                <li>• Even cure distribution</li>
                <li>• Meat stays moist</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Smoking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Exposure to wood smoke adds flavor and antimicrobial compounds. 
                Can be cold-smoked (preservation) or hot-smoked (cooking + flavor).
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cold smoke: below 90°F (32°C)</li>
                <li>• Hot smoke: 126-176°F (52-80°C)</li>
                <li>• Hardwoods only (hickory, oak, apple)</li>
                <li>• Never use treated or resinous wood</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Smoking Temperatures */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Smoking Guide</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">Cold Smoking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For preservation and flavor without cooking. Meat must be properly 
                cured first. Risk of bacterial growth if temperature exceeds 90°F.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Temperature</span>
                  <span className="font-medium">68-86°F (20-30°C)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Duration</span>
                  <span className="font-medium">Hours to days</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Products</span>
                  <span className="font-medium">Bacon, salmon, cheese</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4 text-secondary">Hot Smoking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Cooks while adding smoke flavor. Safer than cold smoking as the 
                heat kills pathogens. Product is ready to eat.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Temperature</span>
                  <span className="font-medium">225-275°F (107-135°C)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Internal temp goal</span>
                  <span className="font-medium">145-165°F depending on meat</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Products</span>
                  <span className="font-medium">Ribs, brisket, pulled pork</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wood Types */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Smoking Woods</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Hickory", flavor: "Strong, bacon-like", best: "Pork, beef" },
              { name: "Oak", flavor: "Medium, versatile", best: "All meats" },
              { name: "Apple", flavor: "Mild, sweet", best: "Pork, poultry" },
              { name: "Cherry", flavor: "Mild, fruity", best: "Poultry, ham" },
              { name: "Mesquite", flavor: "Very strong", best: "Beef (short smokes)" },
              { name: "Maple", flavor: "Mild, slightly sweet", best: "Pork, poultry" },
            ].map((wood) => (
              <div key={wood.name} className="bg-card rounded-lg p-4 border text-center">
                <h4 className="font-semibold mb-1">{wood.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{wood.flavor}</p>
                <p className="text-xs text-primary">{wood.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Curing & Smoking Equipment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AffiliateProductCard
              name="Prague Powder #1 (1 lb)"
              description="Essential curing salt for bacon, ham, and short-cured meats. 6.25% sodium nitrite."
              image={equipmentImage}
              price="$9.99"
              rating={5}
              category="Curing Salt"
              featured
            />
            <AffiliateProductCard
              name="Masterbuilt Electric Smoker"
              description="Digital controls, 721 sq in cooking space. Great for beginners."
              image={equipmentImage}
              price="$249.99"
              rating={4}
              category="Smoker"
            />
            <AffiliateProductCard
              name="Meat Thermometer (Instant Read)"
              description="Accurate to ±0.5°F. Essential for food safety when smoking meat."
              image={equipmentImage}
              price="$24.99"
              rating={5}
              category="Tools"
            />
            <AffiliateProductCard
              name="Smoking Wood Chips Variety Pack"
              description="Apple, cherry, hickory, and mesquite. Try different flavors."
              image={equipmentImage}
              price="$19.99"
              rating={4}
              category="Wood"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Curing;
