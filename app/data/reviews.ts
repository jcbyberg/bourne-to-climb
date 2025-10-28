export type Review = {
  id: string
  source: "Homeowner" | "Industry Oversight" | "WhoDoYou" | "Google" | "Facebook"
  author: string
  rating: number
  title: string
  service: string
  text: string
  location?: string
  date: string
  url?: string
}

export const featuredReviews: Review[] = [
  {
    id: "reddit-1",
    source: "Homeowner",
    author: "Josh Byberg",
    rating: 5,
    title: "Honest and friendly",
    service: "Tree Removal & Cleanup",
    text:
      "Dustin was fair, fast, and honest. He walked us through the plan, handled the removal without disturbing the neighbors, and left the yard cleaner than when he started.",
    location: "Oshawa",
    date: "2024-06-12",
    url: "https://www.reddit.com/r/Oshawa/",
  },
  {
    id: "industry-1",
    source: "Industry Oversight",
    author: "LandscapeCare Inc.",
    rating: 5,
    title: "Go-to arborist partner",
    service: "Seasonal pruning",
    text:
      "We bring Dustin in every spring for pruning and hedge management on our client properties. Professional equipment, tight cleanups, and always on schedule.",
    location: "Oshawa",
    date: "2023-10-04",
  },
  {
    id: "whodoyou-1",
    source: "WhoDoYou",
    author: "G. Mitchell",
    rating: 5,
    title: "Removed 8 stubborn stumps",
    service: "Stump Grinding",
    text:
      "BTC handled eight old stumps along our fence line. Efficient, respectful of the lawn, and they even helped prep the area for new sod.",
    location: "Clarington",
    date: "2024-08-18",
  },
]

export const reviews: Review[] = [
  ...featuredReviews,
  {
    id: "google-1",
    source: "Google",
    author: "S. Harper",
    rating: 5,
    title: "Rapid storm response",
    service: "Emergency Cleanup",
    text:
      "Called at 7pm after a storm split our maple. Dustin was onsite in under an hour, secured the limb, and had it removed safely that evening.",
    location: "Oshawa",
    date: "2024-09-02",
  },
  {
    id: "facebook-1",
    source: "Facebook",
    author: "P. DeSouza",
    rating: 5,
    title: "Great communication",
    service: "Tree Pruning",
    text:
      "Appreciated the walkthrough and honest advice. Our yard has better light, and the crew cleaned every bit of debris before leaving.",
    location: "Bowmanville",
    date: "2023-07-22",
  },
  {
    id: "google-2",
    source: "Google",
    author: "C. Wong",
    rating: 5,
    title: "Trusted for commercial sites",
    service: "Commercial Maintenance",
    text:
      "We manage several commercial plazas and rely on Bourne To Climb for hazard removals. Professional reporting, insurance docs ready, and zero safety incidents.",
    location: "Whitby",
    date: "2024-05-16",
  },
]
