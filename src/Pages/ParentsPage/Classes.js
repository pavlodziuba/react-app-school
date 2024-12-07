import React from "react";
import "./Classes.css";

const Classes = () => {
  const items = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_314_399)">
            <path
              d="M24.0001 13.3333H22.3201C21.8212 11.4013 20.7905 9.64799 19.3449 8.27254C17.8994 6.89708 16.097 5.95467 14.1426 5.55238C12.1882 5.15009 10.1602 5.30406 8.28894 5.9968C6.41768 6.68954 4.77825 7.89326 3.55694 9.47119C2.33562 11.0491 1.58139 12.938 1.37994 14.9231C1.1785 16.9083 1.53792 18.9102 2.41737 20.7013C3.29681 22.4924 4.66102 24.0009 6.35497 25.0554C8.04893 26.1099 10.0047 26.6682 12.0001 26.6667H24.0001C25.7682 26.6667 27.4639 25.9643 28.7141 24.7141C29.9644 23.4638 30.6667 21.7681 30.6667 20C30.6667 18.2319 29.9644 16.5362 28.7141 15.286C27.4639 14.0357 25.7682 13.3333 24.0001 13.3333Z"
              stroke="#F19EDC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_314_399">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Trieda 2 - 3 ročné deti",
      subtitle1: "Počet zapísaných detí : 21",
      subtitle2: "Učiteľky : Betka, Majka",
    },
    {
      icon: (
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.3334 2.66666L25.6667 5.33332M25.6667 5.33332L29.6667 9.33332L25 14L21 9.99999M25.6667 5.33332L21 9.99999M15.52 15.48C16.2085 16.1593 16.7558 16.968 17.1304 17.8597C17.505 18.7514 17.6995 19.7083 17.7027 20.6755C17.706 21.6427 17.5179 22.6009 17.1493 23.4951C16.7806 24.3892 16.2388 25.2016 15.5549 25.8855C14.871 26.5694 14.0586 27.1113 13.1644 27.4799C12.2703 27.8485 11.312 28.0366 10.3449 28.0334C9.37773 28.0301 8.42076 27.8356 7.5291 27.461C6.63743 27.0864 5.82866 26.5391 5.14937 25.8507C3.81355 24.4676 3.07439 22.6152 3.0911 20.6924C3.10781 18.7696 3.87904 16.9303 5.2387 15.5707C6.59836 14.211 8.43766 13.4398 10.3604 13.423C12.2832 13.4063 14.1356 14.1455 15.5187 15.4813L15.52 15.48ZM15.52 15.48L21 9.99999"
            stroke="#F19EDC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Trieda 3 - 4 ročné deti",
      subtitle1: "Počet zapísaných detí : 22",
      subtitle2: "Učiteľky :  Majka , Miška",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.6664 15.0533C25.4566 17.3229 24.6049 19.4859 23.2107 21.2891C21.8166 23.0922 19.9377 24.4611 17.794 25.2354C15.6503 26.0097 13.3304 26.1575 11.1057 25.6615C8.88106 25.1654 6.8437 24.0461 5.23201 22.4344C3.62031 20.8227 2.50096 18.7853 2.00492 16.5607C1.50887 14.336 1.65666 12.0161 2.43099 9.8724C3.20531 7.72868 4.57415 5.84982 6.37732 4.45567C8.1805 3.06152 10.3434 2.20974 12.613 2C11.2843 3.79769 10.6448 6.0126 10.8111 8.24189C10.9773 10.4712 11.9382 12.5667 13.5189 14.1475C15.0996 15.7282 17.1952 16.689 19.4245 16.8553C21.6538 17.0215 23.8687 16.3821 25.6664 15.0533Z"
            stroke="#F19EDC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Trieda 4 - 5 ročné deti",
      subtitle1: "Počet zapísaných deti : 23",
      subtitle2: "Učiteľky : Aďka, Simonka",
    },
    {
      icon: (
        <svg
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6667 3.33333L8.82667 19.1733M17.2933 17.3067L24.6667 24.6667M8.82667 8.82667L14 14M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6ZM10 22C10 24.2091 8.20914 26 6 26C3.79086 26 2 24.2091 2 22C2 19.7909 3.79086 18 6 18C8.20914 18 10 19.7909 10 22Z"
            stroke="#F19EDC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Trieda 5 - 6 ročné deti",
      subtitle1: "Počet zapísaných detí : 22",
      subtitle2: "Učiteľky : Deni, Agi",
    },
    {
      icon: (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.333 17.6667C10.333 17.6667 12.333 20.3334 15.6663 20.3334C18.9997 20.3334 20.9997 17.6667 20.9997 17.6667M11.6663 11H11.6797M19.6663 11H19.6797M28.9997 15C28.9997 22.3638 23.0301 28.3334 15.6663 28.3334C8.30254 28.3334 2.33301 22.3638 2.33301 15C2.33301 7.63622 8.30254 1.66669 15.6663 1.66669C23.0301 1.66669 28.9997 7.63622 28.9997 15Z"
            stroke="#F19EDC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Trieda 3 - 6 ročné deti",
      subtitle1: "Počet zapísaných deti : 22",
      subtitle2: "Učiteľky : Zuzka , Marika",
    },
    {
      icon: (
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6668 2.66669L4.3335 18.6667H16.3335L15.0002 29.3334L28.3335 13.3334H16.3335L17.6668 2.66669Z"
            stroke="#F19EDC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Trieda 3 - 4 ročné deti",
      subtitle1: "Počet zapísaných detí : 22",
      subtitle2: "Učiteľky : Lenka, Ildi",
    },
  ];

  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div className="grid-item" key={index}>
          <div className="grid-item_icon">{item.icon}</div>
          <div className="grid-item_text">
            <div className="main-title">{item.title}</div>
            <div className="subtitle">{item.subtitle1}</div>
            <div className="subtitle">{item.subtitle2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
