import React from 'react';
import { ProjectViewer } from '@myorg/project-viewer';
import { ProjectsBrowser } from '@myorg/project-browser';

export interface IProjectUserDashboardProps {
  orgName: string;
  page: number;
}

export const ProjectUserDashboard: React.FunctionComponent<IProjectUserDashboardProps> = (props) => {
  const { orgName, page } = props;

  return (
    <div>
      <div>Dashboard or projects for {orgName}</div>
      <p>Displaying project page# {page}</p>
      <ProjectsBrowser orgName={orgName} nbrOfProjects={10} page={page} />
      <ProjectViewer projectName="The matrix" />
    </div>
  );
}
