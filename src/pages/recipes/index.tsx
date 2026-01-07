import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Thermometer } from "lucide-react";

import canningImage from "@/assets/canning.jpg";

interface RecipeCard {
  title: string;
  description: string;
  method: "water-bath" | "pressure";
  difficulty: "beginner" | "intermediate" | "advanced";
  time: string;
  slug: string;
}

const recipes: RecipeCard[] = [
  {
    title: "Classic Strawberry Jam",
    description: "A sweet, spreadable jam perfect for beginners. Uses fresh strawberries and pectin.",
    method: "water-bath",
    difficulty: "beginner",
    time: "1.5 hours",
    slug: "strawberry-jam",
  },
  {
    title: "Bread & Butter Pickles",
    description: "Sweet and tangy cucumber pickles with onion and spices. A family favorite.",
    method: "water-bath",
    difficulty: "beginner",
    time: "2 hours",
    slug: "bread-butter-pickles",
  },
  {
    title: "Classic Tomato Salsa",
    description: "Fresh, chunky salsa with tomatoes, peppers, onions, and cilantro.",
    method: "water-bath",
    difficulty: "intermediate",
    time: "2 hours",
    slug: "tomato-salsa",
  },
  {
    title: "Apple Butter",
    description: "Slow-cooked, spiced apple spread. Rich, smooth, and perfect for fall.",
    method: "water-bath",
    difficulty: "beginner",
    time: "4 hours",
    slug: "apple-butter",
  },
  {
    title: "Dill Pickles",
    description: "Crispy, garlicky dill pickles. The classic cucumber pickle recipe.",
    method: "water-bath",
    difficulty: "beginner",
    time: "2 hours",
    slug: "dill-pickles",
  },
  {
    title: "Peach Preserves",
    description: "Chunks of ripe peaches in a light syrup. Tastes like summer in a jar.",
    method: "water-bath",
    difficulty: "intermediate",
    time: "2.5 hours",
    slug: "peach-preserves",
  },
  {
    title: "Green Beans (Pressure Canned)",
    description: "Tender green beans preserved using pressure canning. A pantry staple.",
    method: "pressure",
    difficulty: "intermediate",
    time: "2 hours",
    slug: "pressure-green-beans",
  },
  {
    title: "Beef Stew",
    description: "Hearty beef stew with vegetables, ready for quick weeknight meals.",
    method: "pressure",
    difficulty: "advanced",
    time: "3 hours",
    slug: "beef-stew",
  },
];

const RecipesIndex = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={canningImage}
            alt="Canning recipes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary">Recipe Collection</Badge>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold">
              Canning Recipes
            </h1>
            <p className="text-lg text-muted-foreground">
              Tested recipes for water bath and pressure canning. Each recipe includes 
              step-by-step instructions, equipment recommendations, and safety guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-wrap gap-4 mb-8">
            <Badge variant="outline" className="text-sm">
              {recipes.filter(r => r.method === "water-bath").length} Water Bath Recipes
            </Badge>
            <Badge variant="outline" className="text-sm">
              {recipes.filter(r => r.method === "pressure").length} Pressure Canning Recipes
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Card key={recipe.slug} className="overflow-hidden hover-lift">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={recipe.method === "water-bath" ? "default" : "secondary"}
                    >
                      {recipe.method === "water-bath" ? "Water Bath" : "Pressure"}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {recipe.difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold">{recipe.title}</h3>
                  <p className="text-sm text-muted-foreground">{recipe.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Thermometer className="w-4 h-4" />
                      {recipe.method === "water-bath" ? "212°F (100°C)" : "240°F (116°C)"}
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/recipes/${recipe.slug}`}>
                      View Recipe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Reminder */}
      <section className="py-12 bg-muted/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">Canning Safety</h2>
            <p className="text-muted-foreground mb-6">
              All recipes on this site are based on USDA-tested guidelines. Always follow 
              processing times exactly, adjust for altitude, and never modify ingredients 
              in canning recipes as this can affect food safety.
            </p>
            <Button asChild variant="outline">
              <Link to="/canning">
                Learn More About Safe Canning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecipesIndex;