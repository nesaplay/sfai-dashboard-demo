"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";
import { DimensionsData, HeatmapData, OverviewData, QuestionsData } from "@/app/types";
import Overview from "@/components/overview";
import QuestionsTable from "@/components/questions-table";
import Heatmap from "@/components/heatmap";
import Dimensions from "@/components/dimensions";

// Declare the ChatWidget type on the window object
declare global {
  interface Window {
    ChatWidget?: {
      sendData: (data: any) => void;
    };
  }
}

export default function Dashboard() {
  const [overviewData, setOverviewData] = useState<OverviewData | null>(null);
  const [dimensionsData, setDimensionsData] = useState<DimensionsData | null>(null);
  const [heatmapData, setHeatmapData] = useState<HeatmapData | null>(null);
  const [questionsData, setQuestionsData] = useState<QuestionsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const overviewRes = await fetch("/data/Overview.json");
      const overview = await overviewRes.json();
      setOverviewData(overview);

      const dimensionsRes = await fetch("/data/Dimensions.json");
      const dimensions = await dimensionsRes.json();
      setDimensionsData(dimensions);

      const heatmapRes = await fetch("/data/Heatmap.json");
      const heatmap = await heatmapRes.json();
      setHeatmapData(heatmap);

      const questionsRes = await fetch("/data/Questions.json");
      const questions = await questionsRes.json();
      setQuestionsData(questions);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (window.ChatWidget && overviewData && dimensionsData && heatmapData && questionsData) {
      console.log("ChatWidget is available");
      window.ChatWidget.sendData({
        Overview: overviewData,
        Dimensions: dimensionsData,
        Heatmap: heatmapData,
        Questions: questionsData,
      });
    }
  }, [overviewData, dimensionsData, heatmapData, questionsData]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Region: EMEA</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Welcome to OrgView</span>
            <button className="text-sm text-blue-600">Log out</button>
          </div>
        </div>

        {overviewData && (
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Overview</h3>
            <Overview data={overviewData} />
          </Card>
        )}

        {dimensionsData && (
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Dimensions</h3>
            <Dimensions data={dimensionsData} />
          </Card>
        )}

        {heatmapData && (
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Heatmap</h3>
            <Heatmap data={heatmapData} />
          </Card>
        )}

        {questionsData && (
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Questions</h3>
            <QuestionsTable data={questionsData} />
          </Card>
        )}
      </div>
    </div>
  );
}
