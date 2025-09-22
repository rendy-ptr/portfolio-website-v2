export type ProjectType = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  color: string;
  category: ProjectCategoryTypes;
};

export type AllProjectsType = ProjectType[];
