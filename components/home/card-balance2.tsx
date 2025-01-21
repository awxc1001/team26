import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import c001 from "../../c001.json";

export const CardBalance2 = () => {
   // Extract the overall rating as the value for the gauge
   const overallRating = c001.social.overall_rating;

   // Map the rating to a numeric value
   const ratingValue = overallRating === "High" ? 100 : overallRating === "Good" ? 75 : overallRating === "Moderate" ? 50 : 25;
 
   // Prepare data for the gauge chart
   const data = [
     { name: "Rating", value: ratingValue },
     { name: "Remaining", value: 100 - ratingValue },
   ];
 
   const COLORS = ["#00C49F", "#E0E0E0"];

   return (
      <Card
         css={{
            mw: '375px',
            bg: 'yellow',
            borderRadius: '$xl',
            px: '$6',
         }}
      ><Text h3 css={{ textAlign: "center" }}>
      Social Overall Rating
    </Text>
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <text
        x={150}
        y={150}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: "16px", fontWeight: "bold" }}
      >
        {`${overallRating}`}
      </text>
    </PieChart>
        
         
      </Card>
   );
};
