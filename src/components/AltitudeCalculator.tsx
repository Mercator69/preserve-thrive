import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mountain, AlertTriangle, CheckCircle } from "lucide-react";

interface AltitudeResult {
  dialGaugePsi: number;
  dialGaugeKpa: number;
  weightedGaugePsi: number;
  weightedGaugeKpa: number;
  waterBathExtra: number;
  altitudeRange: string;
}

const AltitudeCalculator = () => {
  const [altitudeFt, setAltitudeFt] = useState<string>("");
  const [altitudeM, setAltitudeM] = useState<string>("");
  const [result, setResult] = useState<AltitudeResult | null>(null);

  const calculateAdjustment = (feet: number): AltitudeResult => {
    let dialGaugePsi: number;
    let weightedGaugePsi: number;
    let waterBathExtra: number;
    let altitudeRange: string;

    if (feet <= 1000) {
      dialGaugePsi = 10;
      weightedGaugePsi = 10;
      waterBathExtra = 0;
      altitudeRange = "0-1,000 ft (0-305 m)";
    } else if (feet <= 2000) {
      dialGaugePsi = 11;
      weightedGaugePsi = 15;
      waterBathExtra = 5;
      altitudeRange = "1,001-2,000 ft (305-610 m)";
    } else if (feet <= 3000) {
      dialGaugePsi = 11;
      weightedGaugePsi = 15;
      waterBathExtra = 10;
      altitudeRange = "2,001-3,000 ft (610-914 m)";
    } else if (feet <= 4000) {
      dialGaugePsi = 12;
      weightedGaugePsi = 15;
      waterBathExtra = 10;
      altitudeRange = "3,001-4,000 ft (914-1,219 m)";
    } else if (feet <= 5000) {
      dialGaugePsi = 12;
      weightedGaugePsi = 15;
      waterBathExtra = 15;
      altitudeRange = "4,001-5,000 ft (1,219-1,524 m)";
    } else if (feet <= 6000) {
      dialGaugePsi = 13;
      weightedGaugePsi = 15;
      waterBathExtra = 15;
      altitudeRange = "5,001-6,000 ft (1,524-1,829 m)";
    } else if (feet <= 8000) {
      dialGaugePsi = 14;
      weightedGaugePsi = 15;
      waterBathExtra = 20;
      altitudeRange = "6,001-8,000 ft (1,829-2,438 m)";
    } else if (feet <= 10000) {
      dialGaugePsi = 15;
      weightedGaugePsi = 15;
      waterBathExtra = 25;
      altitudeRange = "8,001-10,000 ft (2,438-3,048 m)";
    } else {
      dialGaugePsi = 15;
      weightedGaugePsi = 15;
      waterBathExtra = 25;
      altitudeRange = "Above 10,000 ft (3,048+ m)";
    }

    return {
      dialGaugePsi,
      dialGaugeKpa: Math.round(dialGaugePsi * 6.89476),
      weightedGaugePsi,
      weightedGaugeKpa: Math.round(weightedGaugePsi * 6.89476),
      waterBathExtra,
      altitudeRange,
    };
  };

  const handleFeetChange = (value: string) => {
    setAltitudeFt(value);
    if (value === "") {
      setAltitudeM("");
      setResult(null);
      return;
    }
    const feet = parseFloat(value);
    if (!isNaN(feet) && feet >= 0) {
      setAltitudeM((feet * 0.3048).toFixed(0));
      setResult(calculateAdjustment(feet));
    }
  };

  const handleMetersChange = (value: string) => {
    setAltitudeM(value);
    if (value === "") {
      setAltitudeFt("");
      setResult(null);
      return;
    }
    const meters = parseFloat(value);
    if (!isNaN(meters) && meters >= 0) {
      const feet = meters / 0.3048;
      setAltitudeFt(feet.toFixed(0));
      setResult(calculateAdjustment(feet));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mountain className="w-5 h-5 text-primary" />
          Altitude Adjustment Calculator
        </CardTitle>
        <CardDescription>
          Calculate pressure canning adjustments and water bath time additions based on your elevation. 
          Higher altitudes require higher pressure or longer processing times due to lower atmospheric pressure.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="altFt">Your Altitude (feet)</Label>
            <Input
              id="altFt"
              type="number"
              placeholder="e.g., 5000"
              value={altitudeFt}
              onChange={(e) => handleFeetChange(e.target.value)}
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="altM">Your Altitude (meters)</Label>
            <Input
              id="altM"
              type="number"
              placeholder="e.g., 1524"
              value={altitudeM}
              onChange={(e) => handleMetersChange(e.target.value)}
              min="0"
            />
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{result.altitudeRange}</Badge>
            </div>

            <Tabs defaultValue="pressure" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pressure">Pressure Canning</TabsTrigger>
                <TabsTrigger value="waterbath">Water Bath</TabsTrigger>
              </TabsList>

              <TabsContent value="pressure" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <div className="text-sm text-muted-foreground mb-1">Dial Gauge Canner</div>
                    <div className="text-2xl font-bold text-primary">
                      {result.dialGaugePsi} psi
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ({result.dialGaugeKpa} kPa)
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <div className="text-sm text-muted-foreground mb-1">Weighted Gauge Canner</div>
                    <div className="text-2xl font-bold text-primary">
                      {result.weightedGaugePsi} psi
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ({result.weightedGaugeKpa} kPa)
                    </div>
                  </div>
                </div>

                {result.dialGaugePsi > 10 && (
                  <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <strong>Important:</strong> Your altitude requires increased pressure. 
                      Standard recipes at sea level use 10 psi—you need {result.dialGaugePsi} psi 
                      for dial gauge or {result.weightedGaugePsi} psi for weighted gauge canners.
                    </div>
                  </div>
                )}

                {result.dialGaugePsi === 10 && (
                  <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      At your altitude, you can use standard pressure canning pressures (10 psi) 
                      without adjustment.
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="waterbath" className="space-y-4 mt-4">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-sm text-muted-foreground mb-1">Add to Processing Time</div>
                  <div className="text-2xl font-bold text-primary">
                    +{result.waterBathExtra} minutes
                  </div>
                  <div className="text-sm text-muted-foreground">
                    per 20 minutes of recipe time
                  </div>
                </div>

                {result.waterBathExtra > 0 ? (
                  <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <strong>Example:</strong> If a recipe calls for 20 minutes of processing at 
                      sea level, you need {20 + result.waterBathExtra} minutes at your altitude.
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      At your altitude, you can use standard water bath processing times 
                      without adjustment.
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Reference Table */}
        <div className="pt-4 border-t">
          <h4 className="font-semibold mb-3 text-sm">Complete Altitude Reference Chart</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Altitude</th>
                  <th className="text-center py-2 px-2">Dial Gauge</th>
                  <th className="text-center py-2 px-2">Weighted</th>
                  <th className="text-center py-2 pl-2">Water Bath +</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-2 pr-4">0-1,000 ft (0-305 m)</td>
                  <td className="text-center py-2 px-2">10 psi</td>
                  <td className="text-center py-2 px-2">10 psi</td>
                  <td className="text-center py-2 pl-2">0 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">1,001-3,000 ft (305-914 m)</td>
                  <td className="text-center py-2 px-2">11 psi</td>
                  <td className="text-center py-2 px-2">15 psi</td>
                  <td className="text-center py-2 pl-2">5-10 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">3,001-6,000 ft (914-1,829 m)</td>
                  <td className="text-center py-2 px-2">12-13 psi</td>
                  <td className="text-center py-2 px-2">15 psi</td>
                  <td className="text-center py-2 pl-2">10-15 min</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">6,001-8,000 ft (1,829-2,438 m)</td>
                  <td className="text-center py-2 px-2">14 psi</td>
                  <td className="text-center py-2 px-2">15 psi</td>
                  <td className="text-center py-2 pl-2">20 min</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">8,001-10,000 ft (2,438-3,048 m)</td>
                  <td className="text-center py-2 px-2">15 psi</td>
                  <td className="text-center py-2 px-2">15 psi</td>
                  <td className="text-center py-2 pl-2">25 min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Source: USDA Complete Guide to Home Canning (2015) and Health Canada guidelines.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AltitudeCalculator;
