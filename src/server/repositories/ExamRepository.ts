import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";

export class ExamRepository {
  async create(data: Prisma.ExamCreateInput) {
    const examDTO = {
      ...data,
      date_testing: new Date(data.date_testing).toISOString(),
      date_birthdate: new Date(data.date_birthdate).toISOString(),
    };

    await prisma.exam.create({
      data: examDTO,
    });
  }

  async find(qty: number) {
    const exams = await prisma.exam.findMany({
      take: qty,
      orderBy: {
        id: "desc",
      },
    });

    return { exams };
  }
}
