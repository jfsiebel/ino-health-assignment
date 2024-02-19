import { ExamRepository } from "./server/repositories/ExamRepository";

export async function register() {
  console.log("Fetching mock data from endpoint");
  const mockData = await fetch("https://mockapi-furw4tenlq-ez.a.run.app/data");
  const response = await mockData.json();

  const repository = new ExamRepository();
  for (const exam of response) {
    await repository.create(exam);
  }
}
