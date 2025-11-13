import { type Inquiry, type InsertInquiry, type Antique, type InsertAntique } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getAntiques(): Promise<Antique[]>;
  createAntique(antique: InsertAntique): Promise<Antique>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<string, Inquiry>;
  private antiques: Map<string, Antique>;

  constructor() {
    this.inquiries = new Map();
    this.antiques = new Map();
    this.seedAntiques();
  }

  private seedAntiques() {
    const antiquesData: InsertAntique[] = [
      {
        name: "Louis XVI Gilded Bronze Mantle Clock",
        description: "Exquisite 18th-century French mantle clock featuring a gilded bronze case with classical female figure. The ornate rococo base showcases exceptional craftsmanship with intricate floral motifs and architectural details.",
        period: "18th Century",
        origin: "France",
        category: "Clocks",
        imageUrl: "/assets/collectt_1763055734521.jpg",
      },
      {
        name: "Imperial Three-Piece Clock Garniture",
        description: "Magnificent clock set comprising a central porcelain and gilt bronze clock flanked by matching five-light candelabra. Features hand-painted porcelain panels and exceptional gilt bronze mounts.",
        period: "19th Century",
        origin: "Austria",
        category: "Clock Sets",
        imageUrl: "/assets/collect_1763055734524.webp",
      },
      {
        name: "Grand Baroque Palace Decorative Ensemble",
        description: "Spectacular collection of monumental decorative arts including ornate gilt bronze and malachite vases, sculptural elements, and architectural fragments. Exemplifies the opulence of European palace interiors.",
        period: "18th-19th Century",
        origin: "Italy",
        category: "Decorative Arts",
        imageUrl: "/assets/photo_2025-11-13_11-51-09_1763056285027.jpg",
      },
      {
        name: "Equestrian Bronze and Gilt Mantle Clock",
        description: "Exceptional Empire period clock featuring a dramatic bronze equestrian figure atop an ornate gilt bronze and black marble base. The clock face is surrounded by exquisite neoclassical ornamentation.",
        period: "Early 19th Century",
        origin: "Germany",
        category: "Clocks",
        imageUrl: "/assets/photo_2025-11-13_11-51-05_1763056285033.jpg",
      },
      {
        name: "Neoclassical Bronze Figural Candelabrum",
        description: "Elegant bronze sculpture depicting a classical female figure with cherub, mounted on a rich marble base. The piece combines artistic merit with functional five-light candelabrum design.",
        period: "19th Century",
        origin: "England",
        category: "Sculptures",
        imageUrl: "/assets/photo_2025-11-13_11-51-01_1763056285034.jpg",
      },
      {
        name: "Collection of Imperial Bronze Figural Clocks",
        description: "Curated group of exceptional 19th-century bronze and gilt bronze clocks featuring mythological and allegorical figures. Each piece demonstrates the pinnacle of Russian bronze casting and decorative arts.",
        period: "19th Century",
        origin: "Russia",
        category: "Collections",
        imageUrl: "/assets/photo_2025-11-13_11-51-33_1763056315828.jpg",
      },
      {
        name: "Royal Porcelain and Gilt Bronze Garniture",
        description: "Refined three-piece clock set with hand-painted porcelain urns in cobalt blue featuring romantic scenes. The central clock and flanking urns display exquisite gilt bronze mounts and finials.",
        period: "Late 18th Century",
        origin: "Germany",
        category: "Clock Sets",
        imageUrl: "/assets/photo_2025-11-13_11-50-51_1763056315829.jpg",
      },
      {
        name: "Monumental Baroque Gilt Bronze Candelabra",
        description: "Imposing pair of seven-light candelabra in ornate gilt bronze with exceptional casting detail. The scrolling acanthus leaves and baroque ornamentation represent the finest Italian decorative bronze work.",
        period: "18th Century",
        origin: "Italy",
        category: "Candelabra",
        imageUrl: "/assets/stock_images/ornate_french_baroqu_9335d9d4.jpg",
      },
      {
        name: "Rococo Gilt Bronze Five-Light Candelabrum",
        description: "Spectacular candelabrum featuring asymmetrical rococo design with elaborate scrollwork and floral elements. The rich gilding and intricate chasing demonstrate exceptional 18th-century craftsmanship.",
        period: "Mid-18th Century",
        origin: "Austria",
        category: "Candelabra",
        imageUrl: "/assets/stock_images/ornate_french_baroqu_899971c7.jpg",
      },
      {
        name: "Georgian Gilt Bronze Wall Sconce Pair",
        description: "Elegant matched pair of wall-mounted candelabra with serpentine arms and delicate floral finials. The warm gilding and graceful proportions epitomize the Georgian aesthetic.",
        period: "18th Century",
        origin: "England",
        category: "Candelabra",
        imageUrl: "/assets/stock_images/ornate_french_baroqu_7912b289.jpg",
      },
      {
        name: "Royal Cobalt Blue and Gold Decorative Urn",
        description: "Museum-quality porcelain urn in royal blue with hand-painted romantic scenes and lavish gilt bronze mounts. The exceptional painting and gilding mark this as a premier example of European luxury goods.",
        period: "Late 18th Century",
        origin: "France",
        category: "Porcelain",
        imageUrl: "/assets/stock_images/elegant_18th_century_58adb694.jpg",
      },
      {
        name: "Empire Style Malachite and Gilt Bronze Vase",
        description: "Striking decorative vase combining rich malachite veneer with sculptural gilt bronze handles and base. The bold color combination and neoclassical form exemplify Empire period taste.",
        period: "Early 19th Century",
        origin: "Russia",
        category: "Vases",
        imageUrl: "/assets/stock_images/elegant_18th_century_7d70cb9b.jpg",
      },
      {
        name: "Neoclassical Patinated Bronze Figure",
        description: "Refined bronze sculpture of classical subject with rich dark patina. The anatomical precision and expressive pose demonstrate the influence of ancient Roman and Greek sculpture on decorative arts.",
        period: "19th Century",
        origin: "Italy",
        category: "Sculptures",
        imageUrl: "/assets/stock_images/french_empire_bronze_ddd9e64e.jpg",
      },
      {
        name: "Grand Tour Bronze Sculpture Group",
        description: "Important sculptural composition in fine bronze depicting mythological scene. Created for discerning collectors of the Grand Tour era, combining artistic excellence with historical significance.",
        period: "Mid-19th Century",
        origin: "England",
        category: "Sculptures",
        imageUrl: "/assets/stock_images/french_empire_bronze_54038da5.jpg",
      },
      {
        name: "Baroque Carved and Gilded Trumeau Mirror",
        description: "Monumental architectural mirror featuring hand-carved wood frame with exceptional gilding and painted canvas overdoor. The asymmetrical baroque ornament and pastoral scene exemplify European decorative excellence.",
        period: "18th Century",
        origin: "Austria",
        category: "Mirrors",
        imageUrl: "/assets/stock_images/rococo_ornate_mirror_7d85d7bb.jpg",
      },
      {
        name: "Baroque Gilt Wood Console Mirror",
        description: "Impressive carved wood mirror with elaborate gilt frame featuring scrolling acanthus, shell motifs, and architectural pediment. The dramatic scale and rich ornamentation make this ideal for grand interiors.",
        period: "Late 17th-Early 18th Century",
        origin: "Spain",
        category: "Mirrors",
        imageUrl: "/assets/stock_images/rococo_ornate_mirror_69b44905.jpg",
      },
    ];

    antiquesData.forEach((antiqueData) => {
      const id = randomUUID();
      const antique: Antique = { ...antiqueData, id };
      this.antiques.set(id, antique);
    });
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = {
      ...insertInquiry,
      phone: insertInquiry.phone ?? null,
      id,
      createdAt: new Date(),
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getAntiques(): Promise<Antique[]> {
    return Array.from(this.antiques.values());
  }

  async createAntique(insertAntique: InsertAntique): Promise<Antique> {
    const id = randomUUID();
    const antique: Antique = { ...insertAntique, id };
    this.antiques.set(id, antique);
    return antique;
  }
}

export const storage = new MemStorage();
