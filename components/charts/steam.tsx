import React from 'react';
import { Box } from '../styles/box';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  LineChart,
  Line,
  PolarRadiusAxis,
  Legend
} from 'recharts';
import clientData from '../../client.json'; // Import client.json

// Prepare data for the charts
const financialOverview = [
  { name: 'Revenue', value: clientData.financial_data.annual_revenue },
  { name: 'Net Profit', value: clientData.financial_data.net_profit },
  { name: 'Assets', value: clientData.financial_data.total_assets },
  { name: 'Liabilities', value: clientData.financial_data.total_liabilities },
  { name: 'Equity', value: clientData.financial_data.equity },
];

const cashFlowData = [
  { name: 'Operating', value: clientData.financial_data.cash_flow.operating_activities },
  { name: 'Investing', value: clientData.financial_data.cash_flow.investing_activities },
  { name: 'Financing', value: clientData.financial_data.cash_flow.financing_activities },
];
const cashFlowColors = ['#0070f3', '#ff4081', '#36a2eb'];

const financialRatios = [
  { metric: 'Current Ratio', value: clientData.financial_data.financial_ratios.current_ratio },
  { metric: 'Debt-to-Equity', value: clientData.financial_data.financial_ratios.debt_to_equity_ratio },
  { metric: 'Return on Equity', value: clientData.financial_data.financial_ratios.return_on_equity },
  { metric: 'Gross Margin', value: clientData.financial_data.financial_ratios.gross_margin },
  { metric: 'Net Profit Margin', value: clientData.financial_data.financial_ratios.net_profit_margin },
];

const callReportTimeline = clientData.call_report.map((report, index) => ({
  name: report.date,
  value: index + 1,
}));

export const Steam = () => {
  return (
    <Box
      css={{
        width: '100%',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* First Row: Bar Chart and Pie Chart */}
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Bar Chart: Financial Overview */}
        <Box css={{ flex: 1 }}>
          <h3>Financial Overview ($)</h3>
          <BarChart
            width={500}
            height={300}
            data={financialOverview}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0070f3" />
          </BarChart>
        </Box>

        <Box css={{ flex: 1 }}>
         <h3>Cash Flow Breakdown</h3>
            <BarChart
            width={400}
            height={300}
            data={cashFlowData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8">
               {cashFlowData.map((_, index) => (
               <Cell key={`cell-${index}`} fill={cashFlowColors[index % cashFlowColors.length]} />
               ))}
            </Bar>
         </BarChart>
         </Box>


      </Box>

      {/* Second Row: Radar Chart and Line Chart */}
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Radar Chart: Financial Ratios */}
        <Box css={{ flex: 1 }}>
          <h3>Financial Ratios</h3>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            width={500}
            height={300}
            data={financialRatios}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" />
            <Radar dataKey="value" stroke="#0070f3" fill="#0070f3" fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </Box>
      </Box>
    </Box>
  );
};
