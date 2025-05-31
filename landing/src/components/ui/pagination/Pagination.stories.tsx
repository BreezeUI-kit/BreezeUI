import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Pagination controls for navigating paged content.',
      },
    },
  },  
};

export default meta;

export const Basic = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination totalPages={5} currentPage={page} onPageChange={setPage} />
  );
};
