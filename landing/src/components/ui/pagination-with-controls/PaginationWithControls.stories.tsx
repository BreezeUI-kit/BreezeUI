import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { PaginationWithControls } from './PaginationWithControls';

export default {
  title: 'UI/Pagination/WithControls',
  component: PaginationWithControls,
} as Meta;

export const Default = () => {
  const [page, setPage] = useState(1);
  return (
    <PaginationWithControls totalPages={10} currentPage={page} onPageChange={setPage} />
  );
};
