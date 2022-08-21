import mongoose, { Schema, Document } from 'mongoose'
import { isNumberObject } from 'util/types'

export interface RatingInterface extends Document {
  stars: Number
  articleId: mongoose.Schema.Types.ObjectId
  userId: mongoose.Schema.Types.ObjectId
}

const ratingSchema: Schema<RatingInterface> = new mongoose.Schema({
    stars: {
      type: Number,
      required: true,
      min: [1, "rating too low"],
      max: [5, "rating too high"],
      default: 0
    },
    articleId: {
        type: mongoose.Types.ObjectId,
        ref: "Article",
        required: true,
    },
    userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
    }
  },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    }
)

const Rating = mongoose.model<RatingInterface>('Rating', ratingSchema)

export default Rating