import './home_card.css'
import { Card, Button } from "antd";


const HomeCard = ({title = 'Title', description = 'Description', buttons = []}) => {
    return (
        <div className="home-card">
            <Card
                title={title}
                style={{
                    width: 320,
                    height: 480
                }}
                >
                <p>{description}</p>
                <div className="buttons-container">
                    {buttons.map((btn, index) => (
                        <Button key={index} onClick={btn.onClick}>
                            {btn.label}
                        </Button>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default HomeCard;