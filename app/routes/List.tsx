import React from 'react';
import Card from './Card';
import { books } from './data';

const List: React.FC = () => {
  return (
    <div className="font-sans p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(book => (
          <Card key={book.Code} book={book} />
        ))}
      </div>
    </div>
  );
};

export default List;
