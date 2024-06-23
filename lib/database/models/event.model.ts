import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string; // Required
  description?: string; // Optional
  location?: string; // Optional
  createdAt?: Date; // Default value: Date.now
  imageUrl: string; // Required
  startDateTime?: Date; // Default value: Date.now
  endDateTime?: Date; // Default value: Date.now
  price?: string; // Optional
  isFree?: boolean; // Default value: false
  url?: string; // Optional
  category?: { _id: string; name: string }; // Optional, reference to Category
  organizer?: { _id: string; firstName: string; LastName: string }; // Optional, reference to User
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  craetedAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  EndDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
