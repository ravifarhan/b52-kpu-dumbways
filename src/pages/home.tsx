import Navbar from '../component/Navbar'
import Content from '../component/Content'
import Article from '../component/Article'
import Footer from '../component/Footer'
import SideContent from '../component/SideContent'

function Home() {
    return (
        <>
            <Navbar/>
            <Article/>
            <Content/>
            <SideContent/>
            <Footer />
        </>
    )
}

export default Home