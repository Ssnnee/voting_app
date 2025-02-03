import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardFooter } from "./card";
export function CardSelectSkeleton() {
  return (
    <>
      <div className="space-y-4">
        <Card className="md:w-[280px] sm:w-[250px]">
          <CardContent className="py-3">
            <Skeleton className="p-3 h-20" />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-20" />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
