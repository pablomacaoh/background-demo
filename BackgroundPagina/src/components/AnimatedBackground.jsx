import React from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = ({ children, className = '', style = {} }) => {
    return (
        <div className={`${styles['animated-background']} ${className}`} style={style}>
            <div className={styles['gradient-bg']} />
            <div className={styles['pattern-overlay']} />
            <main className={styles.content} role="main">
                {children}
            </main>
        </div>
    );
};

export default AnimatedBackground; 