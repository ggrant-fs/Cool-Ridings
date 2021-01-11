import Layout from '../../components/shared/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import './Home.css'
const Home = (props) => {
  return (
    <div>
      <Layout user={props.user}>
        <Carousel />
        <div>
          <p>
            orem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque nisl eros,
            pulvinar facilisis
          </p>
        </div>
        <button>submit</button><hr />
        <div className="container">
          <div id='block-one' className='description'>
            <h2>What we do</h2><hr />
            <div className='text'>
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque nisl eros,
              pulvinar facilisis
            </div>
          </div>
          <div id='block-two' className='description'>
            <h2>The Experience</h2><hr />
            <div className='text'>
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque nisl eros,
              pulvinar facilisis
            </div>
          </div>
          <div id='block-three' className='description'>
            <h2>The Elite</h2><hr />
            <div className='text'>
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque nisl eros,
              pulvinar facilisis
            </div>
          </div>
          <div id='block-four' className='description'>
            <h2>Dominate</h2><hr />
            <div className='text'>
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque nisl eros,
              pulvinar facilisis
            </div>
          </div>
        </div>

        <div className="container-two">
          <div id='container-two-pic1'>
            <h1>The ultimate craftsmenship meet the greatest quality to create perfection</h1>
            <button>Explore our bikes</button>
          </div>
        //promotional New Years comment
          <div id='container-two-pic2'>
            <h1>Start 2021 on the right foot with our New Year's sales and special offers</h1>
            <button>Check out special offers</button>
          </div>
        </div>

        //icons that represent bikes and gear
      </Layout>

    </div>
  )
}

export default Home