import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const ExamplePage = () => {
    return (
        <div className="page">
            {/* Regular content */}
            <h1>Welcome to my page</h1>

            {/* Animated section with custom height */}
            <AnimatedBackground style={{ height: '400px' }}>
                <h2>Section with Animation</h2>
                <p>This animated background is contained within this section.</p>
            </AnimatedBackground>

            {/* More regular content */}
            <div className="normal-section">
                <h2>Regular Section</h2>
                <p>This section has no animation.</p>
            </div>

            {/* Another animated section with different dimensions */}
            <AnimatedBackground
                className="custom-section"
                style={{
                    height: '300px',
                    maxWidth: '600px',
                    margin: '20px auto'
                }}
            >
                <h2>Another Animated Section</h2>
                <p>This one has custom dimensions and margin.</p>
            </AnimatedBackground>

            <style jsx>{`
                .page {
                    padding: 20px;
                }
                
                .normal-section {
                    padding: 20px;
                    background: #f0f0f0;
                    margin: 20px 0;
                }
            `}</style>
        </div>
    );
};

export default ExamplePage; 