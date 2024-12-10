import React from "react";
import "./LeftMenu.css";

const LeftMenu = () => {
  return (
    <div className="admin-menu">
      <p className="menu-name">Používateľský profil</p>
      <p className="user-name">Administrator</p>
      <hr />
      <div className="admin-menuu-button">
        <div className="admin-button-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99984 6.66663V13.3333M6.6665 9.99996H13.3332M18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="admin-button-text">Pridať oznam</div>
      </div>
      <div className="admin-menuu-button">
        <div className="admin-button-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.1665 3.33332H3.33317C2.89114 3.33332 2.46722 3.50891 2.15466 3.82147C1.8421 4.13403 1.6665 4.55796 1.6665 4.99999V16.6667C1.6665 17.1087 1.8421 17.5326 2.15466 17.8452C2.46722 18.1577 2.89114 18.3333 3.33317 18.3333H14.9998C15.4419 18.3333 15.8658 18.1577 16.1783 17.8452C16.4909 17.5326 16.6665 17.1087 16.6665 16.6667V10.8333M15.4165 2.08332C15.748 1.7518 16.1977 1.56555 16.6665 1.56555C17.1353 1.56555 17.585 1.7518 17.9165 2.08332C18.248 2.41484 18.4343 2.86448 18.4343 3.33332C18.4343 3.80216 18.248 4.2518 17.9165 4.58332L9.99984 12.5L6.6665 13.3333L7.49984 9.99999L15.4165 2.08332Z"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="admin-button-text">Upravovať oznámenia</div>
      </div>
      <div className="admin-menuu-button">
        <div className="admin-button-icon">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1668 14.8333C19.1668 15.2754 18.9912 15.6993 18.6787 16.0118C18.3661 16.3244 17.9422 16.5 17.5002 16.5H2.50016C2.05814 16.5 1.63421 16.3244 1.32165 16.0118C1.00909 15.6993 0.833496 15.2754 0.833496 14.8333V5.66667C0.833496 5.22464 1.00909 4.80072 1.32165 4.48816C1.63421 4.17559 2.05814 4 2.50016 4H5.8335L7.50016 1.5H12.5002L14.1668 4H17.5002C17.9422 4 18.3661 4.17559 18.6787 4.48816C18.9912 4.80072 19.1668 5.22464 19.1668 5.66667V14.8333Z"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0002 13.1667C11.8411 13.1667 13.3335 11.6743 13.3335 9.83333C13.3335 7.99238 11.8411 6.5 10.0002 6.5C8.15921 6.5 6.66683 7.99238 6.66683 9.83333C6.66683 11.6743 8.15921 13.1667 10.0002 13.1667Z"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="admin-button-text">Pridanie galérie</div>
      </div>
      <div className="admin-menuu-button">
        <div className="admin-button-icon">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 15.6667H16.5M12.75 1.91669C13.0815 1.58517 13.5312 1.39893 14 1.39893C14.2321 1.39893 14.462 1.44465 14.6765 1.53349C14.891 1.62233 15.0858 1.75254 15.25 1.91669C15.4142 2.08084 15.5444 2.27572 15.6332 2.4902C15.722 2.70467 15.7678 2.93455 15.7678 3.16669C15.7678 3.39884 15.722 3.62871 15.6332 3.84319C15.5444 4.05766 15.4142 4.25254 15.25 4.41669L4.83333 14.8334L1.5 15.6667L2.33333 12.3334L12.75 1.91669Z"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="admin-button-text">Úprava stránok</div>
      </div>
      <hr />
    </div>
  );
};

export default LeftMenu;
