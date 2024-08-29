import React from 'react';

interface Book {
  Code: string;
  Title: string;
  Cover: string;
  Description: string;
  Category: number;
  Author: string;
  Publishing: string;
  Price: number;
  Bestseller: boolean;
  Flash_sale: boolean; 
}

const Card: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={book.Cover} alt={book.Title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{book.Title}</h2>
        <p className="text-gray-700">{book.Description}</p>
        <p className="mt-2 text-lg font-semibold">Price: {book.Price} ฿</p>
        {book.Bestseller && (
          <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded text-xs mt-2">
            Bestseller
          </span>
        )}
        {book.Flash_sale && ( 
          <span className="inline-block bg-red-500 text-white py-1 px-2 rounded text-xs mt-2 ml-2">
            Flash Sale
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
