import { Express } from "express";

export async function registerRoutes(app: Express) {

  // Health check
  app.get("/", (req, res) => {
    res.send("NCERT AI Chatbot Backend Running");
  });

  // Chat API
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;

      if (!message) {
        return res.json({
          reply: "Please ask a question from NCERT."
        });
      }

      const text = message.toLowerCase();

      // Demo knowledge responses
      if (text.includes("dna")) {
        return res.json({
          reply:
            "DNA ka full form Deoxyribonucleic Acid hai. Yeh genetic information store karta hai aur heredity ke liye responsible hota hai."
        });
      }

      if (text.includes("cell")) {
        return res.json({
          reply:
            "Cell living organisms ka basic structural aur functional unit hai. Sabhi living organisms cells se bane hote hain."
        });
      }

      if (text.includes("photosynthesis")) {
        return res.json({
          reply:
            "Photosynthesis ek process hai jisme plants sunlight, carbon dioxide aur water ka use karke food banate hain aur oxygen release karte hain."
        });
      }

      if (text.includes("atom")) {
        return res.json({
          reply:
            "Atom kisi bhi element ka smallest unit hota hai jo chemical properties retain karta hai."
        });
      }

      if (text.includes("gravity")) {
        return res.json({
          reply:
            "Gravity ek force hai jo objects ko earth ki taraf attract karta hai. Isko Isaac Newton ne explain kiya tha."
        });
      }

      // Default response
      return res.json({
        reply:
          "Great question! This is a demo AI response. The NCERT AI chatbot backend is running successfully."
      });

    } catch (error) {
      console.error(error);

      res.json({
        reply: "Server error but backend is running."
      });
    }
  });
}
