import EmpCard from "./reUsableCmponent/EmpCard";

function ContentArea() {
  const employeeData = {
    name: 'John Doe',
    avatar: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/02/Avatar__The_Last_Airbender_n_S1_00_13_15_10RC.jpgAvatar__The_Last_Airbender_n_S1_00_13_15_10RC-H-2024.jpg?w=1296&h=730&crop=1&resize=681%2C383',
    designation: 'Software Engineer',
    department: 'Engineering',
  };
  return (
    <>
      <div className="flex rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-700">Employees</h2>
        <div className="ml-auto flex items-center space-x-4">
          {" "}
          {/* Parent div for span elements */}
          <span className="bg-[#0EB599] h-10 w-10 rounded-md flex items-center justify-center text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 0.530762C1.61667 0.554377 1.08917 0.779562 0.6675 1.20632C0.245833 1.63307 0.0233333 2.16694 0 2.80792V14.1937C0.0233333 14.833 0.245833 15.3668 0.6675 15.7953C1.08917 16.222 1.61667 16.4472 2.25 16.4708H15.75C16.3833 16.4472 16.9108 16.222 17.3325 15.7953C17.7542 15.3668 17.9767 14.833 18 14.1937V2.80792C17.9767 2.16694 17.7542 1.63307 17.3325 1.20632C16.9108 0.779562 16.3833 0.554377 15.75 0.530762H2.25ZM5.345 2.80792V5.08507H2.25V2.80792H5.345ZM7.3125 2.80792H10.4075V5.08507H7.3125V2.80792ZM15.75 2.80792V5.08507H12.6575V2.80792H15.75ZM2.25 7.36222H5.345V9.63938H2.25V7.36222ZM10.4075 7.36222V9.63938H7.3125V7.36222H10.4075ZM12.6575 7.36222H15.75V9.63938H12.6575V7.36222ZM5.345 11.9165V14.1937H2.25V11.9165H5.345ZM7.3125 11.9165H10.4075V14.1937H7.3125V11.9165ZM15.75 11.9165V14.1937H12.6575V11.9165H15.75Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="bg-white h-10 w-10 rounded-md flex items-center justify-center text-[#4D5154]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.890625 1.80792C0.890625 1.47562 0.996458 1.20236 1.20812 0.988144C1.41812 0.775609 1.68729 0.669342 2.01562 0.669342H15.5156C15.844 0.669342 16.1131 0.775609 16.3231 0.988144C16.5348 1.20236 16.6406 1.47562 16.6406 1.80792C16.6406 2.14021 16.5348 2.41263 16.3231 2.62516C16.1131 2.83939 15.844 2.9465 15.5156 2.9465H2.01562C1.68729 2.9465 1.41812 2.83939 1.20812 2.62516C0.996458 2.41263 0.890625 2.14021 0.890625 1.80792ZM0.890625 7.5008C0.890625 7.16851 0.996458 6.89525 1.20812 6.68103C1.41812 6.46849 1.68729 6.36223 2.01562 6.36223H15.5156C15.844 6.36223 16.1131 6.46849 16.3231 6.68103C16.5348 6.89525 16.6406 7.16851 16.6406 7.5008C16.6406 7.8331 16.5348 8.10551 16.3231 8.31805C16.1131 8.53227 15.844 8.63938 15.5156 8.63938H2.01562C1.68729 8.63938 1.41812 8.53227 1.20812 8.31805C0.996458 8.10551 0.890625 7.8331 0.890625 7.5008ZM16.6406 13.1937C16.6406 13.526 16.5348 13.7984 16.3231 14.0109C16.1131 14.2252 15.844 14.3323 15.5156 14.3323H2.01562C1.68729 14.3323 1.41812 14.2252 1.20812 14.0109C0.996458 13.7984 0.890625 13.526 0.890625 13.1937C0.890625 12.8614 0.996458 12.5881 1.20812 12.3739C1.41812 12.1614 1.68729 12.0551 2.01562 12.0551H15.5156C15.844 12.0551 16.1131 12.1614 16.3231 12.3739C16.5348 12.5881 16.6406 12.8614 16.6406 13.1937Z"
                fill="#4D5154"
              />
            </svg>
          </span>
          <span className="flex items-center">
            <span className="bg-[#0EB599] text-white rounded-full p-3">
              + Add Employees
            </span>
          </span>
        </div>
      </div>

      <div className="flex rounded-lg p-4 pt-0">
        <select
          className="p-2 lg:w-[300px] w-full appearance-none bg-white border border-gray-500 focus:ring-indigo-500 focus:border-indigo-500 pr-10 bg-no-repeat bg-right"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%23000000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M12 5l-5 5-5-5' /%3E%3C/svg%3E")`,
            backgroundSize: "24px 24px", // Set the size of the background image
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center", // Adjust the position to give some space from the right edge
            paddingRight: "40px", // Add padding to the right to ensure text doesn't overlap the icon
          }}
        >
          <option
            value=""
            disabled
            selected
            className="text-gray-500 font-bold"
          >
            Select Designation
          </option>
          <option value="Manager">Web Designer</option>
          <option value="Developer">Web Developer</option>
          <option value="Designer">FrontEnd Developer</option>
          <option value="Designer">BackEnd Developer</option>
        </select>

        <div className="ml-auto flex items-center space-x-4">
          {" "}
          {/* Parent div for span elements */}
          <span className=" flex items-center justify-center">
            <input
              className="p-2 lg:w-[250px] w-full appearance-none bg-white border border-gray-500"
              placeholder="Empoyee Name, Id"
            />
          </span>
          <span className="flex items-center">
            <span className="bg-[#0EB599] text-white p-2 lg:w-[260px] text-center">
              Search
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
      <div className="w-full sm:w-1/2 md:w-1/4"> {/* Adjust widths for responsive layout */}
        <EmpCard employee={employeeData} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4">
        <EmpCard employee={employeeData} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4">
        <EmpCard employee={employeeData} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4">
        <EmpCard employee={employeeData} />
      </div>

    </div>
    </>
  );
}

export default ContentArea;
