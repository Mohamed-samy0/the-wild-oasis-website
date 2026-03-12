import Cabin from "@/app/_components/Cabin";
import Reversation from "@/app/_components/Reversation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins, getCabinReviews } from "@/app/_lib/data-service";
import ReviewList from "@/app/_components/ReviewList";
import { Suspense } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import SubmitReviewForm from "@/app/_components/SubmitReviewForm";
import { auth } from "@/app/_lib/auth";
import LoginMessage from "@/app/_components/LoginMessage";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  return { title: `Cabin ${cabin.name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: cabin.id.toString() }));
  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const session = await auth();
  const currentGuestId = session?.user?.guestId;

  const [cabin, reviews] = await Promise.all([
    getCabin(cabinId),
    getCabinReviews(cabinId),
  ]);

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1)
      : null;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div className="mb-24">
        <div className="flex flex-col items-center justify-center gap-4 mb-10">
          {averageRating && (
            <div className="flex items-center gap-2 bg-primary-900 px-4 py-2 rounded-full border border-primary-800 text-yellow-500">
              <StarIcon className="h-6 w-6" />
              <span className="text-xl font-bold">{averageRating}</span>
              <span className="text-primary-400 text-sm">({reviews.length} reviews)</span>
            </div>
          )}
          <h2 className="text-5xl font-semibold text-center text-accent-400">
            Reserve {cabin.name} today. Pay on arrival.
          </h2>
        </div>

        <Suspense fallback={<Spinner />}>
          <Reversation cabin={cabin} />
        </Suspense>
      </div>
      <div className="mt-20 border-t border-primary-800 pt-12">
        <ReviewList reviews={reviews} currentGuestId={currentGuestId} />

        <div className="mt-16 bg-primary-950 p-8 rounded-lg border border-primary-900">
          <h3 className="text-3xl font-semibold mb-8 text-accent-400 text-center">
            How was your stay?
          </h3>
          {session?.user ? (
            <SubmitReviewForm cabinId={cabinId} />
          ) : (
            <div className="text-center">
              <LoginMessage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
