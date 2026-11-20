import { destinations, regionName } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { journeys } from "@/data/journeys";
import { regions, type InterestId, type Pace } from "@/data/types";

export function destinationName(slug: string) {
  return destinations.find((item) => item.slug === slug)?.name ?? slug;
}

export function experiencesFor(slug: string) {
  return experiences.filter((item) => item.destination === slug);
}

export function journeysFor(slug: string) {
  return journeys.filter((item) => item.route.includes(slug));
}

export function regionById(id: string) {
  return regions.find((item) => item.id === id);
}

export { regionName };

export type PlannerAnswers = {
  month: number;
  days: number;
  interests: InterestId[];
  pace: Pace;
};

export type PlannerMatch = {
  slug: string;
  score: number;
  reasons: string[];
};

export function matchJourneys(answers: PlannerAnswers): PlannerMatch[] {
  return journeys
    .map((journey) => {
      const reasons: string[] = [];
      let score = 0;
      const dayGap = Math.abs(journey.days - answers.days);
      if (dayGap === 0) {
        score += 36;
        reasons.push(`Built as a ${journey.days}-day route`);
      } else if (dayGap <= 2) {
        score += 24;
        reasons.push(`Close to your ${answers.days} days`);
      } else if (dayGap <= 4) {
        score += 10;
      }

      const shared = journey.interests.filter((item) => answers.interests.includes(item));
      if (shared.length) {
        score += shared.length * 14;
        reasons.push(
          shared.length === 1
            ? "Matches a theme you chose"
            : `Matches ${shared.length} of your themes`,
        );
      }

      if (journey.pace === answers.pace) {
        score += 16;
        reasons.push(
          answers.pace === "slow"
            ? "Keeps a slow pace"
            : answers.pace === "full"
              ? "Covers more ground, still privately"
              : "Uses a balanced pace",
        );
      } else if (
        (answers.pace === "balanced" && journey.pace !== "full") ||
        (answers.pace === "slow" && journey.pace === "balanced")
      ) {
        score += 6;
      }

      if (journey.bestMonths.includes(answers.month)) {
        score += 18;
        reasons.push("Fits the coast and climate of that month");
      }

      return { slug: journey.slug, score, reasons };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}
