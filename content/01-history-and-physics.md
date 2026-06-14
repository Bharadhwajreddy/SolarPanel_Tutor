Solar photovoltaics (PV) is the direct conversion of light into electricity inside a semiconductor, with no moving parts, no combustion, and no intermediate heat engine. This article traces the technology from a curious laboratory observation in 1839 to the dominant new source of electricity generation today, and then dissects the device physics in the detail an engineer actually needs: bands and band gaps, the p-n junction, the step-by-step photovoltaic effect, the Shockley-Queisser limit, and the I-V characteristics that define real-world performance.

## Part A — A Short History of Solar Power

### The accidental discovery: Becquerel, 1839

The photovoltaic effect was first observed by the 19-year-old French physicist Edmond Becquerel in 1839. Working in his father's laboratory, he immersed platinum electrodes coated with silver chloride (or silver bromide) in an acidic electrolyte and found that the cell produced a larger voltage and current when illuminated than when kept in the dark (Becquerel, 1839). This was an electrochemical (wet) cell rather than a solid-state device, but it established the foundational fact: light shining on certain material interfaces generates electricity.

### Selenium and the first solid-state cells: Adams, Day, and Fritts

In 1873 Willoughby Smith discovered the photoconductivity of selenium — its electrical resistance dropped under illumination. Building on this, the English scientists William Grylls Adams and Richard Evans Day demonstrated in 1876 that a junction between selenium and platinum could generate current purely from light, the first observation of the effect in a *solid* (Adams & Day, 1876). This proved electricity could be produced from light with no moving parts and no chemistry.

The first true solar cell was built by the American inventor Charles Fritts in 1883. He coated selenium with an extremely thin, semi-transparent layer of gold to form a large-area junction. His cells converted roughly 1% of incident light into electricity (Fritts, 1883). Fritts even installed an array on a New York rooftop around 1884. At ~1% efficiency and using expensive materials, selenium cells were commercially hopeless for power, but they found a lasting niche in camera light meters for decades.

> **Key insight:** For nearly a century after Becquerel, PV was an empirical curiosity. Engineers could *build* cells but nobody could explain *why* light produced electrons with the right energy — that required quantum mechanics.

### Einstein explains the photoelectric effect, 1905

In 1905 — his "miracle year" — Albert Einstein published the theory of the photoelectric effect, proposing that light is quantized into discrete packets (later called photons), each carrying energy E = h·f, where h is Planck's constant and f is the light's frequency (Einstein, 1905). An electron is ejected (or excited) only if a single photon carries enough energy to overcome a threshold; intensity controls the *number* of electrons, not their individual energy. This explained why dim blue light could free electrons while intense red light could not. It was specifically for this work that Einstein received the 1921 Nobel Prize in Physics — not for relativity. The quantum picture of light-matter interaction is the direct theoretical foundation of every modern solar cell, where the threshold corresponds to the semiconductor's band gap.

### The breakthrough: the Bell Labs silicon cell, 1954

The modern era began at Bell Telephone Laboratories. In 1954 Daryl Chapin, Calvin Fuller, and Gerald Pearson demonstrated the first practical silicon solar cell, achieving about 6% efficiency — roughly six times better than any selenium device and high enough to be genuinely useful (Chapin, Fuller & Pearson, 1954). The key enabler was Fuller's mastery of diffusion doping, which let them form clean p-n junctions in crystalline silicon (the same materials science that was simultaneously birthing the transistor at Bell Labs). The press hailed it as the dawn of an era when "the sun's energy" would be harnessed for "the practical uses of civilization."

### The space race makes PV indispensable

The first cells were far too expensive (on the order of hundreds of dollars per watt) for terrestrial power, but they had one application where cost was secondary to performance: spacecraft. There is no fuel to refuel and abundant sunlight in orbit. The U.S. Vanguard 1 satellite, launched in 1958, carried a small silicon array (about 1 watt) to power its radio — the first solar-powered satellite (Vanguard 1, 1958). The solar-powered transmitter operated for years after the battery-powered one died. From that point on, solar cells became the standard power source for satellites, and the space program funded the steady efficiency and reliability improvements of the 1960s.

### Oil crises, the terrestrial push, and the cost collapse

The 1973 OPEC oil embargo and the 1979 oil shock turned energy security into a national priority across the industrialized world. Governments funded terrestrial PV research and deployment, and companies (notably through the work of Elliot Berman, who slashed cell cost in the early 1970s) began driving silicon cells toward affordability for off-grid telecom, navigation buoys, and remote homes.

What followed is one of the most dramatic cost-reduction stories in industrial history, captured by **Swanson's Law** (named for SunPower founder Richard Swanson): the price of PV modules tends to fall by about 20% for every doubling of cumulative shipped capacity — a classic experience (learning) curve. Module prices fell from roughly $100 per watt in the late 1950s/1970s to well under $0.30 per watt by the 2020s — a reduction of more than two orders of magnitude. The drivers were economies of scale, improved cell efficiency, thinner wafers, better manufacturing yield, and the rise of enormous Chinese production capacity.

Cumulative global installed PV capacity tells the same story: under 1 gigawatt (GW) in 2000, roughly 40 GW by 2010, over 700 GW by 2020, and surpassing 1.5 terawatts (TW) by the mid-2020s (IEA / IRENA reporting). Solar has gone from the most expensive source of electricity to, in many markets, the cheapest source of new electricity generation ever recorded.

#### Timeline at a glance

| Year | Milestone | Significance |
|------|-----------|--------------|
| 1839 | Becquerel observes the photovoltaic effect | Light → electricity (electrochemical cell) |
| 1873 | Smith finds selenium photoconductivity | Material that responds to light |
| 1876 | Adams & Day: selenium-platinum cell | Effect seen in a solid |
| 1883 | Fritts builds first solar cell (~1%) | First true solid-state PV device |
| 1905 | Einstein explains the photoelectric effect | Quantum theory of light (Nobel 1921) |
| 1954 | Bell Labs silicon cell (~6%) | First practical PV cell |
| 1958 | Vanguard 1 satellite | First solar-powered spacecraft |
| 1970s | Oil crises + Berman's cost cuts | Birth of terrestrial PV market |
| 1980s–2020s | Swanson's Law cost decline | ~$100/W → <$0.30/W; >1.5 TW installed |

## Part B — The Physics of a Solar Cell

### Semiconductors, bands, and the band gap

In an isolated atom, electrons occupy discrete energy levels. When ~10²³ atoms bond into a crystal, those levels broaden into near-continuous **energy bands**. Two matter for PV:

- The **valence band** — the highest band that is essentially full of electrons at absolute zero. These electrons are bound in chemical bonds.
- The **conduction band** — the next band up; electrons here are free to move and carry current.

Between them lies the **band gap (E_g)**: a range of forbidden energies with no allowed electron states. In a metal, bands overlap (no gap) so electrons conduct freely. In an insulator the gap is huge (many eV). A **semiconductor** has a moderate gap — silicon's is about **1.12 eV** at room temperature (crystalline Si). An electron can only cross from valence to conduction band if it receives at least E_g of energy. When it does, it leaves behind a **hole** — a missing electron that behaves like a mobile positive charge. Electron-hole pairs are the fundamental carriers of photovoltaic current.

> **Key insight:** The band gap is the master parameter of a solar cell. It sets which photons can be absorbed, how much voltage the cell can produce, and ultimately the maximum possible efficiency.

### Doping: making n-type and p-type silicon

Pure (intrinsic) silicon conducts poorly. We deliberately add tiny amounts of impurities — **doping** — to control its electrical character. Silicon has four valence electrons.

- **n-type:** Add a group-V element such as **phosphorus** (five valence electrons). The fifth electron is loosely bound and easily donated to the conduction band. The majority carriers are negatively charged **electrons**.
- **p-type:** Add a group-III element such as **boron** (three valence electrons). This creates an electron deficiency — a hole. Majority carriers are positively charged **holes**.

Typical doping levels are parts per million, yet they change conductivity by orders of magnitude. Note: the doped material is still electrically neutral overall; doping changes which carrier is mobile and abundant.

### The p-n junction and the built-in field

A solar cell is fundamentally a large-area **p-n junction**: bring n-type and p-type silicon into contact. At the interface, mobile electrons from the n-side diffuse into the p-side and holes diffuse the other way, and they recombine near the boundary. This diffusion leaves behind the *fixed* ionized dopant atoms — positive donor ions on the n-side, negative acceptor ions on the p-side — creating a region stripped of mobile carriers called the **depletion region** (or space-charge region).

Those uncovered fixed charges set up a **built-in electric field** pointing from the n-side toward the p-side. This field opposes further diffusion and reaches equilibrium, establishing a **built-in potential** (roughly 0.6–0.7 V for silicon). The depletion region is, in effect, a one-way ramp for charge carriers — and it is precisely the engine that separates light-generated carriers.

### The photovoltaic effect, step by step

1. **Photon absorption.** Sunlight enters the cell. A photon with energy hf ≥ E_g can be absorbed by a valence electron.
2. **Electron-hole pair generation.** The absorbed photon promotes the electron into the conduction band, leaving a hole in the valence band. We now have a mobile electron and a mobile hole.
3. **Carrier separation.** If the pair is generated in or near the depletion region (or diffuses to it before recombining), the built-in field sweeps electrons toward the n-side and holes toward the p-side. This charge separation is what distinguishes PV from mere heating.
4. **Collection at contacts.** Electrons accumulate at the n-side contact and holes at the p-side contact, creating a voltage difference — the cell becomes a battery driven by light.
5. **Current through the external load.** Connect a load and electrons flow through the external circuit from n to p, doing useful work, then recombine with holes on the p-side. As long as light shines, the cycle continues — a continuous DC current.

### Photon energy, the band gap, and the two intrinsic losses

A photon's energy depends on its wavelength (color):

**E = h·f = h·c / λ**

where h = 6.626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s. A convenient engineering form is **E (eV) ≈ 1240 / λ (nm)**. For silicon's 1.12 eV gap, the cutoff wavelength is about 1100 nm (near-infrared). This immediately reveals two unavoidable losses against the broad solar spectrum:

- **Sub-bandgap loss (transmission):** Photons with energy *below* E_g (λ longer than ~1100 nm for Si) lack the energy to excite an electron across the gap. They pass through or are absorbed only as weak heat. For silicon this discards a large fraction of the infrared spectrum.
- **Thermalization loss:** Photons with energy *above* E_g do create a pair, but the excess energy (hf − E_g) is rapidly given up to the crystal lattice as heat (phonons) as the carrier relaxes to the band edge. A 3 eV blue photon and a 1.2 eV red photon both deliver only ~1.12 eV of usable electrical energy in silicon; the rest of the blue photon's energy is wasted as heat.

These two effects pull in opposite directions: a small band gap captures more photons but throws away more energy to thermalization; a large band gap wastes fewer high-energy photons but transmits more of the spectrum. There is an optimum in between.

### The Shockley-Queisser limit and why it exists

In 1961 William Shockley and Hans Queisser calculated the maximum theoretical efficiency of a single-junction solar cell under unconcentrated sunlight. The answer: about **33.7%**, occurring at an optimal band gap of about **1.34 eV** (Shockley & Queisser, 1961). Silicon's 1.12 eV is slightly below optimal but close (its practical SQ ceiling is ~32–33%). The limit arises from a stack of fundamental losses:

| Loss mechanism | Cause | Approximate magnitude |
|----------------|-------|-----------------------|
| Sub-bandgap transmission | Photons with hf < E_g not absorbed | ~20% of incident energy |
| Thermalization | Excess photon energy (hf − E_g) lost as heat | ~30% |
| Radiative recombination | Detailed-balance: a cell that absorbs must also re-emit light | Unavoidable floor |
| Voltage / Carnot-type losses | Output voltage (qV) is well below E_g; entropy of emission | Significant |

The deepest reason for the limit is **detailed balance**: in thermodynamic equilibrium, any body that absorbs photons at a given energy must also emit them. A perfect cell still loses carriers to *radiative recombination*, capping the achievable voltage and current. The two spectral losses (transmission + thermalization) alone remove roughly half the energy; the remainder of the gap to 33.7% comes from voltage and radiative losses. Real single-junction silicon cells reach ~22–27% in production and lab records, and the way past 33.7% is to stack multiple junctions with different band gaps (tandems/multijunctions), which the single-junction SQ limit does not apply to.

### The I-V curve: the language of cell performance

A solar cell's behavior is summarized by its current-voltage (I-V) curve under illumination. Three points define it:

- **Short-circuit current (I_sc):** the current when terminals are shorted (V = 0). It is the maximum current and is proportional to light intensity and the number of collected carriers. Often normalized to area as current density J_sc (mA/cm²).
- **Open-circuit voltage (V_oc):** the voltage when no current flows (open circuit). It is set by the band gap, doping, and recombination — typically ~0.6–0.7 V for a silicon cell. V_oc is always less than E_g/q because of recombination and thermodynamic losses.
- **Maximum power point (P_max or MPP):** the (V, I) point on the knee of the curve where the product P = V × I is largest. Inverters use **maximum power point tracking (MPPT)** to keep operating here.

The **fill factor (FF)** measures how "square" the curve is:

**FF = P_max / (V_oc × I_sc) = (V_mp × I_mp) / (V_oc × I_sc)**

Good silicon cells have FF around 0.75–0.85. A low fill factor signals resistive or recombination problems.

**Efficiency** is the fraction of incident optical power converted to electrical power:

**η = P_max / (P_in × A)**

where P_in is the incident irradiance (W/m²) and A is the cell area. Equivalently, η = (V_oc × I_sc × FF) / (P_in × A). Under standard 1000 W/m² input, a 100 cm² (0.01 m²) cell producing 2 W of peak power has η = 2 / (1000 × 0.01) = 20%.

### Effects of temperature and irradiance

- **Irradiance:** I_sc scales nearly linearly with light intensity (double the sun, roughly double the current). V_oc rises only logarithmically with irradiance, so power tracks mostly with current. This is why output drops sharply under clouds or shading.
- **Temperature:** Rising temperature shrinks the band gap slightly, so I_sc creeps up a touch, but V_oc *falls* significantly — about −2 mV/°C per cell for silicon (roughly −0.3 to −0.45% per °C in power, the "temperature coefficient"). Net effect: **hot panels produce less power.** A panel at 65°C can lose ~15–20% of its rated power versus the 25°C lab rating. This is a major real-world design consideration.

### Standard Test Conditions (STC) and the solar spectrum

Because output depends on light and temperature, modules are rated under **Standard Test Conditions (STC)**, an internationally agreed reference:

- **Irradiance: 1000 W/m²** (often called "1 sun" or "peak sun").
- **Spectrum: AM1.5G** — Air Mass 1.5 Global. "Air Mass 1.5" corresponds to sunlight passing through 1.5 atmosphere thicknesses (the sun at ~48.2° from zenith), the standard for mid-latitude terrestrial conditions; "Global" includes both direct and diffuse light. (AM0, by contrast, is the extraterrestrial spectrum used for space cells, ~1361 W/m².)
- **Cell temperature: 25°C.**

A module's nameplate wattage (its "watt-peak," Wp) is its power at STC. Because field conditions rarely match STC (panels run hotter, light is often less), the industry also uses NOCT/NMOT and PVUSA-style ratings, but STC remains the universal benchmark for comparing cells.

### Quantum efficiency, recombination, and parasitic resistances

**Quantum efficiency (QE)** describes how effectively the cell turns photons into collected carriers as a function of wavelength.
- **External QE (EQE):** collected electrons per incident photon at each wavelength (includes reflection and transmission losses).
- **Internal QE (IQE):** collected electrons per *absorbed* photon (factors out optics). QE curves diagnose where a cell underperforms — e.g., poor blue response points to front-surface recombination; poor red/IR response points to insufficient thickness or weak bulk collection.

**Recombination** is the loss of light-generated carriers before they reach the contacts — the enemy of both current and voltage. Three mechanisms dominate:
- **Shockley-Read-Hall (SRH):** trap-assisted recombination via defect/impurity states inside the band gap. Dominant in lower-quality material and at surfaces; mitigated by clean processing and surface passivation.
- **Radiative:** an electron and hole recombine and emit a photon — the fundamental, unavoidable process behind the Shockley-Queisser limit. Minor in indirect-gap silicon, significant in direct-gap materials like GaAs.
- **Auger:** the recombination energy is handed to a third carrier instead of a photon. It grows with doping and carrier density, and it sets the practical efficiency ceiling for high-quality silicon.

**Parasitic resistances** further degrade real cells, both visible as distortions of the I-V curve:
- **Series resistance (R_s):** resistance in the bulk silicon, contacts, and metal fingers/busbars. High R_s flattens the curve near V_oc and **reduces the fill factor** (and at the extreme, I_sc). Engineers minimize it with good metallization and contact design.
- **Shunt resistance (R_sh):** ideally infinite; represents leakage paths (edge shorts, defects) that bypass the junction. Low R_sh lets current leak internally, lowering the curve near the V = 0 region and **reducing both V_oc and FF**. It should be as high as possible.

> **Key insight:** Cell engineering is largely a war on losses — optical (reflection, transmission), thermalization (intrinsic), recombination (SRH/radiative/Auger), and resistive (R_s/R_sh). Every percentage point of record efficiency is won by suppressing one of these.

### Putting it together

A modern crystalline-silicon cell takes the abstract physics — a 1.12 eV gap, a doped p-n junction, a built-in field — and engineers around the loss mechanisms: anti-reflection coatings and texturing to capture more photons, surface passivation to kill SRH recombination, fine metallization to cut series resistance, and increasingly clever architectures (PERC, TOPCon, heterojunction) to push V_oc higher. The result is a device that converts roughly a fifth to a quarter of sunlight into electricity, manufactured at a cost that would have seemed fantastical to Fritts in 1883 or even to the Bell Labs team in 1954 — a direct line from Becquerel's flicker of current to terawatts of clean power.
