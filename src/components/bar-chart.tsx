"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"
const chartData = [
  { name: "Jane Doe", desktop: 186, mobile: 80 },
  { name: "Jasmine Toe", desktop: 305, mobile: 200 },
  { name: "Elanga Richnelle", desktop: 237, mobile: 120 },
  { name: "April Oda" , desktop: 73, mobile: 190 },
  { name: "Charity Moleba", desktop: 209, mobile: 130 },
  { name: "Jeanne Does", desktop: 214, mobile: 140 },
  { name: "Elanga Richnelle", desktop: 237, mobile: 120 },
  { name: "Elanga Richnelle", desktop: 237, mobile: 120 },
  { name: "April Oda" , desktop: 73, mobile: 190 },
  { name: "Charity Moleba", desktop: 209, mobile: 130 },
  { name: "Jeanne Does", desktop: 214, mobile: 140 },
  { name: "April Oda" , desktop: 73, mobile: 190 },
  { name: "Charity Moleba", desktop: 209, mobile: 130 },
  { name: "Jeanne Does", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Votes",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export function BarChartComponent() {
  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>Miss ESGAE 2025</CardTitle>
        <CardDescription>Session de Mars 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value:any) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Jasmine <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Lol
        </div>
      </CardFooter>
    </Card>
  )
}

