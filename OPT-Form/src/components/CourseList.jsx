import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Playlist = () => {
  const [courses, setCourses] = useState([
    {
      id: '1',
      title: "Interview preparation with JavaScript 2.0",
      price: "Rs. 9000/-",
      type: "Course",
      image: "/image1.webp",
    },
    {
      id: '2',
      title: "Aptitude - Averages, Mixture & Allegation",
      price: "Free",
      type: "Mock Test",
      image: "/image2.jpg",
    },
    {
      id: '3',
      title: "Aptitude - Simple & Compound Interest",
      price: "Free",
      type: "Mock Test",
      image: "/image3.jpg",
    },
    {
      id: '4',
      title: "Aptitude - Partnership",
      price: "Free",
      type: "Mock Test",
      image: "/image4.jpg",
    },
    {
      id: '5',
      title: "Aptitude - Time & Work",
      price: "Free",
      type: "Mock Test",
      image: "/image5.jpg",
    },
  ]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedCourses = reorder(
      courses,
      result.source.index,
      result.destination.index
    );

    setCourses(reorderedCourses);
  };

  const moveToTop = (index) => {
    if (index === 0) return;
    const reorderedCourses = reorder(courses, index, 0);
    setCourses(reorderedCourses);
  };

  const moveToBottom = (index) => {
    if (index === courses.length - 1) return;
    const reorderedCourses = reorder(courses, index, courses.length - 1);
    setCourses(reorderedCourses);
  };

  const removeCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-4xl p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Manage Bundle</h1>
        <p className="text-purple-500 mb-6">Change orders of the products based on priority</p>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="courses">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {courses.map((course, index) => (
                  <Draggable key={course.id} draggableId={course.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex items-center justify-between bg-gray-50 p-4 mb-2 rounded shadow-sm"
                      >
                        <div className="flex items-center">
                          <div className="mr-4 cursor-move">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                          </div>
                          <img src={course.image} alt={course.title} className="w-16 h-16 rounded mr-4" />
                          <div>
                            <h2 className="text-xl font-semibold">{course.title}</h2>
                            <p className="text-gray-600">{course.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center relative">
                          <span className={`px-3 py-1 rounded ${course.type === 'Course' ? 'bg-green-200 text-green-700' : 'bg-gray-200 text-gray-700'}`}>
                            {course.type}
                          </span>
                          <button
                            className="ml-4 text-gray-500 hover:text-gray-700"
                            onClick={() => toggleDropdown(index)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          {dropdownOpen === index && (
                            <div className="absolute top-full right-0 mt-2 bg-white border rounded shadow-lg z-10">
                              <ul className="py-1">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => moveToTop(index)}>Move to Top</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => moveToBottom(index)}>Move to Bottom</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => removeCourse(index)}>Remove</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <a href="https://chaicode.com" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4">
        <img src="/logo.jpg" alt="Chaicode Logo" className="w-16 h-16" />
      </a>
    </div>
  );
};

export default Playlist;
