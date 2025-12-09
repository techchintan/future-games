import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";

const EarnCoin = () => {
  return (
    <div className="p-4">
      <Card className="gap-2 border p-4 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <Image
            src="/coin-earn.png"
            alt="earn-coin"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-semibold">0</span>
        </CardHeader>
        <CardContent className="p-0">
          <Button className="bg-btn-bg tracking-[1px] h-11 cursor-pointer hover:bg-btn-bg w-full rounded-full">
            <Image src="/coin.png" alt="coin" width={24} height={24} />
            <span className="text-white uppercase">Earn free coins</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EarnCoin;
