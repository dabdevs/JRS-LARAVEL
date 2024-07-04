export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">Our Services</h2>
                    <p className="text-gray-600 mt-4">We offer a wide range of services to meet your needs</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <span>
                            <svg width="38" height="38" fill="#000000" viewBox="0 0 50 50" version="1.2" baseProfile="tiny"
                                xmlns="http://www.w3.org/2000/svg" overflow="inherit">
                                <path
                                    d="M47.783 11.883c-.688-.542-2.533-.977-3.914-1.301l-1.869-.25v-4.518l.957-.015c.897.455 2.189 1.201 2.256 2.201h3.604c-.067-2-1.586-3.262-2.938-4.264-.897-.665-1.879-1.02-3.879-1.235v-2.501h-2v2.424c-2 .192-2.646.69-3.549 1.503-1.181 1.063-1.707 2.397-1.707 4.003 0 1.76.503 3.053 1.712 3.881.676.469 1.544.905 3.544 1.309v4.895c-1-.177-1.002-.132-1.355-.551-.34-.406-.433-1.464-.549-1.464h-3.576c0 2 .541 2.958 1.895 4.025.976.769 1.585.905 3.585 1.107v1.868h2v-1.836c2-.193 3.699-.702 4.676-1.536 1.268-1.083 2.305-2.444 2.305-4.082-.001-1.598-.129-2.818-1.198-3.663zm-8.765-2.786c-.582-.317-.806-.797-.806-1.438 0-.698.193-1.244.783-1.634.311-.205.005-.354 1.005-.453v3.94c-1-.152-.762-.29-.982-.415zm4.343 8.82c-.168.058-1.361.104-1.361.145v-4.167c2 .172 1.846.357 2.178.558.521.324.783.786.783 1.377 0 1.016-.535 1.713-1.6 2.087zm-4.841 12.083h-.553l-6.144-11.125c-.265-.481-.933-.875-1.483-.875h-18.641c-.55 0-1.218.394-1.483.875l-6.144 11.125h-.552c-1.101 0-2.52.9-2.52 2v10c0 1.1 1.419 2 2.52 2h1.48v3c0 1.65 1.87 3 3.52 3h1c1.65 0 2.48-1.35 2.48-3v-3h17v3c0 1.65 1.869 3 3.52 3h1c1.65 0 2.48-1.35 2.48-3v-3h2.52c1.1 0 1.48-.9 1.48-2v-10c0-1.1-.381-2-1.48-2zm-31.5 8c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.12 2.5-2.5 2.5zm2-8l4.053-8.105c.245-.493.897-.895 1.447-.895h13c.55 0 1.201.402 1.447.895l4.053 8.105h-24zm26 8c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </span>
                        <p className="text-2xl font-extrabold text-dark-grey-900">Car Sales</p>
                        <p className="text-base leading-7 text-center text-dark-grey-600">Find the best deals on new and used cars.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <span>
                            <svg fill="#000000" width="38" height="38" viewBox="0 0 50 50" version="1.2" baseProfile="tiny"
                                xmlns="http://www.w3.org/2000/svg" overflow="inherit">
                                <path
                                    d="M21.434 7.689l-2.434 3.311h-5.684c.701 2 2.996 3.886 6.201 3.26.95-.064 4.155-.573 5.483-.26 1.768.424 1.031.426 4.201 2.97l15.799 13.03c.968.855 2.206.505 3.063-.461.857-.968.905-2.684-.063-3.539l-20-16c-1.252-1.005-1.568-2.397-2-4-.84-2.755-3.929-4.965-6.961-4.965-2.443 0-5.072 2.113-6.039 3.965h6l2.434 2.689zm13.72 24.311l-6.182-10.73c-.244-.445-.861-1.27-1.368-1.27h-17.208c-.507 0-1.124.825-1.369 1.27l-6.027 10.73h-.154c-1.015 0-1.846.369-1.846 1.385v9.23c0 1.016.831 1.385 1.846 1.385h2.154v3.23c0 1.524.938 2.77 2.461 2.77h.923c1.524 0 2.616-1.246 2.616-2.77v-3.23h16v3.23c0 1.523 1.092 2.77 2.615 2.77h.923c1.524 0 2.462-1.246 2.462-2.77v-3.23h2.154c1.015 0 1.846-.369 1.846-1.385v-9.23c0-1.016-.831-1.385-1.846-1.385zm-29.077 6.923c-1.275 0-2.308-1.033-2.308-2.308s1.033-2.308 2.308-2.308c1.274 0 2.308 1.033 2.308 2.308s-1.033 2.308-2.308 2.308zm1.846-6.923l3.741-7.828c.227-.454.829-1.172 1.336-1.172h12c.507 0 1.108.718 1.336 1.172l3.741 7.828h-22.154zm24 6.923c-1.274 0-2.308-1.033-2.308-2.308s1.033-2.308 2.308-2.308c1.275 0 2.308 1.033 2.308 2.308s-1.033 2.308-2.308 2.308z" />
                            </svg>
                        </span>
                        <p className="text-2xl font-extrabold text-dark-grey-900">Auto Repairs</p>
                        <p className="text-base leading-7 text-center text-dark-grey-600">Expert mechanics ready to fix your vehicle.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <span>
                            <svg fill="#000000" height="38px" width="38px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 254.532 254.532" xmlSpace="preserve">
                                <g>
                                    <path d="M127.267,0C57.092,0,0,57.091,0,127.266s57.092,127.266,127.267,127.266c70.174,0,127.266-57.091,127.266-127.266
		S197.44,0,127.267,0z M127.267,217.656c-49.922,0-90.391-40.468-90.391-90.39s40.469-90.39,90.391-90.39
		c49.92,0,90.39,40.468,90.39,90.39S177.186,217.656,127.267,217.656z"/>
                                    <path d="M127.267,48.578c-43.39,0-78.689,35.299-78.689,78.688c0,43.389,35.3,78.688,78.689,78.688
		c43.389,0,78.688-35.299,78.688-78.688C205.955,83.877,170.655,48.578,127.267,48.578z M195.878,122.249h-38.18
		c-0.78-4.825-2.686-9.275-5.435-13.079l26.954-26.954C188.679,93.112,194.771,106.996,195.878,122.249z M132.204,58.648
		c15.244,1.087,29.123,7.156,40.025,16.591l-26.948,26.949c-3.804-2.748-8.253-4.653-13.077-5.433V58.648z M122.329,58.648v38.106
		c-4.824,0.78-9.274,2.685-13.078,5.434L82.302,75.24C93.204,65.805,107.085,59.735,122.329,58.648z M75.313,82.217l26.955,26.954
		c-2.749,3.803-4.654,8.253-5.434,13.077h-38.18C59.761,106.996,65.853,93.113,75.313,82.217z M58.643,132.123h38.192
		c0.779,4.824,2.685,9.274,5.434,13.078l-27.029,27.029C65.788,161.308,59.714,147.398,58.643,132.123z M122.329,195.884
		c-15.285-1.09-29.197-7.188-40.113-16.666l27.035-27.035c3.804,2.749,8.254,4.654,13.078,5.434V195.884z M122.329,147.459v0.072
		c-2.131-0.518-4.131-1.36-5.953-2.474l0.047-0.047c-2.85-1.738-5.244-4.132-6.982-6.983l-0.046,0.046
		c-1.114-1.822-1.956-3.821-2.474-5.952h0.071c-0.385-1.585-0.611-3.233-0.611-4.937c0-1.704,0.227-3.352,0.611-4.937h-0.071
		c0.518-2.13,1.359-4.129,2.474-5.951l0.046,0.046c1.738-2.85,4.133-5.245,6.982-6.982l-0.047-0.047
		c1.822-1.114,3.822-1.957,5.953-2.474v0.072c1.586-0.385,3.233-0.612,4.938-0.612s3.352,0.227,4.938,0.612v-0.072
		c2.131,0.518,4.13,1.359,5.951,2.473l-0.047,0.047c2.851,1.737,5.245,4.132,6.983,6.982l0.046-0.046
		c1.115,1.822,1.957,3.822,2.475,5.953h-0.071c0.385,1.585,0.611,3.233,0.611,4.937c0,1.704-0.227,3.352-0.611,4.937h0.071
		c-0.518,2.131-1.359,4.131-2.475,5.953l-0.046-0.046c-1.738,2.85-4.133,5.244-6.983,6.982l0.047,0.046
		c-1.821,1.114-3.82,1.956-5.951,2.474v-0.072c-1.586,0.385-3.233,0.612-4.938,0.612S123.915,147.845,122.329,147.459z
		 M132.204,195.884v-38.267c4.824-0.78,9.273-2.685,13.077-5.433l27.034,27.034C161.4,188.696,147.488,194.794,132.204,195.884z
		 M179.292,172.23l-27.028-27.028c2.749-3.804,4.654-8.254,5.435-13.079h38.191C194.818,147.398,188.745,161.308,179.292,172.23z"/>
                                </g>
                            </svg>
                        </span>
                        <p className="text-2xl font-extrabold text-dark-grey-900">Auto Parts</p>
                        <p className="text-base leading-7 text-center text-dark-grey-600">High-quality auto parts at competitive prices.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
