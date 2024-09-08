import { request, response } from "express";
import { prismaClient } from '@prisma/client'

const prisma = new prismaClient();

export const getDashboardMetrics = async (
    req: Request,
    res: Response
)