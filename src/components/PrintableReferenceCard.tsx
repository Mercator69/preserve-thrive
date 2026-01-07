import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Download } from "lucide-react";

const PrintableReferenceCard = () => {
  const handlePrint = () => {
    const printContent = document.getElementById("printable-reference");
    if (!printContent) return;
    
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>PreserveCraft Quick Reference Card</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
            }
            h1 { font-size: 24px; text-align: center; margin-bottom: 8px; color: #2d4a3e; }
            .subtitle { text-align: center; color: #666; margin-bottom: 24px; font-size: 12px; }
            .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
            .section { border: 1px solid #ddd; border-radius: 8px; padding: 12px; }
            .section h2 { font-size: 14px; color: #2d4a3e; border-bottom: 2px solid #8b9d83; padding-bottom: 6px; margin-bottom: 10px; }
            .row { display: flex; justify-content: space-between; font-size: 11px; padding: 3px 0; }
            .row:nth-child(even) { background: #f5f5f5; }
            .label { color: #333; }
            .value { font-weight: 600; color: #2d4a3e; }
            .full-width { grid-column: span 2; }
            .altitude-table { width: 100%; border-collapse: collapse; font-size: 10px; }
            .altitude-table th, .altitude-table td { border: 1px solid #ddd; padding: 4px 6px; text-align: center; }
            .altitude-table th { background: #8b9d83; color: white; }
            .footer { text-align: center; margin-top: 20px; font-size: 10px; color: #888; }
            @media print {
              body { padding: 10px; }
              .section { break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <h1>🥫 PreserveCraft Quick Reference Card</h1>
          <p class="subtitle">Essential Conversions & Guidelines for Food Preservation</p>
          
          <div class="grid">
            <div class="section">
              <h2>🌡️ Temperature</h2>
              <div class="row"><span class="label">Freezer</span><span class="value">0°F / -18°C</span></div>
              <div class="row"><span class="label">Refrigerator</span><span class="value">40°F / 4°C</span></div>
              <div class="row"><span class="label">Danger Zone (low)</span><span class="value">40°F / 4°C</span></div>
              <div class="row"><span class="label">Danger Zone (high)</span><span class="value">140°F / 60°C</span></div>
              <div class="row"><span class="label">Dehydrating (fruits)</span><span class="value">135°F / 57°C</span></div>
              <div class="row"><span class="label">Dehydrating (meat)</span><span class="value">160°F / 71°C</span></div>
              <div class="row"><span class="label">Water Bath Canning</span><span class="value">212°F / 100°C</span></div>
              <div class="row"><span class="label">Pressure Canning</span><span class="value">240°F / 116°C</span></div>
            </div>
            
            <div class="section">
              <h2>⚖️ Weight</h2>
              <div class="row"><span class="label">1 oz</span><span class="value">28.35 g</span></div>
              <div class="row"><span class="label">4 oz (¼ lb)</span><span class="value">113 g</span></div>
              <div class="row"><span class="label">8 oz (½ lb)</span><span class="value">227 g</span></div>
              <div class="row"><span class="label">1 lb</span><span class="value">454 g</span></div>
              <div class="row"><span class="label">2.2 lb</span><span class="value">1 kg</span></div>
              <div class="row"><span class="label">5 lb</span><span class="value">2.27 kg</span></div>
            </div>
            
            <div class="section">
              <h2>🧪 Volume</h2>
              <div class="row"><span class="label">1 tsp</span><span class="value">5 mL</span></div>
              <div class="row"><span class="label">1 tbsp</span><span class="value">15 mL</span></div>
              <div class="row"><span class="label">¼ cup</span><span class="value">59 mL</span></div>
              <div class="row"><span class="label">½ cup</span><span class="value">118 mL</span></div>
              <div class="row"><span class="label">1 cup</span><span class="value">237 mL</span></div>
              <div class="row"><span class="label">1 pint</span><span class="value">473 mL</span></div>
              <div class="row"><span class="label">1 quart</span><span class="value">946 mL</span></div>
              <div class="row"><span class="label">1 gallon</span><span class="value">3.79 L</span></div>
            </div>
            
            <div class="section">
              <h2>🫙 Canning Jar Sizes</h2>
              <div class="row"><span class="label">4 oz (jelly)</span><span class="value">118 mL</span></div>
              <div class="row"><span class="label">Half-pint</span><span class="value">237 mL</span></div>
              <div class="row"><span class="label">Pint</span><span class="value">473 mL</span></div>
              <div class="row"><span class="label">Quart</span><span class="value">946 mL</span></div>
              <div class="row"><span class="label">Half-gallon</span><span class="value">1.9 L</span></div>
            </div>
            
            <div class="section full-width">
              <h2>⛰️ Altitude Adjustments for Pressure Canning</h2>
              <table class="altitude-table">
                <thead>
                  <tr>
                    <th>Altitude</th>
                    <th>Dial Gauge</th>
                    <th>Weighted Gauge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0-1,000 ft (0-305 m)</td>
                    <td>10 psi / 69 kPa</td>
                    <td>10 psi / 69 kPa</td>
                  </tr>
                  <tr>
                    <td>1,001-2,000 ft (305-610 m)</td>
                    <td>11 psi / 76 kPa</td>
                    <td>15 psi / 103 kPa</td>
                  </tr>
                  <tr>
                    <td>2,001-4,000 ft (610-1,219 m)</td>
                    <td>12 psi / 83 kPa</td>
                    <td>15 psi / 103 kPa</td>
                  </tr>
                  <tr>
                    <td>4,001-6,000 ft (1,219-1,829 m)</td>
                    <td>13 psi / 90 kPa</td>
                    <td>15 psi / 103 kPa</td>
                  </tr>
                  <tr>
                    <td>6,001-8,000 ft (1,829-2,438 m)</td>
                    <td>14 psi / 97 kPa</td>
                    <td>15 psi / 103 kPa</td>
                  </tr>
                  <tr>
                    <td>8,001-10,000 ft (2,438-3,048 m)</td>
                    <td>15 psi / 103 kPa</td>
                    <td>15 psi / 103 kPa</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="section full-width">
              <h2>🧂 Common Preservation Ratios</h2>
              <div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: 8px;">
                <div class="row"><span class="label">Fermentation brine (2%)</span><span class="value">1 tbsp salt per quart water</span></div>
                <div class="row"><span class="label">Fermentation brine (3.5%)</span><span class="value">2 tbsp salt per quart water</span></div>
                <div class="row"><span class="label">Prague Powder #1</span><span class="value">1 tsp per 5 lb meat</span></div>
                <div class="row"><span class="label">Pickling vinegar</span><span class="value">5% acidity minimum</span></div>
              </div>
            </div>
          </div>
          
          <p class="footer">PreserveCraft.com — Science-Based Food Preservation • Sources: USDA, Health Canada</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleDownload = () => {
    const content = `
PRESERVECRAFT QUICK REFERENCE CARD
===================================
Essential Conversions & Guidelines for Food Preservation

TEMPERATURE
-----------
Freezer:              0°F / -18°C
Refrigerator:         40°F / 4°C
Danger Zone:          40-140°F / 4-60°C
Dehydrating (fruits): 135°F / 57°C
Dehydrating (meat):   160°F / 71°C
Water Bath Canning:   212°F / 100°C
Pressure Canning:     240°F / 116°C

WEIGHT
------
1 oz  = 28.35 g
4 oz  = 113 g (¼ lb)
8 oz  = 227 g (½ lb)
1 lb  = 454 g
2.2 lb = 1 kg
5 lb  = 2.27 kg

VOLUME
------
1 tsp    = 5 mL
1 tbsp   = 15 mL
¼ cup    = 59 mL
½ cup    = 118 mL
1 cup    = 237 mL
1 pint   = 473 mL
1 quart  = 946 mL
1 gallon = 3.79 L

CANNING JAR SIZES
-----------------
4 oz (jelly):   118 mL
Half-pint:      237 mL
Pint:           473 mL
Quart:          946 mL
Half-gallon:    1.9 L

ALTITUDE ADJUSTMENTS FOR PRESSURE CANNING
------------------------------------------
Altitude (ft/m)          Dial Gauge       Weighted Gauge
0-1,000 / 0-305          10 psi (69 kPa)  10 psi (69 kPa)
1,001-2,000 / 305-610    11 psi (76 kPa)  15 psi (103 kPa)
2,001-4,000 / 610-1,219  12 psi (83 kPa)  15 psi (103 kPa)
4,001-6,000 / 1,219-1,829 13 psi (90 kPa) 15 psi (103 kPa)
6,001-8,000 / 1,829-2,438 14 psi (97 kPa) 15 psi (103 kPa)
8,001-10,000 / 2,438-3,048 15 psi (103 kPa) 15 psi (103 kPa)

COMMON PRESERVATION RATIOS
--------------------------
Fermentation brine (2%):   1 tbsp salt per quart water
Fermentation brine (3.5%): 2 tbsp salt per quart water
Prague Powder #1:          1 tsp per 5 lb meat
Pickling vinegar:          5% acidity minimum

---
PreserveCraft.com — Science-Based Food Preservation
Sources: USDA, Health Canada
    `.trim();

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "preservecraft-reference-card.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>📋 Printable Reference Card</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button size="sm" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">
          Download or print a handy reference card with all essential conversions, 
          temperatures, and altitude adjustments for food preservation. Perfect for 
          keeping in your kitchen or canning area!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div className="p-3 bg-muted rounded-lg">
            <div className="font-semibold text-primary">Temperatures</div>
            <div className="text-muted-foreground">8 common temps</div>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <div className="font-semibold text-primary">Weights</div>
            <div className="text-muted-foreground">6 conversions</div>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <div className="font-semibold text-primary">Volumes</div>
            <div className="text-muted-foreground">8 conversions</div>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <div className="font-semibold text-primary">Altitude</div>
            <div className="text-muted-foreground">6 elevations</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrintableReferenceCard;
