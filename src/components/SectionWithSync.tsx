import { useSection } from "../hooks/SectionContext";
import { SECTION } from "../utils/sections";

export const SectionWithSync = ({
  section,
  SectionComponent,
  onAppIntersect,
}: {
  section: any;
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
