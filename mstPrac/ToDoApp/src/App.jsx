import TodoApp from "./components/TodoApp";
import StudentCard from "./components/StudentCard";

export default function App() {
  const students = [
    { name: "Supriya", roll: "13291", course: "Computer Science" },
    { name: "Ramesh", roll: "13292", course: "Mechanical Engineering" },
    { name: "Piyush", roll: "13293", course: "Electronics" },
    { name: "Varun", roll: "13294", course: "Civil Engineering" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Todo App */}
      <TodoApp />
zs
      {/* Student Cards */}
      <h1 className="text-2xl font-bold mt-10 mb-4 text-center">
        🎓 Student List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            roll={student.roll}
            course={student.course}
          />
        ))}
      </div>
    </div>
  );
}
