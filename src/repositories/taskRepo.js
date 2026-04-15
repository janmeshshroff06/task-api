import prisma from '../config/db.js';

export async function findAll(filters = {}) {
  return prisma.task.findMany({
    where:
      filters.completed === undefined
        ? undefined
        : { completed: filters.completed },
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
