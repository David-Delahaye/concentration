import React,{Component} from 'react';

const plant = (rim, plant) => {
const plants = [
    (<g>
        <path d="M18.5013 1.12741C15.5526 3.71621 7.43876 23.2385 8.00131 26.3964L37.0013 19.4598C31.5013 16.4869 25.5013 15.4961 18.5013 1.12741Z" fill="#36863E" stroke="black"/>
        <path d="M5.30099 9.24353C3.70099 12.8109 2.35424 24.9335 4.18757 27.576H25.1876C17.6876 21.9607 6.30099 9.739 5.30099 9.24353Z" fill="#36863E" stroke="black"/>
        <path d="M37.301 9.24353C38.901 12.8109 37.6343 24.9335 35.801 27.576H14.801C22.301 21.9607 36.301 9.739 37.301 9.24353Z" fill="#36863E" stroke="black"/>
    </g>),
    (<g>
        <path d="M21.9393 1.6644C23.4779 6.13745 28.8167 13.3685 28.8167 13.3685L21.177 21.4755C14.9648 14.3723 18.8074 4.98781 21.9393 1.6644Z" fill="#36863E" stroke="black"/>
        <path d="M5.50435 8.00313L10.3837 19.2667C14.255 18.6859 24.7744 17.8891 24.7744 17.8891C21.7681 9.13051 10.1616 7.3044 5.50435 8.00313Z" fill="#36863E" stroke="black"/>
        <path d="M36.971 8.84789L30.7972 26.3064C26.5827 25.7939 12.674 23.9598 12.674 23.9598C15.6339 14.3785 31.9008 8.23137 36.971 8.84789Z" fill="#36863E" stroke="black"/>
        <path d="M41.9969 13.5574C37.162 21.2819 36.6259 28.5107 36.6259 28.5107H23.524C25.2419 17.7335 36.6259 13.5574 41.9969 13.5574Z" fill="#36863E" stroke="black"/>
        <path d="M1.99693 13.607C8.59795 21.6189 7.74241 28.461 7.74241 28.461H24.7744C22.5773 15.2128 8.86619 13.607 1.99693 13.607Z" fill="#36863E" stroke="black"/>
    </g>),
    (<g>
        <path d="M11.6657 21.7895C9.57952 17.7319 5.36055 13.346 7.88399 12.4284C16.8816 9.15653 25.792 25.5216 26.1705 28.7279L11.6657 21.7895Z" fill="#36863E" stroke="black"/>
        <path d="M30.2213 20.2254C32.3075 16.1677 36.5265 11.7818 34.0031 10.8642C25.0054 7.59238 16.0951 23.9574 15.7166 27.1638L30.2213 20.2254Z" fill="#36863E" stroke="black"/>
        <path d="M19.4262 27.4714C18.5154 23.7741 17.0333 9.66272 14.2669 2.21518C23.6795 7.9378 24.5202 23.433 25.7802 26.989C24.5547 27.4445 20.34 27.402 19.4262 27.4714Z" fill="#36863E" stroke="black"/>
        <path d="M23.4272 27.389C24.0554 23.6334 24.4652 9.45032 26.66 1.81476C17.7075 8.23341 18.0421 23.7478 17.0548 27.389C18.3113 27.7504 22.5107 27.389 23.4272 27.389Z" fill="#36863E" stroke="black"/>
        <path d="M9.53056 28.5821C6.26057 25.4003 2.78764 22.9598 2.78764 20.801C2.78764 11.227 23.4522 25.6633 24.8322 28.5821H9.53056Z" fill="#36863E" stroke="black"/>
        <path d="M32.3565 27.5496C35.6265 24.3678 39.0994 21.9273 39.0994 19.7685C39.0994 10.1945 18.4349 24.6308 17.0548 27.5496H32.3565Z" fill="#36863E" stroke="black"/>
    </g>)]

const total = (
<svg width="41" height="61" viewBox="0 0 41 61" fill="none" xmlns="http://www.w3.org/2000/svg">
{plants[plant]}
<path d="M6.48596 60.2723L2.85598 27.5803H39.1489L35.5189 60.2723H6.48596Z" fill="#FF6E6F" stroke="black"/>
<path d="M39.0895 37.4807H2.51246L1.36244 27.5803H40.2396L39.0895 37.4807Z" fill={`hsl(${rim}, 56%, 50%)`} stroke="black"/>
</svg>
)


return total
}

export default plant

