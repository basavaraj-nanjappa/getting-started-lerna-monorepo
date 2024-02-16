import React from 'react';

export interface IProjectUserDashboardProps {
  orgName: string;
  page: number;
}

export const ProjectUserDashboard: React.FunctionComponent<IProjectUserDashboardProps> = (props) => {
  const { orgName, page } = props;

  return (
    <>
      <div>Dashboard or projects for {orgName}</div>
      <p>Display project page# {page}</p>
    </>
  );
}
