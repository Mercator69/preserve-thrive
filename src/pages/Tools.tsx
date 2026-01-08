import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Thermometer, Scale, Beaker, ArrowRightLeft, Mountain, Clock, BarChart3 } from "lucide-react";
import AltitudeCalculator from "@/components/AltitudeCalculator";
import PrintableReferenceCard from "@/components/PrintableReferenceCard";
import PreservationTimeCalculator from "@/components/PreservationTimeCalculator";
import ShelfLifeChart from "@/components/ShelfLifeChart";

const Tools = () => {
  // Temperature conversion
  const [tempF, setTempF] = useState<string>("");
  const [tempC, setTempC] = useState<string>("");

  // Weight conversion
  const [weightOz, setWeightOz] = useState<string>("");
  const [weightG, setWeightG] = useState<string>("");
  const [weightLb, setWeightLb] = useState<string>("");
  const [weightKg, setWeightKg] = useState<string>("");

  // Volume conversion
  const [volCup, setVolCup] = useState<string>("");
  const [volMl, setVolMl] = useState<string>("");
  const [volTbsp, setVolTbsp] = useState<string>("");
  const [volTsp, setVolTsp] = useState<string>("");
  const [volFlOz, setVolFlOz] = useState<string>("");
  const [volL, setVolL] = useState<string>("");
  const [volQt, setVolQt] = useState<string>("");
  const [volPt, setVolPt] = useState<string>("");

  // Temperature handlers
  const handleFtoC = (value: string) => {
    setTempF(value);
    if (value === "") {
      setTempC("");
      return;
    }
    const f = parseFloat(value);
    if (!isNaN(f)) {
      setTempC(((f - 32) * 5 / 9).toFixed(1));
    }
  };

  const handleCtoF = (value: string) => {
    setTempC(value);
    if (value === "") {
      setTempF("");
      return;
    }
    const c = parseFloat(value);
    if (!isNaN(c)) {
      setTempF((c * 9 / 5 + 32).toFixed(1));
    }
  };

  // Weight handlers - oz/g
  const handleOzToG = (value: string) => {
    setWeightOz(value);
    if (value === "") {
      setWeightG("");
      return;
    }
    const oz = parseFloat(value);
    if (!isNaN(oz)) {
      setWeightG((oz * 28.3495).toFixed(1));
    }
  };

  const handleGToOz = (value: string) => {
    setWeightG(value);
    if (value === "") {
      setWeightOz("");
      return;
    }
    const g = parseFloat(value);
    if (!isNaN(g)) {
      setWeightOz((g / 28.3495).toFixed(2));
    }
  };

  // Weight handlers - lb/kg
  const handleLbToKg = (value: string) => {
    setWeightLb(value);
    if (value === "") {
      setWeightKg("");
      return;
    }
    const lb = parseFloat(value);
    if (!isNaN(lb)) {
      setWeightKg((lb * 0.453592).toFixed(2));
    }
  };

  const handleKgToLb = (value: string) => {
    setWeightKg(value);
    if (value === "") {
      setWeightLb("");
      return;
    }
    const kg = parseFloat(value);
    if (!isNaN(kg)) {
      setWeightLb((kg / 0.453592).toFixed(2));
    }
  };

  // Volume handlers - cups/ml
  const handleCupToMl = (value: string) => {
    setVolCup(value);
    if (value === "") {
      setVolMl("");
      return;
    }
    const cup = parseFloat(value);
    if (!isNaN(cup)) {
      setVolMl((cup * 236.588).toFixed(0));
    }
  };

  const handleMlToCup = (value: string) => {
    setVolMl(value);
    if (value === "") {
      setVolCup("");
      return;
    }
    const ml = parseFloat(value);
    if (!isNaN(ml)) {
      setVolCup((ml / 236.588).toFixed(2));
    }
  };

  // Volume handlers - tbsp/tsp
  const handleTbspToTsp = (value: string) => {
    setVolTbsp(value);
    if (value === "") {
      setVolTsp("");
      return;
    }
    const tbsp = parseFloat(value);
    if (!isNaN(tbsp)) {
      setVolTsp((tbsp * 3).toFixed(1));
    }
  };

  const handleTspToTbsp = (value: string) => {
    setVolTsp(value);
    if (value === "") {
      setVolTbsp("");
      return;
    }
    const tsp = parseFloat(value);
    if (!isNaN(tsp)) {
      setVolTbsp((tsp / 3).toFixed(2));
    }
  };

  // Volume handlers - fl oz/L
  const handleFlOzToL = (value: string) => {
    setVolFlOz(value);
    if (value === "") {
      setVolL("");
      return;
    }
    const floz = parseFloat(value);
    if (!isNaN(floz)) {
      setVolL((floz * 0.0295735).toFixed(3));
    }
  };

  const handleLToFlOz = (value: string) => {
    setVolL(value);
    if (value === "") {
      setVolFlOz("");
      return;
    }
    const l = parseFloat(value);
    if (!isNaN(l)) {
      setVolFlOz((l / 0.0295735).toFixed(1));
    }
  };

  // Volume handlers - qt/pt
  const handleQtToPt = (value: string) => {
    setVolQt(value);
    if (value === "") {
      setVolPt("");
      return;
    }
    const qt = parseFloat(value);
    if (!isNaN(qt)) {
      setVolPt((qt * 2).toFixed(1));
    }
  };

  const handlePtToQt = (value: string) => {
    setVolPt(value);
    if (value === "") {
      setVolQt("");
      return;
    }
    const pt = parseFloat(value);
    if (!isNaN(pt)) {
      setVolQt((pt / 2).toFixed(2));
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">Conversion Tools</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Measurement Conversion Calculators
            </h1>
            <p className="text-lg text-muted-foreground">
              Essential conversion tools for food preservation. Convert between metric and 
              imperial measurements for temperature, weight, and volume—perfect for following 
              both American and Canadian recipes and guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16">
        <div className="container-wide">
          <Tabs defaultValue="time" className="w-full">
            <TabsList className="grid w-full grid-cols-6 max-w-3xl mx-auto mb-8">
              <TabsTrigger value="time" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">Time</span>
              </TabsTrigger>
              <TabsTrigger value="shelflife" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Shelf Life</span>
              </TabsTrigger>
              <TabsTrigger value="temperature" className="flex items-center gap-2">
                <Thermometer className="w-4 h-4" />
                <span className="hidden sm:inline">Temp</span>
              </TabsTrigger>
              <TabsTrigger value="weight" className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                <span className="hidden sm:inline">Weight</span>
              </TabsTrigger>
              <TabsTrigger value="volume" className="flex items-center gap-2">
                <Beaker className="w-4 h-4" />
                <span className="hidden sm:inline">Volume</span>
              </TabsTrigger>
              <TabsTrigger value="altitude" className="flex items-center gap-2">
                <Mountain className="w-4 h-4" />
                <span className="hidden sm:inline">Altitude</span>
              </TabsTrigger>
            </TabsList>

            {/* Preservation Time Tab */}
            <TabsContent value="time">
              <div className="max-w-2xl mx-auto">
                <PreservationTimeCalculator />
              </div>
            </TabsContent>

            {/* Shelf Life Tab */}
            <TabsContent value="shelflife">
              <div className="max-w-6xl mx-auto">
                <ShelfLifeChart />
              </div>
            </TabsContent>

            {/* Temperature Tab */}
            <TabsContent value="temperature">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-primary" />
                      Temperature Conversion
                    </CardTitle>
                    <CardDescription>
                      Convert between Fahrenheit and Celsius for canning, freezing, and dehydrating temperatures.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="tempF">Fahrenheit (°F)</Label>
                        <Input
                          id="tempF"
                          type="number"
                          placeholder="e.g., 212"
                          value={tempF}
                          onChange={(e) => handleFtoC(e.target.value)}
                        />
                      </div>
                      <ArrowRightLeft className="w-6 h-6 text-muted-foreground mt-6" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="tempC">Celsius (°C)</Label>
                        <Input
                          id="tempC"
                          type="number"
                          placeholder="e.g., 100"
                          value={tempC}
                          onChange={(e) => handleCtoF(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Common temperatures reference */}
                    <div className="mt-8 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-3">Common Preservation Temperatures</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span>Freezer</span>
                          <span className="font-medium">0°F / -18°C</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Refrigerator</span>
                          <span className="font-medium">40°F / 4°C</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Water Bath Canning</span>
                          <span className="font-medium">212°F / 100°C</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pressure Canning</span>
                          <span className="font-medium">240°F / 116°C</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dehydrating (Fruits)</span>
                          <span className="font-medium">135°F / 57°C</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Jerky (Meat)</span>
                          <span className="font-medium">160°F / 71°C</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Weight Tab */}
            <TabsContent value="weight">
              <div className="max-w-2xl mx-auto space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-primary" />
                      Ounces / Grams
                    </CardTitle>
                    <CardDescription>
                      For measuring smaller quantities like salt, spices, and curing agents.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="weightOz">Ounces (oz)</Label>
                        <Input
                          id="weightOz"
                          type="number"
                          placeholder="e.g., 1"
                          value={weightOz}
                          onChange={(e) => handleOzToG(e.target.value)}
                        />
                      </div>
                      <ArrowRightLeft className="w-6 h-6 text-muted-foreground mt-6" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="weightG">Grams (g)</Label>
                        <Input
                          id="weightG"
                          type="number"
                          placeholder="e.g., 28"
                          value={weightG}
                          onChange={(e) => handleGToOz(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-secondary" />
                      Pounds / Kilograms
                    </CardTitle>
                    <CardDescription>
                      For measuring produce, meat, and larger quantities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="weightLb">Pounds (lb)</Label>
                        <Input
                          id="weightLb"
                          type="number"
                          placeholder="e.g., 5"
                          value={weightLb}
                          onChange={(e) => handleLbToKg(e.target.value)}
                        />
                      </div>
                      <ArrowRightLeft className="w-6 h-6 text-muted-foreground mt-6" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="weightKg">Kilograms (kg)</Label>
                        <Input
                          id="weightKg"
                          type="number"
                          placeholder="e.g., 2.3"
                          value={weightKg}
                          onChange={(e) => handleKgToLb(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Common weights reference */}
                    <div className="mt-8 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-3">Common Curing Measurements</h4>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span>Prague Powder #1 per 5 lb meat</span>
                          <span className="font-medium">1 tsp / 5.7g per 2.3 kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Salt for 2% brine (per lb vegetables)</span>
                          <span className="font-medium">0.32 oz / 9g per 454g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Salt for 3.5% brine (per quart water)</span>
                          <span className="font-medium">1.4 oz / 40g per liter</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Volume Tab */}
            <TabsContent value="volume">
              <div className="max-w-2xl mx-auto space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Beaker className="w-5 h-5 text-primary" />
                      Cups / Milliliters
                    </CardTitle>
                    <CardDescription>
                      For measuring liquids in recipes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="volCup">Cups (US)</Label>
                        <Input
                          id="volCup"
                          type="number"
                          placeholder="e.g., 1"
                          value={volCup}
                          onChange={(e) => handleCupToMl(e.target.value)}
                        />
                      </div>
                      <ArrowRightLeft className="w-6 h-6 text-muted-foreground mt-6" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="volMl">Milliliters (mL)</Label>
                        <Input
                          id="volMl"
                          type="number"
                          placeholder="e.g., 237"
                          value={volMl}
                          onChange={(e) => handleMlToCup(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Beaker className="w-5 h-5 text-secondary" />
                      Tablespoons / Teaspoons
                    </CardTitle>
                    <CardDescription>
                      For measuring smaller liquid quantities and spices.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="volTbsp">Tablespoons (tbsp)</Label>
                        <Input
                          id="volTbsp"
                          type="number"
                          placeholder="e.g., 1"
                          value={volTbsp}
                          onChange={(e) => handleTbspToTsp(e.target.value)}
                        />
                      </div>
                      <ArrowRightLeft className="w-6 h-6 text-muted-foreground mt-6" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="volTsp">Teaspoons (tsp)</Label>
                        <Input
                          id="volTsp"
                          type="number"
                          placeholder="e.g., 3"
                          value={volTsp}
                          onChange={(e) => handleTspToTbsp(e.target.value)}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      1 tbsp = 15 mL | 1 tsp = 5 mL
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Beaker className="w-5 h-5 text-accent" />
                      Fluid Ounces / Liters
                    </CardTitle>
                    <CardDescription>
                      For larger liquid measurements and canning recipes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="volFlOz">Fluid Ounces (fl oz)</Label>
                        <Input
                          id="volFlOz"
                          type="number"
                          placeholder="e.g., 32"
                          value={volFlOz}
                          onChange={(e) => handleFlOzToL(e.target.value)}
                        />
                      </div>
                      <ArrowRightLeft className="w-6 h-6 text-muted-foreground mt-6" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="volL">Liters (L)</Label>
                        <Input
                          id="volL"
                          type="number"
                          placeholder="e.g., 1"
                          value={volL}
                          onChange={(e) => handleLToFlOz(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Beaker className="w-5 h-5 text-harvest" />
                      Quarts / Pints
                    </CardTitle>
                    <CardDescription>
                      Common canning jar sizes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="volQt">Quarts (qt)</Label>
                        <Input
                          id="volQt"
                          type="number"
                          placeholder="e.g., 1"
                          value={volQt}
                          onChange={(e) => handleQtToPt(e.target.value)}
                        />
                      </div>
                      <ArrowRightLeft className="w-6 h-6 text-muted-foreground mt-6" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="volPt">Pints (pt)</Label>
                        <Input
                          id="volPt"
                          type="number"
                          placeholder="e.g., 2"
                          value={volPt}
                          onChange={(e) => handlePtToQt(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Common jar sizes reference */}
                    <div className="mt-8 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-3">Common Canning Jar Sizes</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span>Half-pint jar</span>
                          <span className="font-medium">8 fl oz / 237 mL</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pint jar</span>
                          <span className="font-medium">16 fl oz / 473 mL</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Quart jar</span>
                          <span className="font-medium">32 fl oz / 946 mL</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Half-gallon jar</span>
                          <span className="font-medium">64 fl oz / 1.9 L</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Altitude Tab */}
            <TabsContent value="altitude">
              <div className="max-w-2xl mx-auto">
                <AltitudeCalculator />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Printable Reference Card */}
      <section className="py-8">
        <div className="container-wide max-w-2xl">
          <PrintableReferenceCard />
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">
            Quick Reference Chart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Temperature</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between"><span>32°F</span><span>0°C</span></div>
                <div className="flex justify-between"><span>40°F</span><span>4°C</span></div>
                <div className="flex justify-between"><span>135°F</span><span>57°C</span></div>
                <div className="flex justify-between"><span>160°F</span><span>71°C</span></div>
                <div className="flex justify-between"><span>212°F</span><span>100°C</span></div>
                <div className="flex justify-between"><span>240°F</span><span>116°C</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weight</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between"><span>1 oz</span><span>28.35 g</span></div>
                <div className="flex justify-between"><span>4 oz (¼ lb)</span><span>113 g</span></div>
                <div className="flex justify-between"><span>8 oz (½ lb)</span><span>227 g</span></div>
                <div className="flex justify-between"><span>16 oz (1 lb)</span><span>454 g</span></div>
                <div className="flex justify-between"><span>2.2 lb</span><span>1 kg</span></div>
                <div className="flex justify-between"><span>5 lb</span><span>2.27 kg</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Volume</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between"><span>1 tsp</span><span>5 mL</span></div>
                <div className="flex justify-between"><span>1 tbsp</span><span>15 mL</span></div>
                <div className="flex justify-between"><span>1 cup</span><span>237 mL</span></div>
                <div className="flex justify-between"><span>1 pint</span><span>473 mL</span></div>
                <div className="flex justify-between"><span>1 quart</span><span>946 mL</span></div>
                <div className="flex justify-between"><span>1 gallon</span><span>3.79 L</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
