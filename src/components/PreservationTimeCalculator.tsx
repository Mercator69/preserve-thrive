import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Clock, Thermometer, AlertTriangle, Info } from "lucide-react";

type PreservationMethod = "canning" | "freezing" | "dehydrating" | "fermenting" | "curing";

interface PreservationData {
  name: string;
  category: string;
  timeRange: string;
  temperature: string;
  temperatureMetric: string;
  notes?: string;
  sizeOptions?: { label: string; timeRange: string }[];
  requiresPressure?: boolean;
}

const preservationDatabase: Record<PreservationMethod, Record<string, PreservationData>> = {
  canning: {
    tomatoes: {
      name: "Tomatoes (whole/halved)",
      category: "Fruits",
      timeRange: "35-45 min",
      temperature: "212°F",
      temperatureMetric: "100°C",
      notes: "Water bath. Add 2 tbsp lemon juice per quart for safety.",
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "35 min" },
        { label: "Quarts (1 L)", timeRange: "45 min" },
      ],
    },
    applesauce: {
      name: "Applesauce",
      category: "Fruits",
      timeRange: "15-20 min",
      temperature: "212°F",
      temperatureMetric: "100°C",
      notes: "Water bath canning.",
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "15 min" },
        { label: "Quarts (1 L)", timeRange: "20 min" },
      ],
    },
    peaches: {
      name: "Peaches",
      category: "Fruits",
      timeRange: "20-25 min",
      temperature: "212°F",
      temperatureMetric: "100°C",
      notes: "Water bath. Pack in light syrup or water.",
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "20 min" },
        { label: "Quarts (1 L)", timeRange: "25 min" },
      ],
    },
    pears: {
      name: "Pears",
      category: "Fruits",
      timeRange: "20-25 min",
      temperature: "212°F",
      temperatureMetric: "100°C",
      notes: "Water bath canning.",
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "20 min" },
        { label: "Quarts (1 L)", timeRange: "25 min" },
      ],
    },
    jams: {
      name: "Jams & Jellies",
      category: "Fruits",
      timeRange: "5-10 min",
      temperature: "212°F",
      temperatureMetric: "100°C",
      notes: "Water bath. Half-pint jars recommended.",
      sizeOptions: [
        { label: "Half-pints (250 mL)", timeRange: "5 min" },
        { label: "Pints (500 mL)", timeRange: "10 min" },
      ],
    },
    pickles: {
      name: "Pickles (cucumber)",
      category: "Vegetables",
      timeRange: "10-15 min",
      temperature: "212°F",
      temperatureMetric: "100°C",
      notes: "Water bath. Use tested pickling recipe.",
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "10 min" },
        { label: "Quarts (1 L)", timeRange: "15 min" },
      ],
    },
    salsa: {
      name: "Salsa",
      category: "Vegetables",
      timeRange: "15-20 min",
      temperature: "212°F",
      temperatureMetric: "100°C",
      notes: "Water bath. Follow tested recipe for acid balance.",
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "15 min" },
        { label: "Quarts (1 L)", timeRange: "20 min" },
      ],
    },
    greenbeans: {
      name: "Green Beans",
      category: "Vegetables",
      timeRange: "20-25 min",
      temperature: "240°F",
      temperatureMetric: "116°C",
      notes: "Pressure canning required. 10 PSI (69 kPa).",
      requiresPressure: true,
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "20 min" },
        { label: "Quarts (1 L)", timeRange: "25 min" },
      ],
    },
    corn: {
      name: "Corn (whole kernel)",
      category: "Vegetables",
      timeRange: "55-85 min",
      temperature: "240°F",
      temperatureMetric: "116°C",
      notes: "Pressure canning required. 10 PSI (69 kPa).",
      requiresPressure: true,
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "55 min" },
        { label: "Quarts (1 L)", timeRange: "85 min" },
      ],
    },
    carrots: {
      name: "Carrots",
      category: "Vegetables",
      timeRange: "25-30 min",
      temperature: "240°F",
      temperatureMetric: "116°C",
      notes: "Pressure canning required. 10 PSI (69 kPa).",
      requiresPressure: true,
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "25 min" },
        { label: "Quarts (1 L)", timeRange: "30 min" },
      ],
    },
    potatoes: {
      name: "Potatoes",
      category: "Vegetables",
      timeRange: "35-40 min",
      temperature: "240°F",
      temperatureMetric: "116°C",
      notes: "Pressure canning required. 10 PSI (69 kPa). Cubed.",
      requiresPressure: true,
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "35 min" },
        { label: "Quarts (1 L)", timeRange: "40 min" },
      ],
    },
    chicken: {
      name: "Chicken (bone-in pieces)",
      category: "Meats",
      timeRange: "65-75 min",
      temperature: "240°F",
      temperatureMetric: "116°C",
      notes: "Pressure canning required. 10 PSI (69 kPa).",
      requiresPressure: true,
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "65 min" },
        { label: "Quarts (1 L)", timeRange: "75 min" },
      ],
    },
    beef: {
      name: "Beef (cubed)",
      category: "Meats",
      timeRange: "75-90 min",
      temperature: "240°F",
      temperatureMetric: "116°C",
      notes: "Pressure canning required. 10 PSI (69 kPa).",
      requiresPressure: true,
      sizeOptions: [
        { label: "Pints (500 mL)", timeRange: "75 min" },
        { label: "Quarts (1 L)", timeRange: "90 min" },
      ],
    },
    fish: {
      name: "Fish (filleted)",
      category: "Meats",
      timeRange: "100 min",
      temperature: "240°F",
      temperatureMetric: "116°C",
      notes: "Pressure canning required. 10 PSI (69 kPa). Pints only.",
      requiresPressure: true,
    },
  },
  freezing: {
    berries: {
      name: "Berries (strawberries, blueberries)",
      category: "Fruits",
      timeRange: "8-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Flash freeze on tray before bagging. Best quality within time range.",
    },
    peaches_freeze: {
      name: "Peaches/Nectarines",
      category: "Fruits",
      timeRange: "10-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Treat with ascorbic acid to prevent browning.",
    },
    apples_freeze: {
      name: "Apples (sliced)",
      category: "Fruits",
      timeRange: "10-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Treat with lemon juice or ascorbic acid.",
    },
    greenbeans_freeze: {
      name: "Green Beans",
      category: "Vegetables",
      timeRange: "8-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Blanch 3 min before freezing.",
    },
    corn_freeze: {
      name: "Corn (kernels)",
      category: "Vegetables",
      timeRange: "8-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Blanch on cob 4-6 min, then cut kernels.",
    },
    peas: {
      name: "Peas",
      category: "Vegetables",
      timeRange: "8-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Blanch 1.5-2.5 min depending on size.",
    },
    broccoli: {
      name: "Broccoli",
      category: "Vegetables",
      timeRange: "10-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Blanch 3-4 min for florets.",
    },
    spinach: {
      name: "Spinach/Greens",
      category: "Vegetables",
      timeRange: "10-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Blanch 2 min. Squeeze out excess water.",
    },
    zucchini: {
      name: "Zucchini/Summer Squash",
      category: "Vegetables",
      timeRange: "3-4 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Blanch 3 min. Best for cooking, not raw use.",
    },
    ground_beef: {
      name: "Ground Beef",
      category: "Meats",
      timeRange: "3-4 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Wrap tightly. Use freezer paper or vacuum seal.",
    },
    beef_steaks: {
      name: "Beef Steaks/Roasts",
      category: "Meats",
      timeRange: "6-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Vacuum seal for best quality.",
    },
    chicken_freeze: {
      name: "Chicken (whole or pieces)",
      category: "Meats",
      timeRange: "9-12 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Remove as much air as possible from packaging.",
    },
    pork: {
      name: "Pork Chops/Roasts",
      category: "Meats",
      timeRange: "4-6 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Wrap tightly to prevent freezer burn.",
    },
    fish_freeze: {
      name: "Fish (lean types)",
      category: "Meats",
      timeRange: "6-8 months",
      temperature: "0°F",
      temperatureMetric: "-18°C",
      notes: "Fatty fish: 2-3 months. Vacuum seal recommended.",
    },
  },
  dehydrating: {
    apples_dry: {
      name: "Apples",
      category: "Fruits",
      timeRange: "6-12 hours",
      temperature: "135°F",
      temperatureMetric: "57°C",
      notes: "Slice 1/4 inch thick. Treat with lemon juice.",
    },
    bananas: {
      name: "Bananas",
      category: "Fruits",
      timeRange: "8-12 hours",
      temperature: "135°F",
      temperatureMetric: "57°C",
      notes: "Slice 1/4 inch thick. Dip in lemon juice.",
    },
    berries_dry: {
      name: "Berries",
      category: "Fruits",
      timeRange: "10-18 hours",
      temperature: "135°F",
      temperatureMetric: "57°C",
      notes: "Check skin on blueberries for faster drying.",
    },
    grapes: {
      name: "Grapes (raisins)",
      category: "Fruits",
      timeRange: "24-48 hours",
      temperature: "135°F",
      temperatureMetric: "57°C",
      notes: "Dip in boiling water 30 sec to check skins.",
    },
    tomatoes_dry: {
      name: "Tomatoes",
      category: "Vegetables",
      timeRange: "8-14 hours",
      temperature: "135°F",
      temperatureMetric: "57°C",
      notes: "Cut in half or slice 1/4 inch.",
    },
    peppers: {
      name: "Peppers (sweet/hot)",
      category: "Vegetables",
      timeRange: "8-12 hours",
      temperature: "125°F",
      temperatureMetric: "52°C",
      notes: "Remove seeds. Slice or dice.",
    },
    onions: {
      name: "Onions",
      category: "Vegetables",
      timeRange: "6-10 hours",
      temperature: "125°F",
      temperatureMetric: "52°C",
      notes: "Slice 1/8-1/4 inch thick.",
    },
    mushrooms: {
      name: "Mushrooms",
      category: "Vegetables",
      timeRange: "6-10 hours",
      temperature: "125°F",
      temperatureMetric: "52°C",
      notes: "Slice 1/4 inch thick. Clean, don't wash.",
    },
    herbs: {
      name: "Herbs (basil, oregano, thyme)",
      category: "Vegetables",
      timeRange: "2-4 hours",
      temperature: "95-105°F",
      temperatureMetric: "35-41°C",
      notes: "Dry until crumbly. Low heat preserves oils.",
    },
    beef_jerky: {
      name: "Beef Jerky",
      category: "Meats",
      timeRange: "4-8 hours",
      temperature: "160°F",
      temperatureMetric: "71°C",
      notes: "Slice 1/4 inch against grain. Pre-heat meat to 160°F.",
      sizeOptions: [
        { label: "1 lb (454g)", timeRange: "4-6 hours" },
        { label: "2-3 lb (0.9-1.4 kg)", timeRange: "6-8 hours" },
      ],
    },
    turkey_jerky: {
      name: "Turkey/Chicken Jerky",
      category: "Meats",
      timeRange: "4-8 hours",
      temperature: "165°F",
      temperatureMetric: "74°C",
      notes: "Pre-heat poultry to 165°F for safety.",
    },
  },
  fermenting: {
    sauerkraut: {
      name: "Sauerkraut",
      category: "Vegetables",
      timeRange: "3-6 weeks",
      temperature: "60-75°F",
      temperatureMetric: "16-24°C",
      notes: "2% salt by weight. Cooler temps = longer, better flavor.",
      sizeOptions: [
        { label: "1 quart (1 L)", timeRange: "3-4 weeks" },
        { label: "1 gallon (4 L)", timeRange: "4-6 weeks" },
      ],
    },
    kimchi: {
      name: "Kimchi",
      category: "Vegetables",
      timeRange: "1-2 weeks",
      temperature: "60-75°F",
      temperatureMetric: "16-24°C",
      notes: "Ferment 1-2 days at room temp, then refrigerate.",
    },
    pickles_fermented: {
      name: "Fermented Pickles",
      category: "Vegetables",
      timeRange: "3-7 days",
      temperature: "68-75°F",
      temperatureMetric: "20-24°C",
      notes: "3.5% salt brine. Check daily for desired sourness.",
    },
    hot_sauce: {
      name: "Hot Sauce (fermented)",
      category: "Vegetables",
      timeRange: "1-4 weeks",
      temperature: "60-75°F",
      temperatureMetric: "16-24°C",
      notes: "2-3% salt brine. Blend after fermentation.",
    },
    kombucha: {
      name: "Kombucha",
      category: "Beverages",
      timeRange: "7-14 days",
      temperature: "68-85°F",
      temperatureMetric: "20-29°C",
      notes: "First ferment. Second ferment 2-4 days for carbonation.",
    },
    water_kefir: {
      name: "Water Kefir",
      category: "Beverages",
      timeRange: "24-48 hours",
      temperature: "68-85°F",
      temperatureMetric: "20-29°C",
      notes: "First ferment. Strain and add flavorings for second ferment.",
    },
    yogurt: {
      name: "Yogurt",
      category: "Dairy",
      timeRange: "6-12 hours",
      temperature: "110°F",
      temperatureMetric: "43°C",
      notes: "Longer ferment = tangier. Keep temperature consistent.",
    },
    sourdough: {
      name: "Sourdough Starter",
      category: "Grains",
      timeRange: "5-7 days",
      temperature: "70-80°F",
      temperatureMetric: "21-27°C",
      notes: "Feed daily with equal parts flour and water.",
    },
  },
  curing: {
    bacon: {
      name: "Bacon",
      category: "Pork",
      timeRange: "5-7 days",
      temperature: "36-40°F",
      temperatureMetric: "2-4°C",
      notes: "Cure in refrigerator. Flip daily. Smoke optional.",
      sizeOptions: [
        { label: "5 lb (2.3 kg) belly", timeRange: "5-7 days" },
        { label: "10 lb (4.5 kg) belly", timeRange: "7-10 days" },
      ],
    },
    ham: {
      name: "Ham (wet cure)",
      category: "Pork",
      timeRange: "7-14 days",
      temperature: "36-40°F",
      temperatureMetric: "2-4°C",
      notes: "Inject brine for faster cure. 1.5 days per pound.",
      sizeOptions: [
        { label: "5-8 lb (2.3-3.6 kg)", timeRange: "7-10 days" },
        { label: "10-15 lb (4.5-6.8 kg)", timeRange: "12-14 days" },
      ],
    },
    corned_beef: {
      name: "Corned Beef",
      category: "Beef",
      timeRange: "5-7 days",
      temperature: "36-40°F",
      temperatureMetric: "2-4°C",
      notes: "Brine cure. Turn daily. Rinse before cooking.",
      sizeOptions: [
        { label: "3-4 lb (1.4-1.8 kg) brisket", timeRange: "5 days" },
        { label: "5-6 lb (2.3-2.7 kg) brisket", timeRange: "7 days" },
      ],
    },
    pastrami: {
      name: "Pastrami",
      category: "Beef",
      timeRange: "7-14 days",
      temperature: "36-40°F",
      temperatureMetric: "2-4°C",
      notes: "Cure like corned beef, then dry, season, and smoke.",
      sizeOptions: [
        { label: "4-5 lb (1.8-2.3 kg)", timeRange: "7-10 days" },
        { label: "6-8 lb (2.7-3.6 kg)", timeRange: "10-14 days" },
      ],
    },
    gravlax: {
      name: "Gravlax (cured salmon)",
      category: "Fish",
      timeRange: "2-3 days",
      temperature: "36-40°F",
      temperatureMetric: "2-4°C",
      notes: "Equal parts salt and sugar. Turn every 12 hours.",
      sizeOptions: [
        { label: "1 lb (454g) fillet", timeRange: "2 days" },
        { label: "2-3 lb (0.9-1.4 kg) side", timeRange: "3 days" },
      ],
    },
    duck_prosciutto: {
      name: "Duck Prosciutto",
      category: "Poultry",
      timeRange: "24 hours cure + 1-2 weeks dry",
      temperature: "36-40°F cure, 50-60°F dry",
      temperatureMetric: "2-4°C cure, 10-16°C dry",
      notes: "Salt cure, then hang to dry until 30% weight loss.",
    },
    pancetta: {
      name: "Pancetta",
      category: "Pork",
      timeRange: "7-10 days cure + 2-3 weeks dry",
      temperature: "36-40°F cure, 50-60°F dry",
      temperatureMetric: "2-4°C cure, 10-16°C dry",
      notes: "Roll and tie after curing. Hang to dry.",
    },
    country_ham: {
      name: "Country Ham (dry cure)",
      category: "Pork",
      timeRange: "30-45 days",
      temperature: "36-40°F",
      temperatureMetric: "2-4°C",
      notes: "2 days per pound. Long-term aging improves flavor.",
      sizeOptions: [
        { label: "12-15 lb (5.4-6.8 kg)", timeRange: "30-35 days" },
        { label: "16-20 lb (7.3-9.1 kg)", timeRange: "40-45 days" },
      ],
    },
  },
};

const methodLabels: Record<PreservationMethod, string> = {
  canning: "Canning",
  freezing: "Freezing",
  dehydrating: "Dehydrating",
  fermenting: "Fermenting",
  curing: "Curing",
};

const PreservationTimeCalculator = () => {
  const [method, setMethod] = useState<PreservationMethod | "">("");
  const [item, setItem] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const availableItems = useMemo(() => {
    if (!method) return [];
    return Object.entries(preservationDatabase[method]).map(([key, data]) => ({
      key,
      ...data,
    }));
  }, [method]);

  const selectedItem = useMemo(() => {
    if (!method || !item) return null;
    return preservationDatabase[method][item];
  }, [method, item]);

  const selectedSize = useMemo(() => {
    if (!selectedItem?.sizeOptions || !size) return null;
    return selectedItem.sizeOptions.find((opt) => opt.label === size);
  }, [selectedItem, size]);

  const handleMethodChange = (value: string) => {
    setMethod(value as PreservationMethod);
    setItem("");
    setSize("");
  };

  const handleItemChange = (value: string) => {
    setItem(value);
    setSize("");
  };

  const displayTime = selectedSize?.timeRange || selectedItem?.timeRange;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          Preservation Time Calculator
        </CardTitle>
        <CardDescription>
          Select a preservation method and food item to get recommended processing times and temperatures.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Method Selection */}
        <div className="space-y-2">
          <Label>Preservation Method</Label>
          <Select value={method} onValueChange={handleMethodChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select preservation method..." />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(methodLabels).map(([key, label]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Item Selection */}
        {method && (
          <div className="space-y-2">
            <Label>Food Item</Label>
            <Select value={item} onValueChange={handleItemChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select food item..." />
              </SelectTrigger>
              <SelectContent>
                {availableItems.map((food) => (
                  <SelectItem key={food.key} value={food.key}>
                    {food.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Size Selection (if applicable) */}
        {selectedItem?.sizeOptions && (
          <div className="space-y-2">
            <Label>Size/Quantity</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger>
                <SelectValue placeholder="Select size..." />
              </SelectTrigger>
              <SelectContent>
                {selectedItem.sizeOptions.map((opt) => (
                  <SelectItem key={opt.label} value={opt.label}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Results */}
        {selectedItem && (
          <div className="mt-6 p-6 bg-muted rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{selectedItem.name}</h3>
              <Badge variant="secondary">{selectedItem.category}</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Processing Time</p>
                  <p className="text-xl font-bold">{displayTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Thermometer className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Temperature</p>
                  <p className="text-xl font-bold">
                    {selectedItem.temperature}
                    <span className="text-muted-foreground text-base font-normal ml-2">
                      ({selectedItem.temperatureMetric})
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {selectedItem.requiresPressure && (
              <div className="flex items-start gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Pressure canning required.</strong> This low-acid food must be processed 
                  in a pressure canner to prevent botulism. Adjust PSI for altitude.
                </p>
              </div>
            )}

            {selectedItem.notes && (
              <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/10 rounded-lg">
                <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">{selectedItem.notes}</p>
              </div>
            )}
          </div>
        )}

        {!method && (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Select a preservation method to get started</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PreservationTimeCalculator;
