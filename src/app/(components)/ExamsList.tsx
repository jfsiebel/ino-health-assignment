import { trpc } from "../(trpc)/client";
import ExamItem from "./ExamItem";

export default function ExamsList() {
  const { data: exams } = trpc.fetchMockData.useQuery({ qty: 20 });

  console.log(exams);

  return (
    <div className="table-auto border border-collapse">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-100 uppercase bg-gray-700">
          <tr>
            <th scope="col" className="px-2 py-3">
              Client Id
            </th>
            <th scope="col" className="px-2 py-3">
              Client Birthdate
            </th>
            <th scope="col" className="px-2 py-3">
              Testing date
            </th>
            <th scope="col" className="px-2 py-3">
              Gender
            </th>
            <th scope="col" className="px-2 py-3">
              Ethnicity
            </th>
            <th scope="col" className="px-2 py-3">
              Creatine
            </th>
            <th scope="col" className="px-2 py-3">
              Creatine Unit
            </th>
            <th scope="col" className="px-2 py-3">
              Chloride
            </th>
            <th scope="col" className="px-2 py-3">
              Chloride Unit
            </th>
            <th scope="col" className="px-2 py-3">
              Fasting Glucose
            </th>
            <th scope="col" className="px-2 py-3">
              Fasting Glucose Unit
            </th>
            <th scope="col" className="px-2 py-3">
              Potassium
            </th>
            <th scope="col" className="px-2 py-3">
              Potassium Unit
            </th>
            <th scope="col" className="px-2 py-3">
              Sodium
            </th>
            <th scope="col" className="px-2 py-3">
              Sodium Unit
            </th>
            <th scope="col" className="px-2 py-3">
              Total Calcium
            </th>
            <th scope="col" className="px-2 py-3">
              Total Calcium Unit
            </th>
            <th scope="col" className="px-2 py-3">
              Total Protein
            </th>
            <th scope="col" className="px-2 py-3">
              Total Protein Unit
            </th>
          </tr>
        </thead>
        <tbody>
          {exams?.map((exam) => {
            return <ExamItem key={exam.id} item={exam} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
