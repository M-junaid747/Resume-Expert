// pages/SearchResumePage.jsx
import React from 'react';
import { useEffect } from 'react';
import Layout from '../Layout/Layout';
import ResumeSearchForm from '../Component/ResumeSearchForm';

const SearchResumePage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <ResumeSearchForm />
    </Layout>
  );
};

export default SearchResumePage;
