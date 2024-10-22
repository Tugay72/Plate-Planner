import './home_card.css'
import { Card, Button } from "antd";


const HomeCard = ({title = 'Title', description = 'Description', buttons = []}) => {
    return (
        <div className="home-card">
            <Card
                title={title}
                style={{
                    width: 320,
                    height: 560
                }}
                >
                <p>{description}</p>
                <div 
                    className={buttons.length > 2 ? 'buttons-container-grid' : 'buttons-container-center'}
                    style={buttons.length > 1 ? {paddingTop: '0'} : {paddingTop: '3rem'}}
                >
                    
                    {buttons.map((btn, index) => (
                        <Button 
                            type = 'primary' 
                            key={index} 
                            onClick={btn.onClick}
                        >
                            {btn.label}
                        </Button>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default HomeCard;