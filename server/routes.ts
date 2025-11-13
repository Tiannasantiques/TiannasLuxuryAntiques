import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/antiques", async (_req, res) => {
    try {
      const antiques = await storage.getAntiques();
      res.json(antiques);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve antiques collection",
      });
    }
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Inquiry received successfully. We will contact you within 24 hours.",
        inquiry,
      });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({
          success: false,
          message: "Invalid inquiry data",
          errors: error,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to submit inquiry. Please try again.",
        });
      }
    }
  });

  app.get("/api/inquiries", async (_req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve inquiries",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
