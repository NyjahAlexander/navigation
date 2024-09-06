// Snowflake generation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const size = Math.random() * 8 + 7; // Snowflake size between 7px and 15px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Set random horizontal start position
    snowflake.style.left = `${Math.random() * 100}vw`;
    
    document.querySelector('.snow-container').appendChild(snowflake);

    // Snowflake fall speed
    snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`; // Between 10s and 20s
    snowflake.style.animationDelay = `${Math.random() * 5}s`;

    // Remove the snowflake once it falls
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 300);
