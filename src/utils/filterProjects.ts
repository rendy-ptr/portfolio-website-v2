import { ProjectType, AllProjectsType } from '@/types/allprojects';
import { PROJECT_CATEGORIES } from '@/constants/ProjectsCategories';
import { ProjectCategoryTypes } from '@/types/projectcategories';

export const filterProjects = (
  selectedCategory: ProjectCategoryTypes,
  projects: AllProjectsType
): AllProjectsType => {
  // Validasi category jika tidak ada yang dipilih kembalikan semua project
  if (!PROJECT_CATEGORIES.includes(selectedCategory)) {
    return projects;
  }

  // Filter projects berdasarkan kategori yang dipilih
  return selectedCategory === 'All'
    ? projects
    : projects.filter(
        (project: ProjectType) => project.category === selectedCategory
      );
};
