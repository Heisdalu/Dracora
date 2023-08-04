import EarningStats from "@/components/HomePage/EarningStats";
import HomePageContainer from "@/components/HomePage/HomePageContainer";

export default function Home() {
  // const toggleActive = ()
  // console.log('homeeee');

  return (
    <div className="border-1 border-red md:flex">
      <HomePageContainer>
        <main>
      
            <EarningStats />
          {/* </section> */}
        </main>
      </HomePageContainer>
    </div>
  );
}
