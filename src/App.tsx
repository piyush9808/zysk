
import AdvancedFeaturesSection from './components/AdvancedFeaturesSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialSection from './components/TestimonialSection'
import FAQSection from './components/FAQSection'
import StartFreeTrial from './components/StartFreeTrial'
import Navigation from './components/Navigation'
import AnalyticsLanding from './components/AnalyticsLanding'
import LatestBlogPosts from './components/LatestBlogPosts'
import CompanyLogos from './components/CompanyLogos'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation/>
      <AnalyticsLanding />
      <CompanyLogos />
      <FeaturesSection />
      <TestimonialSection />
      <AdvancedFeaturesSection />
      <FAQSection />
      <LatestBlogPosts />
      <StartFreeTrial /> 
    </div>
  )
}

export default App