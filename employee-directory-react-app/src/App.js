import React from 'react';
import PageHeader from './components/PageHeader';
import SearchBar from './components/SearchBar';
import TableArea from './components/TableArea';
import TableHeader from './components/TableHeader';
import TableData from './components/TableData';

function App() {
  return (
    <div>
    <PageHeader />
    <SearchBar />
    <TableArea />
    <TableHeader />
    <TableData />
   </div>
  );
}

export default App;
