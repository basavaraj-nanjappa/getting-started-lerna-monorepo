import React from 'react';

export interface IProjectsBrowserProps {
  orgName: string;
  nbrOfProjects: number;
  page: number;
}

export const ProjectsBrowser: React.FunctionComponent<IProjectsBrowserProps> = (props) => {
  const { orgName, page, nbrOfProjects } = props;

  return (
    <>
      <div>List and view projects of {orgName}</div>
      <p>Listing {nbrOfProjects} on page# {page}</p>
    </>
  );
}
