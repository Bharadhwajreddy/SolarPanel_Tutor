Installing a solar array is part structural engineering, part electrical craft, and part regulatory choreography. A clean residential rooftop job runs from a site visit and a stack of permits, through bolting steel into rafters and pulling DC conductors, to a utility's final blessing to turn the system on. This article walks the full sequence — assessment, sizing math, mechanical and electrical install, commissioning, and the safety discipline that runs through all of it — then closes with how ground-mount and utility-scale work differs.

## Site Assessment

Everything downstream depends on getting the site characterization right. A bad sizing assumption or a missed shade source can cost 20%+ of lifetime yield.

### Solar resource

The fundamental input is **irradiance** (instantaneous power, W/m²) integrated over time into **insolation** (energy, kWh/m²/day). Installers usually work in **peak sun hours (PSH)** — the number of hours per day of 1000 W/m² equivalent. A site with 5.2 kWh/m²/day has 5.2 PSH. PSH is pulled from datasets like NREL's NSRDB / PVWatts or the European PVGIS, then localized.

> **Key insight:** "Peak sun hours" is just daily insolation expressed in units of full-sun hours. It is *not* the number of daylight hours — a 14-hour summer day might still deliver only 6 PSH.

### Shading analysis

Even small shade is disproportionately damaging because of the series-string "weakest-link" effect. Tools:

- **Solar Pathfinder** — a polished dome that reflects the whole horizon (trees, chimneys, structures) onto a sun-path chart; the tech traces obstructions to compute a monthly **solar access %**.
- **Drone / digital tools** — Aurora, HelioScope, and drone photogrammetry build a 3-D model and simulate hour-by-hour shading across the year.

Designers target high annual solar access (often 80%+) for each module group and use MLPE where shade is unavoidable.

### Orientation, tilt, and roof condition

- **Azimuth** — compass direction the roof faces. In the northern hemisphere, true south (180°) is ideal; east/west costs roughly 10–20% annually but can better match afternoon load and time-of-use rates.
- **Tilt** — angle from horizontal. A rule of thumb is tilt ≈ site latitude for maximum annual energy; lower tilt favors summer, higher tilt favors winter. On pitched roofs you usually accept the existing roof pitch (flush mount) rather than fighting wind load with tilt legs.
- **Roof condition & structure** — the roof must outlive the array (25+ yrs); a worn roof is re-roofed first. A structural check confirms rafters can carry the combined load.

### Structural loads

Three load categories per code (and a structural engineer's stamp where required):

| Load type | What it is | Notes |
|---|---|---|
| Dead load | Permanent weight of array + racking | Modern systems add ~3–5 lb/ft² (~15–25 kg/m²) |
| Live load | Temporary (workers, maintenance) | Per IBC occupancy rules |
| Environmental | Wind uplift + snow | Governed by ASCE 7; wind speed and snow load are site/zone specific |

Wind is usually the governing case on roofs — uplift tries to peel modules and attachments off. Snow load governs in cold climates and also sets minimum tilt for shedding.

### Codes and permits

Before tools touch the roof: a **building permit** (structural) and **electrical permit**, conforming to the **National Electrical Code (NEC, NFPA 70)** — especially Article 690 (Solar PV Systems) and 705 (Interconnected Power Sources) — plus the **International Residential/Building Code (IRC/IBC)**, **International Fire Code** setbacks, and the utility's interconnection application. Many jurisdictions have adopted streamlined permitting (e.g., NREL/DOE **SolarAPP+**).

## System Sizing

### Load analysis and array sizing

Start from 12 months of utility bills to get annual kWh consumption. Array DC size:

```
Array kWp ≈ Annual kWh ÷ (PSH × 365 × PR)
```

where PR (performance ratio) ≈ 0.75–0.85. Example: 12,000 kWh/yr ÷ (5 × 365 × 0.80) ≈ 8.2 kWp. Designers then reconcile that against available unshaded roof area (~15–20 m² per kWp for ~20%-efficient modules) and any net-metering caps.

### Inverter sizing

The inverter AC rating is chosen via the **DC/AC ratio** (inverter load ratio, ILR), typically **1.1–1.3**. Slight overpaneling captures more morning/evening energy at the cost of a little midday **clipping**. An 8.2 kWp array pairs naturally with a ~6.4–7.6 kW inverter.

### String sizing — the cold-Voc calculation

This is the make-or-break electrical calc. PV voltage *rises* as temperature *falls* (negative temp coefficient for Voc, β, typically −0.27 to −0.35 %/°C). On the coldest morning, a string can exceed the inverter's maximum DC input voltage and destroy it or trip a fault — so you size for the record low temperature, not STC.

Per NEC 690.7, correct Voc to the lowest expected ambient temperature (from ASHRAE extreme-min data):

```
Voc_cold = Voc_stc × [1 + (β/100) × (T_min − 25)]
```

Worked example: Voc_stc = 49.5 V, β = −0.29 %/°C, T_min = −15 °C:

```
Voc_cold = 49.5 × [1 + (−0.0029)(−15 − 25)]
         = 49.5 × [1 + (−0.0029)(−40)]
         = 49.5 × [1 + 0.116]
         = 49.5 × 1.116 ≈ 55.2 V per module
```

Max modules per string = inverter Vmax ÷ Voc_cold. For a 600 V inverter: 600 ÷ 55.2 ≈ **10 modules max** per string. You also check the *minimum* string length: on the hottest day Vmp must stay above the inverter's MPPT lower window, or it drops out of tracking.

> **Safety / design rule:** Always size strings on the coldest expected temperature for the high-voltage limit and the hottest for the low-voltage limit. Skipping the cold-Voc check is one of the most common — and most damaging — design errors.

## Mechanical Installation

### Roof attachments

Loads must transfer into structure, not just sheathing. The crew locates **rafters** (stud finder, attic measurement, or as-builts), then installs attachments **lagged into the rafter** with stainless **lag bolts** (commonly 5/16", embedded ≥ 2.5"). Every penetration is **flashed** — a metal flashing slid under the upslope shingle course with sealant on the bolt — so water sheds over, not into, the hole. Comp-shingle, tile, and standing-seam metal each use different flashing/clamp hardware (standing seam often needs no penetration at all).

### Rails and clamps

Aluminum **rails** span the attachments. Modules drop onto the rails and are fixed with **mid clamps** (between adjacent modules) and **end clamps** (at row ends), torqued to spec. Rail-less systems use module-to-module clips instead.

### Grounding and bonding

All metal must be bonded into one **equipment grounding** path to clear faults and dissipate lightning/induced charge (NEC 690.43/250). Modern clamps and **WEEBs** (washer electrical equipment bonds) bite through anodizing to bond modules to rails; a continuous **EGC** (equipment grounding conductor, often #6–#10 copper) ties the array back to the system ground.

### Fire setbacks

The IFC/IRC require clear **pathways and setbacks** (commonly a 3-ft ridge setback and access paths) so firefighters can ventilate the roof. These rules directly constrain how many modules actually fit.

## Electrical Installation

### DC side

Module leads (MC4) daisy-chain into series strings. Where conductors leave the array they enter **conduit** (EMT/PVC) — exposed PV wire runs are kept short and UV-rated. **Rapid shutdown** (NEC 690.12) hardware — MLPE or RSD devices — is installed so array conductors drop to ≤ 30 V within 30 s of the initiator opening, with the required labeled shutdown switch at the service.

### Inverter and AC side

- **String inverter** mounts on a wall (shaded, ventilated) near the service; **microinverters** are already on the roof and their AC trunk cable runs down.
- DC and AC **disconnects** (lockable) are installed for isolation.
- A **production meter** (where the utility requires one) logs generation separately from the billing meter.
- The inverter output lands in the **main service panel** via a dedicated breaker.

### The busbar 120% rule

Back-feeding a panel adds current the busbar wasn't sized for. NEC 705.12(B) (the "120% rule") for a typical load-side connection:

```
(Main breaker A + PV backfeed breaker A) ≤ 1.2 × busbar rating
```

Example: a 200 A busbar with a 200 A main allows a PV breaker up to (1.2 × 200) − 200 = **40 A** of back-feed, and that breaker must sit at the **opposite end** of the busbar from the main. If the array needs more, options are a **line-side (supply-side) tap**, a **main breaker derate**, or a panel upgrade.

> **Key insight:** The 120% rule exists because solar feeds the busbar from a breaker position while the main feeds it from the other end; the busbar between them can only briefly tolerate the combined current. Violating it is a fire risk and an automatic inspection failure.

## Commissioning

A finished system is not a live system. Sequence:

| Step | What happens |
|---|---|
| Mechanical/electrical inspection | AHJ verifies code compliance, labeling, rapid shutdown, grounding |
| System testing | Verify polarity, string Voc/Isc vs. expected, insulation (megger) resistance, torque audits |
| Utility interconnection | Utility reviews the application, may swap the meter to a bidirectional one |
| PTO (Permission to Operate) | Utility's formal authorization to energize — the legal "on" switch |
| Monitoring setup | Commission gateway, confirm per-string/per-module telemetry, baseline production |

Only after **PTO** is the system energized and grid-tied for export. Trying to run before PTO can void interconnection and net-metering eligibility.

## Safety Throughout

Solar install fatalities are dominated by **falls**, with electrical (arc flash / DC shock) close behind.

- **Fall protection** — OSHA 1926 Subpart M: guardrails, personal fall arrest (harness + anchor + lanyard) on roofs above ~6 ft, plus ladder safety and slip-rated footwear.
- **DC arc risk** — PV DC does **not** self-extinguish at a current zero the way AC does, so a DC arc is sustained and dangerous. Never break MC4 connectors under load; open the load (inverter/disconnect) first.
- **Live-roof discipline** — modules are energized whenever lit; covering them does not de-energize them. Treat all DC conductors as live during daylight, use insulated tools, and apply rapid shutdown before servicing.
- **Arc flash / PPE** — appropriate gloves, eye protection, and arc-rated clothing when working in panels and combiners.

> **Safety:** There is no "off" for an illuminated module. The only ways to make DC conductors safe are to open the circuit *and* trigger rapid shutdown — and even then, verify with a meter before touching.

## Ground-Mount and Utility-Scale

Rooftop principles scale up, but the methods change:

- **Foundations** — instead of roof attachments, steel posts are typically **pile-driven** directly into soil (fast, no concrete) or set in concrete/ballast where soil is poor. A geotechnical survey sets pile depth and pull-out resistance.
- **Trackers** — large arrays favor **single-axis trackers** that rotate east-to-west to follow the sun, lifting annual yield ~15–25% over fixed tilt. Dual-axis is rare outside special cases.
- **Central inverters** — utility plants use **central inverters** (hundreds of kW to MW) fed by combiner boxes and 1000–1500 V DC strings, or large 3-phase string inverters distributed across the field.
- **Medium-voltage collection** — inverter AC is stepped up by pad-mount transformers to medium voltage (e.g., 34.5 kV) for collection, then to a substation and the transmission grid.
- **SCADA & O&M** — plants run **SCADA** (Supervisory Control and Data Acquisition) for remote monitoring, curtailment, and grid-operator dispatch, with robotic/automated cleaning and thermographic drone inspection for O&M.

> **Key insight:** A rooftop system is engineered around an existing structure and a single homeowner's loads; a utility plant is engineered around the land, the soil, the trackers, and a grid interconnection agreement. The PV physics is identical — the constraints are completely different.
