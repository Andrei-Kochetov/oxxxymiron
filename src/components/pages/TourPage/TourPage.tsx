import ScrollAnimation from "react-animate-on-scroll";
import useTourItems from "../../../hooks/useTourItems"
import Spinner from "../../Spinner/Spinner";
import TourItem from "../../Tour/TourItem";
import PageTitle from "../PageTitle/PageTitle";

const TourPage = () => {
  const { tourItems, isLoading } = useTourItems();

  return (
    <div className="container">
      <PageTitle> Все концерты</PageTitle>
       <ul>
        {isLoading ? (
          <Spinner />
        ) : (
          tourItems
            .map((item, i) => (
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={i ? i * 100 : 100}
                animateOnce
                key={item.sys.id}
              >
                <TourItem {...item} />
              </ScrollAnimation>
            ))
        )}
      </ul>
    </div>
  )
}

export default TourPage