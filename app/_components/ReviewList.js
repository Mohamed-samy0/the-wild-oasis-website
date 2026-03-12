import { StarIcon } from "@heroicons/react/24/solid";
import DeleteReviewButton from "./DeleteReviewButton";

function ReviewList({ reviews, currentGuestId }) {
  if (reviews.length === 0)
    return (
      <p className="text-lg text-primary-300">
        No reviews yet. Be the first to stay here!
      </p>
    );
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-8 text-accent-400">
        Guest Reviews ({reviews.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-primary-900 p-6 rounded-lg border border-primary-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="font-bold text-primary-100">
                  {review.guests.fullName}
                </span>
                {Number(currentGuestId) === Number(review.guestId) && (
                  <DeleteReviewButton reviewId={review.id} />
                )}
              </div>

              <div className="flex text-yellow-500 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <p className="text-primary-300 italic">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewList;
