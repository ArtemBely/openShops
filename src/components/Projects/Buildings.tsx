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
}

export const Buildings: FC<IBuildingsProps> = ({ searchInput }) => {
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

  useEffect(() => {
    console.log("filteredProjects,", filteredProjects);
  }, [filteredProjects]);

  useEffect(() => {
    console.log("allProjects,", allProjects);
  }, [allProjects]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filtProjects = filterProjects(searchInput);
      console.log("debounce + filtProjects", filtProjects);
      setFilteredProjects(filtProjects);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchInput]);

  const filterProjects = (searchText: string) => {
    console.log(searchInput, projects);
    if (!searchText || searchText === " ") {
      return projects;
    }

    return projects.filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
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
                <p className="common_addressObject">{project.title}</p>
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
