"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import { deleteReview } from "../_lib/action";

function DeleteReviewButton({ reviewId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this review?"))
      startTransition(() => deleteReview(reviewId));
  }

  return (
    <button
      onClick={handleDelete}
      className="text-primary-600 hover:text-red-600 transition-colors"
      disabled={isPending}
    >
      {!isPending ? (
        <TrashIcon className="h-5 w-5" />
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReviewButton;
