
import AdvancedFeaturesSection from './components/AdvancedFeaturesSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialSection from './components/TestimonialSection'
import FAQSection from './components/FAQSection'
import StartFreeTrial from './components/StartFreeTrial'
import Navigation from './components/Navigation'
import AnalyticsLanding from './components/AnalyticsLanding'
import LatestBlogPosts from './components/LatestBlogPosts'
import CompanyLogos from './components/CompanyLogos'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen ">
      <Navigation/>
      <AnalyticsLanding />
      <CompanyLogos />
      <FeaturesSection />
      <TestimonialSection />
      <AdvancedFeaturesSection />
      <FAQSection />
      <LatestBlogPosts />
      <StartFreeTrial /> 
      <Footer/>
    </div>
  )
}

export default App