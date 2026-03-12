"use client";

import { createReview } from "../_lib/action";
import SubmitButton from "./SubmitButton";

function SubmitReviewForm({ cabinId }) {
  return (
    <form
      action={createReview}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col rounded-lg mt-10"
    >
      <input type="hidden" name="cabinId" value={cabinId} />

      <div className="space-y-2">
        <label htmlFor="rating">How many stars would you give?</label>
        <select
          name="rating"
          id="rating"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          required
        >
          <option value="">Select rating...</option>
          <option value="5">5 Stars - Excellent</option>
          <option value="4">4 Stars - Very Good</option>
          <option value="3">3 Stars - Good</option>
          <option value="2">2 Stars - Poor</option>
          <option value="1">1 Star - Terrible</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="text">Your feedback</label>
        <textarea
          name="text"
          id="text"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          placeholder="Share your experience..."
          rows={3}
          required
        />
      </div>

      <div className="flex justify-end items-center">
        <SubmitButton pendingLabel="Posting...">Post Review</SubmitButton>
      </div>
    </form>
  );
}

export default SubmitReviewForm;
