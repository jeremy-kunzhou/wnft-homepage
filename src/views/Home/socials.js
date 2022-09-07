import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import React from "react";

export const SocialInfo = [
  {
    name: "twitter",
    logo: <FaTwitter size={22}/>,
    link: "https://twitter.com/fountainprot",
  },
  {
    name: "discord",
    logo: (
      <svg
        width="28"
        height="22"
        viewBox="0 0 28 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.7187 1.84249C21.9062 0.98175 19.9682 0.356196 17.942 0C17.6932 0.456631 17.4025 1.07081 17.2021 1.55938C15.0482 1.23062 12.9142 1.23062 10.8 1.55938C10.5996 1.07081 10.3023 0.456631 10.0513 0C8.02294 0.356196 6.08272 0.984048 4.27023 1.84705C0.614416 7.45436 -0.376613 12.9224 0.118903 18.3128C2.54363 20.1507 4.89348 21.2672 7.20367 21.9977C7.77407 21.2009 8.28279 20.3539 8.72104 19.4612C7.88638 19.1393 7.08695 18.742 6.33159 18.2808C6.53198 18.1302 6.728 17.9726 6.91738 17.8105C11.5246 19.9977 16.5304 19.9977 21.0825 17.8105C21.2741 17.9726 21.4701 18.1302 21.6683 18.2808C20.9107 18.7443 20.1091 19.1416 19.2745 19.4635C19.7127 20.3539 20.2192 21.2032 20.7918 22C23.1042 21.2694 25.4563 20.153 27.881 18.3128C28.4624 12.064 26.8878 6.64613 23.7187 1.84249ZM9.34871 14.9977C7.96567 14.9977 6.83148 13.6872 6.83148 12.0913C6.83148 10.4955 7.94146 9.18267 9.34871 9.18267C10.756 9.18267 11.8902 10.4932 11.8659 12.0913C11.8681 13.6872 10.756 14.9977 9.34871 14.9977ZM18.6512 14.9977C17.2682 14.9977 16.134 13.6872 16.134 12.0913C16.134 10.4955 17.2439 9.18267 18.6512 9.18267C20.0584 9.18267 21.1926 10.4932 21.1684 12.0913C21.1684 13.6872 20.0584 14.9977 18.6512 14.9977Z" />
      </svg>
    ),
    link: "https://discord.gg/tTxBspHqep",
  },
  {
    name: "medium",
    logo: (
      <svg
        viewBox="0 0 1043.63 592.71"
        width="35"
        height="35"
        className="aa bb"
      >
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path
              d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0
    296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0
    154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279
    147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76
    249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9
    51.76 249.94"
            />
          </g>
        </g>
      </svg>
    ),
    link: "https://medium.com/@fountainprot",
  },
  {
    name: "telegram",
    logo: <FaTelegramPlane size={22}/>,
    link: "https://t.me/fountainproto",
  },

  {
    name: "reddit",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 279.748 279.748"
      >
        <path
          d="M279.748,133.142c0-19.299-15.701-35-35-35c-10.768,0-20.674,4.812-27.279,13.064
c-18.532-8.431-39.663-13.626-62.015-15.271l19.206-60.692l42.895,9.294c3.285,12.782,14.901,22.258,28.693,22.258
c16.336,0,29.627-13.29,29.627-29.626c0-16.336-13.291-29.627-29.627-29.627c-11.801,0-21.999,6.941-26.759,16.95l-49.497-10.725
c-5.041-1.092-10.094,1.833-11.651,6.756l-23.705,74.907c-26.164,0.638-50.988,6.053-72.356,15.775
C55.674,102.954,45.768,98.142,35,98.142c-19.299,0-35,15.701-35,35c0,9.373,3.683,18.173,10.222,24.709
c-3.9,8.37-5.875,17.076-5.875,25.936c0,24.048,14.396,46.492,40.538,63.199c25.447,16.264,59.183,25.221,94.989,25.221
c35.808,0,69.542-8.957,94.989-25.221c26.142-16.707,40.538-39.151,40.538-63.199c0-8.859-1.975-17.565-5.875-25.936
C276.065,151.314,279.748,142.515,279.748,133.142z M15.369,145.139c-2.212-3.59-3.369-7.688-3.369-11.997c0-12.682,10.317-23,23-23
c5.444,0,10.558,1.851,14.649,5.258C35.027,123.702,23.517,133.689,15.369,145.139z M68.04,165.405c0-13.785,11.215-25,25-25
c13.785,0,25,11.215,25,25c0,13.785-11.215,25-25,25C79.255,190.405,68.04,179.19,68.04,165.405z M191.159,222.459
c-9.745,10.637-29.396,17.244-51.285,17.244c-21.888,0-41.539-6.607-51.284-17.244c-1.805-1.97-2.733-4.525-2.617-7.192
c0.116-2.669,1.266-5.133,3.235-6.937c1.849-1.694,4.247-2.627,6.754-2.627c2.797,0,5.484,1.183,7.373,3.244
c5.803,6.333,20.827,10.756,36.539,10.756c15.712,0,30.737-4.423,36.539-10.756c1.889-2.062,4.576-3.244,7.374-3.244
c2.508,0,4.906,0.933,6.755,2.627c1.97,1.804,3.118,4.268,3.234,6.937C193.893,217.934,192.964,220.489,191.159,222.459z
M186.708,190.405c-13.785,0-25-11.215-25-25c0-13.785,11.215-25,25-25c13.785,0,25,11.215,25,25
C211.708,179.19,200.493,190.405,186.708,190.405z M264.379,145.139c-8.147-11.45-19.657-21.436-34.28-29.739
c4.092-3.408,9.205-5.258,14.649-5.258c12.683,0,23,10.318,23,23C267.748,137.451,266.591,141.549,264.379,145.139z"
        />
      </svg>
    ),
    link: "https://www.reddit.com/r/FountainProt/",
  },
  {
    name: "email",
    logo: (
      <svg
        width="28"
        height="20"
        viewBox="0 0 28 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M26 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H26C26.5304 20 27.0391 19.7893 27.4142 19.4142C27.7893 19.0391 28 18.5304 28 18V2C28 1.46957 27.7893 0.960859 27.4142 0.585786C27.0391 0.210714 26.5304 0 26 0ZM23.8 2L14 8.78L4.2 2H23.8ZM2 18V2.91L13.43 10.82C13.5974 10.9361 13.7963 10.9984 14 10.9984C14.2037 10.9984 14.4026 10.9361 14.57 10.82L26 2.91V18H2Z" />
      </svg>
    ),
    link: "mailto: contact@fountainprotocol.com",
  },
];
