import React from 'react';

function EmpCard({ employee }) {
  return (
    <>
    <div className="m-4 bg-white shadow-md rounded-[40px] rounded-tr-none p-4 sm:p-6 md:p-4 w-[227px] h-[200px]"> {/* Width set to 250px */}
    <h2 align='right' className='mt-[-8px] font-extrabold'>...</h2>
      <div className="text-center items-center sm:flex-col md:flex-row">
        <img align="center"
          src={employee.avatar}
          alt={employee.name}
          className="w-20 h-20 rounded-full mb-4 sm:mb-4 md:ml-14"
        />
          <h2 className="text-lg font-bold">{employee.name}</h2>
          <p className="text-gray-700">{employee.designation}</p>

      </div>

    </div>
    </>
  );
}
export default EmpCard;