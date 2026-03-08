import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("NCERT AI Chatbot Backend Running");
});

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({ reply: "Please ask a question." });
  }

  const text = message.toLowerCase();

  if (text.includes("dna")) {
    return res.json({
      reply:
        "DNA ka full form Deoxyribonucleic Acid hai. Yeh genetic information store karta hai.",
    });
  }

  if (text.includes("cell")) {
    return res.json({
      reply:
        "Cell living organisms ka basic structural aur functional unit hai.",
    });
  }

  if (text.includes("photosynthesis")) {
    return res.json({
      reply:
        "Photosynthesis ek process hai jisme plants sunlight ka use karke food banate hain.",
    });
  }

  return res.json({
    reply: "This is a demo AI response. Backend is working.",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
