'use client';
import React from 'react';
import Block from '../layout/block';

type searchProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};
export default function Search({ searchText, setSearchText }: searchProps) {
  return (
    <Block>
      <input
        type="text"
        placeholder="جستجو..."
        className="border border-gray-300 rounded-md p-2 w-full"
        value={searchText}
        onChange={event => {
          setSearchText(event.target.value);
        }}
      />
    </Block>
  );
}
