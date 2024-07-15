
interface CardProps {
    card: {
        title: string;
        img: string;
        content?: any
        type?:string
    }
    children: React.ReactNode

}

const Card = ({ card, children }: CardProps) => {
    const cardTypeClass = card.type ? `card-${card.type}` : ''
    
    return (
        <div className={`card-container ${cardTypeClass}`}>
            <img className="card-img" src={card.img} alt="" />
            <div className="card-content-group">
                <h2 className="card-main-title">{card.title}</h2>
                <div className="card-dynamic-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card
