export default function StudentCard({ name, roll, course }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">Roll No: {roll}</p>
      <p className="text-blue-600 font-semibold">Course: {course}</p>
    </div>
  );
}
