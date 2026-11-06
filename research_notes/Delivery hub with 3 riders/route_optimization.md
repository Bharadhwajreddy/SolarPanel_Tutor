# Route Optimization for a Small Last-Mile Delivery Hub (Hyderabad, 3 riders): Tools, Partner-App Constraints, Measured Impact, 2024-2026

Research note scope: whether a 3-rider franchise/hub partner of XpressBees, Shadowfax, Ekart, Delhivery, Valmo or Amazon can use a route optimizer, how much it helps, and what it costs. 15 tool calls; the strongest single source turned out to be an INSEAD/NTU paper (Arora, Choudhary, Kireyev, arXiv 2609.29080) that uses granular data from "one of the largest LMD firms in India": 852 delivery agents (DAs), 2.9M parcels, 135M GPS traces.

## 1. Do carrier partners have to use the carrier's rider app, does it sequence routes, and can a partner reorder or use third-party tools?

### Takeaway
Status updates, proof of delivery, COD and customer calls go through the carrier's own rider app. That is effectively mandatory, because it is how the carrier records shipments and pays. The one detailed study of a large Indian last-mile firm found that, once parcels are assigned, riders are free to choose their own stop order. So a partner can reorder stops, and can in principle plan the order in a third-party tool. Carrier apps advertise "route optimization", but none publishes how it sequences stops. Moving addresses into another app is mostly manual, and may conflict with data and confidentiality terms; I did not verify this.

### Cited Findings
- In the Indian LMD firm studied, the delivery-center manager assigns each DA a daily "dispatch" of parcels for that DA's fixed area. "After the allocation, DAs have the autonomy to determine the parcel delivery sequence and route." DAs described their own heuristics: "I deliver block by block based on distance from the delivery center" and "carryover parcels before the fresh if the parcels are from the same area." — [Arora et al., arXiv 2609.29080](https://arxiv.org/pdf/2609.29080)
- In the same firm, the company app is the system of record. DAs see each parcel's attempt history, record delivery status, and must pick a failure reason from a pre-populated list. They are told to call customers before attempting delivery, and calls go through the app, which tracks their duration. Each parcel gets three attempts before return to the merchant. — [Arora et al.](https://arxiv.org/pdf/2609.29080)
- Shadowfax: the rider app is the "Shadowfax Delivery Partner" app (Play Store id in.shadowfax.gandalf). Shadowfax markets "SF Maps", described as AI-powered route optimization, real-time traffic and "smart batching", plus a logical delivery sequence. All of this is marketing copy with no technical detail. One Play-listing release note mentions "Smarter HL [hyperlocal] trip allocation." — [Shadowfax Play Store](https://play.google.com/store/apps/details?id=in.shadowfax.gandalf&hl=en_IN); [Shadowfax delivery-partner support blog](https://www.shadowfax.in/blogs/delivery-partner-support-guide); [Shadowfax drivers blog](https://www.shadowfax.in/blogs/shadowfax-for-delivery-drivers-fair-pay-safer-routes-career-growth)
- Valmo (Meesho): under the published partner delivery-service agreement, Valmo sets the pickup and drop locations, the partner must deposit COD cash at the hub the same day, and lost or damaged shipments can be penalised at invoice value. Riders use the "Valmo Partner" app. Unofficial franchise guides say parcels are dispatched through the Meesho or Valmo app and mention "route planning tools", but I could not confirm the route tools from official material. — [Valmo partner agreement](https://www.valmo.in/static-assets/valmo-partner-app/documents/valmo-app-delivery-service-agreement-v1.0.html); [Inc42 on Valmo launch](https://inc42.com/buzz/meesho-launches-tech-platform-valmo-to-fill-gaps-in-indias-supply-chain/); [franchise guide (unofficial)](https://franchisehurt.com/valmo-courier-franchise-india/)
- Ekart/Flipkart: the Wishmaster app handles navigation, delivery management, route tracking and status updates, and records "the entire life cycle of their deliveries." Flipkart says publicly only that AI has "applications in route optimisation", with no detail. — [Flipkart Stories](https://stories.flipkart.com/remote-pin-delivery-flipkart-hubs); [BW Businessworld interview](https://www.businessworld.in/article/ecom-s-last-mile-push-to-drive-india-s-ev-transition-flipkart-s-nishant-gupta-597980); [Ekart SOS button story](https://stories.flipkart.com/ekart-nanjunda-sos-button/)
- Amazon: the routing problem the Amazon/MIT challenge was built around is that experienced drivers often depart from the routes Amazon's software plans. Amazon released more than 4,000 real driver-chosen route sequences so researchers could model driver know-how. That was US data. I found no India DSP source on whether Amazon India riders must follow the app's sequence. — [Amazon Science blog](https://www.amazon.science/blog/amazon-mit-team-up-to-add-driver-know-how-to-delivery-routing-models); [MIT routing challenge](https://routingchallenge.mit.edu/?p=62)
- US blogs say Amazon Flex routes are assigned and sequenced in the app and drivers can adjust them, and some drivers say the in-app navigation is unreliable. These are non-authoritative and not India-specific. — [Geo2 blog](https://geo2.com/blog/smarter-routes-for-the-amazon-dsp-driver); [Medium, ex-driver](https://medium.com/@lazytoaster/insight-into-amazons-delivery-service-5b1076269b3c)

### Inferences
- In practice the rider must still scan, mark delivered/failed, collect OTP or COD and call the customer inside the carrier app. A third-party optimizer can only sit alongside it, as a "planning" step that suggests a stop order.
- The obstacle is getting the data in, not permission to reorder. Carrier apps generally offer no export. To use Circuit/Zeo/Upper, someone would have to retype or paste 40-100 addresses per rider per day, or photograph labels if the tool supports OCR, and Indian landmark-style addresses often geocode badly. That set-up time can cancel out the routing gain on a small, familiar beat.
- Copying customer names, phones and addresses into a third-party app may breach partner data and confidentiality terms. The partner should check its agreement, especially with Amazon and Flipkart.
- Shadowfax, and probably Ekart and Delhivery, already offer some in-app sequencing or navigation, so the extra gain from an external optimizer is likely smaller than vendor claims assume.

### Gaps
- No official documentation found for XpressBees, Delhivery or Ekart rider apps on route sequencing, forced versus free ordering, or third-party tool policy. Delhivery's and Ekart's engineering blogs turned up nothing on stop sequencing in these searches.
- No India-specific evidence on Amazon DSP or "Amazon Shipping" rider-app sequencing rules.
- The firm in Arora et al. is unnamed and the data is from Jun-Nov 2019. Practices may have changed by 2024-2026.
- Partner contract clauses on data sharing were not verified.

## 2. Available tools and pricing (₹ / USD per driver per month)

### Takeaway
For one to three drivers, the cheap route planners cost about $12-40 (roughly ₹1,000-3,400) per driver per month. Order-based team plans start around $125-150/month. Free options are Google Maps (about 10 stops, and it does not reorder them), RouteXL (free up to 20 addresses), Circuit's free tier (10 stops per route), and the open-source solvers OSRM, VROOM and OR-Tools, which need technical set-up. Enterprise platforms (Locus, LogiNext, FarEye) are sold on custom quotes and are a poor fit for a 3-rider hub.

### Cited Findings
- Zeo Route Planner: about $24 per driver per month on yearly billing, about $50 for fleet plans, with a free driver app for a single driver. — [EfiRoute cost guide, updated Sept/Oct 2026 (competitor source)](https://efiroute.com/blog/route-optimization-software-cost)
- Other quotes for Zeo conflict: $290 per driver per year, $11.97 per seat per month, or $35/month. — [Upper's Zeo pricing page (competitor)](https://www.upperinc.com/blog/zeo-route-planner-pricing/)
- Zeo in rupees: ₹3,499 per driver per quarter (about ₹1,166/month), on a listing that is about four years old and stale. — [Techjockey listing](https://www.techjockey.com/detail/zeo-route-planner)
- Upper: $50-89 per user per month, or from $40 on annual billing. — [EfiRoute](https://efiroute.com/blog/route-optimization-software-cost); [Upper blog](https://www.upperinc.com/blog/best-delivery-route-planner-app/)
- Circuit, now Spoke: the Route Planner is free up to 10 stops per route. Circuit for Teams/Spoke is sold as stop packages: Starter $125/month for 1,000 stops, Premium $200 for 2,000, Expert $1,000 for 12,000, plus overage. Older listings quote $20/month for the single-driver app (price varies by country) and $40 per driver per month for Teams. — [EfiRoute](https://efiroute.com/blog/route-optimization-software-cost); [EfiRoute Circuit comparison](https://efiroute.com/compare/circuit-for-teams-alternative); [SourceForge](https://sourceforge.net/software/product/Circuit-for-Teams/); [Upper Zeo pricing page](https://www.upperinc.com/blog/zeo-route-planner-pricing/)
- Routific: from $150/month for up to 1,000 orders. OptimoRoute: $35-39 per driver per month. Track-POD: from $49 per driver per month with a 3-driver minimum (about $147). Route4Me: from $199/month. Onfleet: from $619/month. RoadWarrior: $14.99/month for a single driver. EfiRoute's own Pro plan is $29/month for up to 10 couriers, and its free plan allows 2 couriers per project and 3 projects/month. — [EfiRoute cost guide](https://efiroute.com/blog/route-optimization-software-cost)
- Google Maps: free, about 10 waypoints, and it does not reorder stops. — [EfiRoute cost guide](https://efiroute.com/blog/route-optimization-software-cost)
- RouteXL: "free to use up till 20 addresses." Paid prices are on a separate page I did not retrieve. — [RouteXL](https://www.routexl.com/)
- Routific says that in a benchmark with MIT, its plans had about 7 times fewer crossings between drivers' routes than the best open-source solver. That is vendor-reported and measures route quality, not km saved. — [Routific blog](https://www.routific.com/blog/best-route-planning-software-for-deliveries)

### Inferences
- At 3 riders, a per-driver app (Zeo, Circuit single-driver, Upper basic) would cost about ₹3,000-10,000 per month in total, using ₹84-85/USD.
- One rider's day is 40-100 stops, which exceeds the free tiers (10-20 stops), so free tools mean splitting routes into chunks.
- An open-source stack (OSRM + VROOM on OpenStreetMap) costs nothing in licences but needs a developer and good geocodes. It is not realistic for a hub owner without technical help.

### Gaps
- No current (2024-2026) India rupee pricing found from vendors for Circuit, Upper, Shipday, MyRouteOnline or RouteXL paid tiers.
- No public pricing found for Locus, LogiNext or FarEye; they are quote-based enterprise products.
- Most pricing figures come from competitor comparison pages and should be checked on each vendor's own pricing page.

## 3. Measured impact: vendor claims versus independent evidence

### Takeaway
Vendor claims of 10-40% fewer km, from Descartes, DispatchTrack, FleetRabbit and others, have no published methodology. I found no independent field experiment, in India or elsewhere, that measures how much optimization software beats experienced drivers on their own fixed beat. Offline benchmarks against Amazon's driver routes show big distance cuts on paper (around 24% in one case). But Amazon's own premise is that experienced drivers knowingly depart from "optimal" routes because they hold local knowledge the software lacks. In the Indian study, stops are already dense (43% of parcels less than 500 m apart), which limits how much distance there is to save.

### Cited Findings
- Vendor claims (self-reported, no methods): miles driven cut by 18.7% (FleetRabbit 2025), planned miles cut by 10% (Descartes), miles driven cut by 10% (DispatchTrack). — [FleetRabbit](https://fleetrabbit.com/industry/e-commerce-logistics/10-ways-route-optimization-software-cuts-delivery-costs); [Descartes](https://www.descartes.com/solutions/routing-mobile-and-telematics/route-optimization); [DispatchTrack](https://www.dispatchtrack.com/blog/route-optimization-guide/)
- Offline academic benchmark on Amazon last-mile data (routes human drivers actually ran): on one instance, total distance fell from 276.24 km to 208.44 km, about 24.5%. This was a single case, not a field trial. — [arXiv 2509.24256](https://arxiv.org/pdf/2509.24256)
- Amazon/MIT: drivers "often deviate" from routes planned by Amazon's optimization software, and the challenge existed to learn from experienced drivers' sequences rather than replace them. — [Amazon Science](https://www.amazon.science/blog/amazon-mit-team-up-to-add-driver-know-how-to-delivery-routing-models); [arXiv 2205.04001](https://arxiv.org/pdf/2205.04001); [arXiv 2112.01937](https://arxiv.org/pdf/2112.01937)
- A TU Delft thesis notes that planned routes ignore real-world factors such as parking spots and facilities along the way, which is one reason drivers deviate. — [TU Delft repository](https://repository.tudelft.nl/file/File_831742d5-5f46-48df-9c8c-0a31772b10c2)
- India, structural: each DA has a dedicated area, about 43% of parcels in a dispatch are less than 500 m apart, and many addresses order several items. — [Arora et al.](https://arxiv.org/pdf/2609.29080)
- India, network-level (not stop sequencing): switching Delhivery from pincode-based to locality-based sorting reportedly raised last-mile productivity by 40-60%. — [arXiv 1802.04625, Economic Impact of Discoverability of Localities and Addresses in India](https://arxiv.org/pdf/1802.04625)
- A secondary blog claims driver-chosen routes are 18% more expensive than optimized ones. I could not verify it. — [Silk Road Nexus Substack (unverified)](https://thesilkroadnexus.substack.com/p/driver-behavior-in-last-mile-delivery)

### Inferences
- With a two-wheeler on a dense, familiar beat, a sequencing app plausibly saves single-digit to perhaps 15% of riding km. That translates into a smaller share of total time, because much of each stop's time is spent at the door (see section 4). Treat 20-40% gains as unlikely for experienced riders on a fixed beat. Gains would be larger for new riders, unfamiliar areas, or scattered semi-urban stops.
- The biggest documented Indian productivity jump (Delhivery, 40-60%) came from changing how parcels are sorted and clustered into beats. That is the hub's own lever, not app sequencing.

### Gaps
- No independent before/after field study (India or global, 2024-2026) of a route-planner app against experienced two-wheeler riders.
- No Indian case study with audited km or stops-per-hour figures for Circuit, Zeo, Upper, Locus, LogiNext or FarEye. Vendor case studies were not retrieved in this pass and would be vendor claims anyway.

## 4. What actually limits deliveries per rider per day in Indian last mile

### Takeaway
The best Indian data shows the constraint is time at and around the doorstep, not riding distance. Riders averaged about 63 parcels assigned, about 39 delivered and about 20 genuine failures per day, over 8.15 hours. That works out to about 8.8 minutes per parcel on average, falling to 4.9 minutes when the load exceeds 100 parcels. On top of that came about 59 minutes before the first attempt and about 38 minutes of idle time per day. Customer unavailability, COD (about 45% of parcels), unlocatable addresses (30-40% of pincodes written incorrectly) and gated-building waits are the main limits.

### Cited Findings
- Per DA-day (N=46,086, 852 DAs, 9 cities, metros and non-metros, Jun-Nov 2019): parcels assigned mean 63.0 (SD 24.5, max 149). Successful deliveries mean 38.9, of which first-time-right 36.7. Genuine failures 19.6, fake "customer unavailable" remarks 2.7, unattempted 1.75. COD parcels 28.4 (about 45% of the load). Time to first attempt 59 minutes. Idle time 38 minutes. Average workday 8.15 hours, maximum 12.15. Average 8.8 minutes per parcel, dropping to 4.9 minutes when parcels exceed 100. The 80th and 90th percentile workloads were 81 and 97 parcels. — [Arora et al., arXiv 2609.29080](https://arxiv.org/pdf/2609.29080)
- In that firm, the allowance per delivery after reaching the location is up to 15 minutes, covering walking between apartments in the same building and waiting at the door. DAs report calling some customers "5-10 minutes before I reach there," and say "I work for 10-11 hours because the route is mostly long, and the number of parcels is high." — [Arora et al.](https://arxiv.org/pdf/2609.29080)
- "Fake remarks" (marking "customer unavailable" without visiting) are the firm's largest single cause of returns to merchants. They cut the next day's successful deliveries by 1.60% and first-time-right deliveries by 1.86%. Inaccurate pincodes, GPS error and unstructured addresses make them hard to detect. — [Arora et al.](https://arxiv.org/pdf/2609.29080)
- Address quality: 30-40% of pincodes are written incorrectly. An average pincode covers 179 sq km and about 135,000 households. Last mile is 30% or more of delivery cost in India, against 10-12% in markets with structured addresses. Poor addressing costs India an estimated $10-14B a year. — [Logistics Insider, Oct 27 2026](https://www.logisticsinsider.in/india-address-problem-last-mile-delivery-digipin/); [arXiv 1802.04625](https://arxiv.org/pdf/1802.04625)
- Industry first-time-right failure rates are estimated at 10-50%, citing Voigt et al. 2022. — [Arora et al.](https://arxiv.org/pdf/2609.29080)
- RTO is about 23% across Indian e-commerce. Failed-delivery rates for COD in Tier 2/3 cities reach 40-49%. These are vendor blog figures, so treat them as directional. — [Amazon Shipping India SMB guide](https://shipping.amazon.in/blog/last-mile-delivery-india-smb-guide)
- A Finnish university thesis on Indian e-commerce last mile reports about 23% first-attempt failure (largely address ambiguity and COD refusal) and 3.2 minutes per stop. The extracted text was garbled, so verify before relying on it. — [Singh thesis, Univ. of Vaasa](https://osuva.uwasa.fi/server/api/core/bitstreams/f15f4fc4-5595-4884-96e1-f035db5c4228/content)
- Surveys list traffic congestion, customer unavailability and address inaccuracies as persistent problems; in a small survey (n=59), 65% of respondents had experienced failed deliveries. — [ResearchGate survey (n=108)](https://www.researchgate.net/publication/404652327_Innovations_in_Last-Mile_Delivery_Transforming_Urban_Courier_Logistics_in_India); [Zenodo consumer survey](https://zenodo.org/records/21849267)

### Inferences
- In that data, about 31% of assigned parcels per day fail. Each failure costs a trip plus door time and returns as a reattempt. Cutting failures from about 20 to about 10 a day would add more successful (paid) deliveries than any plausible routing gain.
- With 8.8 minutes per parcel and parcels about 500 m apart, a two-wheeler at urban speeds needs roughly 1-3 minutes to ride between stops. The rest is finding the address, parking, gate or lift, calling, waiting, OTP and COD. That is a rough estimate, not a measured split. It is why km savings from routing barely move the deliveries-per-day count.

### Gaps
- No measured Indian breakdown of time per stop into ride, search, gate entry, OTP and COD handling.
- No Hyderabad-specific data on gated-community entry times (MyGate/visitor approval) or on traffic.

## 5. Productivity levers likely more important than routing, and a realistic upper bound per rider per day

### Takeaway
The levers with evidence behind them are fewer failed attempts, through pre-delivery calls or WhatsApp address and availability confirmation, time windows and COD handling, plus better addresses and geocoding, plus denser beats and cluster assignment. The evidence is mostly vendor-reported, apart from the Delhivery sorting result and the Arora et al. data. A realistic ceiling in dense urban areas is about 80-100+ parcels a day per two-wheeler rider. Semi-urban is lower; I found no measured number.

### Cited Findings
- WhatsApp address verification before dispatch reportedly cut RTO losses by 45% for Shiprocket (a WhatsApp Business case study, so vendor/partner-reported). — [Logistics Insider](https://www.logisticsinsider.in/india-address-problem-last-mile-delivery-digipin/); [BePragma blog](https://www.bepragma.ai/blogs/last-mile-delivery-problem)
- Two-hour delivery windows reportedly cut BigBasket's failed attempts by 31% (vendor marketing, unverified). — [search summary of BePragma/industry blog](https://www.bepragma.ai/blogs/last-mile-delivery-problem)
- Moving Delhivery from pincode-based to locality-based sorting improved last-mile productivity by 40-60%. — [arXiv 1802.04625](https://arxiv.org/pdf/1802.04625)
- Address infrastructure: India Post's DIGIPIN gives roughly 4 m x 4 m grid cells with 10-character codes, has a lookup portal since May 2025, and was extended into a Digital Address ecosystem announced Oct 2025. Google Address Descriptors (landmark-based) have been generally available across India since April 2025. — [Logistics Insider](https://www.logisticsinsider.in/india-address-problem-last-mile-delivery-digipin/)
- The Arora et al. authors recommend "strategic allocation of parcels, prioritizing FTR [first-time-right]," and find that COD-heavy loads and task complexity are linked to more misconduct. In their data, density brings time per parcel down to 4.9 minutes when the load exceeds 100. — [Arora et al.](https://arxiv.org/pdf/2609.29080)
- Upper-bound data: in the Indian firm, the 90th percentile workload was 97 parcels and the maximum 149 assigned. Maximum successful deliveries in a day was 129. — [Arora et al.](https://arxiv.org/pdf/2609.29080)
- For comparison, US Amazon van drivers reportedly make about 120-180 stops a day (driver-reported, not official, and van-based). — [Routerra blog](https://routerra.io/blog/amazon-driver-stops-per-day); [MyRouteOnline blog](https://www.myrouteonline.com/blog/the-pressure-of-being-an-amazon-delivery-driver)

### Inferences
- For a 3-rider Hyderabad hub, the likely order of payoff is:
  1. Call or WhatsApp customers before leaving or in batches, and confirm availability and location pins. This is free and attacks the ~31% failure share.
  2. Assign each rider a compact, fixed cluster and balance load across the three.
  3. Pre-sort parcels in delivery order at the hub during the ~59 minutes before the first attempt. Doing this faster gets riders out earlier.
  4. Save landmark pins or DIGIPINs for repeat customers.
  5. Only then use an optimizer, mainly for new riders or unusually scattered days.
- At about 39 successful out of 63 assigned, the realistic gain from better first-attempt success and density is moving towards 50-60+ successful deliveries per day on a typical urban load. The total is capped by the parcel volume the carrier assigns to the hub's pincodes, which the hub does not control: "DAs have no control over the quantity of parcels."
- Semi-urban or peri-urban beats with longer spacing would be where routing helps most in relative terms, but also where daily counts are lower. No Indian semi-urban number was found.

### Gaps
- No independent Indian measurement of failed-attempt reduction from pre-calling or WhatsApp confirmation; the 45% and 31% figures are vendor-reported.
- No measured semi-urban or Tier-2/3 deliveries-per-rider figure found.
- Hyderabad-specific parcel density per PIN code not found.
