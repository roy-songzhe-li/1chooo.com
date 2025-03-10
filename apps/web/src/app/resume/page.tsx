import type { Metadata } from "next";
import React from "react";
import TimeLine from "@/components/resume/timeline";
import PageHeader from "@/components/page-header";
import config from "@/config";
import DownloadCV from "@/components/resume/download-cv";

const { title, resume } = config;
const {
  professionalExperiences,
  educations,
  awardLeaderships,
} = resume;

export const metadata: Metadata = {
  title: `Resume | ${title}`,
};

export default function Resume() {
  return (
    <article>
      <PageHeader header="Roy's Resume" />
      <DownloadCV />
      <TimeLine data={professionalExperiences} />
      <TimeLine data={educations} />
    </article>
  );
}
