import { data } from "../data/data"

interface ContentProps {
  content: {
    type?: string,
    chef: string,
    rating: number
  }
}

const PopularResContent = ({ content }: ContentProps) => {
  const ratingImg: { [key: number]: string } = {
    1: data.rating[1],
    2: data.rating[2],
    3: data.rating[3],
    4: data.rating[4],
    5: data.rating[5],
  }

  return (
    <div className="popular-restaurant-content">
      <span className="chef-title">{content.chef}</span>
      <img className="rating" src={ratingImg[content.rating]} alt={`Rating: ${content.rating}`} />
    </div>
  )
}

export default PopularResContent
