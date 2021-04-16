import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - TechHub :: Community</title>
      </Head>
      <div className="text-center">
        <a href="https://github.com/techhub-community" target="_blank">
          <img className="text-center my-12 w-80" src="/assets/logo/logo-full-transparent.png"/>
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 text-center">
        <a href="https://discord.com/invite/EMEMejk8P5"><img src="https://img.shields.io/discord/814219041614594078?label=Join%20Us%20-%20Discord" alt=""/></a>
        <a href="mailto:hello@tech-hub.org"><img src="https://img.shields.io/badge/Contact%20Us-hello%40tech--hub.org-orange" alt=""/></a>
        <a href="https://github.com/techhub-community"> <img src="https://img.shields.io/github/stars/techhub-community?label=Github%20Stars&amp;style=plastic" alt="GitHub Org&#39;s stars"/></a>
      </div>

      <div className={styles.main}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="128px"
          height="128px"
        >
          <linearGradient
            id="cD8uEbPKlDLdRxEJ9oeP~a"
            x1="32"
            x2="32"
            y1="24.875"
            y2="40.525"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#cD8uEbPKlDLdRxEJ9oeP~a)"
            d="M43.558,40H20.442c-1.294,0-2.438-0.825-2.847-2.053l-0.045-0.2L17,33c0-2.206,1.794-4,4-4 c0.806,0,1.557,0.239,2.185,0.65C23.775,27.547,25.71,26,28,26c1.634,0,3.087,0.788,4,2.003C32.913,26.788,34.366,26,36,26 c2.29,0,4.225,1.547,4.815,3.65C41.443,29.239,42.194,29,43,29c2.206,0,4,1.794,4,4l-0.007,0.116l-0.589,4.831 C45.995,39.175,44.852,40,43.558,40z M19.523,37.395C19.681,37.76,20.04,38,20.442,38h23.115c0.402,0,0.762-0.24,0.919-0.605 l0.522-4.447C44.972,31.869,44.085,31,43,31c-1.103,0-2,0.897-2,2h-2v-2c0-1.654-1.346-3-3-3s-3,1.346-3,3v2h-2v-2 c0-1.654-1.346-3-3-3s-3,1.346-3,3v2h-2c0-1.103-0.897-2-2-2c-1.085,0-1.972,0.869-1.999,1.947L19.523,37.395z"
          />
          <linearGradient
            id="cD8uEbPKlDLdRxEJ9oeP~b"
            x1="32"
            x2="32"
            y1="47.25"
            y2="50.646"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path fill="url(#cD8uEbPKlDLdRxEJ9oeP~b)" d="M27 48H37V50H27z" />
          <linearGradient
            id="cD8uEbPKlDLdRxEJ9oeP~c"
            x1="32"
            x2="32"
            y1="5.25"
            y2="59.002"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#cD8uEbPKlDLdRxEJ9oeP~c)"
            d="M50.919,38.32L54.826,18H57v-3c0-1.654-1.346-3-3-3H42.816c-0.414-1.162-1.514-2-2.816-2 h-1.101C38.434,7.721,36.415,6,34,6h-4c-2.415,0-4.434,1.721-4.899,4H24c-1.302,0-2.402,0.838-2.816,2H10c-1.654,0-3,1.346-3,3v3 h2.174l3.907,20.321c0.279,1.45,1.014,2.706,2.016,3.679H14c-1.332,0-2.518,0.895-2.884,2.176L8.258,54.178 c-0.26,0.913-0.082,1.871,0.49,2.629C9.32,57.565,10.193,58,11.143,58h41.715c0.949,0,1.822-0.435,2.395-1.193 c0.572-0.758,0.75-1.716,0.49-2.629l-2.858-10.002C52.518,42.895,51.332,42,50,42h-1.097C49.905,41.027,50.64,39.771,50.919,38.32z M30,8h4c1.654,0,3,1.346,3,3v1H27v-1C27,9.346,28.346,8,30,8z M9,15c0-0.552,0.448-1,1-1h44c0.552,0,1,0.448,1,1v1H9V15z M50,44 c0.443,0,0.839,0.298,0.96,0.725l2.858,10.002c0.087,0.304,0.027,0.623-0.163,0.876S53.174,56,52.857,56H41c0-1.103-0.897-2-2-2H25 c-1.103,0-2,0.897-2,2H11.143c-0.316,0-0.607-0.145-0.798-0.397s-0.25-0.572-0.163-0.876l2.858-10.002 C13.161,44.298,13.557,44,14,44h5.957h24.086H50z M44.043,42H19.957c-2.394,0-4.459-1.706-4.911-4.057L12.749,26H16v-2h-3.635 l-0.385-2H14v-2h-2.405l-0.385-2h41.578l-0.385,2H50v2h2.02l-0.385,2H48v2h3.25l-2.296,11.942C48.502,40.294,46.437,42,44.043,42z"
          />
          <linearGradient
            id="cD8uEbPKlDLdRxEJ9oeP~d"
            x1="32"
            x2="32"
            y1="5.25"
            y2="59.002"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#cD8uEbPKlDLdRxEJ9oeP~d)"
            d="M27,52h10c1.103,0,2-0.897,2-2v-2c0-1.103-0.897-2-2-2H27c-1.103,0-2,0.897-2,2v2 C25,51.103,25.897,52,27,52z M27,48h10v2H27V48z"
          />
        </svg>
        <h3 className="rounded my-2">Something is cooking up &#128516;</h3>
        <p>Will be baked & served to you soon &#128151;</p>
      </div>
    </div>
  );
}
