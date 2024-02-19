import { formatISO } from "date-fns";

interface ExamItemProps {
  item: {
    id: string;
    client_id: string;
    date_testing: string;
    date_birthdate: string;
    gender: number;
    ethnicity: number;
    creatine: string;
    creatine_unit: string;
    chloride: string;
    chloride_unit: string;
    fasting_glucose: string;
    fasting_glucose_unit: string;
    potassium: string;
    potassium_unit: string;
    sodium: string;
    sodium_unit: string;
    total_calcium: string;
    total_calcium_unit: string;
    total_protein: string;
    total_protein_unit: string;
  };
}

export default function ExamItem({ item }: ExamItemProps) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-950">
      <td className="px-2 py-3">{item.client_id}</td>
      <td className="px-2 py-3">{formatISO(item.date_birthdate, { representation: "date" })}</td>
      <td className="px-2 py-3">{formatISO(item.date_testing, { representation: "date" })}</td>
      <td className="px-2 py-3">{item.gender}</td>
      <td className="px-2 py-3">{item.ethnicity}</td>
      <td className="px-2 py-3">{item.creatine}</td>
      <td className="px-2 py-3">{item.creatine_unit}</td>
      <td className="px-2 py-3">{item.chloride}</td>
      <td className="px-2 py-3">{item.chloride_unit}</td>
      <td className="px-2 py-3">{item.fasting_glucose}</td>
      <td className="px-2 py-3">{item.fasting_glucose_unit}</td>
      <td className="px-2 py-3">{item.potassium}</td>
      <td className="px-2 py-3">{item.potassium_unit}</td>
      <td className="px-2 py-3">{item.sodium}</td>
      <td className="px-2 py-3">{item.sodium_unit}</td>
      <td className="px-2 py-3">{item.total_calcium}</td>
      <td className="px-2 py-3">{item.total_calcium_unit}</td>
      <td className="px-2 py-3">{item.total_protein}</td>
      <td className="px-2 py-3">{item.total_protein_unit}</td>
    </tr>
  );
}
