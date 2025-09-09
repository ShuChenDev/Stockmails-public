import MainHeader from "@/components/MainHeader";
import NewsFeed from "@/components/NewsFeed";
import SubscribeForm from "@/components/SubscribeForm";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="">
            <MainHeader />
            <SubscribeForm/>
          </div>
        </div>

        <NewsFeed />
      </div>


    </>
  );
}