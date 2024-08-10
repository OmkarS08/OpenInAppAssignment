import React, { useState } from 'react';

const TableBody = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState({});

  
  const handleSelectChange = (id, event) => {
    const value = event.target.value;

    setSelectedTags((prevSelectedTags) => {
      const currentTags = prevSelectedTags[id] || [];
      // Add the new tag if it's not already selected
      const updatedTags = currentTags.includes(value) ? currentTags : [...currentTags, value];

      return {
        ...prevSelectedTags,
        [id]: updatedTags,
      };
    });
  };

  const darkMode = localStorage.getItem('DarkMode');

  return (
    <>
      {data.map((ele) => (
        <tr key={ele.id}>
          <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-grey bg-grey-200' : 'text-grey bg-white'}`}>{ele.id}</td>
          <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-grey bg-grey-200' : 'text-grey bg-white'}`}><a href={ele.links}>{ele.links}</a></td>
          <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-grey bg-grey-200' : 'text-grey bg-white'}`}>{ele.prefix}</td>
          <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-grey bg-grey-200' : 'text-grey bg-white'}`}>
            <select
              name="tags"
              id="tags"
              defaultValue="Select Tag"
              className='bg-gray text-gray-800'
              onChange={(event) => handleSelectChange(ele.id, event)}
            >
              <option value="Select Tag" disabled>Select Tag</option>
              {ele["select tags"].split(', ').map((tag, index) => (
                <option key={index} value={tag}>{tag}</option>
              ))}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {(selectedTags[ele.id] || []).map((tag, index) => (
              <span key={index} className="inline-block bg-[#605BFF] text-white text-xs px-2 py-1 rounded-full mr-1">
                {tag}
              </span>
            ))}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
