import DepartmentsSection from "./_components/DepartmentsSection"
import ExploreOurServices from "./_components/ExploreOurServices"
import HeroSection from "./_components/HeroSection"
import TheBestOffers from "./_components/TheBestOffers"
// import Oursuccesspartners from "./_components/Oursuccesspartners"

function MedicalPage() {
  return (
    <div>
      <HeroSection />
      <DepartmentsSection />
      {/* <Oursuccesspartners /> */}
      <TheBestOffers />
      <ExploreOurServices />
    </div>
  )
}

export default MedicalPage
