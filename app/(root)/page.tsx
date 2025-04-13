import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import {
  getInterviewByUserId,
  getLatestInterviews,
} from "@/lib/actions/generalActions";
import { getCurrentUser } from "@/lib/actions/auth.actions";
import { promise } from "zod";

const Page = async () => {
  const user = await getCurrentUser();
  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id!, limt: 10 }),
  ]);
  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = latestInterviews?.length! > 0;
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get interview-Ready with AI-Powered practice & feedback</h2>
          <p className="text-lg">
            Practice on real interview questions and get instant feedback{" "}
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/Interview">Start an interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot-dude"
          width={400}
          height={400}
          className="max:sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <div className="flex flex-col gap-4">
              <p className="text-lg">You have no past interviews</p>
              <Link href="/interview" className="btn-primary">
                Start an interview
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <div className="flex flex-col gap-4">
              <p className="text-lg">There are no interviews available</p>
              <Link href="/Interview" className="btn-primary">
                Start an interview
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Page;
