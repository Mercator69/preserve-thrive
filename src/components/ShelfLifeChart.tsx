import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Search, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface ShelfLifeData {
  name: string;
  category: string;
  canning?: string;
  freezing?: string;
  dehydrating?: string;
  coldStorage?: string;
  fermenting?: string;
  curing?: string;
}

const shelfLifeDatabase: ShelfLifeData[] = [
  // Fruits
  { name: "Apples", category: "Fruits", canning: "1-2 years", freezing: "8-12 months", dehydrating: "6-12 months", coldStorage: "2-6 months" },
  { name: "Peaches", category: "Fruits", canning: "1-2 years", freezing: "8-12 months", dehydrating: "6-12 months" },
  { name: "Strawberries", category: "Fruits", canning: "1 year", freezing: "8-12 months", dehydrating: "6-12 months" },
  { name: "Blueberries", category: "Fruits", canning: "1 year", freezing: "10-12 months", dehydrating: "6-12 months" },
  { name: "Cherries", category: "Fruits", canning: "1 year", freezing: "8-12 months", dehydrating: "6-12 months" },
  { name: "Grapes", category: "Fruits", canning: "1 year", freezing: "10-12 months", dehydrating: "6-12 months" },
  { name: "Pears", category: "Fruits", canning: "1-2 years", freezing: "8-12 months", dehydrating: "6-12 months", coldStorage: "1-3 months" },
  { name: "Plums", category: "Fruits", canning: "1 year", freezing: "8-12 months", dehydrating: "6-12 months" },
  // Vegetables
  { name: "Tomatoes", category: "Vegetables", canning: "12-18 months", freezing: "8-12 months", dehydrating: "6-12 months" },
  { name: "Green Beans", category: "Vegetables", canning: "2-3 years", freezing: "8-12 months", dehydrating: "6-12 months", fermenting: "4-6 months" },
  { name: "Corn", category: "Vegetables", canning: "2-3 years", freezing: "8-12 months", dehydrating: "1-2 years" },
  { name: "Carrots", category: "Vegetables", canning: "2-3 years", freezing: "8-12 months", dehydrating: "6-12 months", coldStorage: "4-6 months", fermenting: "4-6 months" },
  { name: "Potatoes", category: "Vegetables", canning: "1-2 years", freezing: "10-12 months", dehydrating: "1-2 years", coldStorage: "4-6 months" },
  { name: "Beets", category: "Vegetables", canning: "2-3 years", freezing: "8-12 months", dehydrating: "6-12 months", coldStorage: "3-5 months", fermenting: "4-6 months" },
  { name: "Cucumbers", category: "Vegetables", canning: "1-2 years", freezing: "3-6 months", fermenting: "4-6 months" },
  { name: "Peppers", category: "Vegetables", canning: "1-2 years", freezing: "8-12 months", dehydrating: "1-2 years", fermenting: "4-6 months" },
  { name: "Onions", category: "Vegetables", canning: "1 year", freezing: "8-12 months", dehydrating: "1-2 years", coldStorage: "3-6 months" },
  { name: "Garlic", category: "Vegetables", dehydrating: "1-2 years", coldStorage: "6-12 months", fermenting: "1 year" },
  { name: "Cabbage", category: "Vegetables", freezing: "8-12 months", dehydrating: "6-12 months", coldStorage: "3-4 months", fermenting: "4-6 months" },
  { name: "Squash", category: "Vegetables", canning: "1-2 years", freezing: "8-12 months", dehydrating: "6-12 months", coldStorage: "3-6 months" },
  { name: "Pumpkin", category: "Vegetables", canning: "1-2 years", freezing: "8-12 months", dehydrating: "6-12 months", coldStorage: "2-3 months" },
  { name: "Zucchini", category: "Vegetables", canning: "1 year", freezing: "8-12 months", dehydrating: "6-12 months" },
  { name: "Asparagus", category: "Vegetables", canning: "2-3 years", freezing: "8-12 months", fermenting: "4-6 months" },
  { name: "Peas", category: "Vegetables", canning: "2-3 years", freezing: "8-12 months", dehydrating: "1-2 years" },
  { name: "Spinach", category: "Vegetables", canning: "2-3 years", freezing: "8-12 months", dehydrating: "6-12 months" },
  // Meats
  { name: "Beef", category: "Meats", canning: "2-3 years", freezing: "6-12 months", dehydrating: "1-2 months", curing: "2-3 months" },
  { name: "Pork", category: "Meats", canning: "2-3 years", freezing: "4-6 months", curing: "2-3 months" },
  { name: "Chicken", category: "Meats", canning: "2-3 years", freezing: "9-12 months", dehydrating: "1-2 months" },
  { name: "Turkey", category: "Meats", canning: "2-3 years", freezing: "6-9 months", curing: "2-3 months" },
  { name: "Venison", category: "Meats", canning: "2-3 years", freezing: "9-12 months", dehydrating: "1-2 months", curing: "2-3 months" },
  { name: "Fish", category: "Meats", canning: "2-3 years", freezing: "3-6 months", dehydrating: "1-2 months", curing: "2-3 months" },
  // Dairy & Eggs
  { name: "Eggs", category: "Dairy & Eggs", freezing: "12 months", dehydrating: "5-10 years", coldStorage: "12+ months" },
  { name: "Milk", category: "Dairy & Eggs", freezing: "3-6 months", fermenting: "1-3 weeks" },
  { name: "Cheese", category: "Dairy & Eggs", freezing: "6-9 months", coldStorage: "3-6 months" },
  // Herbs
  { name: "Herbs (general)", category: "Herbs", freezing: "6-12 months", dehydrating: "1-3 years" },
  { name: "Basil", category: "Herbs", freezing: "6-12 months", dehydrating: "1-2 years" },
  // Misc
  { name: "Mushrooms", category: "Misc", canning: "1 year", freezing: "8-12 months", dehydrating: "6-12 months" },
  { name: "Salsa", category: "Misc", canning: "12-18 months", freezing: "3-4 months", fermenting: "2-3 months" },
  { name: "Jam", category: "Misc", canning: "1-2 years", freezing: "6-12 months" },
  { name: "Pickles", category: "Misc", canning: "1-2 years", fermenting: "4-6 months" },
  { name: "Broth", category: "Misc", canning: "2-3 years", freezing: "4-6 months" },
  { name: "Soup", category: "Misc", canning: "2-3 years", freezing: "2-3 months" },
];

const categoryColors: Record<string, string> = {
  "Fruits": "hsl(var(--chart-1))",
  "Vegetables": "hsl(var(--chart-2))",
  "Meats": "hsl(var(--chart-3))",
  "Dairy & Eggs": "hsl(var(--chart-4))",
  "Herbs": "hsl(var(--chart-5))",
  "Misc": "hsl(var(--primary))",
};

const parseMonths = (value: string | undefined): number => {
  if (!value) return 0;
  const match = value.match(/(\d+)/);
  if (match) {
    if (value.includes("year")) {
      return parseInt(match[1]) * 12;
    }
    if (value.includes("week")) {
      return parseInt(match[1]) / 4;
    }
    return parseInt(match[1]);
  }
  return 0;
};

export default function ShelfLifeChart() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [methodFilter, setMethodFilter] = useState<string>("all");

  const categories = [...new Set(shelfLifeDatabase.map(item => item.category))];
  const methods = ["canning", "freezing", "dehydrating", "coldStorage", "fermenting", "curing"];
  const methodLabels: Record<string, string> = {
    canning: "Canning",
    freezing: "Freezing",
    dehydrating: "Dehydrating",
    coldStorage: "Cold Storage",
    fermenting: "Fermenting",
    curing: "Curing",
  };

  const filteredData = useMemo(() => {
    return shelfLifeDatabase.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
      const matchesMethod = methodFilter === "all" || item[methodFilter as keyof ShelfLifeData];
      return matchesSearch && matchesCategory && matchesMethod;
    });
  }, [searchQuery, categoryFilter, methodFilter]);

  const chartData = useMemo(() => {
    if (methodFilter === "all") {
      // Show average shelf life by category
      const categoryAverages = categories.map(cat => {
        const items = filteredData.filter(item => item.category === cat);
        if (items.length === 0) return null;
        const avgMonths = items.reduce((acc, item) => {
          const values = [
            parseMonths(item.canning),
            parseMonths(item.freezing),
            parseMonths(item.dehydrating),
            parseMonths(item.coldStorage),
            parseMonths(item.fermenting),
            parseMonths(item.curing),
          ].filter(v => v > 0);
          return acc + (values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0);
        }, 0) / items.length;
        return { name: cat, months: Math.round(avgMonths), category: cat };
      }).filter(Boolean);
      return categoryAverages;
    } else {
      // Show specific method shelf life
      return filteredData
        .filter(item => item[methodFilter as keyof ShelfLifeData])
        .map(item => ({
          name: item.name,
          months: parseMonths(item[methodFilter as keyof ShelfLifeData] as string),
          category: item.category,
        }))
        .slice(0, 15);
    }
  }, [filteredData, methodFilter, categories]);

  const handleDownloadPDF = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Food Preservation Shelf Life Guide</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Georgia', serif; 
      padding: 40px;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
      min-height: 100vh;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 50px;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 30px;
      border-bottom: 3px solid #2d5a27;
      margin-bottom: 40px;
    }
    h1 { 
      color: #2d5a27; 
      font-size: 36px; 
      margin-bottom: 10px;
      letter-spacing: 1px;
    }
    .subtitle {
      color: #666;
      font-size: 16px;
      font-style: italic;
    }
    .category-section {
      margin-bottom: 35px;
      page-break-inside: avoid;
    }
    .category-header {
      background: linear-gradient(135deg, #2d5a27 0%, #4a7c43 100%);
      color: white;
      padding: 12px 20px;
      border-radius: 8px 8px 0 0;
      font-size: 20px;
      font-weight: bold;
    }
    table { 
      width: 100%; 
      border-collapse: collapse;
      font-size: 13px;
    }
    th { 
      background: #f8f9fa; 
      padding: 12px 10px; 
      text-align: left;
      font-weight: 600;
      color: #2d5a27;
      border-bottom: 2px solid #e0e0e0;
    }
    td { 
      padding: 10px; 
      border-bottom: 1px solid #eee;
    }
    tr:hover { background: #f5f8f5; }
    .food-name { 
      font-weight: 600; 
      color: #333;
    }
    .shelf-life {
      color: #555;
      text-align: center;
    }
    .na { color: #ccc; font-style: italic; }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      text-align: center;
      color: #888;
      font-size: 12px;
    }
    .tips {
      background: #f8f9f5;
      padding: 20px;
      border-radius: 8px;
      margin-top: 30px;
      border-left: 4px solid #2d5a27;
    }
    .tips h3 {
      color: #2d5a27;
      margin-bottom: 10px;
    }
    .tips ul {
      margin-left: 20px;
      color: #555;
      line-height: 1.8;
    }
    @media print {
      body { background: white; padding: 0; }
      .container { box-shadow: none; padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🥫 Food Preservation Shelf Life Guide</h1>
      <p class="subtitle">Your Complete Reference for Safe Food Storage</p>
    </div>
    
    ${categories.map(category => {
      const items = shelfLifeDatabase.filter(item => item.category === category);
      return `
        <div class="category-section">
          <div class="category-header">${category}</div>
          <table>
            <tr>
              <th style="width: 18%;">Food</th>
              <th style="width: 14%;">Canning</th>
              <th style="width: 14%;">Freezing</th>
              <th style="width: 14%;">Dehydrating</th>
              <th style="width: 14%;">Cold Storage</th>
              <th style="width: 13%;">Fermenting</th>
              <th style="width: 13%;">Curing</th>
            </tr>
            ${items.map(item => `
              <tr>
                <td class="food-name">${item.name}</td>
                <td class="shelf-life">${item.canning || '<span class="na">—</span>'}</td>
                <td class="shelf-life">${item.freezing || '<span class="na">—</span>'}</td>
                <td class="shelf-life">${item.dehydrating || '<span class="na">—</span>'}</td>
                <td class="shelf-life">${item.coldStorage || '<span class="na">—</span>'}</td>
                <td class="shelf-life">${item.fermenting || '<span class="na">—</span>'}</td>
                <td class="shelf-life">${item.curing || '<span class="na">—</span>'}</td>
              </tr>
            `).join('')}
          </table>
        </div>
      `;
    }).join('')}

    <div class="tips">
      <h3>💡 Storage Tips</h3>
      <ul>
        <li><strong>Canned goods:</strong> Store in cool, dark place. Inspect seals before use.</li>
        <li><strong>Frozen foods:</strong> Keep at 0°F (-18°C) or below for best quality.</li>
        <li><strong>Dehydrated foods:</strong> Store in airtight containers away from light.</li>
        <li><strong>Fermented foods:</strong> Refrigerate after opening; check for mold.</li>
        <li><strong>Cold storage:</strong> Maintain proper humidity and temperature in root cellar.</li>
      </ul>
    </div>

    <div class="footer">
      <p>Generated from PreserveWise • ${new Date().toLocaleDateString()}</p>
      <p style="margin-top: 5px;">Always use tested recipes and follow safe preservation practices.</p>
    </div>
  </div>
  <script>
    setTimeout(() => window.print(), 500);
  </script>
</body>
</html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Food Shelf Life Chart
              </CardTitle>
              <CardDescription>
                Compare preservation shelf life across all methods and food types
              </CardDescription>
            </div>
            <Button onClick={handleDownloadPDF} variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search foods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={methodFilter} onValueChange={setMethodFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                {methods.map(method => (
                  <SelectItem key={method} value={method}>{methodLabels[method]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Chart */}
          <div className="h-80 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" label={{ value: 'Months', position: 'bottom', offset: -5 }} />
                <YAxis type="category" dataKey="name" width={70} tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [`${value} months`, 'Shelf Life']}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="months" radius={[0, 4, 4, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={categoryColors[entry?.category || "Misc"]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map(cat => (
              <Badge key={cat} variant="outline" className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: categoryColors[cat] }} 
                />
                {cat}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Shelf Life Data</CardTitle>
          <CardDescription>
            {filteredData.length} items found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Food</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-center">Canning</TableHead>
                  <TableHead className="text-center">Freezing</TableHead>
                  <TableHead className="text-center">Dehydrating</TableHead>
                  <TableHead className="text-center">Cold Storage</TableHead>
                  <TableHead className="text-center">Fermenting</TableHead>
                  <TableHead className="text-center">Curing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    </TableCell>
                    <TableCell className="text-center text-sm">{item.canning || "—"}</TableCell>
                    <TableCell className="text-center text-sm">{item.freezing || "—"}</TableCell>
                    <TableCell className="text-center text-sm">{item.dehydrating || "—"}</TableCell>
                    <TableCell className="text-center text-sm">{item.coldStorage || "—"}</TableCell>
                    <TableCell className="text-center text-sm">{item.fermenting || "—"}</TableCell>
                    <TableCell className="text-center text-sm">{item.curing || "—"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
