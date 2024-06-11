import React from 'react';
import { Button } from './ui/MovingBorder';
import { workExperience } from '@/data';

const Experience = () => {
    // Slice the first two items from the workExperience array
    const twoCards = workExperience.slice(0, 2);
    const remainingCards = workExperience.slice(2);

    return (
        <div style={{ marginBottom: 100 }}>
            <h1>Work Experience</h1>
            

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {twoCards.map((card, index) => (
                    <Button key={index} style={{ width: '48%', marginBottom: 20 }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: 10, borderRadius: 8 }}>
                            <img src={card.thumbnail} alt={card.title} style={{ width: 100, height: 100, borderRadius: 8, marginRight: 10 }} />
                            <div style={{ flex: 1 }}>
                                <h2>{card.title}</h2>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {remainingCards.map((card, index) => (
                    <Button key={index} style={{ width: '48%', marginBottom: 20 }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: 10, borderRadius: 8, }}>
                            <img src={card.thumbnail} alt={card.title} style={{ width: 100, height: 100, borderRadius: 8, marginRight: 10 }} />
                            <div style={{ flex: 1 }}>
                                <h2>{card.title}</h2>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
