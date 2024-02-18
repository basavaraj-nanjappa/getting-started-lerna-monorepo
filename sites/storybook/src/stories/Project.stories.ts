import type { Meta, StoryObj } from '@storybook/react'; 

import { ProjectUserDashboard } from "@myorg/project-dashboard";

const meta = {
    title: 'projects/ProjectUserDashboard',
    component: ProjectUserDashboard,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta<typeof ProjectUserDashboard>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;


export const NoPage: Story = {
    args: {
        orgName: 'MyOrg',
        page: 1,
    },
  };