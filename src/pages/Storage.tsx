import { Layout } from "@/components/Layout";
import { ScienceFact } from "@/components/ScienceFact";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Thermometer, Droplets, Wind, ArrowRight } from "lucide-react";

import rootCellarImage from "@/assets/root-cellar.jpg";
import pantryImage from "@/assets/pantry.jpg";

const Storage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={rootCellarImage}
            alt="Root cellar with stored vegetables"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">DIY Storage</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              DIY Food Storage Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn to create optimal storage conditions for preserved foods. From 
              building a root cellar to organizing your pantry, proper storage extends 
              shelf life and maintains quality.
            </p>
          </div>
        </div>
      </section>

      {/* Root Cellar Section */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">Root Cellar Basics</h2>
              <p className="text-muted-foreground leading-relaxed">
                Root cellars use the earth's natural insulation to maintain cool, 
                humid conditions ideal for storing root vegetables, fruits, and 
                canned goods. Before refrigeration, every homestead had one.
              </p>
              
              <ScienceFact
                fact="The ideal root cellar maintains temperatures between 32-40°F (0-4°C) with 85-95% relative humidity. These conditions slow respiration in produce while preventing desiccation."
                source="The Old Farmer's Almanac"
                sourceUrl="https://www.almanac.com"
              />
              
              <ScienceFact
                fact="At 32°F, potatoes can store for 4-6 months, carrots for 4-6 months, apples for 2-7 months, and winter squash for 3-6 months."
                source="Mother Earth News"
                sourceUrl="https://www.motherearthnews.com"
              />
            </div>
            
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-serif text-xl font-semibold mb-4">Root Cellar Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Temperature: 32-40°F</h4>
                    <p className="text-sm text-muted-foreground">
                      Use thermometer to monitor. Adjust vents to regulate.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Humidity: 85-95%</h4>
                    <p className="text-sm text-muted-foreground">
                      Dirt floors help maintain humidity. Add wet burlap if needed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Wind className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ventilation: Essential</h4>
                    <p className="text-sm text-muted-foreground">
                      Produce releases ethylene and CO₂. Vents prevent buildup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIY Options */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            DIY Cold Storage Options
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden border hover-lift">
              <div className="aspect-video overflow-hidden">
                <img src={rootCellarImage} alt="Underground root cellar" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Underground Root Cellar</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Traditional dug-out or walk-in cellar. Best option for serious 
                  homesteaders with space and budget.
                </p>
                <div className="text-sm">
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-medium">Advanced</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Cost</span>
                    <span className="font-medium">$3,000-$10,000+</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-medium">1,000+ lbs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border hover-lift">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-4xl">🪣</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Buried Container Cellar</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bury a garbage can, cooler, or barrel. Simple weekend project 
                  for small-scale storage.
                </p>
                <div className="text-sm">
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-medium">Easy</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Cost</span>
                    <span className="font-medium">$50-$200</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-medium">20-50 lbs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border hover-lift">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-4xl">🏠</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Basement Corner Cellar</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Partition off a corner of your basement with insulated walls. 
                  Add vents to outside if possible.
                </p>
                <div className="text-sm">
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-medium">Moderate</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Cost</span>
                    <span className="font-medium">$500-$2,000</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-medium">200-500 lbs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Life Table */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold mb-8">Root Cellar Storage Times</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl border">
              <thead>
                <tr className="border-b bg-muted">
                  <th className="text-left p-4 font-semibold">Produce</th>
                  <th className="text-left p-4 font-semibold">Temperature</th>
                  <th className="text-left p-4 font-semibold">Humidity</th>
                  <th className="text-left p-4 font-semibold">Storage Time</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4">Potatoes</td>
                  <td className="p-4">38-40°F</td>
                  <td className="p-4">90-95%</td>
                  <td className="p-4 font-medium">4-6 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Carrots</td>
                  <td className="p-4">32-35°F</td>
                  <td className="p-4">95-98%</td>
                  <td className="p-4 font-medium">4-6 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Onions</td>
                  <td className="p-4">32-35°F</td>
                  <td className="p-4">65-70%</td>
                  <td className="p-4 font-medium">5-8 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Apples</td>
                  <td className="p-4">32-35°F</td>
                  <td className="p-4">90%</td>
                  <td className="p-4 font-medium">2-7 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Winter Squash</td>
                  <td className="p-4">50-55°F</td>
                  <td className="p-4">50-70%</td>
                  <td className="p-4 font-medium">3-6 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Cabbage</td>
                  <td className="p-4">32-35°F</td>
                  <td className="p-4">90-95%</td>
                  <td className="p-4 font-medium">3-4 months</td>
                </tr>
                <tr>
                  <td className="p-4">Beets</td>
                  <td className="p-4">32-35°F</td>
                  <td className="p-4">95%</td>
                  <td className="p-4 font-medium">3-5 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pantry Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={pantryImage} 
                alt="Organized pantry with canned goods" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">Pantry Organization</h2>
              <p className="text-muted-foreground">
                A well-organized pantry is essential for rotating your preserved foods 
                and ensuring nothing goes to waste. Use these principles for optimal storage.
              </p>
              
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4 border">
                  <h4 className="font-semibold mb-1">FIFO System</h4>
                  <p className="text-sm text-muted-foreground">
                    First In, First Out. Place newer items behind older ones. Date 
                    everything when it goes in storage.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-4 border">
                  <h4 className="font-semibold mb-1">Cool & Dark</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal pantry temperature is 50-70°F. Avoid sunlight which degrades 
                    color and nutrients in canned goods.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-4 border">
                  <h4 className="font-semibold mb-1">Visible Inventory</h4>
                  <p className="text-sm text-muted-foreground">
                    Store canned goods with labels facing out. Consider a pantry 
                    inventory list to track what you have.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-4 border">
                  <h4 className="font-semibold mb-1">Proper Shelving</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep heavy items (jars, cans) on lower shelves. Use shelf 
                    organizers for visibility. Allow for air circulation.
                  </p>
                </div>
              </div>
              
              <Button asChild variant="hero">
                <Link to="/equipment">
                  View Storage Supplies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Storage;
