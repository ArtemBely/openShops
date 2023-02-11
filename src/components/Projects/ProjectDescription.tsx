import React, { FC, useEffect } from "react";

import { IProject } from "../../server/models/project";

interface IProjectDescriptionProps {
  currentProject: IProject;
}

export const ProjectDescription: FC<IProjectDescriptionProps> = ({
  currentProject,
}) => {
  useEffect(() => {
    console.log(currentProject);
  }, [currentProject]);

  return (
    <div className="wrap_projectDescr">
      <div className="projectDescr">
        <p className="descr_of_vacs descr_of_project">Описание проекта</p>
        <div className="project-wrapper">
          <div className="each_descr_div">
            <p className="bold_vacancy">Наименование объекта </p>
            <p className="txt_vacancy">{currentProject.title}</p>
          </div>
          {typeof currentProject.mainArray !== "undefined" ? (
            currentProject.mainArray[0].map((project: any, i) => (
              <div key={i + project[0]} className="each_descr_div">
                <p className="bold_vacancy">{project}</p>
                <p className="txt_vacancy">{currentProject.mainArray[1][i]}</p>
              </div>
            ))
          ) : (
            <></>
          )}
          <p className="bottom_grey"></p>

          {typeof currentProject.technicalArray !== "undefined" ? (
            currentProject.technicalArray[0].map((project: any, i) => (
              <div key={i + project[0]} className="each_descr_div">
                <p className="bold_vacancy">{project}</p>
                <p className="txt_vacancy">
                  {currentProject.technicalArray[1][i]}
                </p>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>

        <div className="project-wrapper">
          <div className="each_descr_div">
            {typeof currentProject.technicalArray !== "undefined" ? (
              currentProject.descriptionArray[0].map((project: any, i) => (
                <p className="txt_vacancy technical_p">
                  <b>{project}</b>
                  <br />
                  {currentProject.descriptionArray[1][i]}
                </p>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
