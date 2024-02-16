import React from 'react';

export interface IProjectViewerProps {
  projectName: string;
}

export const ProjectViewer: React.FunctionComponent<IProjectViewerProps> = (props) => {
  const { projectName } = props;

  return (
    <>
      <h4>Details of project</h4>
      <p>Project: {projectName}</p>
    </>
  );
}
