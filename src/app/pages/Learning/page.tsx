import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { GrowOnScroll } from "@/app/components/GrowOnScroll/GrowOnScroll";
import { ProjectsProps } from "@/app/props/ProjectsProps";
import { selectAllBadgesAction } from "@/app/lib/server-actions/server-actions";
import { LearningItem } from "@/interfaces/db-entities";
import { LearningCards } from "@/app/components/LearningCard/LearningCard";

export const Learning = async (props: ProjectsProps) => {
  const getAllBadges = async () => {
    const badgesArray = await selectAllBadgesAction();
    console.log(badgesArray);
    return badgesArray;
  };

  const badges: LearningItem[] = await getAllBadges();

  return (
    <article id="#learning" className="article-class">
      {/* Title */}
      <SectionTitle title={props.textContent.title} growTimeout={1500} growOneTime={true} />

      <div className="mt-8 flex-col-centered">
        <LearningCards items={badges} isBadge={true} />
      </div>
    </article>
  );
};
