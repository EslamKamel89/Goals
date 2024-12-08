import { ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App.tsx";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You Have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  const warningBox: ReactNode =
    goals.length > 3 ? (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate
      </InfoBox>
    ) : (
      <></>
    );
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
