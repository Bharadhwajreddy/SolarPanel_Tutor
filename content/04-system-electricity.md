A photovoltaic (PV) module produces raw DC electricity that is, by itself, almost useless to a home or the grid: the voltage drifts with sunlight and temperature, and almost no household loads run on DC. Turning that raw output into stable, usable AC power requires a whole supporting cast of components collectively called the *balance of system* (BOS). This article walks the full chain — from a single silicon cell up to a grid-synchronized, battery-buffered system — and the engineering that makes each link work.

## From Cell to Array

### The building blocks

The hierarchy is strictly nested:

- **Cell** — a single silicon p-n junction. Open-circuit voltage (Voc) is ~0.6–0.7 V regardless of size; current scales with area and irradiance (~9–14 A for modern large-format cells).
- **Module (panel)** — cells wired in series. A traditional 60-cell module yields ~0.6 V × 60 ≈ 36–40 Voc; a 72-cell module ~45–50 Voc. Modern half-cut modules (120/144 "half cells") split each cell to halve string current and I²R loss, but the series-cell voltage math is unchanged.
- **String** — modules wired in series to build inverter-level DC voltage (commonly 300–600 V residential, up to 1500 V utility).
- **Array** — strings combined, often in parallel, to reach the target power.

### Series vs parallel — how V and I add

This is the single most important wiring rule in PV:

| Connection | Voltage | Current | Power |
|---|---|---|---|
| Series | Adds (V₁ + V₂ + …) | Same (limited by weakest) | Adds |
| Parallel | Same | Adds (I₁ + I₂ + …) | Adds |

Series strings build voltage so the inverter can operate efficiently and so conductor current (and thus wire size / I²R loss) stays low. Parallel connections build current/power once the desired string voltage is reached.

> **Key insight:** In a series string the *current* is set by the worst-performing (e.g., shaded or mismatched) module — the "Christmas-light" effect. This single fact drives bypass diodes, MLPE, and shading analysis.

Each module's I-V curve has a Maximum Power Point (MPP) where P = V × I is maximized — typically Vmp ≈ 0.8 × Voc and Imp ≈ 0.9 × Isc. The "knee" of the curve is where the system wants to operate.

## DC to AC: The Inverter

Panels make DC; the grid and most appliances want 60 Hz (or 50 Hz) AC sine waves. The inverter performs that conversion and synchronizes phase, frequency, and voltage with the grid.

### How an inverter actually works

1. **DC bus** — incoming PV DC is held on a capacitor-stabilized DC link, often boosted to a fixed bus voltage (e.g., ~350–400 V) by a DC-DC stage.
2. **H-bridge switching** — four power switches (IGBTs or, increasingly, SiC/Si MOSFETs) connect the load alternately across the bus in + and − polarity.
3. **PWM (pulse-width modulation)** — instead of a crude square wave, the switches are toggled at high frequency (~16–20+ kHz). By varying the *width* of each pulse to follow a sinusoidal reference, the average voltage traces a sine wave.
4. **LC filtering** — an inductor-capacitor low-pass filter smooths the PWM chopping into a clean sine, attenuating switching harmonics (THD typically < 3% for grid-tie).
5. **Grid sync** — a phase-locked loop (PLL) matches the output's phase and frequency to the grid before the inverter closes its output.

### Inverter / MLPE architectures

| Type | Where conversion happens | MPPT granularity | Pros | Cons |
|---|---|---|---|---|
| String inverter | One central box per string group | Per string (1–3 MPPTs) | Cheapest $/W, simple, efficient (97–99%) | One shaded module drags the string; high DC voltage on roof |
| Microinverter | One per module (under panel) | Per module | Shade-tolerant, module-level monitoring, low DC voltage, no DC arc risk | Higher cost, more units on roof |
| Power optimizer (DC MLPE) | DC-DC per module + string inverter | Per module | Module-level MPPT + monitoring, keeps efficient string inverter | Two device types; still has a string inverter |
| Central inverter | One large unit (100s of kW–MW) | Per (few) MPPT | Lowest $/W at scale | Single point of failure; utility-scale only |

MLPE = Module-Level Power Electronics (microinverters + optimizers). They satisfy NEC rapid-shutdown requirements naturally and largely defeat string mismatch.

## Maximum Power Point Tracking (MPPT)

The MPP moves constantly: irradiance shifts Isc up/down, and temperature shifts Voc (panels lose ~0.3–0.4%/°C of power as they heat). A fixed operating voltage would leave energy on the table, so the inverter continuously hunts for the MPP.

### Perturb-and-observe (P&O)

The workhorse algorithm:

1. Measure P = V × I.
2. Perturb the operating voltage by a small step ΔV.
3. If power increased, keep stepping the same direction; if it decreased, reverse.
4. Repeat — the controller dithers around the peak.

P&O is simple and robust but oscillates slightly at steady state and can get confused under fast-changing irradiance. Variants (incremental conductance, adaptive step) reduce these issues.

### Partial shading and multiple peaks

Each module typically has 3 bypass diodes. When a substring is shaded, its bypass diode conducts so current can route *around* it instead of being throttled by the weak cells (which would otherwise reverse-bias, heat up, and create hotspots).

The side effect: bypass diodes carve the smooth I-V curve into a **staircase**, and the corresponding P-V curve develops **multiple local maxima**. A naive P&O can lock onto a local peak and miss the global one. Modern inverters run periodic "global MPPT sweeps" to find the true maximum. Per-module MLPE sidesteps the whole problem because each module tracks independently.

> **Key insight:** Bypass diodes protect modules from hotspot damage *and* limit shading losses — but they're also why shaded arrays show multiple power peaks that confuse simple trackers.

## System Topologies: Grid-Tied, Off-Grid, Hybrid

| System | Grid connection | Battery | Behavior in outage |
|---|---|---|---|
| Grid-tied | Yes | No | Shuts down (anti-islanding) |
| Off-grid | No | Yes (required) | Runs on battery; needs generator backup |
| Hybrid | Yes | Yes | Can island/backup selected loads |

**Net metering** lets a grid-tied system export surplus kWh and spin the meter backward (or bank credits), so the grid acts as a virtual battery. Net-metering rules are increasingly being replaced by net-billing / time-of-use export rates (e.g., California NEM 3.0), which is a major reason on-site storage now pencils out.

### Anti-islanding and grid codes

If the utility de-energizes a line, a PV inverter must *not* keep energizing it ("islanding") — that endangers line workers and damages equipment. Inverters detect grid loss (via voltage/frequency/impedance methods) and disconnect within ~2 seconds.

The governing standard in North America is **IEEE 1547** (and UL 1741 / UL 1741-SA/SB for the hardware), which specifies anti-islanding plus *ride-through*: instead of tripping at the first wobble, modern "smart inverters" must **ride through** voltage and frequency excursions (Low/High Voltage Ride-Through, L/HVRT and L/HFRT) and provide grid-support functions like **Volt-VAR** and frequency-watt droop. This keeps large fleets of inverters from all dropping off simultaneously during a transient and worsening it.

## Energy Storage

### Lithium-ion chemistries

| Chemistry | Energy density | Cycle life | Thermal safety | Typical use |
|---|---|---|---|---|
| LFP (LiFePO₄) | Lower | ~4,000–6,000+ cycles | Very safe, high thermal runaway threshold | Most stationary home/grid storage |
| NMC (Li-Ni-Mn-Co) | Higher | ~1,000–3,000 cycles | Less tolerant | EVs, space-constrained installs |

LFP dominates residential/stationary storage today because cycle life and safety matter more than volumetric density when the battery sits in a garage.

### Storage metrics

- **Depth of Discharge (DoD):** usable fraction of capacity. LFP routinely allows 90–100% DoD; deep cycling shortens NMC life more.
- **Round-trip efficiency (RTE):** energy out ÷ energy in. ~90–95% for the cells, ~85–90% system-level after inverter/conversion losses.
- **AC-coupled vs DC-coupled:**
  - *DC-coupled* — battery shares the PV DC bus through a charge controller; one conversion to charge from solar (higher efficiency, ~96–98% for solar→battery), great for new installs.
  - *AC-coupled* — battery has its own inverter and ties in on the AC side; easiest retrofit, but solar→battery suffers DC→AC→DC double conversion losses.

### The duck curve

In high-PV regions, midday solar pushes net grid demand into a deep trough, then demand ramps steeply at sunset as PV fades and people get home — the load shape looks like a duck. Storage flattens it by charging on cheap midday surplus and discharging into the evening peak, which is why "solar + storage" has become the default rather than solar alone.

## Balance of System (BOS)

The unglamorous hardware that everything else depends on:

- **Racking / mounting** — rails and clamps that fix modules at the right tilt while transferring wind/snow loads into the structure. Roof, ground, or tracker mounts.
- **PV wire & MC4 connectors** — sunlight-/moisture-rated double-insulated conductors; MC4 are the ubiquitous touch-safe locking DC connectors (mate only same-brand to avoid arc-prone mismatches).
- **Combiner box** — where parallel strings join; houses **string fuses/OCPD** (needed when 3+ strings parallel, since a faulted string can sink the others' back-fed current).
- **Rapid shutdown** — NEC 690.12 requires conductors inside the array boundary to drop to ≤ 30 V within 30 s of a shutoff for firefighter safety; satisfied by MLPE or rapid-shutdown devices.
- **Disconnects** — lockable DC and AC disconnects for safe isolation/servicing.
- **Monitoring** — production metering and per-string/per-module telemetry for performance verification and fault detection.

> **Safety:** Energized PV DC cannot be "switched off" by covering panels alone — any light produces voltage. Treat DC conductors as live during daylight and use rapid shutdown plus proper PPE.

## Key Performance Metrics

| Metric | Definition | Typical value |
|---|---|---|
| Capacity factor | Actual annual energy ÷ (rated power × 8760 h) | 15–25% (fixed-tilt PV) |
| Performance Ratio (PR) | Actual yield ÷ theoretical yield from irradiance | 0.75–0.85 |
| Specific yield | Annual kWh per kWp of DC capacity | ~1,000–1,800 kWh/kWp (site-dependent) |
| DC/AC ratio (ILR) | DC array watts ÷ inverter AC watts | 1.1–1.3 |

### System losses breakdown

Real systems deliver well below nameplate. A representative loss stack:

| Loss source | Typical magnitude |
|---|---|
| Temperature derating | 5–12% (worst in summer) |
| Inverter conversion | 2–4% |
| DC + AC wiring (I²R) | 1–3% |
| Soiling (dust/snow) | 2–5% |
| Module mismatch | 1–2% |
| Shading | site-dependent (0–20%+) |
| LID/degradation | ~0.5%/yr; ~2% first-year LID |

**Temperature derating** matters most: with a power temp coefficient β ≈ −0.35%/°C and cells running 25–35 °C above ambient, hot-day output can drop 10%+.

**DC/AC ratio & clipping:** "overpaneling" (DC/AC > 1.0) lets the array reach inverter rated output earlier and later in the day, raising daily energy. The cost is **clipping** — at peak sun the array could produce more than the inverter passes, so the excess is curtailed. A 1.2–1.3 ratio usually optimizes energy-per-dollar; the small clipped sliver is worth less than the broadened production shoulders.

> **Key insight:** Nameplate kW is a lab rating at Standard Test Conditions (1000 W/m², 25 °C, AM1.5). PR and specific yield, not nameplate, tell you what a system *actually* delivers in the field.
