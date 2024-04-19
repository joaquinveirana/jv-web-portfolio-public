import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { ProjectsProps } from "@/app/props/ProjectsProps";
import {
  selectAllBadgesAction,
  selectAllCertificatesAction,
} from "@/app/lib/server-actions/server-actions";
import { LearningItem } from "@/interfaces/db-entities";
import { LearningCards } from "@/app/components/LearningCard/LearningCard";
import dayjs from "dayjs";

export const Learning = async (props: ProjectsProps) => {
  const getAllBadges = async () => {
    const badgesArray = await selectAllBadgesAction();
    return badgesArray;
  };

  const getAllCerts = async () => {
    const certsArray = await selectAllCertificatesAction();
    return certsArray;
  };

  const badges: LearningItem[] = await getAllBadges();
  const certs: LearningItem[] = await getAllCerts();

  return (
    <article id="#learning" className="article-class">
      {/* Title */}
      <SectionTitle title={props.textContent.title} growTimeout={1500} growOneTime={true} />

      <div className="mt-8 flex-col-centered flex flex-col gap-6">
        <LearningCards items={certs} isBadge={false} />
        <LearningCards items={badges} isBadge={true} />
      </div>
    </article>
  );
};
