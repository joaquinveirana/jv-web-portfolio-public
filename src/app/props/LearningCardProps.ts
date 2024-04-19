import { LearningItem } from "@/interfaces/db-entities";

export type LearningCardsProps = {
  isBadge: boolean;
  items: LearningItem[];
};
