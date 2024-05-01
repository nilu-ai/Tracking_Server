import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, default: 'Pending' }
});

const Delivery = mongoose.model('Delivery', deliverySchema);

export default Delivery;