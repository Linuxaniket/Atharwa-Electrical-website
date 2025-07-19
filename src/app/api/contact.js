import clientPromise from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db(); // your database name
      
      const { name, email, phone, message } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }
      
      // Insert into MongoDB
      const result = await db.collection('contacts').insertOne({
        name,
        email,
        phone: phone || '',
        message,
        createdAt: new Date(),
      });
      
      return res.status(201).json({ success: true, id: result.insertedId });
    } catch (error) {
      console.error('Error saving contact:', error);
      return res.status(500).json({ error: 'Error saving contact information' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}