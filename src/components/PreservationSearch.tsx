import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface FoodItem {
  name: string;
  methods: {
    name: string;
    href: string;
    notes?: string;
  }[];
}

const foodDatabase: FoodItem[] = [
  // Fruits
  { name: "Apples", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - applesauce, pie filling, apple butter" },
    { name: "Freezing", href: "/freezing", notes: "Slice and freeze with ascorbic acid" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried apple rings or chips" },
    { name: "Cold Storage", href: "/storage", notes: "Root cellar storage 2-6 months" },
  ]},
  { name: "Peaches", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - halves, slices, or jam" },
    { name: "Freezing", href: "/freezing", notes: "Blanch, peel, slice and freeze" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried peach slices" },
  ]},
  { name: "Strawberries", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - jam or preserves" },
    { name: "Freezing", href: "/freezing", notes: "Flash freeze whole or sliced" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried strawberry chips" },
  ]},
  { name: "Blueberries", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - jam or pie filling" },
    { name: "Freezing", href: "/freezing", notes: "Flash freeze whole, no blanching needed" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried blueberries" },
  ]},
  { name: "Cherries", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - pie filling or preserves" },
    { name: "Freezing", href: "/freezing", notes: "Pit and freeze" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried cherries" },
  ]},
  { name: "Grapes", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - juice or jelly" },
    { name: "Freezing", href: "/freezing", notes: "Freeze whole for snacking" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Raisins" },
  ]},
  { name: "Pears", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - halves or butter" },
    { name: "Freezing", href: "/freezing", notes: "Peel, core, and freeze in syrup" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried pear slices" },
    { name: "Cold Storage", href: "/storage", notes: "Root cellar storage 1-3 months" },
  ]},
  { name: "Plums", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - jam or whole" },
    { name: "Freezing", href: "/freezing", notes: "Pit and freeze halves" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Prunes" },
  ]},
  // Vegetables
  { name: "Tomatoes", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath or pressure - salsa, sauce, whole" },
    { name: "Freezing", href: "/freezing", notes: "Blanch, peel, and freeze whole or as sauce" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Sun-dried tomatoes" },
  ]},
  { name: "Green Beans", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only - low acid" },
    { name: "Freezing", href: "/freezing", notes: "Blanch 3 minutes then freeze" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Leather britches style" },
    { name: "Fermenting", href: "/fermenting", notes: "Fermented dilly beans" },
  ]},
  { name: "Corn", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only - whole kernel or cream style" },
    { name: "Freezing", href: "/freezing", notes: "Blanch on cob, cut kernels" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried corn kernels" },
  ]},
  { name: "Carrots", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only" },
    { name: "Freezing", href: "/freezing", notes: "Blanch 2-5 minutes, dice or slice" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried carrot chips or shreds" },
    { name: "Cold Storage", href: "/storage", notes: "Root cellar in sand 4-6 months" },
    { name: "Fermenting", href: "/fermenting", notes: "Fermented carrot sticks" },
  ]},
  { name: "Potatoes", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only - cubed or whole small" },
    { name: "Freezing", href: "/freezing", notes: "Blanch and freeze for fries or hash browns" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried potato slices or flakes" },
    { name: "Cold Storage", href: "/storage", notes: "Root cellar 4-6 months" },
  ]},
  { name: "Beets", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning or pickled (water bath)" },
    { name: "Freezing", href: "/freezing", notes: "Cook, peel, and freeze" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Beet chips" },
    { name: "Cold Storage", href: "/storage", notes: "Root cellar in sand 3-5 months" },
    { name: "Fermenting", href: "/fermenting", notes: "Fermented beet kvass" },
  ]},
  { name: "Cucumbers", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - pickles, relish" },
    { name: "Freezing", href: "/freezing", notes: "Freezer pickles only" },
    { name: "Fermenting", href: "/fermenting", notes: "Naturally fermented pickles" },
  ]},
  { name: "Peppers", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning or pickled (water bath)" },
    { name: "Freezing", href: "/freezing", notes: "No blanching needed, dice and freeze" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried pepper flakes or powder" },
    { name: "Fermenting", href: "/fermenting", notes: "Fermented hot sauce" },
  ]},
  { name: "Onions", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning or pickled (water bath)" },
    { name: "Freezing", href: "/freezing", notes: "Dice and freeze raw" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried onion flakes or powder" },
    { name: "Cold Storage", href: "/storage", notes: "Cured and stored 3-6 months" },
  ]},
  { name: "Garlic", methods: [
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried garlic chips or powder" },
    { name: "Cold Storage", href: "/storage", notes: "Cured and stored 6-12 months" },
    { name: "Fermenting", href: "/fermenting", notes: "Black garlic or honey fermented" },
  ]},
  { name: "Cabbage", methods: [
    { name: "Freezing", href: "/freezing", notes: "Blanch wedges 1.5-3 minutes" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried cabbage for soups" },
    { name: "Cold Storage", href: "/storage", notes: "Root cellar 3-4 months" },
    { name: "Fermenting", href: "/fermenting", notes: "Sauerkraut or kimchi" },
  ]},
  { name: "Squash", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning cubed only (no puree)" },
    { name: "Freezing", href: "/freezing", notes: "Cook and mash before freezing" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried squash chips" },
    { name: "Cold Storage", href: "/storage", notes: "Winter squash stores 3-6 months" },
  ]},
  { name: "Pumpkin", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning cubed only (no puree)" },
    { name: "Freezing", href: "/freezing", notes: "Cook and puree before freezing" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried pumpkin or seeds" },
    { name: "Cold Storage", href: "/storage", notes: "Stores 2-3 months cured" },
  ]},
  { name: "Zucchini", methods: [
    { name: "Canning", href: "/canning", notes: "Pickled only (water bath)" },
    { name: "Freezing", href: "/freezing", notes: "Shred for baking, no blanching" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Zucchini chips" },
  ]},
  { name: "Asparagus", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only" },
    { name: "Freezing", href: "/freezing", notes: "Blanch 2-4 minutes" },
    { name: "Fermenting", href: "/fermenting", notes: "Fermented asparagus pickles" },
  ]},
  { name: "Peas", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only" },
    { name: "Freezing", href: "/freezing", notes: "Blanch 1.5-2.5 minutes" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried peas" },
  ]},
  { name: "Spinach", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only" },
    { name: "Freezing", href: "/freezing", notes: "Blanch 2 minutes" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried spinach flakes" },
  ]},
  // Meats
  { name: "Beef", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only - chunks, ground, or stew" },
    { name: "Freezing", href: "/freezing", notes: "Vacuum seal for 6-12 months" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Beef jerky" },
    { name: "Curing & Smoking", href: "/curing", notes: "Corned beef, pastrami, dried beef" },
  ]},
  { name: "Pork", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only - chunks or ground" },
    { name: "Freezing", href: "/freezing", notes: "Vacuum seal for 4-6 months" },
    { name: "Curing & Smoking", href: "/curing", notes: "Bacon, ham, sausage" },
  ]},
  { name: "Chicken", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only - bone-in or boneless" },
    { name: "Freezing", href: "/freezing", notes: "Vacuum seal for 9-12 months" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Chicken jerky" },
  ]},
  { name: "Turkey", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only" },
    { name: "Freezing", href: "/freezing", notes: "Vacuum seal for 6-9 months" },
    { name: "Curing & Smoking", href: "/curing", notes: "Smoked turkey" },
  ]},
  { name: "Venison", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only" },
    { name: "Freezing", href: "/freezing", notes: "Vacuum seal for 9-12 months" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Venison jerky" },
    { name: "Curing & Smoking", href: "/curing", notes: "Smoked venison, summer sausage" },
  ]},
  { name: "Fish", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only - salmon, tuna, etc." },
    { name: "Freezing", href: "/freezing", notes: "Vacuum seal for 3-6 months" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Fish jerky" },
    { name: "Curing & Smoking", href: "/curing", notes: "Smoked salmon, gravlax" },
  ]},
  // Dairy & Eggs
  { name: "Eggs", methods: [
    { name: "Freezing", href: "/freezing", notes: "Beat and freeze in portions" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Freeze-dried scrambled eggs" },
    { name: "Cold Storage", href: "/storage", notes: "Water glass preservation 12+ months" },
  ]},
  { name: "Milk", methods: [
    { name: "Freezing", href: "/freezing", notes: "Freeze in containers with headspace" },
    { name: "Fermenting", href: "/fermenting", notes: "Kefir, yogurt, cheese" },
  ]},
  { name: "Cheese", methods: [
    { name: "Freezing", href: "/freezing", notes: "Hard cheeses freeze well" },
    { name: "Cold Storage", href: "/storage", notes: "Waxed cheese wheels" },
  ]},
  // Herbs
  { name: "Herbs", methods: [
    { name: "Freezing", href: "/freezing", notes: "Freeze in oil or water cubes" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried herbs retain flavor well" },
  ]},
  { name: "Basil", methods: [
    { name: "Freezing", href: "/freezing", notes: "Freeze in olive oil cubes or as pesto" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dry at low temp to preserve flavor" },
  ]},
  // Misc
  { name: "Mushrooms", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning or pickled" },
    { name: "Freezing", href: "/freezing", notes: "Sauté before freezing" },
    { name: "Dehydrating", href: "/dehydrating", notes: "Dried mushrooms reconstitute well" },
  ]},
  { name: "Salsa", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - use tested recipes only" },
    { name: "Freezing", href: "/freezing", notes: "Freeze in portions" },
    { name: "Fermenting", href: "/fermenting", notes: "Fermented salsa" },
  ]},
  { name: "Jam", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath canning with pectin" },
    { name: "Freezing", href: "/freezing", notes: "Freezer jam - no cooking needed" },
  ]},
  { name: "Pickles", methods: [
    { name: "Canning", href: "/canning", notes: "Water bath - vinegar pickles" },
    { name: "Fermenting", href: "/fermenting", notes: "Lacto-fermented pickles" },
  ]},
  { name: "Broth", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only" },
    { name: "Freezing", href: "/freezing", notes: "Freeze in ice cube trays or containers" },
  ]},
  { name: "Soup", methods: [
    { name: "Canning", href: "/canning", notes: "Pressure canning only - follow tested recipes" },
    { name: "Freezing", href: "/freezing", notes: "Cool completely before freezing" },
  ]},
];

export function PreservationSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return foodDatabase.filter(food => 
      food.name.toLowerCase().includes(searchTerm)
    ).slice(0, 5);
  }, [query]);

  const showResults = isFocused && query.trim().length > 0;

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="What do you want to preserve? (e.g., tomatoes, beef, apples)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="pl-12 pr-10 py-6 text-base bg-background/95 backdrop-blur-sm border-2 border-border focus:border-primary"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {showResults && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg border-2 animate-fade-in">
          <CardContent className="p-2">
            {results.length > 0 ? (
              <div className="space-y-1">
                {results.map((food) => (
                  <div key={food.name} className="p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">{food.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {food.methods.map((method) => (
                        <Link
                          key={method.name}
                          to={method.href}
                          className="group"
                          title={method.notes}
                        >
                          <Badge 
                            variant="secondary" 
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {method.name}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                    {food.methods[0]?.notes && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {food.methods[0].notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="p-3 text-muted-foreground text-sm">
                No results found. Try searching for common foods like tomatoes, apples, beef, or cucumbers.
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}