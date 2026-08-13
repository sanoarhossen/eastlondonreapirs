export type CoverageArea = {
  name: string;
  outcodes: string[];
  lat: number;
  lng: number;
  note: string;
};

export const coverageAreas: CoverageArea[] = [
  { name: "Barking", outcodes: ["IG11"], lat: 51.5397, lng: 0.0813, note: "Same-day call-outs" },
  { name: "Beckton", outcodes: ["E6"], lat: 51.5145, lng: 0.0553, note: "Same-day call-outs" },
  { name: "Bethnal Green", outcodes: ["E2"], lat: 51.5271, lng: -0.0549, note: "Same-day call-outs" },
  { name: "Bow", outcodes: ["E3"], lat: 51.5299, lng: -0.0247, note: "Same-day call-outs" },
  { name: "Canning Town", outcodes: ["E16"], lat: 51.5145, lng: 0.0084, note: "Same-day call-outs" },
  { name: "Chingford", outcodes: ["E4"], lat: 51.6289, lng: 0.0106, note: "Next-day usually" },
  { name: "Clapton", outcodes: ["E5"], lat: 51.5613, lng: -0.0554, note: "Same-day call-outs" },
  { name: "Dagenham", outcodes: ["RM8", "RM9", "RM10"], lat: 51.5397, lng: 0.1653, note: "Next-day usually" },
  { name: "Docklands", outcodes: ["E14"], lat: 51.5054, lng: -0.0235, note: "Same-day call-outs" },
  { name: "East Ham", outcodes: ["E6"], lat: 51.5389, lng: 0.0518, note: "Same-day call-outs" },
  { name: "Forest Gate", outcodes: ["E7"], lat: 51.5495, lng: 0.0246, note: "Same-day call-outs" },
  { name: "Goodmayes", outcodes: ["IG3"], lat: 51.5652, lng: 0.1119, note: "Next-day usually" },
  { name: "Greenwich", outcodes: ["SE10"], lat: 51.4826, lng: -0.0077, note: "Same-day call-outs" },
  { name: "Hackney", outcodes: ["E8", "E9"], lat: 51.5450, lng: -0.0553, note: "Same-day call-outs" },
  { name: "Ilford", outcodes: ["IG1", "IG2"], lat: 51.5590, lng: 0.0741, note: "Same-day call-outs" },
  { name: "Islington", outcodes: ["N1"], lat: 51.5362, lng: -0.1033, note: "Same-day call-outs" },
  { name: "Lewisham", outcodes: ["SE13"], lat: 51.4614, lng: -0.0104, note: "Next-day usually" },
  { name: "Plaistow", outcodes: ["E13"], lat: 51.5313, lng: 0.0170, note: "Same-day call-outs" },
  { name: "Redbridge", outcodes: ["IG4"], lat: 51.5763, lng: 0.0454, note: "Next-day usually" },
  { name: "Newham", outcodes: ["E12"], lat: 51.5500, lng: 0.0500, note: "Same-day call-outs" },
  { name: "Poplar", outcodes: ["E14"], lat: 51.5085, lng: -0.0179, note: "Same-day call-outs" },
  { name: "Shadwell", outcodes: ["E1"], lat: 51.5117, lng: -0.0562, note: "Same-day call-outs" },
  { name: "Stepney Green", outcodes: ["E1"], lat: 51.5218, lng: -0.0466, note: "Same-day call-outs" },
  { name: "Stratford", outcodes: ["E15"], lat: 51.5416, lng: -0.0031, note: "Same-day call-outs" },
  { name: "Tower Hamlets", outcodes: ["E1"], lat: 51.5203, lng: -0.0293, note: "Same-day call-outs" },
  { name: "Walthamstow", outcodes: ["E17"], lat: 51.5860, lng: -0.0195, note: "Same-day call-outs" },
  { name: "Wanstead", outcodes: ["E11"], lat: 51.5762, lng: 0.0286, note: "Same-day call-outs" },
  { name: "Whitechapel", outcodes: ["E1"], lat: 51.5194, lng: -0.0612, note: "Same-day call-outs" },
  { name: "Woolwich", outcodes: ["SE18"], lat: 51.4896, lng: 0.0640, note: "Next-day usually" },
];

export const coveredOutcodes = Array.from(
  new Set(coverageAreas.flatMap((a) => a.outcodes)),
);

export function normalisePostcode(input: string) {
  return input.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function outcodeFromPostcode(input: string) {
  const p = normalisePostcode(input);
  const match = p.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)/);
  return match ? match[1] : "";
}

export function findAreasForPostcode(input: string) {
  const outcode = outcodeFromPostcode(input);
  if (!outcode) return { outcode: "", areas: [] as CoverageArea[] };
  return {
    outcode,
    areas: coverageAreas.filter((a) => a.outcodes.includes(outcode)),
  };
}
