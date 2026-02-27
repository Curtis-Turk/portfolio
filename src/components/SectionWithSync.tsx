import { useSection } from "../hooks/SectionContext";
import { Section, SECTION } from "../utils/sections";

export const SectionWithSync = ({
  section,
  SectionComponent,
  onAppIntersect,
}: {
  section: Section;
  SectionComponent: React.ComponentType<any>;
  onAppIntersect: (section: SECTION, isIntersecting: boolean) => void;
}) => {
  const { setActiveSection } = useSection();

  return (
    <SectionComponent
      onIntersect={(isIntersecting: boolean) => {
        if (isIntersecting) {
          setActiveSection(section.id);
        }
        onAppIntersect(section.id, isIntersecting);
      }}
    />
  );
};
