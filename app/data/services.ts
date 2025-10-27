import type { LucideIcon } from "lucide-react"
import { Axe, Drill, Scissors, Wind } from "lucide-react"

export type ServiceCategory = {
  id: string
  name: string
  icon: LucideIcon
  headline: string
  description: string
  highlights: string[]
  process: string[]
  equipment: string[]
  cta: string
}

export const services: ServiceCategory[] = [
  {
    id: "removal",
    name: "Tree Removal",
    icon: Axe,
    headline: "Safe, Controlled Tree Removal",
    description:
      "Hazardous, storm-damaged, or overgrown trees carefully dismantled and removed with clean-up included.",
    highlights: [
      "Rigging systems for tight spaces",
      "Certified climbers & bucket truck access",
      "Full debris and brush clean-up",
    ],
    process: [
      "On-site assessment, hazard check, and quote",
      "Establish drop zones, rigging points, and safety brief",
      "Sectional removal with rope lowering and spotting",
      "Brush chipping, log bucking, and debris haul-away",
      "Final raking, leaf blowing, and client walk-through",
    ],
    equipment: [
      "Husqvarna & Stihl saws",
      "Rigging ropes & lowering devices",
      "Bucket truck (where access allows)",
      "Climbing saddles & ascenders",
      "Wood chipper & log trailers",
    ],
    cta: "Get Quote for Removal",
  },
  {
    id: "pruning",
    name: "Pruning & Hedge Trimming",
    icon: Scissors,
    headline: "Precision Pruning & Hedge Care",
    description:
      "Shaping, roof clearance, deadwood removal, and seasonal maintenance tailored to tree health.",
    highlights: [
      "Structural pruning for young trees",
      "Hedge and shrub reshaping",
      "Clearance from roofs, wires, and driveways",
    ],
    process: [
      "Walk-through to identify goals and problem limbs",
      "Crown cleaning, thinning, and hazard removal",
      "Selective reduction for clearances and sightlines",
      "Fine pruning for shape, balance, and aesthetics",
      "Debris removal and site tidy",
    ],
    equipment: [
      "Pole pruners & Silky saws",
      "Battery hedge trimmers",
      "Climbing gear for canopy access",
      "Brush chippers",
    ],
    cta: "Book Pruning Consultation",
  },
  {
    id: "grinding",
    name: "Stump Grinding",
    icon: Drill,
    headline: "Flush Stump Grinding & Site Prep",
    description:
      "Surface-level or below-grade stump removal with chips hauled away or left for mulch.",
    highlights: [
      "Deep grind for replanting or sod",
      "Multi-stump packages",
      "Gate-friendly equipment",
    ],
    process: [
      "Call-before-you-dig utility check",
      "Stump inspection and grind depth planning",
      "Stump grinding with shavings containment",
      "Optional chip removal or spreading",
      "Backfill and grade for reseeding",
    ],
    equipment: [
      "Carlton stump grinder",
      "Shovels, rakes, and tampers",
      "Wheelbarrows and chip hauling trailer",
    ],
    cta: "Schedule Stump Grinding",
  },
  {
    id: "emergency",
    name: "Storm & Emergency Cleanup",
    icon: Wind,
    headline: "24/7 Emergency Response",
    description:
      "Rapid response for storm damage, fallen limbs, and unsafe trees threatening your property.",
    highlights: [
      "On-call day and night",
      "Securing hazardous hangers",
      "Coordination with utilities when needed",
    ],
    process: [
      "Immediate on-site safety assessment",
      "Stabilize hangers and downed limbs",
      "Sectional removal to relieve pressure",
      "Ground cleanup and debris disposal",
      "Insurance documentation support",
    ],
    equipment: [
      "Storm rigging kits & speedlines",
      "Chainsaws with emergency bars",
      "Headlamps & flood lighting",
      "Portable winches and come-alongs",
    ],
    cta: "Request Emergency Assistance",
  },
]
