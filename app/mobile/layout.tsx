import BackgroundImage from "@/icons/backgroundImage";
import MobileFooter from "./_components/mobileFooter";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="relative overflow-hidden">
        <BackgroundImage className="absolute -z-2" />
        <div className="relative h-screen">
          <div className="absolute top-0 -z-1 h-1/2 w-full bg-[linear-gradient(180deg,white,rgba(30,31,34,0))]" />
          <div className="absolute bottom-0 -z-1 h-1/2 w-full bg-[linear-gradient(0deg,white,rgba(30,31,34,0))]" />
          <div className="flex max-h-screen w-full justify-center overflow-y-scroll">
            <div className="border-border-color h-fit w-full border-x bg-white sm:max-w-100 sm:min-w-100">
              {children}
              <MobileFooter />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
