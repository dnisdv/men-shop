import React from 'react'

const Logo = ({fill, width ="100", height="60"}) => {
    const type = fill
    return(
        <svg width={width} height={height} viewBox="0 0 652 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="133.5" y="3.5" width="78" height="21" fill={type}/>
            <path d="M0 35.5L25.5 80.5V101.5H0V35.5Z" fill={type}/>
            <path d="M88.5 85.5L113.5 42V101.5H88.5V85.5Z" fill={type}/>
            <path d="M25.5 47.75L0 3.5V35.5L25.5 80.5V47.75Z" fill={type}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M57 60L22.5 3.5H0L25.5 47.75L51 92H62.5L88.5 45.98V6.87313L57 60Z" fill={type}/>
            <path d="M88.5 85.5L113.5 42V3.5H112.5L88.5 45.98V85.5Z" fill={type}/>
            <path d="M112.5 3.5H90.5L88.5 6.87313V45.98L112.5 3.5Z" fill={type}/>
            <rect x="133.5" y="41.5" width="78" height="21" fill={type}/>
            <rect x="133.5" y="80.5" width="78" height="21" fill={type}/>
            <path d="M228.5 16.5V10V3.5H251L294.5 56.8028L322 90.5V101.5H298.5L255.5 49.2857L228.5 16.5Z" fill={type}/>
            <path d="M228.5 51.5V101.5H255.5V85L228.5 51.5Z" fill={type}/>
            <path d="M255.5 49.2857L228.5 16.5V51.5L255.5 85V49.2857Z" fill={type}/>
            <path d="M321.5 53.5L294.5 21.5V56.8028L322 90.5L321.5 53.5Z" fill={type}/>
            <path d="M294.5 3.5V21.5L321.5 53.5V3.5H294.5Z" fill={type}/>
            <path d="M229 8.5V95H254.5V14.5L229 8.5Z" fill={type} stroke={type}/>
            <rect x="89" y="11" width="24" height="91" fill={type}/>
            <path d="M134 21V87.5H157V13.5H134V21Z" fill={type} stroke={type}/>
            <rect x="133.5" y="62.1192" width="24" height="22" fill={type}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M349.5 18.5C355 12.6667 371.1 1 391.5 1C411.9 1 427.667 12.6667 433 18.5C443.333 30.6667 457 57.3043 433 86C409 114.696 367.5 101.5 360.5 96C349.5 91 337 74 336.5 54C336 34 344.667 23.6667 349.5 18.5ZM412.5 35.5C398 16.5 374.5 26 369.5 35.5C364.5 45 362.527 54 366.5 64.5C373.5 83 401 86 412.5 70C421.7 57.2 416.333 41.6667 412.5 35.5Z" fill={type}/>
            <path d="M576.5 3.5V101.5H651.5V79.5H605V3.5H576.5Z" fill={type}/>
            <path d="M460.5 101.5H515.5C526.333 100.333 549.7 93.2 556.5 76C565 54.5 564.731 39.1409 551.5 21.5C541 7.5 522.167 3.33333 513.5 3.5H460.5V25.5H489H511C511 25.5 533.5 28 533.5 52.5C533.5 77 511 79.5 511 79.5H489H460.5V101.5Z" fill={type}/>
            <path d="M460.5 25.5V52.5H489V25.5H460.5Z" fill={type}/>
            <path d="M349.5 18.5L349.136 18.157L349.135 18.1584L349.5 18.5ZM433 18.5L433.381 18.1763L433.375 18.1694L433.369 18.1626L433 18.5ZM360.5 96L360.809 95.6068L360.762 95.5697L360.707 95.5448L360.5 96ZM412.5 35.5L412.925 35.236L412.912 35.2157L412.897 35.1967L412.5 35.5ZM412.5 70L412.906 70.2918L412.5 70ZM366.5 64.5L366.032 64.6769L366.5 64.5ZM460.5 101.5H460V102H460.5V101.5ZM515.5 101.5V102H515.527L515.554 101.997L515.5 101.5ZM556.5 76L556.035 75.8162L556.035 75.8162L556.5 76ZM551.5 21.5L551.9 21.2L551.5 21.5ZM513.5 3.5V4.00009L513.51 3.99991L513.5 3.5ZM460.5 3.5V3H460V3.5H460.5ZM511 25.5L511.055 25.0031L511.028 25H511V25.5ZM511 79.5V80H511.028L511.055 79.9969L511 79.5ZM576.5 3.5V3H576V3.5H576.5ZM576.5 101.5H576V102H576.5V101.5ZM651.5 101.5V102H652V101.5H651.5ZM651.5 79.5H652V79H651.5V79.5ZM605 79.5H604.5V80H605V79.5ZM605 3.5H605.5V3H605V3.5ZM460.5 52.5H460V53H460.5V52.5ZM489 52.5V53H489.5V52.5H489ZM460.5 79.5V79H460V79.5H460.5ZM349.864 18.843C355.3 13.0773 371.277 1.5 391.5 1.5V0.5C370.923 0.5 354.7 12.2561 349.136 18.157L349.864 18.843ZM391.5 1.5C411.721 1.5 427.363 13.0756 432.631 18.8374L433.369 18.1626C427.97 12.2577 412.079 0.5 391.5 0.5V1.5ZM432.619 18.8237C437.746 24.861 443.689 34.4776 445.38 46.1235C447.068 57.7473 444.527 71.4384 432.616 85.6792L433.384 86.3208C445.473 71.8659 448.099 57.8904 446.37 45.9798C444.644 34.0913 438.587 24.3057 433.381 18.1763L432.619 18.8237ZM432.616 85.6792C420.746 99.8725 404.542 103.72 390.389 103.324C383.313 103.125 376.762 101.865 371.549 100.314C366.318 98.7574 362.484 96.923 360.809 95.6068L360.191 96.3932C362.016 97.827 365.995 99.7046 371.264 101.272C376.55 102.845 383.187 104.122 390.361 104.323C404.708 104.725 421.254 100.823 433.384 86.3208L432.616 85.6792ZM360.707 95.5448C355.322 93.097 349.514 87.6791 344.988 80.3619C340.466 73.0527 337.247 63.8882 337 53.9875L336 54.0125C336.253 64.1118 339.534 73.4473 344.137 80.8881C348.736 88.3209 354.678 93.903 360.293 96.4552L360.707 95.5448ZM337 53.9875C336.504 34.1694 345.079 23.9574 349.865 18.8416L349.135 18.1584C344.254 23.3759 335.496 33.8306 336 54.0125L337 53.9875ZM369.942 35.7329C371.138 33.4606 373.468 31.1449 376.551 29.246C379.628 27.3509 383.422 25.8912 387.508 25.3075C395.663 24.1425 404.975 26.4636 412.103 35.8033L412.897 35.1967C405.525 25.5364 395.837 23.1075 387.367 24.3175C383.14 24.9213 379.216 26.4303 376.027 28.3946C372.844 30.3551 370.362 32.7894 369.058 35.2671L369.942 35.7329ZM412.075 35.764C413.956 38.7897 416.228 44.1434 416.89 50.3158C417.552 56.4803 416.605 63.4319 412.094 69.7082L412.906 70.2918C417.595 63.7681 418.565 56.553 417.885 50.2092C417.205 43.8732 414.877 38.377 412.925 35.236L412.075 35.764ZM412.094 69.7082C406.469 77.5342 396.912 80.7365 387.87 79.6908C378.829 78.6452 370.388 73.3638 366.968 64.3231L366.032 64.6769C369.612 74.1362 378.421 79.6048 387.755 80.6842C397.088 81.7635 407.031 78.4658 412.906 70.2918L412.094 69.7082ZM366.968 64.3231C363.062 54.0004 364.984 45.154 369.942 35.7329L369.058 35.2671C364.016 44.846 361.992 53.9996 366.032 64.6769L366.968 64.3231ZM460.5 102H515.5V101H460.5V102ZM515.554 101.997C521.025 101.408 529.634 99.3172 537.739 95.2085C545.838 91.1022 553.502 84.9444 556.965 76.1838L556.035 75.8162C552.699 84.2556 545.279 90.2645 537.286 94.3165C529.299 98.3661 520.808 100.425 515.446 101.003L515.554 101.997ZM556.965 76.1838C561.229 65.3987 563.314 56.1034 562.648 47.2652C561.98 38.4173 558.559 30.0784 551.9 21.2L551.1 21.8C557.672 30.5625 561 38.7236 561.65 47.3404C562.301 55.9671 560.271 65.1013 556.035 75.8162L556.965 76.1838ZM551.9 21.2C546.579 14.1047 539.157 9.51548 531.994 6.72168C524.834 3.92901 517.894 2.9154 513.49 3.00009L513.51 3.99991C517.772 3.91793 524.583 4.90432 531.631 7.65332C538.676 10.4012 545.922 14.8953 551.1 21.8L551.9 21.2ZM513.5 3H460.5V4H513.5V3ZM460 3.5V25.5H461V3.5H460ZM511 25.5C510.945 25.9969 510.945 25.9969 510.945 25.9969C510.945 25.9969 510.945 25.9969 510.945 25.9969C510.945 25.997 510.946 25.9971 510.947 25.9972C510.949 25.9974 510.952 25.9978 510.957 25.9984C510.966 25.9995 510.981 26.0013 511.001 26.0038C511.04 26.0089 511.1 26.017 511.18 26.0287C511.338 26.0521 511.573 26.0898 511.874 26.1466C512.475 26.2602 513.338 26.4499 514.375 26.7533C516.451 27.3606 519.215 28.4208 521.976 30.2307C527.476 33.8365 533 40.4372 533 52.5L534 52.5C534 40.0628 528.274 33.1635 522.524 29.3943C519.66 27.5167 516.799 26.4206 514.656 25.7936C513.584 25.4798 512.689 25.2828 512.06 25.164C511.745 25.1045 511.497 25.0646 511.326 25.0394C511.24 25.0268 511.174 25.0179 511.128 25.012C511.106 25.0091 511.088 25.0069 511.076 25.0055C511.07 25.0047 511.065 25.0042 511.061 25.0038C511.06 25.0036 511.058 25.0034 511.057 25.0033C511.057 25.0032 511.056 25.0032 511.056 25.0031C511.056 25.0031 511.055 25.0031 511 25.5ZM533 52.5C533 64.5628 527.476 71.1635 521.976 74.7693C519.215 76.5792 516.451 77.6394 514.375 78.2467C513.338 78.5501 512.475 78.7398 511.874 78.8534C511.573 78.9102 511.338 78.9479 511.18 78.9713C511.1 78.983 511.04 78.9911 511.001 78.9962C510.981 78.9987 510.966 79.0005 510.957 79.0016C510.952 79.0022 510.949 79.0026 510.947 79.0028C510.946 79.0029 510.945 79.003 510.945 79.0031C510.945 79.0031 510.945 79.0031 510.945 79.0031C510.945 79.0031 510.945 79.0031 511 79.5C511.055 79.9969 511.056 79.9969 511.056 79.9969C511.056 79.9968 511.057 79.9968 511.057 79.9967C511.058 79.9966 511.06 79.9964 511.061 79.9962C511.065 79.9958 511.07 79.9953 511.076 79.9945C511.088 79.9931 511.106 79.9909 511.128 79.988C511.174 79.9821 511.24 79.9732 511.326 79.9606C511.497 79.9354 511.745 79.8955 512.06 79.836C512.689 79.7172 513.584 79.5202 514.656 79.2064C516.799 78.5794 519.66 77.4833 522.524 75.6057C528.274 71.8365 534 64.9372 534 52.5L533 52.5ZM511 79H489V80H511V79ZM576 3.5V101.5H577V3.5H576ZM576.5 102H651.5V101H576.5V102ZM652 101.5V79.5H651V101.5H652ZM651.5 79H605V80H651.5V79ZM605.5 79.5V3.5H604.5V79.5H605.5ZM605 3H576.5V4H605V3ZM460 25.5V52.5H461V25.5H460ZM460.5 53H489V52H460.5V53ZM460.5 26H489V25H460.5V26ZM489 26H511V25H489V26ZM489.5 52.5V25.5H488.5V52.5H489.5ZM489 79H460.5V80H489V79ZM460 79.5V101.5H461V79.5H460Z" fill={type}/>
            <path d="M295 4.5H321.5V101L294.5 94L295 4.5Z" fill={type} stroke={type}/>
            <path d="M0.5 13V95H25.5V14L0.5 13Z" fill={type} stroke={type}/>
            <path d="M74 33L90 5.5L110.5 6L107 47.5L79 44.5L74 33Z" fill={type} stroke={type}/>
        </svg>
    )
}

export default Logo