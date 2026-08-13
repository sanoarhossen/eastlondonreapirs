import glass from "@/assets/service-glass.jpg";
import hinges from "@/assets/service-hinges.jpg";
import lock from "@/assets/service-lock.jpg";
import cylinder from "@/assets/service-cylinder.jpg";
import alignment from "@/assets/service-alignment.jpg";
import blinds from "@/assets/service-blinds.jpg";
import shopfront from "@/assets/service-shopfront.jpg";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "door-lock-handle-repair",
    title: "Door Lock & Handle Repair",
    summary:
      "Multipoint locking mechanisms, jammed doors, faulty handles and extra security locks.",
    image: lock,
    alt: "Multipoint locking mechanism being fitted into a uPVC door",
    points: [
      "Specialists in double glazing multipoint locking mechanisms.",
      "Faulty locks replaced like-for-like or upgraded to a new multipoint system.",
      "Jammed or locked doors and loose handles repaired same day where possible.",
      "Extra security locks fitted to double glazed doors.",
      "Broken letter plates and door knockers with spy holes replaced.",
    ],
  },
  {
    slug: "door-alignment",
    title: "uPVC & Composite Door Alignment",
    summary: "Dropped, stiff or non-locking doors realigned and adjusted properly.",
    image: alignment,
    alt: "Technician adjusting the hinges on a white uPVC door",
    points: [
      "Doors that stick, drop on one side or refuse to lock realigned at the hinges.",
      "Lock keeps and mechanisms adjusted so the key turns smoothly again.",
      "uPVC, aluminium, French, composite, sliding, porch, front and garden doors.",
      "Draught gaps closed to improve security and heat retention.",
    ],
  },
  {
    slug: "key-cylinder-replacement",
    title: "Door Key Cylinder Replacement",
    summary: "Anti-snap, anti-bump euro cylinders supplied and fitted for any door size.",
    image: cylinder,
    alt: "Anti-snap euro key cylinders and keys on a workbench",
    points: [
      "Anti-bump and anti-snap cylinders for uPVC, aluminium and composite doors.",
      "Chrome or gold finishes in any size, cut to your door.",
      "Lost keys, new tenants or moving home — full key sets replaced.",
      "Thumb-turn cylinders fitted for easier internal exit.",
    ],
  },
  {
    slug: "double-glazed-glass-units",
    title: "Double Glazed Glass Unit Replacement",
    summary: "Broken or misted sealed units replaced with Low-E, toughened or laminated glass.",
    image: glass,
    alt: "Glazier fitting a replacement double glazed unit into a window frame",
    points: [
      "Broken and misted double or triple glazed units replaced.",
      "Low-E, toughened and laminated glass with argon-filled thermal insulation.",
      "Decorative options: antique or silver lead, white or chrome Georgian bars.",
      "All supplied and fitted units carry a one-year condensation warranty.",
    ],
  },
  {
    slug: "window-hinges-handles",
    title: "Window Hinge, Lock & Handle Repair",
    summary: "Heavy-duty stainless hinges, gearboxes and handles for uPVC and aluminium windows.",
    image: hinges,
    alt: "Chrome window handle and stainless steel hinge on a white uPVC window",
    points: [
      "Broken, worn or seized hinges replaced with stainless steel heavy duty parts.",
      "Top hung and side hung, fire escape 90°, child restrictor and easy-clean hinges.",
      "Jammed windows, lost handle keys and tilt & turn handles repaired.",
      "Window mechanisms and gearboxes repaired or replaced in any size.",
    ],
  },
  {
    slug: "integral-blinds",
    title: "Integral Blinds Glass",
    summary: "Sealed units with magnetically operated blinds — private, hygienic, maintenance free.",
    image: blinds,
    alt: "Modern window with integral blinds sealed inside the glass unit",
    points: [
      "Standard glass units swapped for integral blind units.",
      "Magnetic slider controls raise, lower and tilt the blinds.",
      "Dust free and hygienic — nothing to clean between the panes.",
      "White, cream, grey, brown, black and silver options.",
    ],
  },
  {
    slug: "shop-fronts",
    title: "Shop Front Repairs",
    summary: "Commercial glass, doors and closers repaired quickly to keep you trading.",
    image: shopfront,
    alt: "Engineer repairing an aluminium shop front door on a London high street",
    points: [
      "Broken shop front glass replaced in laminated, wired, 8mm or 10mm glass.",
      "Aluminium shop door hinges, closers and locks repaired.",
      "Emergency boarding up available out of hours.",
      "Landlord and property management maintenance contracts welcome.",
    ],
  },
];