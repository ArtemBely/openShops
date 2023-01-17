import React, { FC, useEffect, useState } from "react";

import { IProject } from "../../server/models/project";

const uno = "../../../images/projects/uno_main.jpg";

let projects: IProject[];

declare global {
  interface Window {
    __INITIAL_PROJECTS__: IProject[];
  }
}

interface IBuildingsProps {
  searchInput: string;
  selectedCategory: string;
}

export const Buildings: FC<IBuildingsProps> = ({
  searchInput,
  selectedCategory,
}) => {
  if (typeof window != "undefined") {
    projects = window.__INITIAL_PROJECTS__;
  }

  const [allProjects, setAllProjects] = useState<IProject[]>([{} as IProject]);
  const [filteredProjects, setFilteredProjects] = useState<IProject[] | null>(
    null
  );

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.location.pathname.split("/").pop() == "projects") {
        setAllProjects(projects);
      }
    }
  });

  // categories

  useEffect(() => {
    if (selectedCategory !== "Все проекты") {
      const filtProject = projects.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtProject);
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedCategory]);

  // search

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filtProjects = filterProjects(searchInput);
      setFilteredProjects(filtProjects);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchInput]);

  const filterProjects = (searchText: string) => {
    if (!searchText || searchText === " ") {
      if (selectedCategory !== "Все проекты") {
        return projects.filter(
          (project) => project.category === selectedCategory
        );
      } else {
        return projects;
      }
    }

    return projects.filter(
      ({ title, category }) =>
        title.toLowerCase().includes(searchText.toLowerCase()) &&
        category === selectedCategory
    );
  };

  return (
    <div className="wrap_buildings_inside">
      <div className="buildings_inside">
        {filteredProjects ? (
          filteredProjects.map((project) => (
            <a
              key={project._id}
              href={`/projects/${project._id}`}
              className="wrap_each_object"
            >
              <img
                src={`../../../uploads/${project.noExchangeFile}`}
                className="each_project_img"
              />
              <div className="wrap_objectInfo ">
                <p className="common_addressObject">{project.secondString}</p>
                <p className="common_titleObject">{project.title}</p>
              </div>
            </a>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
