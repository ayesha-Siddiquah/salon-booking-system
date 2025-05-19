import mongoose from 'mongoose';

const hairServiceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    unique: true, // Prevent duplicate services
    index: true 
  },
  Price: {     ///////////////////////Keep it to Price itslef dont know actually it should be price. 
    type: Number, // Changed from String to Number
    required: true,
    min: [0, "Price cannot be negative"]
  },
  Time: { // Changed from 'time' for clarity
    type: Number, // In minutes
    required: true,
    min: [15, "Minimum duration is 15 minutes"]
  }
});
export default mongoose.model("Hairservice",hairServiceSchema);// goes and find Hairservice document from MongoDB and it pluralises by default 




